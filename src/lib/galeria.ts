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
];
