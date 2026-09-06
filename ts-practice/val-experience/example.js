import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Heart, 
  RotateCcw, 
  Share2, 
  Volume2, 
  VolumeX,
  Sparkles,
  Music
} from 'lucide-react';

/**
 * CUPID'S LINK - PREMIUM EXPERIENCE
 * Designed & Built by Kingsley Maduabuchi
 */

const DATA = {
  valName: "Beautiful Amara",
  senderName: "David",
  message: "I searched for the right words, but then I realized... words aren't enough to describe what you mean to me. You are my today, my tomorrow, and my forever. Thank you for being you.",
  images: [
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800",
    "https://images.unsplash.com/photo-1516589174184-c68d8e414c48?q=80&w=800",
    "https://images.unsplash.com/photo-1522673607200-1648832cee98?q=80&w=800",
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=800",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800"
  ],
  songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
};

export default function App() {
  const [phase, setPhase] = useState('asking'); // asking, celebration, memories, letter, credits
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [noText, setNoText] = useState("No");
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // 1. Aggressive No Button Logic
  useEffect(() => {
    if (phase !== 'asking') return;
    const interval = setInterval(() => {
      setNoText(prev => (prev === "No" ? "Click me!" : "No"));
    }, 2000);
    return () => clearInterval(interval);
  }, [phase]);

  const teleport = (e) => {
    e.preventDefault();
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    setNoButtonPos({ x, y });
    if (navigator.vibrate) navigator.vibrate([50, 30, 50]);
  };

  // 2. Acceptance Celebration
  const onYes = () => {
    setPhase('celebration');
    if (audioRef.current) audioRef.current.play().catch(() => {});
    
    const end = Date.now() + 15 * 1000;
    const heart = confetti.shapeFromPath({ path: 'M167 430c-75-60-167-167-167-240 0-113 114-148 167-33 53-115 167-80 167 33 0 73-92 180-167 240z' });

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        shapes: [heart],
        colors: ['#ff0000', '#ff69b4']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        shapes: [heart],
        colors: ['#ff0000', '#ff69b4']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        setPhase('memories');
      }
    }());
  };

  // 3. Auto-Slideshow Logic
  useEffect(() => {
    if (phase === 'memories') {
      const timer = setInterval(() => {
        setSlideIndex(prev => {
          if (prev >= DATA.images.length - 1) {
            clearInterval(timer);
            setTimeout(() => setPhase('letter'), 2000);
            return prev;
          }
          return prev + 1;
        });
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [phase]);

  return (
    <div className="fixed inset-0 bg-[#fff5f5] text-[#4a0e0e] font-sans selection:bg-rose-200 overflow-hidden">
      <audio ref={audioRef} src={DATA.songUrl} loop />

      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-rose-200 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-100 rounded-full blur-3xl" />
      </div>

      <AnimatePresence mode="wait">
        {/* PHASE 1: THE ASK */}
        {phase === 'asking' && (
          <motion.div 
            key="ask"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="h-full flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 3 }}
              className="mb-8"
            >
              <Heart size={64} fill="#e11d48" className="text-rose-600 drop-shadow-xl" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-12 leading-tight">
              {DATA.valName},<br/>
              <span className="text-rose-600">will you be my Val?</span>
            </h1>

            <div className="relative w-full max-w-xs h-32">
              <motion.button
                onClick={onYes}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="absolute left-1/2 top-0 -translate-x-1/2 z-20 bg-rose-600 text-white px-12 py-4 rounded-full text-2xl font-bold shadow-xl flex items-center gap-3"
              >
                Yes! <Sparkles size={24} />
              </motion.button>

              <motion.button
                animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                onMouseEnter={teleport}
                onTouchStart={teleport}
                className="absolute left-0 top-20 bg-white border border-rose-100 text-rose-300 px-8 py-3 rounded-full text-lg font-medium shadow-sm whitespace-nowrap"
              >
                {noText}
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* PHASE 2: CELEBRATION */}
        {phase === 'celebration' && (
          <motion.div 
            key="celebrate"
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="h-full flex flex-col items-center justify-center text-center p-8"
          >
            <h2 className="text-5xl font-serif italic text-rose-600 animate-bounce">
              Forever Starts Now!
            </h2>
            <p className="mt-4 text-rose-400 tracking-widest uppercase text-sm">She Said Yes</p>
          </motion.div>
        )}

        {/* PHASE 3: MEMORIES (SLIDESHOW) */}
        {phase === 'memories' && (
          <motion.div 
            key="memories"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="h-full w-full flex flex-col items-center justify-center bg-black"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={slideIndex}
                src={DATA.images[slideIndex]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
            <div className="z-10 text-white text-center absolute bottom-20">
              <p className="text-xs tracking-[0.3em] uppercase opacity-50 mb-2">Our Journey</p>
              <div className="flex gap-2 justify-center">
                {DATA.images.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === slideIndex ? 'w-8 bg-rose-500' : 'w-2 bg-white/30'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* PHASE 4: THE LETTER */}
        {phase === 'letter' && (
          <motion.div 
            key="letter"
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            className="h-full flex items-center justify-center p-6"
          >
            <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-rose-600 text-white p-4 rounded-full shadow-lg">
                <Heart fill="currentColor" />
              </div>
              <p className="text-2xl font-serif leading-relaxed text-gray-800 italic text-center">
                {DATA.message.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 8 }}
                onClick={() => setPhase('credits')}
                className="mt-10 w-full text-rose-500 font-bold flex items-center justify-center gap-2"
              >
                Tap to complete <RotateCcw size={16} className="rotate-90" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* PHASE 5: FINAL CREDITS */}
        {phase === 'credits' && (
          <motion.div 
            key="credits"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="h-full flex flex-col items-center justify-center p-8 text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute opacity-5 text-rose-900"
            >
              <Heart size={400} />
            </motion.div>

            <div className="z-10 space-y-8">
              <div className="inline-block p-4 bg-white rounded-3xl shadow-xl mb-4">
                <Heart size={48} className="text-rose-600" fill="currentColor" />
              </div>
              
              <h2 className="text-3xl font-serif">A Digital Love Story</h2>
              
              <div className="space-y-2">
                <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">Starring</p>
                <p className="text-2xl font-bold text-rose-900">{DATA.valName} & {DATA.senderName}</p>
              </div>

              <div className="py-6 border-y border-rose-100">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-2">Executive Producer</p>
                <p className="text-lg font-serif italic font-semibold text-rose-700">Kingsley Maduabuchi</p>
              </div>

              <div className="flex flex-col gap-4 w-full max-w-xs mx-auto pt-4">
                <button 
                  onClick={() => {
                    const text = `Check out this special surprise for ${DATA.valName} from ${DATA.senderName}! ❤️ ${window.location.href}`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="bg-[#25D366] text-white py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2"
                >
                  <Share2 size={20} /> Tell the World
                </button>
                
                <button 
                  onClick={() => {
                    setPhase('asking');
                    setSlideIndex(0);
                  }}
                  className="bg-white text-rose-600 py-4 rounded-2xl font-bold border border-rose-100 shadow-sm flex items-center justify-center gap-2"
                >
                  <RotateCcw size={20} /> Replay Experience
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Audio Control */}
      {phase !== 'asking' && (
        <button 
          onClick={() => {
            setIsMuted(!isMuted);
            audioRef.current.muted = !isMuted;
          }}
          className="fixed top-6 right-6 z-50 bg-white/20 backdrop-blur-md p-3 rounded-full text-rose-600 shadow-lg"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      )}
    </div>
  );
}