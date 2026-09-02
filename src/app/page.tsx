import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import HeroIntro from "@/components/HeroIntro";
import ParallaxImage from "@/components/ParallaxImage";
import { categorias, marcas, serviciosMantenimiento } from "@/lib/catalogo";
import { fotos } from "@/lib/galeria";

export default function Home() {
  return (
    <div id="inicio" className="flex min-h-screen flex-col">
      <Nav />
      <Hero />
      <Nosotros />
      <Transformadores />
      <Mantenimiento />
      <Galeria />
      <Proceso />
      <BannerFinal />
      <Contacto />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-rule bg-azul px-5 pt-20 pb-16 text-paper sm:px-8 sm:pt-28 sm:pb-24">
      <HeroIntro>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_auto]">
          <h1
            data-hero="headline"
            className="max-w-2xl font-display text-[clamp(2.25rem,9vw,4.5rem)] leading-[0.95] font-semibold tracking-tight"
          >
            Soluciones eléctricas para tu empresa
          </h1>

          <div className="flex flex-col justify-between gap-8 lg:items-end lg:text-right">
            <span
              data-hero="stat"
              className="font-mono-num text-7xl font-medium text-cobre lg:text-8xl"
            >
              54
            </span>
            <p data-hero="copy" className="max-w-xs text-white/70">
              años reparando, fabricando y vendiendo transformadores en
              Guatemala. Empresa 100% guatemalteca, con taller propio desde
              1971.
            </p>
          </div>
        </div>

        <div
          data-hero="cta"
          className="mx-auto mt-14 flex max-w-6xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <a
            href="#contacto"
            className="bg-cobre px-7 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-cobre/90"
          >
            Solicitar cotización
          </a>
          <a
            href="#transformadores"
            className="border border-white/30 px-7 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-white/10"
          >
            Ver catálogo
          </a>
        </div>
      </HeroIntro>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="border-b border-rule px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl">
            No somos un comercializador más. Tenemos taller propio.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-ink-soft">
            Desde 1971 diseñamos, fabricamos, reparamos y comercializamos
            transformadores para el mercado guatemalteco e internacional,
            desde nuestras propias instalaciones de 1,600 m² en zona 13.
            Atendemos industria, comercio, vivienda, agroindustria y
            hotelería.
          </p>

          <dl className="mt-10 flex gap-10 border-t border-rule pt-6">
            <div>
              <dt className="text-sm text-ink-soft">Fundada en</dt>
              <dd className="font-mono-num text-3xl text-azul">1971</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-soft">Instalaciones</dt>
              <dd className="font-mono-num text-3xl text-azul">1,600 m²</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-soft">Taller hasta</dt>
              <dd className="font-mono-num text-3xl text-azul">5,000 kVA</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="flex flex-col">
            <Diferenciador
              titulo="Taller propio"
              desc="Fabricamos y reparamos con recursos propios, no solo revendemos equipo importado."
            />
            <Diferenciador
              titulo="Laboratorio de pruebas"
              desc="Cada unidad se verifica física, química y eléctricamente antes de salir."
            />
            <Diferenciador
              titulo="Diseño a la medida"
              desc="Capacidades, tensiones y configuraciones fuera del catálogo estándar, bajo pedido."
            />
            <Diferenciador
              titulo="Cobertura nacional e internacional"
              desc="Proyectos dentro y fuera de Guatemala."
            />
          </ul>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-14 max-w-6xl">
        <ParallaxImage
          src="/fotos/lovable-instalacion.jpg"
          alt="Instalaciones de SEILTC en zona 13, Guatemala"
          className="aspect-[21/9]"
        />
      </Reveal>
    </section>
  );
}

function Diferenciador({ titulo, desc }: { titulo: string; desc: string }) {
  return (
    <li className="border-l-2 border-cobre py-4 pl-5">
      <h3 className="font-semibold text-ink">{titulo}</h3>
      <p className="mt-1 text-sm text-ink-soft">{desc}</p>
    </li>
  );
}

