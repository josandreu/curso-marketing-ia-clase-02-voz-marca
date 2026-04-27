import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3 } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

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

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  const goNext = useCallback(() => {
    setCurrent((prev) => Math.min(prev + 1, TOTAL - 1));
    setShowGrid(false);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => Math.max(prev - 1, 0));
    setShowGrid(false);
  }, []);

  const goTo = useCallback((index) => {
    setCurrent(index);
    setShowGrid(false);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
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
    <div className="h-screen w-screen flex flex-col bg-[#0a0a0a] overflow-hidden">
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-[100vw] max-h-[100vh] aspect-video">
            <AnimatePresence mode="wait">
              <CurrentSlide key={current} total={TOTAL} />
            </AnimatePresence>
          </div>
        </div>

        <button
          type="button"
          onClick={goPrev}
          disabled={current === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md flex items-center justify-center transition-all disabled:opacity-0 z-20 shadow-lg border border-white/10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={current === TOTAL - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md flex items-center justify-center transition-all disabled:opacity-0 z-20 shadow-lg border border-white/10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="h-12 bg-[#0a0a0a] border-t border-white/5 flex items-center justify-between px-4 z-20">
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setShowGrid(true)} className="text-white/40 hover:text-white/80 transition-colors">
            <Grid3X3 className="w-4 h-4" />
          </button>
          <span className="font-body text-xs text-white/40 truncate max-w-[200px]">{slideTitles[current]}</span>
        </div>

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
          <button type="button" onClick={toggleFullscreen} className="text-white/40 hover:text-white/80 transition-colors">
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
