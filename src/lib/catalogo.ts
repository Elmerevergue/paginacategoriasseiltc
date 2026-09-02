export type Categoria = {
  codigo: string;
  nombre: string;
  resumen: string;
  aplicacion: string;
  capacidades: string;
  instalacion: string;
  pendiente?: string;
};

export const categorias: Categoria[] = [
  {
    codigo: "01",
    nombre: "Monofásicos",
    resumen:
      "Unidades para distribución monofásica, en configuración convencional o autoprotegida.",
    aplicacion: "Redes de distribución residencial y comercial de baja densidad",
    capacidades: "10 – 150 kVA",
    instalacion: "Poste / distribución aérea",
  },
  {
    codigo: "02",
    nombre: "Trifásicos",
    resumen:
      "Unidades trifásicas para instalación en poste, plataforma o piso.",
    aplicacion: "Cargas industriales, comerciales e institucionales",
    capacidades: "Desde 15 kVA · capacidades superiores a petición",
    instalacion: "Poste, plataforma o piso",
  },
  {
    codigo: "03",
    nombre: "Pad Mounted",
    resumen:
      "Transformadores de frente muerto, diseñados para redes subterráneas, en configuración radial y loop feed.",
    aplicacion: "Centros comerciales, condominios, campus y proyectos con red subterránea",
    capacidades: "150 – 5,000 kVA",
    instalacion: "Piso, frente muerto",
  },
  {
    codigo: "04",
    nombre: "Secos",
    resumen:
      "Transformadores sin aislamiento líquido, seguros para espacios ocupados y sin riesgo de derrame.",
    aplicacion: "Hospitales, centros comerciales, sótanos y espacios interiores",
    capacidades: "Consultar rango disponible",
    instalacion: "Interior, sin fosa de contención",
    pendiente: "Rango de kVA en confirmación",
  },
  {
    codigo: "05",
    nombre: "Subestaciones",
    resumen:
      "Soluciones integrales por configuración: pedestal, unitaria, compacta y tipo caseta.",
    aplicacion: "Proyectos que requieren celdas de media tensión y protecciones integradas",
    capacidades: "Por configuración y requerimiento del proyecto",
    instalacion: "Pedestal, unitaria, compacta o tipo caseta",
  },
];

export const marcas = [
  { nombre: "Prolec", nota: "Mayor disponibilidad" },
  { nombre: "Shenda", nota: "Mayor disponibilidad" },
  { nombre: "Howard", nota: "Mayor disponibilidad" },
];

export const serviciosMantenimiento = [
  { codigo: "01", nombre: "Rebobinado", desc: "Devanados AT/BT, mono y trifásicos, hasta 5,000 kVA, reemplazo de aislamientos." },
  { codigo: "02", nombre: "Cambio de bobinas", desc: "Rediseño, cambio de relación de transformación, reconexión de taps." },
  { codigo: "03", nombre: "Transformadores quemados", desc: "Diagnóstico, evaluación de núcleo, análisis reparar vs. reemplazar." },
  { codigo: "04", nombre: "Aceite dieléctrico", desc: "Cambio, filtrado, desgasificado, secado y venta de aceite nuevo." },
  { codigo: "05", nombre: "Análisis de laboratorio", desc: "Físico-químico-eléctrico, rigidez dieléctrica, cromatografía de gases, PCB's." },
  { codigo: "06", nombre: "Pruebas eléctricas", desc: "Factor de potencia, respuesta en frecuencia, TTR digital, Megger, resistencia óhmica, pruebas a TC." },
  { codigo: "07", nombre: "Boquillas", desc: "Reparación, venta y adaptación de 13.2 a 400 kV." },
  { codigo: "08", nombre: "Cambiadores bajo carga", desc: "Servicio para equipos Reinhausen, ABB y Westinghouse." },
  { codigo: "09", nombre: "Maniobras e instalación", desc: "Montaje, puesta en operación, traslados, instalaciones aéreas y subterráneas." },
  { codigo: "10", nombre: "Renta de transformadores", desc: "Unidades seminuevas de potencia y distribución, para contingencia." },
  { codigo: "11", nombre: "Planes de mantenimiento", desc: "Preventivo programado: anual, semestral o por criticidad." },
  { codigo: "12", nombre: "Asesoría técnica", desc: "Acompañamiento en especificación de equipo y normativa." },
];
