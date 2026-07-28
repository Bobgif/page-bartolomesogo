# 🧭 bartolomesogo.com - Plataforma Personal y Bitácora de Expediciones

Plataforma personal de divulgación científica, portafolio fotográfico y consultoría ambiental operando desde Pucallpa hacia la Cordillera del Sira y la Amazonía peruana.

---

## 🛠️ Quick Start (Entorno Local)
Instrucciones para encender el servidor de desarrollo en WSL:
1. Abrir la terminal de VS Code en modo Bash (`WSL: Ubuntu`).
2. Entrar a la carpeta del proyecto: `cd ~/projects/page-bartolomesogo`
3. Encender el servidor local: `npm run dev`
4. Abrir en el navegador: `http://localhost:5173`

---

## 🚀 Control de Versiones y Despliegue (CI/CD)
* **Rama Principal:** `main` (Despliegue automático en Cloudflare Pages mediante GitHub).
* **Flujo de comandos:**
  * `npm run build` (Verificación local y compilación)
  * `git status` 
  * `git add .` 
  * `git commit -m "Descripción clara del cambio"` 
  * `git push origin main`

---

## 📂 Arquitectura del Proyecto

src/
|__ assets/             # Isotipos y logos oficiales (.svg)
|__ blog/               # Componentes, layouts y páginas de la sección de artículos
|__ components/         # Módulos principales (About, Contact, Allies, mapas, etc.)
|__ content/            # Archivos .md para el blog, home e imágenes
|__ data/               # Diccionarios de URLs (imageUrls.ts) y coordenadas (waypoints.json)
|__ types/              # Definiciones e interfaces de TypeScript
|__ App.tsx / main.tsx  # Punto de entrada de la aplicación

## version v1 28/07/2026 