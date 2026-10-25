/**
 * LÓGICA DE LA APLICACIÓN: MARCA PERSONAL INVERSOR
 * Gestión de datos, renderizado dinámico, gráfico interactivo y filtros de tesis.
 */

document.addEventListener('DOMContentLoaded', () => {
  initProfileData();
  initTrackRecordChart();
  initTrackTabs();
  renderTrackRecordTables();
  renderTheses(INVESTOR_DATA.theses);
  initThesesFilterAndSearch();
  initModalEvents();
  initAboutModal();
  initNavDropdown();
  initMobileMenu();
  initScrollReveal();
  initDynamicQuotes();
  initNewsSection();
});

/**
 * 1. Inicializa los datos del perfil en el DOM
 */
function initProfileData() {
  const profile = INVESTOR_DATA.profile;

  // Actualizar nombres en Navbar, Hero y Footer
  const authorNameElements = [
    'nav-author-name',
    'hero-card-name',
    'footer-author-name',
    'footer-copy-name'
  ];

  authorNameElements.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = profile.name;
  });

  // Enlace directo de LinkedIn
  const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com"]');
  linkedinLinks.forEach(link => {
    link.href = profile.linkedin;
  });

  // Año actual en el footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * 2. Inicializa el gráfico interactivo de Track Record con Chart.js
 */
let performanceChart = null;

function initTrackRecordChart() {
  const ctx = document.getElementById('performanceChart');
  if (!ctx) return;

  const chartData = INVESTOR_DATA.trackRecord.chart;

  // Configuración de Chart.js con datos reales de Rankia
  performanceChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: 'Mi Cartera (Rankia)',
          data: chartData.portfolioData,
          borderColor: '#0284c7', // Azul brillante Rankia
          backgroundColor: 'rgba(2, 132, 199, 0.08)',
          fill: true,
          tension: 0.35,
          borderWidth: 2.5,
          pointBackgroundColor: '#0284c7',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        },
        {
          label: 'Fidelity Europe Fund (con dividendos)',
          data: chartData.benchmarkData,
          borderColor: '#64748b',
          backgroundColor: 'transparent',
          fill: false,
          borderDash: [5, 5],
          tension: 0.35,
          borderWidth: 2,
          pointBackgroundColor: '#64748b',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#0f172a',
          titleFont: { family: 'Plus Jakarta Sans', size: 13, weight: '700' },
          bodyFont: { family: 'Plus Jakarta Sans', size: 12, weight: '600' },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: function(context) {
              const val = context.parsed.y;
              const sign = val > 0 ? '+' : '';
              return ` ${context.dataset.label}: ${sign}${val.toFixed(2)}%`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: { family: 'Plus Jakarta Sans', size: 11, weight: '500' },
            color: '#64748b'
          }
        },
        y: {
          grid: {
            color: '#f1f5f9'
          },
          ticks: {
            font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' },
            color: '#64748b',
            callback: function(value) {
              return (value > 0 ? '+' : '') + value + '%';
            }
          }
        }
      }
    }
  });
}

/**
 * 3. Renderiza las tablas de Track Record Real (Posiciones Cerradas y Cartera Activa)
 */
