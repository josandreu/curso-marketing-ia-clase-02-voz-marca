import { useState, useEffect, useCallback, useRef } from 'react';
import { flushSync } from 'react-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, Download, Loader2 } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from '@/components/ui/use-toast';

import Slide01Cover from '../components/slides/Slide01Cover';
import Slide02Objectives from '../components/slides/Slide02Objectives';
import Slide03ActivationTimer from '../components/slides/Slide03ActivationTimer';
import Slide04ActivationGame from '../components/slides/Slide04ActivationGame';
import Slide05ActivationInsight from '../components/slides/Slide05ActivationInsight';
import Slide06VoiceVsTone from '../components/slides/Slide06VoiceVsTone';
import Slide07DinnerFramework from '../components/slides/Slide07DinnerFramework';
import Slide08ThreeBrands from '../components/slides/Slide08ThreeBrands';
import Slide09WorkshopRoadmap from '../components/slides/Slide09WorkshopRoadmap';
import Slide10Step1Intro from '../components/slides/Slide10Step1Intro';
import Slide11Step1Prompt from '../components/slides/Slide11Step1Prompt';
import Slide12Step2Intro from '../components/slides/Slide12Step2Intro';
import Slide13Step2Prompt from '../components/slides/Slide13Step2Prompt';
import Slide14Step3Intro from '../components/slides/Slide14Step3Intro';
import Slide15Step3Prompt from '../components/slides/Slide15Step3Prompt';
import Slide16B2Variants from '../components/slides/Slide16B2Variants';
import Slide17Step4Intro from '../components/slides/Slide17Step4Intro';
import Slide18Step4Prompt from '../components/slides/Slide18Step4Prompt';
import Slide19AutonomousWork from '../components/slides/Slide19AutonomousWork';
import Slide20GroupReview from '../components/slides/Slide20GroupReview';
import Slide21SprintBlueprint from '../components/slides/Slide21SprintBlueprint';
import Slide22Recap from '../components/slides/Slide22Recap';
import Slide23TranslatorCTA from '../components/slides/Slide23TranslatorCTA';
import Slide24Close from '../components/slides/Slide24Close';

const TOTAL = 24;

const slides = [
  Slide01Cover, Slide02Objectives, Slide03ActivationTimer, Slide04ActivationGame, Slide05ActivationInsight,
  Slide06VoiceVsTone, Slide07DinnerFramework, Slide08ThreeBrands, Slide09WorkshopRoadmap,
  Slide10Step1Intro, Slide11Step1Prompt, Slide12Step2Intro, Slide13Step2Prompt,
  Slide14Step3Intro, Slide15Step3Prompt, Slide16B2Variants, Slide17Step4Intro, Slide18Step4Prompt,
  Slide19AutonomousWork, Slide20GroupReview, Slide21SprintBlueprint, Slide22Recap,
  Slide23TranslatorCTA, Slide24Close,
];

const slideTitles = [
  'Portada', 'Objetivo y entregable', 'Activación — 3 min', 'Juego en el chat', 'Insight y transición',
  'Voz vs tono', 'Persona en la cena', 'Tres marcas', 'Roadmap del taller',
  'Paso 1 — Diagnóstico', 'Prompt diagnóstico', 'Paso 2 — Personalidad', 'Prompt personalidad',
  'Paso 3 — Tabla tono', 'Prompt tabla 12 contextos', 'Variantes B2B / B2C', 'Paso 4 — 5 piezas', 'Prompt 5 piezas',
  'Trabajo autónomo', 'Revisión grupal', 'Sprint — documento guía', 'Recap', 'Traductor de tono + CTA', 'Cierre',
];

/** Espera tras cambiar de slide (React paint + Framer Motion). El clon PDF fuerza opacidad en onclone. */
const SLIDE_RENDER_MS = 450;

/** En el documento clonado por html2canvas: quita animaciones y opacidad 0 (fade-up, motion, etc.). */
function normalizeSubtreeForPdfCapture(root) {
  if (!root || typeof HTMLElement === "undefined") return;
  const win = root.ownerDocument?.defaultView;
  if (!win) return;
  const walk = (node) => {
    if (!(node instanceof win.HTMLElement)) return;
    node.style.animation = "none";
    node.style.transition = "none";
    node.style.opacity = "1";
    node.style.transform = "none";
    node.style.filter = "none";
    node.style.setProperty("-webkit-filter", "none");
    node.style.visibility = "visible";
    node.style.setProperty("-webkit-backdrop-filter", "none");
    node.style.setProperty("backdrop-filter", "none");
  };
  walk(root);
  root.querySelectorAll("*").forEach(walk);
}

