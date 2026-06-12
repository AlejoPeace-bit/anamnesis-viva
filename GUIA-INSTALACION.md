# Anamnesis Viva — Guía de instalación en iPhone

## Lo que necesitas (todo gratis excepto la API de Anthropic)
- Cuenta en GitHub (github.com) — gratis
- Cuenta en Vercel (vercel.com) — gratis
- API Key de Anthropic (console.anthropic.com) — pago por uso (~$0.01 por historia)

---

## PASO 1 — Subir el proyecto a GitHub

1. Ve a **github.com** e inicia sesión (o crea cuenta gratis).
2. Clic en **"New repository"** (botón verde, arriba a la derecha).
3. Nombre: `anamnesis-viva` → clic en **"Create repository"**.
4. En la página del repositorio vacío, haz clic en **"uploading an existing file"**.
5. Arrastra estos archivos/carpetas desde la carpeta descargada:
   - `vercel.json`
   - `package.json`
   - carpeta `api/` (con el archivo `estructurar.js` adentro)
   - carpeta `public/` (con el archivo `index.html` adentro)
6. Clic en **"Commit changes"** (botón verde abajo).

---

## PASO 2 — Conectar con Vercel (despliegue automático)

1. Ve a **vercel.com** → clic en **"Sign Up"** → elige **"Continue with GitHub"**.
2. Una vez dentro, clic en **"Add New Project"**.
3. Busca tu repositorio `anamnesis-viva` y clic en **"Import"**.
4. Deja todo como está y clic en **"Deploy"**.
5. Espera ~1 minuto. Vercel te da una URL como: `https://anamnesis-viva.vercel.app`

---

## PASO 3 — Agregar tu API Key de Anthropic

1. Ve a **console.anthropic.com** → inicia sesión → sección **"API Keys"**.
2. Clic en **"Create Key"** → ponle nombre "anamnesis-viva" → copia la clave (empieza con `sk-ant-...`).
3. Regresa a Vercel → tu proyecto → pestaña **"Settings"** → sección **"Environment Variables"**.
4. Agrega:
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** pega tu clave `sk-ant-...`
   - Clic en **"Save"**
5. Ve a la pestaña **"Deployments"** → clic en los tres puntos del último deploy → **"Redeploy"**.

---

## PASO 4 — Instalar en el iPhone de Karen como app

1. En el iPhone, abre **Safari** (debe ser Safari, no Chrome).
2. Ve a la URL de tu app: `https://anamnesis-viva.vercel.app`
3. Toca el botón **Compartir** (cuadrado con flecha hacia arriba, en la barra inferior).
4. Desplázate y toca **"Añadir a pantalla de inicio"**.
5. Ponle nombre: **Anamnesis** → toca **"Añadir"**.

¡Listo! Aparece en la pantalla de inicio como cualquier app, con ícono propio.

---

## Primer uso

1. Abre la app desde el ícono en la pantalla de inicio.
2. La primera vez que presiones el micrófono, Safari pedirá permiso — toca **"Permitir"**.
3. Escribe el nombre del paciente y la fecha.
4. Presiona el botón rosado y conduce la entrevista normalmente.
5. Al terminar, presiona **"Estructurar con IA"**.
6. Revisa y edita el documento en la pestaña 2.
7. Copia y pega en Word / Google Docs.

---

## Costos estimados

| Uso | Costo aproximado |
|-----|-----------------|
| 1 historia clínica (entrevista de 30 min) | ~$0.01 USD |
| 20 historias al mes | ~$0.20 USD |
| 100 historias al mes | ~$1.00 USD |

Vercel: gratis hasta 100GB de ancho de banda/mes (más que suficiente).

---

## Soporte

Ante cualquier duda, contacta a Alejandro.