function renderTrackRecordTables() {
  // A) Posiciones Cerradas
  const closedTbody = document.getElementById('closed-positions-body');
  if (closedTbody && INVESTOR_DATA.trackRecord.closedPositions) {
    closedTbody.innerHTML = '';
    INVESTOR_DATA.trackRecord.closedPositions.forEach(item => {
      const tr = document.createElement('tr');
      const isPositive = item.returnPct.startsWith('+');

      tr.innerHTML = `
        <td>
          <strong>${item.asset}</strong>
          <span style="font-size: 0.75rem; color: var(--text-muted); display: block; font-family: var(--font-mono);">${item.ticker}</span>
        </td>
        <td class="${isPositive ? 'text-success' : 'text-danger'}"><strong>${item.returnPct}</strong></td>
        <td class="${isPositive ? 'text-success' : 'text-danger'}">${item.profitEur}</td>
        <td>${item.totalIncome}</td>
        <td style="color: var(--text-muted);">${item.closeDate}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="status-pill ${isPositive ? 'status-active' : 'status-closed'}">
              ${item.status}
            </span>
            ${item.thesisId ? `<button class="btn-read-thesis" style="font-size: 0.75rem; padding: 2px 6px;" onclick="openThesisModal('${item.thesisId}')">Ver Tesis</button>` : ''}
          </div>
        </td>
      `;
      closedTbody.appendChild(tr);
    });
  }

  // B) Cartera Activa (14 Posiciones — Estilo FactSet/Bloomberg)
  const openTbody = document.getElementById('open-positions-body');
  if (openTbody && INVESTOR_DATA.trackRecord.openPositions) {
    openTbody.innerHTML = '';
    INVESTOR_DATA.trackRecord.openPositions.forEach(pos => {
      const tr = document.createElement('tr');
      const isPositive = pos.returnPct.startsWith('+');

      tr.innerHTML = `
        <td><span class="ticker-badge" style="font-size: 0.78rem; padding: 2px 7px;">${pos.ticker}</span></td>
        <td><strong>${pos.name}</strong></td>
        <td><strong>${pos.weight}</strong></td>
        <td>${pos.value}</td>
        <td class="${isPositive ? 'text-success' : 'text-danger'}"><strong>${pos.returnPct}</strong></td>
        <td>
          ${pos.isThesis 
            ? `<button class="btn-read-thesis" style="font-size: 0.8rem; font-weight: 700;" onclick="openThesisModal('${pos.thesisId}')">
                Tesis en Web →
              </button>` 
            : `<span style="color: var(--text-muted); font-size: 0.78rem;">Cartera</span>`}
        </td>
      `;
      openTbody.appendChild(tr);
    });
  }
}

/**
 * Gestión de Pestañas Institucionales (Track Record vs. Composición)
 */
function initTrackTabs() {
  const tabBtns = document.querySelectorAll('.track-tab-btn');
  const tabPanes = document.querySelectorAll('.track-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(targetId);
      if (activePane) activePane.classList.add('active');
    });
  });
}

/**
 * 4. Renderiza la cuadrícula de Tesis de Inversión
 */
function renderTheses(thesesList) {
  const container = document.getElementById('theses-grid');
  if (!container) return;

  container.innerHTML = '';

  if (thesesList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #fff; border: 1px dashed #cbd5e1; border-radius: 12px;">
        <p style="color: #64748b; font-size: 1.1rem;">No se encontraron tesis con los filtros seleccionados.</p>
      </div>
    `;
    return;
  }

  thesesList.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'thesis-card';
    card.style.animation = `tabFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s both`;
    card.dataset.id = item.id;

    const isClosed = item.status === 'closed';

    card.innerHTML = `
      <div class="thesis-card-img-wrap">
        <img src="${item.coverImage}" alt="${item.company}" loading="lazy" onerror="this.style.display='none'">
        <span class="thesis-card-rating-badge">${item.ratingBadge || item.statusLabel}</span>
      </div>

      <div class="thesis-card-body">
        <div class="card-top">
          <span class="ticker-badge">${item.ticker}</span>
          <span class="status-pill ${isClosed ? 'status-closed' : 'status-active'}">
            ${item.statusLabel}
          </span>
        </div>

        <h3 class="thesis-title">${item.company}</h3>
        <p class="thesis-sector">${item.sector}</p>
        <p class="thesis-summary">${item.summary}</p>

        <div class="thesis-metrics">
          <div class="thesis-metric-item">
            <span class="lbl">Precio Entrada (${item.date}):</span>
            <span class="val">${item.entryPrice}</span>
          </div>
          <div class="thesis-metric-item live-metric-item">
            <span class="lbl"><span class="live-dot-pulse"></span>Cotización Actual:</span>
            <span class="val quote-live" data-ticker="${item.symbol}">
              <span class="price-val">${item.currentPrice}</span>
            </span>
          </div>
          <div class="thesis-metric-item">
            <span class="lbl">Precio Objetivo:</span>
            <span class="val">${item.targetPrice}</span>
          </div>
          <div class="thesis-metric-item">
            <span class="lbl">${isClosed ? 'Retorno Monetizado:' : 'Potencial a Objetivo:'}</span>
            <span class="val text-success upside-val" data-upside-ticker="${item.symbol}">${item.upside}</span>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <a href="${item.wordFile}" download class="btn-word-pill" title="Descargar y abrir informe en Word (.docx)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          Abrir Word (.docx)
        </a>
        <button class="btn-read-thesis" onclick="openThesisModal('${item.id}')">
          Ver tesis explicada
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * 5. Filtros y buscador de Tesis
 */
function initThesesFilterAndSearch() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const searchInput = document.getElementById('theses-search');

  let currentCategory = 'todas';
  let searchQuery = '';

  function applyFilters() {
    let filtered = INVESTOR_DATA.theses.filter(thesis => {
      // Filtro por categoría
      let matchesCategory = true;
      if (currentCategory !== 'todas') {
        matchesCategory = thesis.category === currentCategory;
      }

      // Filtro por texto de búsqueda
      let matchesSearch = true;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        matchesSearch = thesis.company.toLowerCase().includes(q) ||
                        thesis.ticker.toLowerCase().includes(q) ||
                        thesis.sector.toLowerCase().includes(q) ||
                        thesis.summary.toLowerCase().includes(q);
      }

      return matchesCategory && matchesSearch;
    });

    renderTheses(filtered);
  }

  // Eventos de botones de categoría
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category;
      applyFilters();
    });
  });

  // Evento de búsqueda
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }
}

