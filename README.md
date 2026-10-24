# Web de Marca Personal: Inversor & Track Record

Sitio web profesional, limpio y luminoso diseñado específicamente para publicar tus **tesis de inversión**, tu **filosofía de análisis fundamental** y tu **track record** auditado.

---

## 🚀 Cómo abrir y ver tu web ahora mismo

No necesitas instalar Node.js ni configurar compiladores: **funciona directamente en cualquier navegador**.

1. Abre el explorador de archivos y ve a la carpeta:
   `/Users/jaimedanus/.gemini/antigravity/scratch/personal-brand-investor`
2. Haz **doble clic en `index.html`** para abrirla en Google Chrome, Safari o tu navegador habitual.
3. O si prefieres ejecutarla con un servidor local, puedes correr:
   ```bash
   npx serve .
   # o con python:
   python3 -m http.server 8000
   ```

---

## 📝 Cómo personalizar tus datos y tesis

Todo el contenido principal está organizado en el archivo [`data.js`](data.js):

1. **Tu Perfil y Redes**:
   - Edita `profile.name`, `profile.email`, tus enlaces a Twitter/X, LinkedIn o Substack.
2. **Tu Track Record**:
   - Modifica las métricas (`cagr`, `cumulativeReturn`, `sharpeRatio`, etc.).
   - Actualiza los puntos del gráfico en `trackRecord.chart` (fechas y valores liquidativos).
   - Actualiza las rentabilidades por año en `trackRecord.annualReturns`.
3. **Tus Tesis de Inversión**:
   - Cada tesis es un bloque en el array `theses`.
   - Puedes copiar y pegar un bloque existente para añadir una nueva empresa con su Ticker, precio de entrada, modelo de negocio, fosos económicos (moats), catalizadores y valoración.

---

## 🌐 Cómo publicarla 100% GRATIS en Internet

Tienes 3 alternativas gratuitas sin ningún coste de mantenimiento:

### Opción 1: Vercel (Recomendada - 2 minutos)
1. Crea una cuenta gratuita en [vercel.com](https://vercel.com).
2. Arrastra y suelta la carpeta `personal-brand-investor` directamente en la pantalla de Vercel.
3. En 10 segundos tendrás un enlace activo con HTTPS tipo: `https://tu-nombre-investor.vercel.app`.

### Opción 2: GitHub Pages (Ideal si usas Git)
1. Sube estos archivos a un repositorio en [GitHub.com](https://github.com).
2. Ve a la pestaña **Settings** > **Pages** de tu repositorio.
3. En **Source**, selecciona `main` (o `master`) y guarda.
4. Tu web estará disponible en `https://tu-usuario.github.io/tu-repositorio/`.

### Opción 3: Netlify
1. Crea una cuenta en [netlify.com](https://netlify.com).
2. En la sección **Sites**, arrastra la carpeta del proyecto.
3. Listo: te dará una URL gratuita instantánea.

---

## 🛡️ Aviso Legal Incorporado
La web ya incluye un pie de página con el **Disclaimer regulatorio** necesario para publicaciones financieras independientes, protegiendo tu marca personal y aclarando el carácter divulgativo de tus análisis.
