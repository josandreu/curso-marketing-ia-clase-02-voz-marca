# Clase 1.2 — La voz de tu marca

Presentación en vivo para **Módulo 1: Estrategia, marca y storytelling**. Los alumnos construyen una **guía de tono y personalidad** con ayuda de IA: diagnóstico de la voz actual, arquetipo y adjetivos, tabla «así sí / así no» por contextos, cinco piezas reales y un cierre con el **traductor de tono** para reescribir textos publicados.

> Material educativo — **José Antonio Andreu Rubio** © 2026

**Duración guionada:** 2 h 55 min (activación, taller guiado, autonomía, revisión, sprint y cierre).

---

## Qué es este proyecto

Aplicación web a pantalla completa, relación de aspecto **16:9**, pensada para proyectar en aula online. **24 diapositivas** con textos y prompts alineados al guion docente de la sesión. La lógica de navegación y el orden de slides están en `src/pages/Presentation.jsx`; cada diapositiva es un componente en `src/components/slides/`.

**Stack:** React 18, Vite 6, Tailwind CSS, Framer Motion (transiciones entre slides), Lucide (iconografía).

---

## Requisitos

- Node.js 18 o superior (recomendado LTS)
- npm

---

## Instalación y arranque

```bash
npm install
npm run dev
```

Abre la URL que indique Vite (habitualmente `http://localhost:5173`).

| Comando        | Descripción                          |
|----------------|--------------------------------------|
| `npm run dev`  | Servidor de desarrollo con hot reload |
| `npm run build`| Genera la carpeta `dist/` para despliegue estático |
| `npm run preview` | Sirve el build localmente para comprobar antes de publicar |
| `npm run lint` | ESLint sobre el código fuente        |

---

## Controles durante la presentación

| Tecla | Acción |
|--------|--------|
| `→` o barra espaciadora | Diapositiva siguiente |
| `←` | Diapositiva anterior |
| `G` | Vista de rejilla: miniaturas de todas las slides; clic para saltar |
| `F` | Entrar o salir de pantalla completa del navegador |
| `Escape` | Cierra la rejilla o sale de pantalla completa |

---

## Orden de las 24 diapositivas

1. Portada  
2. Objetivo y entregable  
3. Activación — reto 3 minutos  
4. Juego en el chat (¿de quién es cada texto?)  
5. Insight y transición desde la clase anterior  
6. Voz frente a tono  
7. Framework «la marca en una cena»  
8. Tres marcas de referencia  
9. Roadmap del taller (cuatro pasos)  
10. Paso 1 — Intro: diagnosticar la voz actual  
11. Paso 1 — Prompt en ChatGPT  
12. Paso 2 — Intro: personalidad y arquetipo  
13. Paso 2 — Prompt  
14. Paso 3 — Intro: tabla de tono  
15. Paso 3 — Prompt y 12 contextos  
16. Variantes B2B y B2C  
17. Paso 4 — Intro: cinco piezas  
18. Paso 4 — Prompt  
19. Trabajo autónomo  
20. Revisión grupal en vivo  
21. Sprint — estructura del documento guía  
22. Recap de valor  
23. Traductor de tono, CTA y recurso en vídeo  
24. Cierre  

---

## Despliegue

Tras `npm run build`, sube el contenido de `dist/` a cualquier hosting estático (Netlify, Vercel, S3 + CloudFront, servidor propio, etc.). La app usa rutas relativas adecuadas para un despliegue en la raíz del dominio o en un subpath según la configuración de Vite del proyecto.