/**
 * 6. Modal de lectura completa de tesis
 */
let currentOpenThesisId = null;

/**
 * 6. Modal de lectura completa de tesis
 */
function openThesisModal(thesisId) {
  const thesis = INVESTOR_DATA.theses.find(t => t.id === thesisId);
  if (!thesis) return;
  currentOpenThesisId = thesisId;

  const modal = document.getElementById('thesis-modal');
  if (!modal) return;

  const isClosed = thesis.status === 'closed';

  // Actualizar enlace al documento Word original
  const wordBtn = document.getElementById('modal-btn-word');
  if (wordBtn) {
    wordBtn.href = thesis.wordFile;
    wordBtn.download = thesis.wordFile.split('/').pop();
  }

  // Poblar datos de cabecera del modal
  const tickerEl = document.getElementById('modal-ticker');
  if (tickerEl) tickerEl.textContent = thesis.ticker;

  const statusEl = document.getElementById('modal-status');
  if (statusEl) {
    statusEl.textContent = thesis.statusLabel;
    statusEl.className = `badge ${isClosed ? 'status-closed' : 'badge-success'}`;
  }

  const categoryEl = document.getElementById('modal-category');
  if (categoryEl) categoryEl.textContent = thesis.sector;

  const titleEl = document.getElementById('modal-title');
  if (titleEl) titleEl.textContent = `${thesis.company} (${thesis.ticker})`;

  const dateEl = document.getElementById('modal-date');
  if (dateEl) dateEl.textContent = thesis.date;

  const horizonEl = document.getElementById('modal-horizon');
  if (horizonEl) horizonEl.textContent = thesis.horizon;

  const entryPriceEl = document.getElementById('modal-entry-price');
  if (entryPriceEl) entryPriceEl.textContent = thesis.entryPrice;

  const currentPriceEl = document.getElementById('modal-current-price');
  if (currentPriceEl) currentPriceEl.textContent = thesis.currentPrice;

  const targetPriceEl = document.getElementById('modal-target-price');
  if (targetPriceEl) targetPriceEl.textContent = thesis.targetPrice;

  const returnEl = document.getElementById('modal-return');
  if (returnEl) {
    returnEl.textContent = thesis.upside;
    returnEl.className = thesis.upside.startsWith('-') ? 'text-danger' : 'text-success';
  }

  // Poblar el contenido del análisis
  const contentEl = document.getElementById('modal-content');
  const a = thesis.analysis;
  const s = thesis.simplified || {
    whatTheyDo: thesis.summary,
    theOpportunity: "Oportunidad de valoración atractiva con catalizadores claros a medio plazo.",
    theTurnaround: "Convergencia hacia el valor intrínseco estimado en base a fundamentales."
  };

  let moatsHtml = '';
  if (a.moats && a.moats.length > 0) {
    moatsHtml = `
      <h4>Fosos Económicos y Ventajas Competitivas (Moats)</h4>
      <ul>
        ${a.moats.map(m => `<li>${m}</li>`).join('')}
      </ul>
    `;
  }

  let risksHtml = '';
  if (a.risks && a.risks.length > 0) {
    risksHtml = `
      <h4>Principales Riesgos & Factores de Invalidación</h4>
      <ul>
        ${a.risks.map(r => `<li>${r}</li>`).join('')}
      </ul>
    `;
  }

  let chartsHtml = '';
  if (a.charts && a.charts.length > 0) {
    chartsHtml = `
      <h4>Gráficos Forenses y Modelos Analíticos</h4>
      <div class="modal-charts-grid">
        ${a.charts.map(c => `
          <div class="modal-chart-item">
            <img src="${c.src}" alt="${c.caption}">
            <p class="modal-chart-caption">${c.caption}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  contentEl.innerHTML = `
    <!-- 1. VISIÓN SIMPLIFICADA (ACCESIBLE PARA TODOS) -->
    <div class="simplified-thesis-section">
      <div class="simplified-banner">
        <span class="simplified-badge">💡 Explicación Sencilla & Directa</span>
        <h3 class="simplified-heading">Entendiendo la Tesis en 3 Puntos Clave</h3>
        <p class="simplified-sub">Diseñado para que cualquier persona comprenda la lógica del negocio y por qué existe una gran oportunidad de inversión, sin tecnicismos complejos.</p>
      </div>

      <div class="simplified-pillars-grid">
        <div class="simplified-pillar-card">
          <div class="pillar-icon">🏢</div>
          <div class="pillar-content">
            <h5>1. ¿A qué se dedica la empresa?</h5>
            <p>${s.whatTheyDo}</p>
          </div>
        </div>

        <div class="simplified-pillar-card">
          <div class="pillar-icon">📉</div>
          <div class="pillar-content">
            <h5>2. ¿Por qué está barata o el mercado la castiga?</h5>
            <p>${s.theOpportunity}</p>
          </div>
        </div>

        <div class="simplified-pillar-card">
          <div class="pillar-icon">🚀</div>
          <div class="pillar-content">
            <h5>3. ¿Por qué va a subir? (Los catalizadores)</h5>
            <p>${s.theTurnaround}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. BOTÓN INTERACTIVO PARA PROFUNDIZAR EN LA TESIS TÉCNICA -->
    <div class="deep-dive-trigger-wrap">
      <button type="button" class="btn-deep-dive" id="btn-toggle-deep-dive" onclick="toggleDeepDive()">
        <div class="btn-deep-dive-inner">
          <div class="btn-deep-dive-icon">📊</div>
          <div class="btn-deep-dive-text">
            <strong>Profundizar en el Análisis Técnico e Institucional</strong>
            <span>Ver modelo DCF / SOTP, ventajas competitivas (Moats), riesgos y gráficos forenses</span>
          </div>
        </div>
        <div class="btn-deep-dive-arrow">
          <span class="toggle-state-text" id="deep-dive-btn-label">Desplegar</span>
          <svg class="chevron-toggle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </button>
    </div>

    <!-- 3. CONTENIDO TÉCNICO Y FINANCIERO PROFUNDO (COLAPSABLE / OCULTO POR DEFECTO) -->
    <div class="deep-dive-panel collapsed" id="deep-dive-panel">
      <div class="deep-dive-header-notice">
        <span class="tech-badge">ANÁLISIS FINANCIERO CUANTITATIVO</span>
        <p>Informe con rigor institucional: métricas de balance, valoración DCF/SOTP, desapalancamiento y riesgos de ejecución.</p>
      </div>

      <div class="callout-box" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <strong>Resumen de Valoración Fundamental:</strong><br>
          ${thesis.summary}
        </div>
        <a href="${thesis.wordFile}" download class="btn-word-pill" style="font-size: 0.85rem; padding: 8px 14px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          Descargar Informe Completo Word (.docx)
        </a>
      </div>

      <h4>El Pitch: Riesgo Percibido vs. Realidad Fundamental</h4>
      <p>${a.pitch}</p>

      ${moatsHtml}

      <h4>Valoración, Modelo y Margen de Seguridad</h4>
      <p>${a.valuation}</p>

      ${chartsHtml}

      ${risksHtml}
    </div>
  `;

  // Mostrar modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Alterna el estado colapsado / desplegado de la sección técnica profunda
 */
function toggleDeepDive() {
  const panel = document.getElementById('deep-dive-panel');
  const btn = document.getElementById('btn-toggle-deep-dive');
  const label = document.getElementById('deep-dive-btn-label');
  if (!panel || !btn) return;

  const isCollapsed = panel.classList.contains('collapsed');
  if (isCollapsed) {
    panel.classList.remove('collapsed');
    btn.classList.add('active');
    if (label) label.textContent = 'Ocultar';
    // Scroll suave hacia la sección técnica
    setTimeout(() => {
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 150);
  } else {
    panel.classList.add('collapsed');
    btn.classList.remove('active');
    if (label) label.textContent = 'Desplegar';
  }
}

function closeThesisModal() {
  const modal = document.getElementById('thesis-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    currentOpenThesisId = null;
  }
}

function initModalEvents() {
  const modal = document.getElementById('thesis-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const btnClose = document.getElementById('modal-btn-close');
  const downloadBtn = document.getElementById('modal-btn-download');

  if (closeBtn) closeBtn.addEventListener('click', closeThesisModal);
  if (btnClose) btnClose.addEventListener('click', closeThesisModal);

  // Cerrar al hacer clic en el backdrop fuera del diálogo
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeThesisModal();
    });
  }

  // Cerrar con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeThesisModal();
  });

  // Botón de descargar PDF (usa la ventana de impresión nativa optimizada)
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/**
 * 7. Desplegable de Navegación Superior Izquierda
 */
