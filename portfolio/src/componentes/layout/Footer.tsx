export function Footer() {
  return (
    <footer className="
      bg-[#0b1220]/80
      border-t border-white/10
    ">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-text-secondary">
        <span>© 2024 DevPortfolio.</span>

        <div className="flex gap-4">
          <a href="#" className="hover:text-text-primary transition">
            GitHub
          </a>
          <a href="#" className="hover:text-text-primary transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-text-primary transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}