export type Foto = {
  src: string;
  alt: string;
  aspecto: "cuadrado" | "vertical" | "horizontal";
};

export const fotos: Foto[] = [
  {
    src: "/fotos/transformador-500kva-taller.jpg",
    alt: "Transformador de 500 kVA terminado en el taller, listo para despacho",
    aspecto: "vertical",
  },
  {
    src: "/fotos/fabricacion-tablero-taller.jpg",
    alt: "Tablero de baja tensión en fabricación, con barras y protecciones instaladas",
    aspecto: "vertical",
  },
  {
    src: "/fotos/pruebas-campo-subestacion.jpg",
    alt: "Técnico realizando pruebas eléctricas en una subestación tipo pedestal en campo",
    aspecto: "horizontal",
  },
  {
    src: "/fotos/transformador-prolec-embalado.jpg",
    alt: "Transformador Prolec embalado, listo para traslado desde bodega",
    aspecto: "horizontal",
  },
  {
    src: "/fotos/maniobra-grua-transformador.jpg",
    alt: "Maniobra de carga de un transformador con grúa",
    aspecto: "horizontal",
  },
  {
    src: "/fotos/pruebas-tablero-subestacion.jpg",
    alt: "Técnico conectando equipo de pruebas a una subestación en sitio",
    aspecto: "vertical",
  },
  {
    src: "/fotos/subestacion-instalacion.jpg",
    alt: "Cuadrilla instalando un transformador de subestación tras la malla perimetral",
    aspecto: "horizontal",
  },
  {
    src: "/fotos/traslado-transformadores.jpg",
    alt: "Tanques de aceite dieléctrico marcados y asegurados para traslado",
    aspecto: "vertical",
  },
  {
    src: "/fotos/mantenimiento-tablero-control.jpg",
    alt: "Mantenimiento del tablero de control de un transformador de potencia en sitio",
    aspecto: "vertical",
  },
  {
    src: "/fotos/carga-equipo-planta.jpg",
    alt: "Descarga de equipo eléctrico embalado en planta",
    aspecto: "horizontal",
  },
  {
    src: "/fotos/tablero-protecciones.jpg",
    alt: "Tablero de protecciones con interruptores termomagnéticos instalados",
    aspecto: "vertical",
  },
  {
    src: "/fotos/subestacion-transformador-instalado.jpg",
    alt: "Transformador de potencia instalado con ventiladores de enfriamiento",
    aspecto: "horizontal",
  },
];
