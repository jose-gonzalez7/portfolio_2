export function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        flex items-center
        py-16 sm:py-20
      "
    >
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          px-5 sm:px-6
          py-16 sm:py-20
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12 lg:gap-20
          items-center
        "
      >
        {/* ───────────────────────────── */}
        {/* IZQUIERDA – TEXTO */}
        {/* ───────────────────────────── */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          
          {/* Badge */}
          <span
            className="
              mx-auto lg:mx-0
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
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-extrabold
              tracking-tight
              leading-tight
              text-white
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
              mx-auto lg:mx-0
              leading-relaxed
              text-base
              sm:text-lg
            "
          >
            Soy desarrollador proactivo y resolutivo (DAM y DAW) enfocado en crear
            soluciones funcionales y escalables. Experiencia práctica en entornos
            ágiles, APIs, bases de datos SQL/NoSQL y despliegues en la nube.
          </p>

          {/* Botones */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              pt-2
              justify-center
              lg:justify-start
            "
          >
            <a
              href="#proyectos"
              className="
                inline-flex
                items-center
                justify-center
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
                hover:opacity-90
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
                justify-center
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
        {/* DERECHA – BLOQUE VISUAL / CÓDIGO */}
        {/* ───────────────────────────── */}
        <div
          className="
            w-full
            max-w-md
            mx-auto
            lg:max-w-none
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
          <pre className="whitespace-pre-wrap leading-relaxed">
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
