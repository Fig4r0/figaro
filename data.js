/**
 * CONFIGURACIÓN Y DATOS DE TU MARCA PERSONAL
 * 
 * Puedes editar este archivo fácilmente para actualizar tu nombre,
 * tus métricas de track record o añadir nuevas tesis de inversión.
 */

const INVESTOR_DATA = {
  // 1. Datos Personales y de Marca
  profile: {
    name: "Jaime Danús",
    role: "Inversor Particular & Analista Fundamental",
    tagline: "Asignación disciplinada de capital, búsqueda de fosos económicos y horizonte de inversión a largo plazo.",
    focus: "Small/Mid Caps europeas y estadounidenses con alto ROIC y reinversión eficiente.",
    email: "inversor@ejemplo.com",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    substack: "https://substack.com"
  },

  // 2. Métricas y Datos del Track Record
  trackRecord: {
    stats: {
      cumulativeReturn: "+142.8%",
      cagr: "18.4%",
      benchmarkCagr: "10.2%",
      sharpeRatio: "1.38",
      winRate: "71.4%",
      maxDrawdown: "-18.2%",
      totalTheses: "14"
    },
    
    // Datos para el gráfico de Valor Liquidativo (Base 100)
    chart: {
      labels: ["Ene 2021", "Dic 2021", "Dic 2022", "Dic 2023", "Dic 2024", "Dic 2025", "Actual"],
      portfolioData: [100.0, 126.4, 112.5, 158.2, 204.6, 226.1, 242.8],
      benchmarkData: [100.0, 128.7, 105.4, 132.8, 164.7, 169.8, 174.6]
    },

    // Desglose por años para la tabla
    annualReturns: [
      { year: "2026 (YTD)", portfolio: "+7.4%", benchmark: "+2.8%", alpha: "+4.6%", positive: true },
      { year: "2025", portfolio: "+10.5%", benchmark: "+3.1%", alpha: "+7.4%", positive: true },
      { year: "2024", portfolio: "+29.3%", benchmark: "+24.0%", alpha: "+5.3%", positive: true },
      { year: "2023", portfolio: "+40.6%", benchmark: "+26.0%", alpha: "+14.6%", positive: true },
      { year: "2022", portfolio: "-11.0%", benchmark: "-18.1%", alpha: "+7.1%", positive: true },
      { year: "2021", portfolio: "+26.4%", benchmark: "+28.7%", alpha: "-2.3%", positive: false }
    ]
  },

  // 3. Catálogo de Tesis de Inversión
  theses: [
    {
      id: "dino-polska",
      ticker: "WSE:DNP",
      company: "Dino Polska S.A.",
      sector: "Consumo Básico / Supermercados de Proximidad",
      category: "consumo",
      status: "active",
      statusLabel: "Activa",
      date: "Noviembre 2023",
      entryPrice: "375.00 PLN",
      currentReturn: "+36.5%",
      horizon: "4 - 6 años",
      summary: "Cadena de supermercados en Polonia con crecimiento orgánico acelerado, propiedad inmobiliaria del 100% de sus tiendas y reinversión de flujos al 22% de ROCE.",
      analysis: {
        thesisCore: "Dino opera un modelo estandarizado de tiendas en poblaciones rurales y periurbanas donde no compite directamente con grandes hipermercados. Su integración vertical (distribución propia y planta cárnica) le otorga una ventaja de costes insuperable.",
        moats: [
          "Propiedad del suelo y de los inmuebles (inmune a subidas de alquileres).",
          "Escala logística y proximidad de tiendas en nichos geográficos desatendidos.",
          "Capacidad de autofinanciar la apertura de más de 250 tiendas anuales sin dilución de capital."
        ],
        catalysts: [
          "Expansión hacia las regiones este y sur de Polonia donde su cuota aún es muy baja.",
          "Maduración de tiendas abiertas en los últimos 3 años incrementando márgenes operativos.",
          "Apalancamiento operativo en costes corporativos y distribución."
        ],
        risks: [
          "Guerra de precios con competidores como Biedronka.",
          "Inflación de costes laborales en Europa del Este.",
          "Riesgo de sucesión a largo plazo del fundador Tomasz Biernacki."
        ],
        valuation: "Entrada a 18x EV/FCF normalizado para una compañía creciendo al 20% anual con retornos sobre capital extraordinarios."
      }
    },
    {
      id: "asml-holding",
      ticker: "NASDAQ:ASML",
      company: "ASML Holding N.V.",
      sector: "Semiconductores / Equipamiento Litográfico",
      category: "tech",
      status: "active",
      statusLabel: "Activa",
      date: "Mayo 2024",
      entryPrice: "€710.00",
      currentReturn: "+28.4%",
      horizon: "5+ años",
      summary: "Monopolio indiscutible en litografía EUV (Ultravioleta Extremo), componente fundamental e insustituible para la fabricación de chips de inteligencia artificial y computación avanzada.",
      analysis: {
        thesisCore: "ASML es el guardián de la ley de Moore. Ninguna fundición de semiconductores (TSMC, Samsung, Intel) puede producir chips sub-5nm sin sus máquinas EUV, cuyo desarrollo requirió más de 20 años y miles de millones en I+D.",
        moats: [
          "Monopolio técnico absoluto en litografía EUV con barreras de entrada prácticamente infranqueables.",
          "Ecosistema integrado con proveedores clave como Carl Zeiss y miles de patentes.",
          "Ingresos recurrentes crecientes por servicio, mantenimiento y actualización de base instalada."
        ],
        catalysts: [
          "Despliegue comercial de los sistemas High-NA EUV (0.55 NA).",
          "Construcción masiva de nuevas 'fabs' subvencionadas por CHIPS Act en EE.UU. y Europa.",
          "Demanda exponencial de computación de IA y aceleradores gráficos."
        ],
        risks: [
          "Restricciones geopolíticas a la exportación de sistemas avanzados a China.",
          "Ciclicidad temporal en el gasto de capital (Capex) de los fabricantes de chips."
        ],
        valuation: "Compra aprovechando la volatilidad del ciclo de semiconductores con un múltiplo razonable frente a su poder de fijación de precios secular."
      }
    },
    {
      id: "constellation-software",
      ticker: "TSX:CSU",
      company: "Constellation Software Inc.",
      sector: "Software Vertical (VMS) / Serial Acquirer",
      category: "tech",
      status: "active",
      statusLabel: "Activa",
      date: "Enero 2022",
      entryPrice: "CAD $1,840.00",
      currentReturn: "+88.5%",
      horizon: "10+ años",
      summary: "El mejor asignador de capital de software del mundo. Adquiere empresas de software de misión crítica con clientes cautivos y reinvierte el flujo al 25% de retorno.",
      analysis: {
        thesisCore: "Constellation opera de forma descentralizada comprando proveedores de software nicho (desde gestión de flotas municipales hasta software para notarías). El coste de cambio para el cliente es altísimo y el software representa una fracción minúscula de sus costes.",
        moats: [
          "Costes de cambio brutales: ningún cliente cancela un software operativo clave para ahorrarse unos pocos dólares.",
          "Cultura descentralizada de fusiones y adquisiciones liderada por Mark Leonard.",
          "Conversión de EBITDA a Flujo de Caja Libre superior al 85%."
        ],
        catalysts: [
          "Ampliación a transacciones de mayor tamaño mediante escisiones como Topicus y Lumine.",
          "Despliegue de capital acelerado en mercados fuera de Norteamérica."
        ],
        risks: [
          "Compresión en los retornos de reinversión si el volumen de capital a desplegar supera la oferta de empresas disponibles.",
          "Riesgo clave de personas (sucesión del equipo fundador)."
        ],
        valuation: "Valorada en base a la tasa interna de retorno (TIR) proyectada del FCF por acción (>15% anual a largo plazo)."
      }
    },
    {
      id: "ferguson-enterprises",
      ticker: "NYSE:FERG",
      company: "Ferguson Enterprises Inc.",
      sector: "Distribución Industrial / Suministros HVAC",
      category: "industria",
      status: "closed",
      statusLabel: "Cerrada (+54%)",
      date: "Marzo 2023",
      entryPrice: "$138.00",
      currentReturn: "+54.2%",
      horizon: "Cerrada con éxito",
      summary: "Distribuidor líder de fontanería, calefacción y climatización en EE.UU. Ganancia de cuota en un mercado hiperfragmentado gracias a ventajas de escala y logística.",
      analysis: {
        thesisCore: "Los fontaneros y contratistas comerciales valoran la disponibilidad inmediata de piezas por encima de los descuentos de precio. Ferguson cuenta con la red de centros de distribución más densa de Norteamérica.",
        moats: [
          "Economías de escala en compras y catálogo de más de 1 millón de referencias.",
          "Capacidad de entrega en el mismo día directamente en la obra o taller.",
          "Plataforma digital B2B líder que fideliza a contratistas independientes."
        ],
        catalysts: [
          "Migración de cotización principal a la bolsa de Nueva York (NYSE) atrayendo flujos institucionales pasivos.",
          "Ola secular de renovación de infraestructuras de agua y transición a sistemas HVAC eficientes."
        ],
        risks: [
          "Sensibilidad al ciclo de inicio de viviendas residenciales nuevas en EE.UU."
        ],
        valuation: "Salida ejecutada tras alcanzar nuestro precio objetivo de valoración fundamental y normalización de múltiplos."
      }
    }
  ]
};
