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

  // 2. Track Record Real (Auditado en Rankia / MyPortfolio — Noviembre 2026)
  trackRecord: {
    rankiaPublicUrl: "https://myportfolio.rankia.com/portfolios/public/64ae6d6b-8717-4959-add8-2eddeb9287eb?cmp=1&metric=twr&tab=posiciones",
    stats: {
      period: "2 oct 2026 – 9 nov 2026",
      alpha: "+10,58%", // +10,6 p.p. vs benchmark (-4,46%)
      alphaBenchmark: "Vanguard S&P 500 ETF (con dividendos)",
      portfolioReturn: "+6,12%",
      benchmarkReturn: "-4,46%",
      totalValue: "10.738,25 €",
      initialCapital: "10.000,00 €",
      investedCapital: "10.323,56 € (96,14%)",
      cashWeight: "414,69 € (3,86%)",
      realizedProfit: "+161,55 €",
      bestRealizedTrade: "+44,52% (XP Inc.)",
      openPositionsCount: "14 Posiciones Activas"
    },
    
    // Evolución de rentabilidad acumulada (%) del 2 de Octubre al 9 de Noviembre de 2026 (Datos Oficiales MyPortfolio Rankia)
    chart: {
      labels: ["2 oct", "5 oct", "8 oct", "12 oct", "15 oct", "16 oct", "19 oct", "21 oct", "23 oct", "26 oct", "28 oct", "30 oct", "2 nov", "4 nov", "6 nov", "9 nov"],
      portfolioData: [0.0, 1.06, -0.09, 2.30, 1.27, 2.25, 0.67, 1.39, -1.07, 0.34, 1.78, 2.95, 4.19, 6.75, 5.62, 6.12],
      benchmarkData: [0.0, 0.06, -1.79, -0.60, -1.13, -1.10, -1.50, -0.50, -2.73, -1.96, -1.85, -0.33, -2.29, -0.45, -4.68, -4.46]
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

    // Cartera activa (14 posiciones auditadas en MyPortfolio Rankia a 9 de noviembre de 2026)
    openPositions: [
      { name: "Amper, S.A.", ticker: "AMP.MC", weight: "10,02%", value: "1.075,98 €", returnPct: "+7,94%", isThesis: true, thesisId: "amper" },
      { name: "Grenergy Renovables", ticker: "GRE.MC", weight: "9,82%", value: "1.054,15 €", returnPct: "+2,03%", isThesis: true, thesisId: "grenergy-renovables" },
      { name: "JPMorgan Chase & Co.", ticker: "JPM", weight: "8,35%", value: "896,40 €", returnPct: "+1,20%", isThesis: false },
      { name: "Electrolux AB", ticker: "ELUX-A.ST", weight: "7,71%", value: "828,37 €", returnPct: "+18,34%", isThesis: false },
      { name: "Wizz Air Holdings", ticker: "WIZZ.L", weight: "7,47%", value: "802,40 €", returnPct: "+8,04%", isThesis: false },
      { name: "Douglas AG", ticker: "DOU.F", weight: "7,10%", value: "761,90 €", returnPct: "+11,23%", isThesis: true, thesisId: "douglas-ag" },
      { name: "Forvia SE", ticker: "FRVIA.PA", weight: "6,60%", value: "708,31 €", returnPct: "+1,19%", isThesis: false },
      { name: "Meliá Hotels International", ticker: "MEL.MC", weight: "6,05%", value: "649,85 €", returnPct: "+8,31%", isThesis: false },
      { name: "Grifols, S.A.", ticker: "GRF.MC", weight: "5,97%", value: "641,21 €", returnPct: "+16,58%", isThesis: false },
      { name: "Atalaya Mining Plc", ticker: "ATYM.L", weight: "5,85%", value: "628,40 €", returnPct: "-14,66%", isThesis: false },
      { name: "Acciona, S.A.", ticker: "ANA.MC", weight: "5,77%", value: "619,66 €", returnPct: "+3,28%", isThesis: false },
      { name: "Moody's Corporation", ticker: "MCO", weight: "5,24%", value: "562,90 €", returnPct: "+15,22%", isThesis: false },
      { name: "Slb N.V.", ticker: "SLB", weight: "5,11%", value: "548,96 €", returnPct: "+3,00%", isThesis: false },
      { name: "Colonial SFL SOCIMI", ticker: "COL.MC", weight: "5,08%", value: "545,07 €", returnPct: "+9,01%", isThesis: true, thesisId: "colonial-sfl" }
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
      currentPrice: "74,60 €",
      currentPriceNum: 74.60,
      targetPrice: "105,00 € – 110,00 €",
      targetPriceNum: 107.50,
      upside: "+44,10%",
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
      currentPrice: "4,83 €",
      currentPriceNum: 4.83,
      targetPrice: "6,20 € (0,31 € base)",
      targetPriceNum: 6.20,
      upside: "+28,36%",
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
      currentPrice: "5,29 €",
      currentPriceNum: 5.29,
      targetPrice: "6,80 € – 7,50 €",
      targetPriceNum: 7.15,
      upside: "+35,16%",
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
      currentPrice: "8,02 €",
      currentPriceNum: 8.02,
      targetPrice: "16,08 €",
      targetPriceNum: 16.08,
      upside: "+100,50%",
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

  // 4. Actualidad & Cobertura de Mercado (Actualidad Económica & Noticias Tesis)
  marketNews: {
    lastUpdated: "9 de noviembre de 2026",
    macro: [
      {
        id: "news-macro-1",
        date: "9 nov 2026",
        source: "Bolsamanía / Expansión",
        ticker: "Bolsas Europeas",
        company: "IBEX 35 & Euro Stoxx 50",
        title: "El IBEX 35 supera los 19.700 puntos (+1,8%) liderando el rebote europeo tras las turbulencias tecnológicas en Wall Street",
        summary: "Las plazas europeas protagonizan un sólido rebote este lunes (Euro Stoxx 50 +1,5%) desmarcándose de la volatilidad en semiconductores de EE. UU., impulsadas por renovables, bancos y resultados corporativos resilientes.",
        badge: "Rebote Europeo",
        badgeType: "positive"
      },
      {
        id: "news-macro-2",
        date: "9 nov 2026",
        source: "Financial Times / Bloomberg",
        ticker: "Wall Street & Macro",
        company: "Semiconductores & IPC EE. UU.",
        title: "La rotación hacia el 'Value' europeo gana tracción ante el escrutinio sobre Big Tech y la espera del IPC estadounidense",
        summary: "Tras el ajuste reciente en tecnología y el foco mediático sobre Nvidia, los flujos institucionales incrementan exposición en compañías de economía real europeas cotizando con amplio descuento fundamental.",
        badge: "Rotación Value",
        badgeType: "macro"
      },
      {
        id: "news-macro-3",
        date: "8 nov 2026",
        source: "Reuters / El Economista",
        ticker: "Geopolítica & Energía",
        company: "Economía Global",
        title: "El escenario post-electoral en EE. UU. y la tensión energética consolidan el foco en almacenamiento y defensa",
        summary: "La vigilancia sobre los flujos energéticos en Oriente Medio y los nuevos equilibrios regulatorios refuerzan la demanda estructural en redes de almacenamiento eléctrico (BESS) y contratos europeos de defensa.",
        badge: "Catalizador Sectorial",
        badgeType: "positive"
      }
    ],
    theses: [
      {
        id: "news-theses-1",
        date: "9 nov 2026",
        source: "Merca2 / Bolsamanía",
        ticker: "BME: GRE",
        company: "Grenergy Renovables",
        title: "Grenergy entra en positivo en cartera (+2,03%) tras escalar hasta los 74,60 € (+2,47% hoy) apoyada por su plan BESS",
        summary: "El valor consolida una sólida recuperación desde la zona de 64 € tras el renovado interés inversor en almacenamiento eléctrico (Oasis de Atacama) y la ejecución disciplinada de su programa de recompra.",
        badge: "En Positivo (+2,03%)",
        badgeType: "positive"
      },
      {
        id: "news-theses-2",
        date: "9 nov 2026",
        source: "Investing / Expansión",
        ticker: "BME: COL",
        company: "Inmobiliaria Colonial (SFL)",
        title: "Colonial presenta resultados del 3T el próximo 12 de noviembre mientras alcanza los 5,29 € (+9,01% en cartera)",
        summary: "La SOCIMI publicará sus cuentas del tercer trimestre tras el cierre del jueves 12 de noviembre respaldada por renovaciones de alquiler en oficinas prime (+9%) en París y Madrid y una notable revalorización en cartera.",
        badge: "Resultados 12 Nov",
        badgeType: "positive"
      },
      {
        id: "news-theses-3",
        date: "9 nov 2026",
        source: "Industry Talks / Investing",
        ticker: "BME: AMP",
        company: "Grupo Amper",
        title: "Amper consolida los 4,83 € (+1,58% hoy) como primera posición (10,02%) tras reforzar comunicaciones críticas de defensa",
        summary: "Tras la reciente ampliación de 44 M€ destinada a consolidar participaciones estratégicas en defensa y energía (junto a Nazca y CDTI), la compañía mantiene una rentabilidad latente del +7,94% en cartera.",
        badge: "1ª Posición (10,02%)",
        badgeType: "positive"
      },
      {
        id: "news-theses-4",
        date: "8 nov 2026",
        source: "Handelsblatt / Retail",
        ticker: "FRA: DOU",
        company: "Douglas AG",
        title: "Douglas supera la cota de los 8,00 € acumulados con un +11,23% en cartera pese a la prudencia en el consumo europeo",
        summary: "Aunque el título corrige un -2,08% intradía hasta 8,02 €, acumula más de un +11% de ganancia en cartera respaldado por su estrategia omnicanal y la normalización del CapEx tras finalizar las inversiones logísticas.",
        badge: "+11,23% en Cartera",
        badgeType: "neutral"
      }
    ]
  },

  // 5. Ticker de Cotizaciones de Mercado & Tesis en Vivo (Fallback Base)
  marketTicker: [
    {
      id: "ibex35",
      symbol: "^IBEX",
      name: "IBEX 35",
      type: "index",
      badge: "ÍNDICE",
      price: "19.722,60 pts",
      priceNum: 19722.60,
      changePct: "+1,82%",
      isPositive: true,
      currency: "pts"
    },
    {
      id: "sp500",
      symbol: "^GSPC",
      name: "S&P 500",
      type: "index",
      badge: "ÍNDICE",
      price: "7.376,86 pts",
      priceNum: 7376.86,
      changePct: "+0,31%",
      isPositive: true,
      currency: "pts"
    },
    {
      id: "stoxx50",
      symbol: "^STOXX50E",
      name: "Euro Stoxx 50",
      type: "index",
      badge: "ÍNDICE",
      price: "6.266,37 pts",
      priceNum: 6266.37,
      changePct: "+1,55%",
      isPositive: true,
      currency: "pts"
    },
    {
      id: "nasdaq100",
      symbol: "^NDX",
      name: "Nasdaq 100",
      type: "index",
      badge: "ÍNDICE",
      price: "26.989,99 pts",
      priceNum: 26989.99,
      changePct: "+1,35%",
      isPositive: true,
      currency: "pts"
    },
    {
      id: "grenergy",
      symbol: "GRE.MC",
      name: "Grenergy ($GRE)",
      type: "thesis",
      badge: "TESIS",
      thesisId: "grenergy",
      price: "74,60 €",
      priceNum: 74.60,
      changePct: "+2,47%",
      isPositive: true,
      currency: "€"
    },
    {
      id: "amper",
      symbol: "AMP.MC",
      name: "Amper ($AMP)",
      type: "thesis",
      badge: "TESIS",
      thesisId: "amper",
      price: "4,83 €",
      priceNum: 4.83,
      changePct: "+1,58%",
      isPositive: true,
      currency: "€"
    },
    {
      id: "colonial",
      symbol: "COL.MC",
      name: "Colonial ($COL)",
      type: "thesis",
      badge: "TESIS",
      thesisId: "colonial",
      price: "5,29 €",
      priceNum: 5.29,
      changePct: "+0,28%",
      isPositive: true,
      currency: "€"
    },
    {
      id: "douglas",
      symbol: "DOU.F",
      name: "Douglas ($DOU)",
      type: "thesis",
      badge: "TESIS",
      thesisId: "douglas",
      price: "8,02 €",
      priceNum: 8.02,
      changePct: "-2,08%",
      isPositive: false,
      currency: "€"
    },
    {
      id: "xp",
      symbol: "XP",
      name: "XP Inc. ($XP)",
      type: "thesis",
      badge: "TESIS MONETIZADA",
      thesisId: "xp-inc",
      price: "$15,14",
      priceNum: 15.14,
      changePct: "+44,52% (Monetizada)",
      isPositive: true,
      currency: "$"
    }
  ]
};