function Transformadores() {
  return (
    <section
      id="transformadores"
      className="border-b border-rule bg-tint px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl">
            Cinco líneas de transformadores, en 13.2 kV y 34.5 kV
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Otros niveles de tensión disponibles según el requerimiento del
            proyecto. Trabajamos con Prolec, Shenda y Howard, con
            disponibilidad inmediata, y podemos importar otras marcas bajo
            pedido.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-rule border-t border-rule">
          {categorias.map((c, i) => (
            <div key={c.codigo}>
              <Reveal delay={i * 0.05}>
                <div className="grid gap-4 py-8 md:grid-cols-[220px_1fr]">
                  <h3 className="font-display text-2xl font-semibold text-azul">
                    {c.nombre}
                  </h3>
                  <div>
                    <p className="max-w-xl text-ink-soft">{c.resumen}</p>
                    <div className="mt-4 grid gap-x-8 gap-y-1 text-sm sm:grid-cols-3">
                      <p>
                        <span className="text-ink-soft">Aplicación — </span>
                        <span className="text-ink">{c.aplicacion}</span>
                      </p>
                      <p>
                        <span className="text-ink-soft">Capacidades — </span>
                        <span className="text-ink">{c.capacidades}</span>
                      </p>
                      <p>
                        <span className="text-ink-soft">Instalación — </span>
                        <span className="text-ink">{c.instalacion}</span>
                      </p>
                    </div>
                    {c.pendiente && (
                      <p className="mt-4 border border-dashed border-cobre bg-cobre-soft px-3 py-2 text-sm text-ink">
                        {c.pendiente}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>

              {i === 2 && (
                <Reveal className="py-8">
                  <ParallaxImage
                    src="/fotos/lovable-subestacion.jpg"
                    alt="Subestación tipo pedestal instalada en sitio"
                    className="aspect-[16/7]"
                  />
                </Reveal>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 border-t border-rule pt-10 lg:grid-cols-[1fr_1fr_1.1fr]">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Marcas
            </h3>
            <p className="mt-2 text-ink-soft">
              {marcas.map((m) => m.nombre).join(" · ")} con mayor
              disponibilidad. Importamos otras marcas bajo requerimiento.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Diseño a la medida
            </h3>
            <p className="mt-2 text-ink-soft">
              Requerimiento → propuesta técnica → fabricación o suministro →
              pruebas → entrega con protocolo documentado.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ParallaxImage
              src="/fotos/lovable-laboratorio.jpg"
              alt="Laboratorio de pruebas de SEILTC"
              className="aspect-[4/3]"
              strength={30}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Mantenimiento() {
  return (
    <section id="mantenimiento" className="border-b border-rule px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl">
            Rebobinado, pruebas y reparación con respaldo de taller propio
          </h2>
        </Reveal>

        <div className="mt-12 grid divide-y divide-rule border-t border-rule sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <div className="divide-y divide-rule">
            {serviciosMantenimiento.slice(0, 6).map((s, i) => (
              <Reveal key={s.codigo} delay={i * 0.04}>
                <ServicioRow servicio={s} />
              </Reveal>
            ))}
          </div>
          <div className="divide-y divide-rule">
            {serviciosMantenimiento.slice(6).map((s, i) => (
              <Reveal key={s.codigo} delay={i * 0.04}>
                <ServicioRow servicio={s} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
          <Reveal>
            <ParallaxImage
              src="/fotos/lovable-equipo-trabajo.jpg"
              alt="Equipo técnico de SEILTC en taller"
              className="aspect-[4/3]"
              strength={30}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <ParallaxImage
              src="/fotos/lovable-generadores-motores.jpg"
              alt="Motores y generadores en reparación"
              className="aspect-[4/3]"
              strength={30}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicioRow({
  servicio,
}: {
  servicio: { codigo: string; nombre: string; desc: string };
}) {
  return (
    <div className="grid grid-cols-[3rem_1fr] gap-4 py-5 sm:px-6">
      <span className="font-mono-num text-sm text-azul-acero">
        {servicio.codigo}
      </span>
      <div>
        <h3 className="font-semibold text-ink">{servicio.nombre}</h3>
        <p className="mt-1 text-sm text-ink-soft">{servicio.desc}</p>
      </div>
    </div>
  );
}

function Galeria() {
  const aspectClass = {
    cuadrado: "aspect-square",
    vertical: "aspect-[3/4]",
    horizontal: "aspect-[4/3]",
  };

  return (
    <section className="border-b border-rule px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-xl font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl">
            Taller, maniobras y pruebas en sitio
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {fotos.map((foto, i) => (
            <Reveal
              key={foto.src}
              delay={i * 0.05}
              className={i === 0 ? "col-span-2" : ""}
            >
              <div
                className={`relative overflow-hidden ${aspectClass[foto.aspecto]}`}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  const pasos = ["Diagnóstico", "Cotización", "Ejecución", "Pruebas", "Entrega"];
  return (
    <section className="border-b border-rule bg-tint px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
            {pasos.map((p, i) => (
              <span key={p} className="flex items-baseline gap-3">
                <span className="font-display text-xl font-semibold text-ink">
                  {p}
                </span>
                {i < pasos.length - 1 && (
                  <span className="text-cobre">→</span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BannerFinal() {
  return (
    <Reveal className="border-b border-rule">
      <ParallaxImage
        src="/fotos/lovable-transformador-potencia.jpg"
        alt="Transformador de potencia SEILTC"
        className="h-[45vh] sm:h-[55vh]"
        strength={80}
      />
    </Reveal>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <h2 className="max-w-lg font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl">
            Mandanos la placa de datos de tu equipo y te armamos una
            propuesta
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="divide-y divide-rule border-t border-rule">
            <ContactoRow label="Teléfono">
              <a href="tel:+50225099747" className="hover:text-cobre">
                (502) 2509-9747
              </a>{" "}
              ·{" "}
              <a href="tel:+50224404929" className="hover:text-cobre">
                2440-4929
              </a>{" "}
              ·{" "}
              <a href="tel:+50250189681" className="hover:text-cobre">
                5018-9681
              </a>
            </ContactoRow>
            <ContactoRow label="Correo">
              <a href="mailto:ventas@seiltc.com.gt" className="hover:text-cobre">
                ventas@seiltc.com.gt
              </a>
            </ContactoRow>
            <ContactoRow label="Dirección">
              4a calle 1-74 zona 13, Pamplona, Guatemala
            </ContactoRow>
            <ContactoRow label="Cobertura">
              Mercado nacional e internacional
            </ContactoRow>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function ContactoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-4 py-4 sm:grid-cols-[9rem_1fr]">
      <dt className="text-sm text-ink-soft">{label}</dt>
      <dd className="font-medium text-ink">{children}</dd>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-rule bg-tint">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <Image
              src="/logo-seiltc.jpg"
              alt="Servicio Eléctrico Industrial LTC."
              width={1600}
              height={941}
              className="h-11 w-auto"
            />
            <p className="mt-3 max-w-xs text-sm text-ink-soft">
              54 años de trayectoria en venta, mantenimiento y reparación de
              transformadores en Guatemala.
            </p>
          </div>

          <div className="flex flex-col gap-1 text-sm sm:text-right">
            <a
              href="tel:+50225099747"
              className="text-ink-soft transition-colors hover:text-cobre"
            >
              (502) 2509-9747
            </a>
            <a
              href="mailto:ventas@seiltc.com.gt"
              className="text-ink-soft transition-colors hover:text-cobre"
            >
              ventas@seiltc.com.gt
            </a>
            <span className="text-ink-soft">
              4a calle 1-74 zona 13, Pamplona, Guatemala
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-rule pt-6 text-xs text-ink-soft sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} SEILTC. Todos los derechos reservados.</span>
          <span>Desarrollado por Zolvex Digital Solutions</span>
        </div>
      </div>
    </footer>
  );
}
