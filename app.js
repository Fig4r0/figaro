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
  initMobileMenu();
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

  thesesList.forEach(item => {
    const card = document.createElement('article');
    card.className = 'thesis-card';
    card.dataset.id = item.id;

    card.innerHTML = `
      <div class="thesis-card-img-wrap">
        <img src="${item.coverImage}" alt="${item.company}" loading="lazy" onerror="this.style.display='none'">
        <span class="thesis-card-rating-badge">${item.ratingBadge || item.statusLabel}</span>
      </div>

      <div class="thesis-card-body">
        <div class="card-top">
          <span class="ticker-badge">${item.ticker}</span>
          <span class="status-pill status-active">
            ${item.statusLabel}
          </span>
        </div>

        <h3 class="thesis-title">${item.company}</h3>
        <p class="thesis-sector">${item.sector}</p>
        <p class="thesis-summary">${item.summary}</p>

        <div class="thesis-metrics">
          <div class="thesis-metric-item">
            <span class="lbl">Precio Actual:</span>
            <span class="val">${item.currentPrice}</span>
          </div>
          <div class="thesis-metric-item">
            <span class="lbl">Precio Objetivo:</span>
            <span class="val">${item.targetPrice}</span>
          </div>
          <div class="thesis-metric-item">
            <span class="lbl">Potencial Estimado:</span>
            <span class="val text-success">${item.upside}</span>
          </div>
          <div class="thesis-metric-item">
            <span class="lbl">Publicado:</span>
            <span class="val">${item.date}</span>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <a href="${item.wordFile}" download class="btn-word-pill" title="Descargar y abrir informe en Word (.docx)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          Abrir Word (.docx)
        </a>
        <button class="btn-read-thesis" onclick="openThesisModal('${item.id}')">
          Leer tesis
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
function openThesisModal(thesisId) {
  const thesis = INVESTOR_DATA.theses.find(t => t.id === thesisId);
  if (!thesis) return;

  const modal = document.getElementById('thesis-modal');
  if (!modal) return;

  // Actualizar enlace al documento Word original
  const wordBtn = document.getElementById('modal-btn-word');
  if (wordBtn) {
    wordBtn.href = thesis.wordFile;
    wordBtn.download = thesis.wordFile.split('/').pop();
  }

  // Poblar datos de cabecera del modal
  document.getElementById('modal-ticker').textContent = thesis.ticker;
  document.getElementById('modal-status').textContent = thesis.statusLabel;
  document.getElementById('modal-status').className = `badge status-active`;
  document.getElementById('modal-category').textContent = thesis.sector;
  document.getElementById('modal-title').textContent = `${thesis.company} (${thesis.ticker})`;
  document.getElementById('modal-date').textContent = thesis.date;
  document.getElementById('modal-horizon').textContent = thesis.horizon;
  document.getElementById('modal-entry-price').textContent = thesis.currentPrice;
  document.getElementById('modal-return').textContent = thesis.upside;
  document.getElementById('modal-return').className = 'text-success';

  // Poblar el contenido del análisis
  const contentEl = document.getElementById('modal-content');
  const a = thesis.analysis;

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
    <div class="callout-box" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
      <div>
        <strong>Tesis Resumen — Jaime Danús:</strong><br>
        ${thesis.summary}
      </div>
      <a href="${thesis.wordFile}" download class="btn-word-pill" style="font-size: 0.85rem; padding: 8px 14px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        Descargar Documento Word (.docx)
      </a>
    </div>

    <h4>El Pitch: Riesgo Percibido vs. Realidad Fundamental</h4>
    <p>${a.pitch}</p>

    ${moatsHtml}

    <h4>Valoración, Modelo y Margen de Seguridad</h4>
    <p>${a.valuation}</p>

    ${chartsHtml}

    ${risksHtml}
  `;

  // Mostrar modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeThesisModal() {
  const modal = document.getElementById('thesis-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
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
 * 7. Menú Móvil
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
