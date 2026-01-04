export function Hero() {
  return (
    <section className="pt-24 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12">
        {/* Texto */}
        <div>
          <p className="text-blue-400">Disponible para trabajar</p>
          <h1 className="text-6xl font-bold">
            Construyendo <br />
            <span className="text-blue-500">el futuro</span> digital.
          </h1>
          <p className="mt-6 text-gray-400">
            Soy un desarrollador Full Stack especializado en crear experiencias
            web modernas.
          </p>
        </div>

        {/* Código decorativo */}
        <div
          className="
            bg-[#0e1625]
            border border-white/10
            rounded-xl
            p-6
            shadow-lg
            shadow-[0_0_40px_rgba(59,130,246,0.15)]
          "
        >
          Código aquí
        </div>
      </div>
    </section>
  )
}
