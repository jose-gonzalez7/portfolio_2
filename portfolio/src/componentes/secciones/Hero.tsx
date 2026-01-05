export function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        w-full
        min-h-[calc(100vh-4rem)]
        flex items-center
        pt-16
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* ───────────────────────────── */}
        {/* IZQUIERDA – TEXTO */}
        {/* ───────────────────────────── */}
        <div className="flex flex-col gap-6">
          
          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              gap-2
              w-fit
              rounded-full
              bg-primary/10
              text-primary
              px-4
              py-1.5
              text-sm
              font-medium
            "
          >
            ● Disponible para trabajar
          </span>

          {/* Título */}
          <h1
            className="
              text-5xl
              md:text-6xl
              font-extrabold
              tracking-tight
              text-white
              leading-tight
            "
          >
            CONSTRUYENDO <br />
            <span className="text-primary">EL FUTURO</span> DIGITAL.
          </h1>

          {/* Descripción */}
          <p
            className="
              text-text-secondary
              max-w-xl
              leading-relaxed
              text-base
              md:text-lg
            "
          >
            Soy desarrollador proactivo y resolutivo (DAM y DAW) enfocado en crear soluciones funcionales y escalables. Experiencia práctica en entornos ágiles, APIs, bases de datos SQL/NoSQL y despliegues en la nube.
          </p>

          {/* Botones */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#proyectos"
              className="
                inline-flex
                items-center
                gap-2
                bg-primary
                text-white
                px-6
                py-3
                rounded-lg
                font-semibold
                shadow-lg
                shadow-primary/30
                hover:shadow-primary/50
                transition
              "
            >
              Ver proyectos →
            </a>

            <a
              href="#contacto"
              className="
                inline-flex
                items-center
                gap-2
                border
                border-white/15
                text-white
                px-6
                py-3
                rounded-lg
                font-medium
                hover:bg-white/5
                transition
              "
            >
              Contáctame
            </a>
          </div>
        </div>

        {/* ───────────────────────────── */}
        {/* DERECHA – BLOQUE DE CÓDIGO */}
        {/* ───────────────────────────── */}
        <div
          className="
            bg-[#0e1625]
            border
            border-white/10
            rounded-xl
            p-6
            shadow-[0_0_40px_rgba(59,130,246,0.15)]
            font-mono
            text-sm
            text-white/90
          "
        >
          {/* Aquí puedes meter código, imagen o animación */}
          <pre className="whitespace-pre-wrap">
{`const Developer = {
  name: "Tu Nombre",
  role: "Full Stack Developer",
  skills: ["React", "Node", "TypeScript"],
  passion: "Crear experiencias increíbles"
}`}
          </pre>
        </div>
      </div>
    </section>
  )
}
