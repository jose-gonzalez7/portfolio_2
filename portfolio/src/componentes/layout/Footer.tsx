export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#09090b]/80 backdrop-blur-md border-t border-white/5 z-30 px-6 md:px-14">
      <div className="max-w-screen-xl mx-auto h-12 flex items-center justify-between">
        <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">
          © 2026 José Antonio González Román
        </span>
        <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">
          Full Stack Developer
        </span>
      </div>
    </footer>
  );
}
