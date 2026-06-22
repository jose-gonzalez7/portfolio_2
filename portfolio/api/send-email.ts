import type { VercelRequest, VercelResponse } from '@vercel/node';

const RATE_LIMIT_MAP = new Map<string, number>();
const COOLDOWN_MS = 60_000;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ?? 'unknown';

  const lastSent = RATE_LIMIT_MAP.get(ip) ?? 0;
  if (Date.now() - lastSent < COOLDOWN_MS) {
    return res.status(429).json({ error: 'Too many requests. Wait a moment.' });
  }

  const { name, email, message } = req.body ?? {};

  if (
    typeof name !== 'string' || name.trim().length === 0 ||
    typeof email !== 'string' || !email.includes('@') ||
    typeof message !== 'string' || message.trim().length === 0
  ) {
    return res.status(400).json({ error: 'Invalid fields.' });
  }

  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return res.status(400).json({ error: 'Fields exceed maximum length.' });
  }

  const SERVICE_ID  = process.env.EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY  = process.env.EMAILJS_PUBLIC_KEY;

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        },
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('EmailJS error:', response.status, text);
      return res.status(502).json({ error: 'Failed to send email.' });
    }

    RATE_LIMIT_MAP.set(ip, Date.now());

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('send-email handler error:', err);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