function onPdfCaptureClone(clonedDoc) {
  const root = clonedDoc.querySelector("[data-pdf-capture-root]");
  if (root instanceof clonedDoc.defaultView.HTMLElement) {
    normalizeSubtreeForPdfCapture(root);
  }
}

async function nextPaint() {
  await new Promise((r) => {
    requestAnimationFrame(() => requestAnimationFrame(r));
  });
}

function fitImageOnPage(pdf, imgData, imgW, imgH) {
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();
  const imgAspect = imgW / imgH;
  const pageAspect = pageW / pageH;
  let w;
  let h;
  let x;
  let y;
  if (imgAspect > pageAspect) {
    w = pageW;
    h = pageW / imgAspect;
    x = 0;
    y = (pageH - h) / 2;
  } else {
    h = pageH;
    w = pageH * imgAspect;
    x = (pageW - w) / 2;
    y = 0;
  }
  pdf.addImage(imgData, 'JPEG', x, y, w, h, undefined, 'FAST');
}

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const slideCaptureRef = useRef(null);
  const exportingRef = useRef(false);

  const goNext = useCallback(() => {
    if (exportingRef.current) return;
    setCurrent((prev) => Math.min(prev + 1, TOTAL - 1));
    setShowGrid(false);
  }, []);

  const goPrev = useCallback(() => {
    if (exportingRef.current) return;
    setCurrent((prev) => Math.max(prev - 1, 0));
    setShowGrid(false);
  }, []);

  const goTo = useCallback((index) => {
    if (exportingRef.current) return;
    setCurrent(index);
    setShowGrid(false);
  }, []);

  const exportPdf = useCallback(async () => {
    if (exportingRef.current) return;

    const el =
      slideCaptureRef.current ??
      (typeof document !== 'undefined'
        ? document.querySelector('[data-pdf-capture-root]')
        : null);

    if (!el || !(el instanceof HTMLElement)) {
      toast({
        variant: 'destructive',
        title: 'No se puede exportar',
        description:
          'No se encontró el área de la diapositiva. Cierra la vista de rejilla (G) y recarga la página si sigue fallando.',
      });
      return;
    }

    exportingRef.current = true;
    setIsExporting(true);
    const savedIndex = current;
    let progressToast = null;

    try {
      if (typeof document !== "undefined" && document.fonts?.ready) {
        await document.fonts.ready.catch(() => {});
      }

      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-pdf-export", "1");
      }

      progressToast = toast({
        title: "Generando PDF",
        description: `Preparando 24 diapositivas...`,
      });

      const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

      for (let i = 0; i < TOTAL; i++) {
        flushSync(() => {
          setCurrent(i);
        });
        
        // Esperamos a que React renderice y las animaciones se detengan
        await new Promise((r) => setTimeout(r, SLIDE_RENDER_MS));
        await nextPaint();

        const canvas = await html2canvas(el, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          backgroundColor: "#0a0a0a",
          onclone: onPdfCaptureClone,
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.88);
        if (i > 0) pdf.addPage();
        fitImageOnPage(pdf, imgData, canvas.width, canvas.height);

        progressToast?.update({
          id: progressToast.id,
          title: "Generando PDF",
          description: `${i + 1} / ${TOTAL} diapositivas capturadas`,
        });
      }

      pdf.save("voz-de-marca-ia.pdf");

      progressToast?.update({
        id: progressToast.id,
        title: "PDF listo",
        description: "La descarga ha comenzado con éxito.",
      });
      window.setTimeout(() => progressToast?.dismiss(), 5000);
    } catch (err) {
      console.error(err);
      progressToast?.dismiss();
      toast({
        variant: "destructive",
        title: "Error al exportar",
        description: err instanceof Error ? err.message : "Vuelve a intentarlo en unos segundos.",
      });
    } finally {
      if (typeof document !== "undefined") {
        document.documentElement.removeAttribute("data-pdf-export");
      }
      try {
        flushSync(() => {
          setCurrent(savedIndex);
        });
      } catch {
        setCurrent(savedIndex);
      }
      exportingRef.current = false;
      setIsExporting(false);
    }
  }, [current]);

  useEffect(() => {
    const handleKey = (e) => {
      if (exportingRef.current) {
        e.preventDefault();
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goNext();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
      if (e.key === 'Escape') {
        setShowGrid(false);
        setIsFullscreen(false);
      }
      if (e.key === 'g') setShowGrid((prev) => !prev);
      if (e.key === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  const CurrentSlide = slides[current];

  if (showGrid) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] p-6 md:p-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-2xl font-800 text-foreground">Todas las diapositivas</h2>
          <button
            type="button"
            onClick={() => setShowGrid(false)}
            className="font-body text-sm text-primary font-medium hover:underline"
          >
            ← Volver a la presentación
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {slides.map((Slide, i) => (
            <button
              type="button"
              key={i}
              onClick={() => goTo(i)}
              className={`aspect-video rounded-xl overflow-hidden border-2 transition-all hover:scale-105 hover:shadow-lg
                ${i === current ? 'border-primary shadow-lg shadow-primary/20' : 'border-border/50'}`}
            >
              <div className="w-full h-full transform scale-[0.25] origin-top-left" style={{ width: '400%', height: '400%' }}>
                <Slide total={TOTAL} />
              </div>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
          {slideTitles.map((title, i) => (
            <p key={i} className="font-body text-[10px] text-muted-foreground text-center truncate px-2">
              {i + 1}. {title}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative isolate h-screen w-screen flex flex-col bg-[#0a0a0a] overflow-hidden">
      {/* Slide area */}
      <div className="relative z-0 min-h-0 flex-1 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={slideCaptureRef}
            data-pdf-capture-root
            className="aspect-video h-full w-full max-h-full max-w-full"
          >
            {isExporting ? (
              <CurrentSlide key={current} total={TOTAL} />
            ) : (
              <AnimatePresence mode="wait">
                <CurrentSlide key={current} total={TOTAL} />
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          type="button"
          onClick={goPrev}
          disabled={current === 0 || isExporting}
          className="absolute left-4 top-1/2 z-[50] flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border/50 bg-white text-slate-900 shadow-xl transition-all hover:scale-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-0"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={current === TOTAL - 1 || isExporting}
          className="absolute right-4 top-1/2 z-[50] flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border/50 bg-white text-slate-900 shadow-xl transition-all hover:scale-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-0"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom bar */}
      <footer className="relative z-[200] flex h-12 shrink-0 cursor-default items-center justify-between border-t border-white/5 bg-[#0a0a0a] px-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowGrid(true)}
            disabled={isExporting}
            className="cursor-pointer rounded p-1.5 text-white/40 transition-colors hover:bg-white/5 hover:text-white/80 disabled:pointer-events-none disabled:opacity-30"
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <span className="font-body text-xs text-white/40">
            {slideTitles[current]}
          </span>
        </div>

        {/* Progress bar */}
        <div className="flex-1 max-w-xs mx-6">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${((current + 1) / TOTAL) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-heading text-xs text-white/40 tabular-nums">
            {current + 1} / {TOTAL}
          </span>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                type="button"
                disabled={isExporting}
                title="Descargar todas las diapositivas en PDF"
                className="cursor-pointer rounded p-1.5 text-white/40 transition-colors hover:bg-white/5 hover:text-white/80 disabled:pointer-events-none disabled:opacity-40"
                aria-label="Exportar presentación a PDF"
              >
                {isExporting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-slate-900 border-white/10 text-white">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-xl font-heading">¿Exportar presentación a PDF?</AlertDialogTitle>
                <AlertDialogDescription className="text-slate-400 font-body">
                  Este proceso capturará las 24 diapositivas una a una. Tardará aproximadamente 15-20 segundos.
                  Por favor, no cierres la pestaña hasta que termine.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-white/5 border-white/10 text-white hover:bg-white/10">Cancelar</AlertDialogCancel>
                <AlertDialogAction 
                  onClick={() => void exportPdf()}
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  Comenzar descarga
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <button
            type="button"
            onClick={toggleFullscreen}
            disabled={isExporting}
            className="cursor-pointer rounded p-1.5 text-white/40 transition-colors hover:bg-white/5 hover:text-white/80 disabled:pointer-events-none disabled:opacity-30"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </footer>
    </div>
  );
}
