import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

// Brand logos - using popular tech/education companies
const companies = [
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    width: 140
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    width: 120
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    width: 110
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    width: 90
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    width: 130
  },
  {
    name: 'Adobe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg',
    width: 110
  },
  {
    name: 'Salesforce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    width: 140
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    width: 110
  }
];

export function CompaniesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;
        
        // Reset scroll when reaching halfway (seamless loop)
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-24 px-6 lg:px-8 border-t border-border overflow-hidden bg-gradient-to-b from-transparent to-muted/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Collaborating with organizations that share our vision for innovation and impact
          </p>
        </motion.div>

        {/* Auto-scrolling logo carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-16 overflow-x-hidden items-center"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate companies array for seamless infinite loop */}
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 h-24 flex items-center justify-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % companies.length) * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div
                  className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-xl p-8 flex items-center justify-center transition-all duration-500 hover:bg-card/60 hover:border-border shadow-sm hover:shadow-lg"
                  style={{ width: `${company.width + 40}px`, height: '96px' }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-12 object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                    style={{ width: `${company.width}px` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient fade edges */}
          <div className="absolute top-0 left-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/2 left-10 w-2 h-2 bg-primary/30 rounded-full blur-sm"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-2 h-2 bg-primary/30 rounded-full blur-sm"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
        />
      </div>
    </section>
  );
}