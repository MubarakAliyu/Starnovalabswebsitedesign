import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    title: 'NūrAla Learning',
    description: 'Arabic & Qur\'anic Learning Platform',
    color: 'from-blue-600 to-blue-400'
  },
  {
    title: 'Kids in Tech Africa',
    description: 'Youth Coding & Digital Skills',
    color: 'from-purple-600 to-purple-400'
  },
  {
    title: 'Future Products',
    description: 'Innovative Tools in Development',
    color: 'from-teal-600 to-teal-400'
  }
];

export function ProductCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % products.length);
  const prev = () => setCurrent((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16">
      <div className="relative h-64 rounded-2xl overflow-hidden bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute inset-0 bg-gradient-to-br ${products[current].color} p-8 flex flex-col justify-center items-center text-center`}
          >
            <h3 className="text-3xl font-bold text-white mb-3">
              {products[current].title}
            </h3>
            <p className="text-white/90 text-lg">
              {products[current].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current ? 'w-8 bg-primary' : 'w-1.5 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
