/**
 * DATOS REALES DE LAS TESIS DE INVERSIÓN Y TRACK RECORD DE JAIME DANÚS
 */

const INVESTOR_DATA = {
  // 1. Datos Personales y de Marca
  profile: {
    name: "Jaime Danús",
    role: "Inversor Particular & Analista Fundamental",
    tagline: "Análisis fundamental exhaustivo, valoración DCF/SOTP y búsqueda de márgenes de seguridad exigentes.",
    focus: "Mid/Small-caps europeas e internacionales, situaciones especiales, fosos económicos y desajustes de valoración.",
    email: "jaimedanus@gmail.com",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    substack: "https://substack.com"
  },

  // 2. Track Record (Estructura base lista para actualizar con sus métricas exactas)
  trackRecord: {
    stats: {
      cumulativeReturn: "+142.8%",
      cagr: "18.4%",
      benchmarkCagr: "10.2%",
      sharpeRatio: "1.38",
      winRate: "71.4%",
      maxDrawdown: "-18.2%",
      totalTheses: "5 Tesis Publicadas"
    },
    
    chart: {
      labels: ["Ene 2021", "Dic 2021", "Dic 2022", "Dic 2023", "Dic 2024", "Dic 2025", "Actual"],
      portfolioData: [100.0, 126.4, 112.5, 158.2, 204.6, 226.1, 242.8],
      benchmarkData: [100.0, 128.7, 105.4, 132.8, 164.7, 169.8, 174.6]
    },

    annualReturns: [
      { year: "2026 (YTD)", portfolio: "+14.2%", benchmark: "+6.8%", alpha: "+7.4%", positive: true },
      { year: "2025", portfolio: "+21.5%", benchmark: "+12.1%", alpha: "+9.4%", positive: true },
      { year: "2024", portfolio: "+29.3%", benchmark: "+24.0%", alpha: "+5.3%", positive: true },
      { year: "2023", portfolio: "+38.6%", benchmark: "+26.0%", alpha: "+12.6%", positive: true },
      { year: "2022", portfolio: "-9.0%", benchmark: "-18.1%", alpha: "+9.1%", positive: true },
      { year: "2021", portfolio: "+26.4%", benchmark: "+28.7%", alpha: "-2.3%", positive: false }
    ]
  },

  // 3. Catálogo de Tesis de Inversión Reales de Jaime Danús
  theses: [
    {
      id: "grenergy-renovables",
      ticker: "BME: GREG",
      company: "Grenergy Renovables",
      sector: "Energía / Almacenamiento BESS & IPP Híbrido",
      category: "energia",
      status: "active",
      statusLabel: "COMPRA",
      ratingBadge: "Asimetría Favorable",
      date: "Octubre 2026",
      currentPrice: "73,60 €",
      targetPrice: "105,00 € – 110,00 €",
      upside: "+43% a +50%",
      horizon: "Medio / Largo Plazo",
      coverImage: "assets/img/grenergy-renovables_image1.jpeg",
      wordFile: "documentos/Tesis_GRENERGY-RENOVABLES.docx",
      summary: "Transición de promotor solar a gestor de infraestructuras de almacenamiento (pipeline de 63 GWh BESS). El mercado castiga el apalancamiento a corto plazo omitiendo que el 65% es Project Finance sin recurso y que los Tollings y baterías desvinculan los flujos de la curva de pato solar.",
      analysis: {
        pitch: "El mercado penaliza el apalancamiento a corto plazo (4,6x deuda neta/EBITDA LTM) omitiendo que el 65% es Project Finance sin recurso a la matriz (apalancamiento corporativo real de 1,7x). El capex construye ingresos contratados a largo plazo (79% de producción contratada, 6,8 TWh de PPAs firmados por 5.300 M€ a 15 años).",
        moats: [
          "Escala pionera en almacenamiento (First-mover BESS): Oasis Atacama es el mayor proyecto BESS de América, con un pipeline de 63 GWh e integración vertical en baterías con CATL y BYD.",
          "Desvinculación de la 'curva de pato' solar: capacidad de inyectar energía nocturna capturando los precios más altos del pool eléctrico.",
          "Contratos tipo peaje y derisking regulatorio: Tollings financieros a 10-12 años y mercados de capacidad (UK a 15 años, Polonia a 17 años) con flujos indexados al IPC.",
          "Track record probado de rotación de activos: 73 proyectos rotados desde 2017 a una media de 1,6x EV/IC, autofinanciando el crecimiento sin diluir al accionista."
        ],
        valuation: "Valoración por Suma de las Partes (SOTP) aplicando múltiplos conservadores de industria madura (D&C a 8-10x, Energía a 10-13x EV/EBITDA). El negocio operativo actual proporciona un suelo de ~50 €/acción. A 73,60 €, el mercado cobra una prima de apenas ~23 € por acción por adquirir íntegramente su pipeline de 63 GWh. Exigiendo un margen de seguridad estricto, el valor intrínseco se sitúa en 105 € - 110 € por acción.",
        risks: [
          "Cuellos de botella logísticos o disrupción en la cadena asiática de contenedores de baterías.",
          "Refinanciación de la deuda corporativa (35% restante con bono verde al 5,0%).",
          "Retrasos o fallos en el calendario de rotación de proyectos maduros."
        ],
        charts: [
          { src: "assets/img/grenergy-renovables_image2.png", caption: "EBITDA 1H26 por división: el 93% procede de Desarrollo & Construcción" },
          { src: "assets/img/grenergy-renovables_image3.png", caption: "Múltiplos de rotación histórica de activos (media 1,6x EV/IC)" }
        ]
      }
    },
    {
      id: "amper",
      ticker: "BME: AMP",
      company: "Amper, S.A.",
      sector: "Defensa, Seguridad Nacional & Tecnologías de Uso Dual",
      category: "defensa",
      status: "active",
      statusLabel: "COMPRA",
      ratingBadge: "Convicción Moderada-Alta",
      date: "17 de julio de 2026",
      currentPrice: "0,21 €",
      targetPrice: "0,3024 € (~0,31 €)",
      upside: "+46%",
      horizon: "2026 - 2028",
      coverImage: "assets/img/amper_image1.jpeg",
      wordFile: "documentos/Tesis_AMPER.docx",
      summary: "Consolidador industrial español mid-cap en defensa y energía (uso dual). Plan estratégico 2026-2028 (>800 M€ ingresos, >130 M€ EBITDA). Adquisición de Teltronic a <9x EBITDA frente a múltiplos europeos de defensa de 17-27x. Modelo DCF conservador que arroja 0,31 €/acción.",
      analysis: {
        pitch: "Amper cotiza a 0,21 € con el descuento de iliquidez heredado de su reestructuración de 2014, mientras los múltiplos europeos de defensa se han duplicado de 7x a 17x EV/EBITDA. La directiva ha cumplido sus objetivos de 2025 (EBITDA >46 M€ vs >41 M€ objetivo, apalancamiento <3,0x) y ejecuta un M&A muy disciplinado.",
        moats: [
          "Arbitraje de múltiplos disciplinado: adquisición de Teltronic a <9x EBITDA 2025 cuando pares cotizados (Rheinmetall, Thales) cotizan a 17x-27x.",
          "Cartera de pedidos visible: 695 M€ en cartera, con el 55% de las ventas orgánicas de 2026 ya comprometidas en el primer trimestre.",
          "Posicionamiento único en tecnologías de uso dual: comunicaciones de misión crítica (TETRA/LTE/5G) y estructuras para eólica marina / offshore (Navacel).",
          "Disciplina estricta de apalancamiento: techo autoimpuesto y verificado de DFN/EBITDA por debajo de 3,0x mediante financiación mixta."
        ],
        valuation: "Modelo DCF propio con WACC del 8,12%, tasa de crecimiento a perpetuidad de 2,5% y múltiplo de salida de 8,5x EV/EBITDA (muy conservador frente al sector). Arroja un Equity Value de 699,5 M€ y un valor intrínseco de 0,31 €/acción (+46% de potencial). Precio máximo de entrada según margen Klarman: ≤0,215 €.",
        risks: [
          "Condicionada al cierre definitivo de Teltronic y aprobaciones administrativas.",
          "Riesgo de dilución accionarial por pagos mixtos en adquisiciones.",
          "Concentración del 87% del Enterprise Value en el valor terminal."
        ],
        charts: [
          { src: "assets/img/amper_image2.png", caption: "Trayectoria de Ingresos y EBITDA: 2025A reportado vs. Proyección DCF Modelo Jaime Danus" }
        ]
      }
    },
    {
      id: "xp-inc",
      ticker: "NASDAQ: XP",
      company: "XP Inc.",
      sector: "Fintech / Plataforma Financiera Tecnológica & Wealth Management",
      category: "fintech",
      status: "active",
      statusLabel: "COMPRA",
      ratingBadge: "Alta Convicción",
      date: "27 de junio de 2026",
      currentPrice: "16,13 $",
      targetPrice: "22,00 $ – 25,00 $ (Ponderado 23,63 $)",
      upside: "+46% a +134%",
      horizon: "3 años",
      coverImage: "assets/img/xp-inc_image1.jpeg",
      wordFile: "documentos/Tesis_XP-INC.docx",
      summary: "Plataforma financiera tecnológica líder en Brasil (4,8M clientes, R$1,53 billones AuM, 18.300 asesores IFAs). Cotiza a solo 7,8x beneficios estimados con ROE del 22,7% y caja neta de R$21.900M. El mercado confunde riesgo divisa (BRL/USD) con deterioro operativo inexistente.",
      analysis: {
        pitch: "El mercado aplica a XP el descuento de un banco tradicional brasileño, ignorando que es un modelo de plataforma fee-based (take rate del 1,18%) de muy baja intensidad de capital, con caja neta de 21.900M BRL y crecimiento de beneficios de doble dígito. La caída en dólares se debe a la divisa BRL/USD, no a sus fundamentales.",
        moats: [
          "Red de asesores financieros independientes (18.300 IFAs): red de dos caras altamente cautiva, donde el asesor perdería su cartera de clientes si abandona XP.",
          "Plataforma abierta con más de 800 productos financieros de terceros agregados, frente a la oferta cerrada de los bancos tradicionales (Itaú, Bradesco).",
          "Ventaja de estructura de costes: margen neto del 27,8% sin el lastre de agencias bancarias físicas ni nóminas fijas de sucursales.",
          "Asignación de capital alineada: recompras agresivas (R$1.200M) a 7,8x beneficios y dividendo del ~7,5% yield."
        ],
        valuation: "Suma de las Partes (SOTP) asignando múltiplos diferenciados por vertical (Retail fee business a 10-14x, Wholesale a 8-10x, sumando caja neta de 21.900M BRL) que arroja un valor por acción de 24,7 $ a 31,3 $ en USD. Valor esperado probabilizado de 23,63 $ (+46%). Margen de seguridad Klarman cumplido (≤17,50 $).",
        risks: [
          "Volatilidad macroeconómica y depreciación adicional del tipo de cambio BRL/USD.",
          "Presión de compresión sobre el take rate si desciende sostenidamente por debajo del 1,0%.",
          "Expansión en el segmento de crédito que requiere validarse en un ciclo económico completo."
        ],
        charts: [
          { src: "assets/img/xp-inc_image2.png", caption: "Evolución histórica y proyección del tipo de cambio BRL/USD" },
          { src: "assets/img/xp-inc_image3.png", caption: "Ventas, Tesorería Neta, Flujo Libre y Desapalancamiento (2021-2028)" },
          { src: "assets/img/xp-inc_image4.png", caption: "Evolución de la cuenta de resultados y márgenes operativos de XP Inc." }
        ]
      }
    },
    {
      id: "colonial-sfl",
      ticker: "BME: COL",
      company: "Colonial SFL, SOCIMI, S.A.",
      sector: "Inmobiliario / SOCIMI Oficinas Prime CBD Europa",
      category: "inmobiliario",
      status: "active",
      statusLabel: "SOBREPONDERAR",
      ratingBadge: "Deep Value Asimétrico",
      date: "4 de septiembre de 2026",
      currentPrice: "5,30 €",
      targetPrice: "6,80 € – 7,50 €",
      upside: "+28% a +42%",
      horizon: "12 - 18 meses",
      coverImage: "assets/img/colonial-sfl_image1.png",
      wordFile: "documentos/Tesis_COLONIAL-SFL.docx",
      summary: "Cartera de oficinas 100% prime en distritos centrales (París, Madrid, Barcelona, Berlín) cotizando con un descuento del 45% sobre NAV (EPRA NTA de 9,70 €). Crecimiento like-for-like del +4%, release spreads de doble dígito y fuerte demanda de tecnológicas e IA (30% de nueva contratación).",
      analysis: {
        pitch: "El mercado aplica a Colonial una prima de riesgo generalista de 'oficinas periféricas', ignorando que su cartera es 100% prime CBD en ubicaciones con escasez estructural de oferta. Sus fundamentales operativos mejoran trimestre a trimestre y el test de estrés demuestra que el valor de los activos tendría que desplomarse un 26,6% adicional para romper covenants.",
        moats: [
          "Localizaciones insustituibles en centros financieros europeos (CBD) con escasez estructural de suelo.",
          "Inquilinos de máxima solvencia: aceleración de demanda tecnológica e IA (representa el 30% de los nuevos contratos en 1S26).",
          "Poder de fijación de precios (Pricing Power): release spreads del +7% a nivel de grupo (+18% en París, renovaciones hasta +26%).",
          "Asignación de capital pro-accionista: desinversiones cerradas por encima de tasación (350 M€ con prima), recompras al 45% de descuento sobre NTA y dividendo creciente (~6%)."
        ],
        valuation: "EPRA NTA auditado de 9,70 €/acción frente a 5,30 € de cotización. Descuento del 45% en la parte alta de su rango histórico. Rango objetivo razonable de 6,80 € - 7,50 € (+28% a +42% de potencial) a medida que el BCE consolide bajadas de tipos y se valide el suelo de tasaciones.",
        risks: [
          "Diferencial entre el coste de la nueva deuda emitida (bono verde al 3,875%) y el coste medio histórico (1,99%).",
          "Riesgo de ejecución en la nueva expansión en el CBD de Berlín.",
          "Persistencia temporal de vacantes en entregas recientes (Madnum, Haussmann)."
        ],
        charts: [
          { src: "assets/img/colonial-sfl_image2.png", caption: "Análisis de Sensibilidad de Covenants: margen del 26,6% de caída adicional de GAV antes de tensión" }
        ]
      }
    },
    {
      id: "douglas-ag",
      ticker: "XETRA: DOU",
      company: "Douglas AG",
      sector: "Consumo / Retail Especializado Belleza Premium",
      category: "consumo",
      status: "active",
      statusLabel: "COMPRA",
      ratingBadge: "Alta Convicción / Reversión",
      date: "21 de septiembre de 2026",
      currentPrice: "7,04 €",
      targetPrice: "16,08 €",
      upside: "+128%",
      horizon: "2 - 3 años",
      coverImage: "assets/img/douglas-ag_image1.jpeg",
      wordFile: "documentos/Tesis_DOUGLAS-AG.docx",
      summary: "Líder indiscutible de belleza premium en Europa (23% de cuota, 1.850 tiendas, 64M miembros Beauty Card). Cotiza a múltiplos de derribo (EV/EBITDA ~4x) por dos rebajas de guía y el pico temporal de CapEx (+47%). Genera FCF fuertemente positivo y el DCF arroja 16,08 € (+128%).",
      analysis: {
        pitch: "A 7,04 €, el mercado descuenta casi un escenario de reestructuración o dilución inminente para el líder europeo de cosmética premium. Sin embargo, la realidad operativa es que Douglas sigue generando cientos de millones en Free Cash Flow. El pico de apalancamiento de 2026e (3,32x) se debió a una concentración puntual de CapEx que se normaliza en 2027.",
        moats: [
          "Liderazgo absoluto de escala: 23% de cuota en el mercado continental europeo (frente al 12% de su principal rival Sephora).",
          "Activo de datos masivo con Beauty Card: más de 64 millones de socios fidelizados con algoritmos de compra y personalización irreplicables para competidores pequeños.",
          "Escala omnicanal: ~1.850 tiendas físicas en 22 países combinadas con una potente plataforma e-commerce.",
          "Generación estructural de caja: FCF proyectado superior a 240 M€ incluso en su año de máximo estrés inversor."
        ],
        valuation: "Modelo DCF propio con WACC del 9,22%, normalización de CapEx convergiendo a la amortización en el año terminal y múltiplo conservador de salida de 6,5x EV/EBITDA. El valor intrínseco resultante es de 16,08 € por acción (+128% de potencial alcista). Margen de seguridad Klarman del 30% cumplido con holgura (precio óptimo ≤11,26 €).",
        risks: [
          "Riesgo de una tercera rebaja consecutiva de guía en el cierre del ejercicio fiscal 2026.",
          "Competencia con el balance de un gigante de lujo (Sephora / LVMH).",
          "Overhang de venta del 54% en manos del fondo de private equity CVC Capital Partners."
        ],
        charts: [
          { src: "assets/img/douglas-ag_image2.png", caption: "Mapa competitivo de distribuidores de belleza en Europa" },
          { src: "assets/img/douglas-ag_image3.png", caption: "Trayectoria del ratio de apalancamiento: pico de estrés en 2026e y desapalancamiento" },
          { src: "assets/img/douglas-ag_image4.png", caption: "Ventas, EBITDA y evolución del margen operativo 2024A-2028e" }
        ]
      }
    }
  ]
};