function initNavDropdown() {
  const toggleBtn = document.getElementById('nav-dropdown-toggle');
  const dropdownMenu = document.getElementById('nav-dropdown-menu');
  const dropdown = document.getElementById('nav-dropdown');

  if (!toggleBtn || !dropdownMenu) return;

  function toggleDropdown(e) {
    e.stopPropagation();
    const isOpen = dropdownMenu.classList.contains('open');
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  function openDropdown() {
    dropdownMenu.classList.add('open');
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown() {
    dropdownMenu.classList.remove('open');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', toggleDropdown);

  // Cerrar al hacer clic en cualquier opción del desplegable
  const items = dropdownMenu.querySelectorAll('.dropdown-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      closeDropdown();
    });
  });

  // Cerrar al hacer clic fuera del desplegable
  document.addEventListener('click', (e) => {
    if (dropdown && !dropdown.contains(e.target)) {
      closeDropdown();
    }
  });

  // Cerrar con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dropdownMenu.classList.contains('open')) {
      closeDropdown();
    }
  });
}

/**
 * 7b. Menú Móvil (compatibilidad retroactiva)
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    const mobileLinks = drawer.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }
}

/**
 * 8. Modal Sobre Mí
 */
function initAboutModal() {
  const modal = document.getElementById('about-modal');
  const closeBtn = document.getElementById('about-modal-close-btn');
  const btnClose = document.getElementById('about-modal-btn-close');

  function openModal(e) {
    if (e) e.preventDefault();
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // Elementos que abren el modal Sobre Mí:
  const triggers = [
    document.getElementById('about-vignette-btn'),
    document.getElementById('hero-about-link'),
    ...document.querySelectorAll('a[href="#sobre-mi"]')
  ];

  triggers.forEach(trig => {
    if (trig) trig.addEventListener('click', openModal);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (btnClose) btnClose.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/**
 * 9. Scroll Reveal con IntersectionObserver para transiciones fluidas
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * 10. Seguimiento de Cotizaciones en Vivo y Recálculo Dinámico de Potencial a Objetivo
 */
async function initDynamicQuotes() {
  async function fetchAndApplyQuotes() {
    try {
      const res = await fetch('/.netlify/functions/quotes');
      if (!res.ok) return;
      const data = await res.json();
      if (!data || !data.quotes) return;

      const quotes = data.quotes;

      INVESTOR_DATA.theses.forEach(thesis => {
        const q = quotes[thesis.symbol];
        if (q && typeof q.price === 'number') {
          const livePrice = q.price;
          thesis.currentPriceNum = livePrice;

          // Formateo según divisa
          if (thesis.currency === '$') {
            thesis.currentPrice = `$${livePrice.toFixed(2)}`;
          } else {
            thesis.currentPrice = `${livePrice.toFixed(2).replace('.', ',')} €`;
          }

          // Recalcular % de potencial al precio objetivo si la tesis no está cerrada
          if (thesis.status !== 'closed' && thesis.targetPriceNum && livePrice > 0) {
            const calculatedUpside = ((thesis.targetPriceNum - livePrice) / livePrice) * 100;
            const sign = calculatedUpside >= 0 ? '+' : '';
            thesis.upside = `${sign}${calculatedUpside.toFixed(2).replace('.', ',')}%`;
          }

          // Actualizar elementos en las tarjetas del DOM
          const priceEls = document.querySelectorAll(`[data-ticker="${thesis.symbol}"] .price-val`);
          priceEls.forEach(el => {
            el.textContent = thesis.currentPrice;
          });

          const upsideEls = document.querySelectorAll(`[data-upside-ticker="${thesis.symbol}"]`);
          upsideEls.forEach(el => {
            el.textContent = thesis.upside;
            el.className = `val ${thesis.upside.startsWith('-') ? 'text-danger' : 'text-success'} upside-val`;
          });

          // Si el modal está abierto con esta tesis, actualizar en caliente
          if (currentOpenThesisId === thesis.id) {
            const modalPrice = document.getElementById('modal-current-price');
            const modalUpside = document.getElementById('modal-return');
            if (modalPrice) modalPrice.textContent = thesis.currentPrice;
            if (modalUpside) {
              modalUpside.textContent = thesis.upside;
              modalUpside.className = thesis.upside.startsWith('-') ? 'text-danger' : 'text-success';
            }
          }
        }
      });
    } catch (err) {
      console.warn('Live quotes update: manteniendo precios base de data.js', err);
    }
  }

  // Ejecución inicial
  fetchAndApplyQuotes();

  // Actualización periódica cada 2 minutos
  setInterval(fetchAndApplyQuotes, 120000);
}

/**
 * 11. Sección de Actualidad & Cobertura de Mercado
 */
function initNewsSection() {
  const macroContainer = document.getElementById('macro-cards-container');
  const thesesContainer = document.getElementById('theses-cards-container');
  if (!INVESTOR_DATA.marketNews) return;

  const marketNews = INVESTOR_DATA.marketNews;
  const macroNews = marketNews.macro || [];
  const thesesNews = marketNews.theses || [];

  function createCard(item, index) {
    const card = document.createElement('article');
    card.className = 'news-card';
    card.style.animation = `tabFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s both`;

    let badgeClass = 'badge-macro';
    if (item.badgeType === 'positive') badgeClass = 'badge-positive';
    else if (item.badgeType === 'neutral') badgeClass = 'badge-neutral';

    card.innerHTML = `
      <div class="news-card-header">
        <div class="news-header-meta">
          <span class="news-ticker-pill">${item.ticker}</span>
          <span class="news-source-meta">${item.source} · ${item.date}</span>
        </div>
        <span class="news-status-badge ${badgeClass}">${item.badge}</span>
      </div>

      <h3 class="news-card-title">${item.title}</h3>
      <p class="news-card-summary">${item.summary}</p>
    `;

    return card;
  }

  if (macroContainer) {
    macroContainer.innerHTML = '';
    if (macroNews.length === 0) {
      macroContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 36px; background: #fff; border-radius: 12px; border: 1px dashed #cbd5e1;">
          <p style="color: #64748b;">No hay noticias macroeconómicas registradas.</p>
        </div>
      `;
    } else {
      macroNews.forEach((item, index) => {
        macroContainer.appendChild(createCard(item, index));
      });
    }
  }

  if (thesesContainer) {
    thesesContainer.innerHTML = '';
    if (thesesNews.length === 0) {
      thesesContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 36px; background: #fff; border-radius: 12px; border: 1px dashed #cbd5e1;">
          <p style="color: #64748b;">No hay noticias de tesis registradas.</p>
        </div>
      `;
    } else {
      thesesNews.forEach((item, index) => {
        thesesContainer.appendChild(createCard(item, index));
      });
    }
  }
}

// Exponer funciones globales para interacción HTML nativa
window.toggleDeepDive = toggleDeepDive;
window.openThesisModal = openThesisModal;
window.closeThesisModal = closeThesisModal;

