/**
 * DATOS REALES DE LAS TESIS DE INVERSIÓN Y TRACK RECORD DE JAIME DANÚS
 */

const INVESTOR_DATA = {
  // 1. Perfil Académico & Profesional
  profile: {
    name: "Jaime Danús",
    role: "Estudiante de Economía (Itinerario Bilingüe) | Inversor Fundamental",
    tagline: "Filosofía: Value Investing y Turnarounds atractivos. Análisis fundamental riguroso y búsqueda de asimetrías de rentabilidad.",
    education: "Grado en Economía (Itinerario Bilingüe) — Universidad de Cantabria",
    languages: "Inglés C1 Certificado por el British Council · Itinerario Bilingüe",
    careerGoal: "Buy-Side Equity Research & Value Investing",
    focus: "Value Investing clásico, turnarounds atractivos, situaciones especiales y desajustes precio-valor.",
    linkedin: "https://www.linkedin.com/in/jaime-danus-bontempini"
  },

  // 2. Track Record Real (Auditado en Rankia / MyPortfolio — Octubre 2026)
  trackRecord: {
    rankiaPublicUrl: "https://myportfolio.rankia.com/portfolios/public/64ae6d6b-8717-4959-add8-2eddeb9287eb",
    stats: {
      period: "2 oct 2026 – 24 oct 2026",
      alpha: "+1,40%", // +140 bps
      alphaBenchmark: "Fidelity Europe Fund (con dividendos)",
      portfolioReturn: "-1,03%",
      benchmarkReturn: "-2,43%",
      totalValue: "9.903,67 €",
      initialCapital: "10.000,00 €",
      investedCapital: "9.488,98 € (95,81%)",
      cashWeight: "414,69 € (4,19%)",
      realizedProfit: "+161,55 €",
      bestRealizedTrade: "+44,52% (XP Inc.)",
      openPositionsCount: "14 Posiciones Activas"
    },
    
    // Evolución de rentabilidad acumulada (%) del 2 al 24 de Octubre de 2026
    chart: {
      labels: ["2 oct", "5 oct", "8 oct", "12 oct", "15 oct", "17 oct", "19 oct", "21 oct", "24 oct"],
      portfolioData: [0.0, 2.1, 0.2, 2.0, 1.1, 2.1, 0.6, 1.3, -1.03],
      benchmarkData: [0.0, 0.3, -1.8, -1.2, -1.7, -1.1, -1.7, -0.5, -2.43]
    },

    // Posiciones cerradas (Track Record monetizado)
    closedPositions: [
      {
        asset: "XP Inc.",
        ticker: "NASDAQ: XP",
        returnPct: "+44,52%",
        profitEur: "+237,30 €",
        totalIncome: "770,28 €",
        closeDate: "13/10/2026",
        thesisId: "xp-inc",
        status: "Tesis Monetizada con Éxito"
      },
      {
        asset: "Burelle S.A.",
        ticker: "EPA: BUR",
        returnPct: "-11,65%",
        profitEur: "-75,75 €",
        totalIncome: "574,25 €",
        closeDate: "15/10/2026",
        thesisId: null,
        status: "Stop Loss / Salida Disciplinada"
      }
    ],

    // Cartera activa (14 posiciones)
    openPositions: [
      { name: "Amper, S.A.", ticker: "AMP.MC", weight: "10,04%", value: "994,58 €", returnPct: "-0,22%", isThesis: true, thesisId: "amper" },
      { name: "JPMorgan Chase & Co.", ticker: "JPM", weight: "8,96%", value: "887,77 €", returnPct: "+0,23%", isThesis: false },
      { name: "Grenergy Renovables", ticker: "GRE.MC", weight: "8,75%", value: "866,21 €", returnPct: "-16,16%", isThesis: true, thesisId: "grenergy-renovables" },
      { name: "Douglas AG", ticker: "DOU.F", weight: "7,33%", value: "725,80 €", returnPct: "+5,96%", isThesis: true, thesisId: "douglas-ag" },
      { name: "Electrolux AB", ticker: "ELUX-A.ST", weight: "7,25%", value: "718,34 €", returnPct: "+2,62%", isThesis: false },
      { name: "Wizz Air Holdings", ticker: "WIZZ.L", weight: "6,89%", value: "681,92 €", returnPct: "-8,18%", isThesis: false },
      { name: "Forvia SE", ticker: "FRVIA.PA", weight: "6,49%", value: "642,31 €", returnPct: "-8,24%", isThesis: false },
      { name: "Meliá Hotels International", ticker: "MEL.MC", weight: "5,97%", value: "591,20 €", returnPct: "-1,47%", isThesis: false },
      { name: "Grifols, S.A.", ticker: "GRF.MC", weight: "5,92%", value: "586,69 €", returnPct: "+6,67%", isThesis: false },
      { name: "Slb N.V.", ticker: "SLB", weight: "5,89%", value: "582,94 €", returnPct: "+9,37%", isThesis: false },
      { name: "Acciona, S.A.", ticker: "ANA.MC", weight: "5,83%", value: "576,97 €", returnPct: "-3,84%", isThesis: false },
      { name: "Atalaya Mining Plc", ticker: "ATYM.L", weight: "5,78%", value: "572,68 €", returnPct: "-22,22%", isThesis: false },
      { name: "Moody's Corporation", ticker: "MCO", weight: "5,43%", value: "537,66 €", returnPct: "+10,05%", isThesis: false },
      { name: "Colonial SFL SOCIMI", ticker: "COL.MC", weight: "5,29%", value: "523,93 €", returnPct: "+4,79%", isThesis: true, thesisId: "colonial-sfl" }
    ]
  },

  // 3. Catálogo de Tesis de Inversión Reales de Jaime Danús
  theses: [
    {
      id: "grenergy-renovables",
      ticker: "BME: GREG",
      symbol: "GRE.MC",
      company: "Grenergy Renovables",
      sector: "Energía / Baterías Gigantes BESS & Parques Solares",
      category: "energia",
      status: "active",
      statusLabel: "COMPRA",
      ratingBadge: "Asimetría Favorable",
      date: "Octubre 2026",
      currency: "€",
      entryPrice: "73,60 €",
      entryPriceNum: 73.60,
      currentPrice: "61,30 €",
      currentPriceNum: 61.30,
      targetPrice: "105,00 € – 110,00 €",
      targetPriceNum: 107.50,
      upside: "+75,37%",
      horizon: "Medio / Largo Plazo (2-3 años)",
      coverImage: "assets/img/grenergy-renovables_image1.jpeg",
      wordFile: "documentos/Tesis_GRENERGY-RENOVABLES.docx",
      summary: "Líder en baterías gigantes para almacenar energía solar y venderla de noche cuando la electricidad es más cara. El mercado castiga su deuda reciente, sin ver que son proyectos ya asegurados y autofinanciados con contratos fijos a 15 años.",
      simplified: {
        whatTheyDo: "Construye y opera grandes parques de energía solar combinados con sistemas masivos de baterías (BESS) capaces de inyectar luz limpia durante las horas nocturnas en Chile, España y otros mercados.",
        theOpportunity: "El mercado se asustó por la deuda utilizada para construir estos proyectos. Sin embargo, el 65% de esa deuda no tiene recurso a la empresa matriz (está garantizada solo por los parques) y el 79% de los ingresos futuros ya está vendido por contrato firmado a 15 años.",
        theTurnaround: "A medida que los megaparques de baterías como Oasis Atacama se conecten y vendan energía en las horas de mayor demanda y precio, los beneficios y el flujo de caja se dispararán hacia el valor real."
      },
      analysis: {
        pitch: "El mercado penaliza el apalancamiento a corto plazo (4,6x deuda neta/EBITDA LTM) omitiendo que el 65% es Project Finance sin recurso a la matriz (apalancamiento corporativo real de 1,7x). El capex construye ingresos contratados a largo plazo (79% de producción contratada, 6,8 TWh de PPAs firmados por 5.300 M€ a 15 años).",
        moats: [
          "Escala pionera en almacenamiento (First-mover BESS): Oasis Atacama es el mayor proyecto BESS de América, con un pipeline de 63 GWh e integración vertical en baterías con CATL y BYD.",
          "Desvinculación de la 'curva de pato' solar: capacidad de inyectar energía nocturna capturando los precios más altos del pool eléctrico.",
          "Contratos tipo peaje y derisking regulatorio: Tollings financieros a 10-12 años y mercados de capacidad (UK a 15 años, Polonia a 17 años) con flujos indexados al IPC.",
          "Track record probado de rotación de activos: 73 proyectos rotados desde 2017 a una media de 1,6x EV/IC, autofinanciando el crecimiento sin diluir al accionista."
        ],
        valuation: "Valoración por Suma de las Partes (SOTP) aplicando múltiplos conservadores de industria madura (D&C a 8-10x, Energía a 10-13x EV/EBITDA). El negocio operativo actual proporciona un suelo de ~50 €/acción. Al precio actual, el mercado cobra una prima insignificante por adquirir íntegramente su pipeline de 63 GWh. Exigiendo un margen de seguridad estricto, el valor intrínseco se sitúa en 105 € - 110 € por acción.",
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
      symbol: "AMP.MC",
      company: "Amper, S.A.",
      sector: "Defensa, Seguridad Nacional & Tecnologías de Uso Dual",
      category: "defensa",
      status: "active",
      statusLabel: "COMPRA",
      ratingBadge: "Convicción Moderada-Alta",
      date: "17 de julio de 2026",
      currency: "€",
      entryPrice: "4,20 € (0,21 € base)",
      entryPriceNum: 4.20,
      currentPrice: "4,46 €",
      currentPriceNum: 4.46,
      targetPrice: "6,20 € (0,31 € base)",
      targetPriceNum: 6.20,
      upside: "+39,01%",
      horizon: "2026 - 2028",
      coverImage: "assets/img/amper_image1.jpeg",
      wordFile: "documentos/Tesis_AMPER.docx",
      summary: "Compañía tecnológica e industrial española en plena transformación hacia defensa militar y telecomunicaciones estratégicas. Tras superar años difíciles, hoy bate récords de pedidos firmados y compra negocios clave a precio de ganga frente a sus rivales europeos.",
      simplified: {
        whatTheyDo: "Diseña y fabrica redes de telecomunicaciones seguras para cuerpos policiales, emergencias y defensa nacional, junto con grandes estructuras metálicas para parques de energía eólica marina.",
        theOpportunity: "Arrastra el castigo bursátil de su reestructuración de hace una década, mientras que sus competidores europeos de defensa se han revalorizado con fuerza y cotizan a valoraciones que triplican a las de Amper.",
        theTurnaround: "Bajo un nuevo plan estratégico cumplido con rigor, ya tiene asegurada una cartera de pedidos récord de 695 M€ y ha adquirido a precio de liquidación Teltronic, disparando los beneficios del grupo."
      },
      analysis: {
        pitch: "Amper cotiza con el descuento de iliquidez heredado de su reestructuración de 2014, mientras los múltiplos europeos de defensa se han duplicado de 7x a 17x EV/EBITDA. La directiva ha cumplido sus objetivos de 2025 (EBITDA >46 M€ vs >41 M€ objetivo, apalancamiento <3,0x) y ejecuta un M&A muy disciplinado.",
        moats: [
          "Arbitraje de múltiplos disciplinado: adquisición de Teltronic a <9x EBITDA 2025 cuando pares cotizados (Rheinmetall, Thales) cotizan a 17x-27x.",
          "Cartera de pedidos visible: 695 M€ en cartera, con el 55% de las ventas orgánicas de 2026 ya comprometidas en el primer trimestre.",
          "Posicionamiento único en tecnologías de uso dual: comunicaciones de misión crítica (TETRA/LTE/5G) y estructuras para eólica marina / offshore (Navacel).",
          "Disciplina estricta de apalancamiento: techo autoimpuesto y verificado de DFN/EBITDA por debajo de 3,0x mediante financiación mixta."
        ],
        valuation: "Modelo DCF propio con WACC del 8,12%, tasa de crecimiento a perpetuidad de 2,5% y múltiplo de salida de 8,5x EV/EBITDA (muy conservador frente al sector). Arroja un Equity Value de 699,5 M€ y un valor intrínseco objetivo de 6,20 €/acción (+39% de potencial). Precio máximo de entrada según margen Klarman: ≤4,30 €.",
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
      symbol: "XP",
      company: "XP Inc.",
      sector: "Fintech / Plataforma de Inversión Tecnológica",
      category: "fintech",
      status: "active",
      statusLabel: "COMPRA / MONETIZADA",
      ratingBadge: "Alta Convicción",
      date: "27 de junio de 2026",
      currency: "$",
      entryPrice: "16,13 $",
      entryPriceNum: 16.13,
      currentPrice: "30,41 $",
      currentPriceNum: 30.41,
      targetPrice: "23,63 $ (Objetivo cumplido)",
      targetPriceNum: 23.63,
      upside: "+44,52% (Plusvalía Cerrada)",
      horizon: "3 años",
      coverImage: "assets/img/xp-inc_image1.jpeg",
      wordFile: "documentos/Tesis_XP-INC.docx",
      summary: "El mayor bróker y plataforma financiera online de Brasil (el 'Amazon de las inversiones'). Un negocio tecnológico de altísima rentabilidad y sin deuda que se desplomó en bolsa solo por el pánico a la divisa brasileña, creando una oportunidad extraordinaria.",
      simplified: {
        whatTheyDo: "Es la plataforma digital líder que conecta a más de 4,8 millones de personas con más de 800 fondos y productos financieros de terceros a través de una red exclusiva de 18.300 asesores.",
        theOpportunity: "Los fondos internacionales vendieron precipitadamente activos brasileños por la depreciación del real frente al dólar, arrastrando a XP a valoraciones de banco en crisis a pesar de tener una caja neta impecable de 21.900 M de reales.",
        theTurnaround: "Tesis monetizada con éxito (+44,52% de ganancia realizada en cartera): la combinación de recompras masivas de acciones a precios irrisorios y la fortaleza de sus beneficios catapultó el precio hacia su valor real."
      },
      analysis: {
        pitch: "El mercado aplicaba a XP el descuento de un banco tradicional brasileño, ignorando que es un modelo de plataforma fee-based (take rate del 1,18%) de muy baja intensidad de capital, con caja neta de 21.900M BRL y crecimiento de beneficios de doble dígito. La caída en dólares se debió a la divisa BRL/USD, no a sus fundamentales.",
        moats: [
          "Red de asesores financieros independientes (18.300 IFAs): red de dos caras altamente cautiva, donde el asesor perdería su cartera de clientes si abandona XP.",
          "Plataforma abierta con más de 800 productos financieros de terceros agregados, frente a la oferta cerrada de los bancos tradicionales (Itaú, Bradesco).",
          "Ventaja de estructura de costes: margen neto del 27,8% sin el lastre de agencias bancarias físicas ni nóminas fijas de sucursales.",
          "Asignación de capital alineada: recompras agresivas (R$1.200M) a 7,8x beneficios y dividendo del ~7,5% yield."
        ],
        valuation: "Suma de las Partes (SOTP) asignando múltiplos diferenciados por vertical (Retail fee business a 10-14x, Wholesale a 8-10x, sumando caja neta de 21.900M BRL) que arrojaba un valor por acción de 24,7 $ a 31,3 $ en USD. Tesis cerrada y monetizada con una plusvalía neta de +237,30 € en cartera (+44,52%).",
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
      symbol: "COL.MC",
      company: "Colonial SFL, SOCIMI, S.A.",
      sector: "Inmobiliario / Oficinas Prime en Centros Financieros",
      category: "inmobiliario",
      status: "active",
      statusLabel: "SOBREPONDERAR",
      ratingBadge: "Deep Value Asimétrico",
      date: "4 de septiembre de 2026",
      currency: "€",
      entryPrice: "5,30 €",
      entryPriceNum: 5.30,
      currentPrice: "5,08 €",
      currentPriceNum: 5.08,
      targetPrice: "6,80 € – 7,50 €",
      targetPriceNum: 7.15,
      upside: "+40,75%",
      horizon: "12 - 18 meses",
      coverImage: "assets/img/colonial-sfl_image1.png",
      wordFile: "documentos/Tesis_COLONIAL-SFL.docx",
      summary: "Dueña de los edificios de oficinas más prestigiosos en los centros neurálgicos de París, Madrid y Barcelona. Con sus inmuebles casi al 100% de ocupación y alquileres subiendo con el IPC, sus acciones cotizan con un descuento del 45% respecto a su valor real auditado.",
      simplified: {
        whatTheyDo: "Es una sociedad inmobiliaria (SOCIMI) propietaria de torres de oficinas de máxima categoría ubicadas exclusivamente en las mejores calles y distritos financieros de París, Madrid y Barcelona.",
        theOpportunity: "El miedo indiscriminado al teletrabajo hizo que la bolsa castigara a todas las oficinas por igual. Sin embargo, las grandes empresas están abandonando los polígonos lejanos para mudarse justo a los edificios céntricos y modernos de Colonial.",
        theTurnaround: "Los edificios están al 97% de ocupación y los contratos se están renovando con subidas de precios de hasta el +18% en París. A medida que el Banco Central Europeo baje los tipos de interés, la acción cerrará su enorme brecha con el valor real de sus propiedades."
      },
      analysis: {
        pitch: "El mercado aplica a Colonial una prima de riesgo generalista de 'oficinas periféricas', ignorando que su cartera es 100% prime CBD en ubicaciones con escasez estructural de oferta. Sus fundamentales operativos mejoran trimestre a trimestre y el test de estrés demuestra que el valor de los activos tendría que desplomarse un 26,6% adicional para romper covenants.",
        moats: [
          "Localizaciones insustituibles en centros financieros europeos (CBD) con escasez estructural de suelo.",
          "Inquilinos de máxima solvencia: aceleración de demanda tecnológica e IA (representa el 30% de los nuevos contratos en 1S26).",
          "Poder de fijación de precios (Pricing Power): release spreads del +7% a nivel de grupo (+18% en París, renovaciones hasta +26%).",
          "Asignación de capital pro-accionista: desinversiones cerradas por encima de tasación (350 M€ con prima), recompras al 45% de descuento sobre NTA y dividendo creciente (~6%)."
        ],
        valuation: "EPRA NTA auditado de 9,70 €/acción frente a ~5,08 € de cotización. Descuento del ~48% en la parte alta de su rango histórico. Rango objetivo razonable de 6,80 € - 7,50 € (+40,75% de potencial) a medida que el BCE consolide bajadas de tipos y se valide el suelo de tasaciones.",
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
      symbol: "DOU.DE",
      company: "Douglas AG",
      sector: "Consumo / Retail Especializado Belleza Premium",
      category: "consumo",
      status: "active",
      statusLabel: "COMPRA",
      ratingBadge: "Alta Convicción / Reversión",
      date: "21 de septiembre de 2026",
      currency: "€",
      entryPrice: "7,04 €",
      entryPriceNum: 7.04,
      currentPrice: "7,61 €",
      currentPriceNum: 7.61,
      targetPrice: "16,08 €",
      targetPriceNum: 16.08,
      upside: "+111,30%",
      horizon: "2 - 3 años",
      coverImage: "assets/img/douglas-ag_image1.jpeg",
      wordFile: "documentos/Tesis_DOUGLAS-AG.docx",
      summary: "La mayor cadena de perfumerías y belleza premium de Europa (23% de cuota, 1.850 tiendas y 64 millones de socios fidelizados). El mercado la castigó por concentrar un año de fuertes reformas e inversiones, ofreciendo el líder del sector a precio de liquidación.",
      simplified: {
        whatTheyDo: "Venta de fragancias, cosmética y productos de cuidado personal premium a través de una red de 1.850 perfumerías en 22 países de Europa y una potente plataforma de comercio electrónico.",
        theOpportunity: "La acción cayó con fuerza porque la empresa rebajó objetivos a corto plazo tras gastar cifras récord en renovar tiendas y modernizar almacenes robotizados. El mercado confundió este gasto temporal con un problema de clientes.",
        theTurnaround: "Con las reformas concluidas, ese gasto se frena y la empresa genera más de 240 M€ en caja libre anual. Cotizando a un múltiplo de derribo de apenas 4x EBITDA, tiene un potencial alcista que supera el 100% conforme reduzca deuda."
      },
      analysis: {
        pitch: "A niveles actuales, el mercado descuenta casi un escenario de reestructuración o dilución inminente para el líder europeo de cosmética premium. Sin embargo, la realidad operativa es que Douglas sigue generando cientos de millones en Free Cash Flow. El pico de apalancamiento de 2026e (3,32x) se debió a una concentración puntual de CapEx que se normaliza en 2027.",
        moats: [
          "Liderazgo absoluto de escala: 23% de cuota en el mercado continental europeo (frente al 12% de su principal rival Sephora).",
          "Activo de datos masivo con Beauty Card: más de 64 millones de socios fidelizados con algoritmos de compra y personalización irreplicables para competidores pequeños.",
          "Escala omnicanal: ~1.850 tiendas físicas en 22 países combinadas con una potente plataforma e-commerce.",
          "Generación estructural de caja: FCF proyectado superior a 240 M€ incluso en su año de máximo estrés inversor."
        ],
        valuation: "Modelo DCF propio con WACC del 9,22%, normalización de CapEx convergiendo a la amortización en el año terminal y múltiplo conservador de salida de 6,5x EV/EBITDA. El valor intrínseco resultante es de 16,08 € por acción (+111,30% de potencial alcista). Margen de seguridad Klarman del 30% cumplido con holgura (precio óptimo ≤11,26 €).",
        risks: [
          "Riesgo de una tercera rebaja consecutiva de guía en el cierre del ejercicio fiscal.",
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
  ],

  // 4. Actualidad & Cobertura de Mercado (Barrido de Prensa Financiera & Nuestras Tesis)
  marketNews: {
    lastUpdated: "24 de octubre de 2026",
    theses: [
      {
        id: "news-theses-1",
        date: "24 oct 2026",
        source: "El Economista / CNMV",
        ticker: "BME: GRE",
        company: "Grenergy Renovables",
        title: "Grenergy asegura 457 M$ de financiación sénior para Oasis Atacama y culmina la venta de la fase Gabriela",
        summary: "La compañía consolida su posición financiera cerrando un préstamo verde sindicado sin recurso con un consorcio de bancos internacionales (BNP Paribas, Natixis, Société Générale) y completa la venta de la planta Gabriela por 475 M$ a CVC DIF.",
        takeaway: "Validación clave del modelo 'Develop-to-Sell' y BESS: autofinancia la expansión de baterías de 14,1 GWh sin dilución y reduce el apalancamiento corporativo neto hacia 1,7x.",
        badge: "Catalizador Positivo",
        badgeType: "positive"
      },
      {
        id: "news-theses-2",
        date: "22 oct 2026",
        source: "Expansión / Defensa",
        ticker: "BME: AMP",
        company: "Grupo Amper",
        title: "Amper dispara su EBITDA un +52,8% y eleva su cartera de pedidos hasta los 676 M€",
        summary: "Los resultados semestrales reflejan el giro estratégico hacia tecnología y defensa, elevando el margen EBITDA hasta el 19,7% e impulsando nuevas adjudicaciones en los programas navales de las fragatas F-110 de la Armada.",
        takeaway: "Confirma el éxito del turnaround operativo. La compañía gana visibilidad de caja y se encamina a los objetivos de su Plan Estratégico 2026-2028.",
        badge: "Catalizador Positivo",
        badgeType: "positive"
      },
      {
        id: "news-theses-3",
        date: "19 oct 2026",
        source: "Cinco Días / Real Estate",
        ticker: "BME: COL",
        company: "Inmobiliaria Colonial (SFL)",
        title: "Colonial alcanza el 94% de ocupación en activos prime y se beneficia de la relajación de tipos del BCE",
        summary: "Las carteras de oficinas en el distrito central de negocios de París y Madrid registran subidas de rentas comparables de doble dígito. La rebaja de tipos del BCE alivia los costes de financiación y estabiliza el valor de tasación (EPRA NTA).",
        takeaway: "La alta calidad de los inmuebles prime protege las rentas frente a la inflación y el ciclo de bajada de tipos actúa como catalizador directo para cerrar el descuento sobre NAV.",
        badge: "Viento de Cola",
        badgeType: "positive"
      },
      {
        id: "news-theses-4",
        date: "16 oct 2026",
        source: "Handelsblatt / Retail",
        ticker: "FRA: DOU",
        company: "Douglas AG",
        title: "Douglas consolida su liderazgo en perfumería europea y anticipa fuerte generación de caja tras el pico de CapEx",
        summary: "Tras culminar el programa extraordinario de modernización de tiendas y logística robotizada en Alemania y Francia, la firma encamina el ejercicio fiscal hacia una generación de Free Cash Flow superior a los 240 M€.",
        takeaway: "El fin de las inversiones intensivas libera caja libre para amortizar deuda bruta. Cotizando a múltiplos deprimidos (4x EV/EBITDA), el mercado todavía no ha puesto en precio la inflexión de caja.",
        badge: "Monitorización Operativa",
        badgeType: "neutral"
      }
    ],
    macro: [
      {
        id: "news-macro-1",
        date: "24 oct 2026",
        source: "The Wall Street Journal / BCE",
        ticker: "Macro / Política Monetaria",
        company: "Bancos Centrales",
        title: "El BCE acelera el ciclo de recortes de tipos de interés ante la desaceleración de la inflación en la Eurozona",
        summary: "El Consejo de Gobierno del Banco Central Europeo confirma nuevas bajadas en la facilidad de depósito para apoyar el crédito y la actividad económica en Europa, mientras la Reserva Federal evalúa el ritmo de aterrizaje suave en EE. UU.",
        takeaway: "La caída de los tipos libres de riesgo reduce las tasas de descuento (WACC) en los modelos DCF, beneficiando especialmente a compañías con visibilidad de flujos de caja y activos reales como Colonial y utilities.",
        badge: "Entorno Macro",
        badgeType: "macro"
      },
      {
        id: "news-macro-2",
        date: "21 oct 2026",
        source: "Financial Times / Equity Strategy",
        ticker: "Renta Variable Europea",
        company: "Mercados Financieros",
        title: "Divergencia histórica: Las Small y Mid Caps europeas cotizan con el mayor descuento frente a Wall Street en dos décadas",
        summary: "Los gestores institucionales destacan el atractivo de valoración en compañías medianas europeas con balances saneados, que cotizan con un descuento medio del 35% en PER y EV/EBITDA respecto al S&P 500 estadounidense.",
        takeaway: "Oportunidad asimétrica para inversores fundamentales: el exceso de concentración en las 'Mega Caps' americanas crea desajustes precio-valor excepcionales en empresas europeas líderes en su nicho.",
        badge: "Oportunidad Value",
        badgeType: "positive"
      },
      {
        id: "news-macro-3",
        date: "18 oct 2026",
        source: "The Economist",
        ticker: "Deuda & Crédito",
        company: "Economía Global",
        title: "Los diferenciales de crédito corporativo se mantienen estables pese a la volatilidad geopolítica",
        summary: "El mercado de bonos corporativos con grado de inversión (*investment grade*) absorbe sin sobresaltos las emisiones de deuda corporativa, reflejando solidez en la liquidez bancaria e interés comprador por rentabilidades reales atractivas.",
        takeaway: "Entorno favorable para compañías que utilizan esquemas de Project Finance o financiación sindicada a largo plazo con bancos internacionales.",
        badge: "Crédito & Deuda",
        badgeType: "macro"
      }
    ]
  }
};

