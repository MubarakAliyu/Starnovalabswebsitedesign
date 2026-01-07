import { motion } from 'motion/react';
import { BookOpen, Code, Sparkles, ArrowRight, ExternalLink, Rocket, Palette } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const products = [
  {
    icon: <BookOpen className="w-full h-full" />,
    title: 'NūrAla Learning',
    category: 'EdTech Platform',
    description: 'A comprehensive Arabic and Qur\'anic learning platform designed to make sacred knowledge accessible, engaging, and beautifully presented for learners of all ages.',
    features: ['Interactive lessons', 'Progress tracking', 'Gamified learning', 'Mobile-first design'],
    status: 'Live',
    gradient: 'from-blue-600 to-blue-400',
    link: '#'
  },
  {
    icon: <Code className="w-full h-full" />,
    title: 'Kids in Tech Africa',
    category: 'Youth Empowerment',
    description: 'An innovative platform bringing coding education and digital skills to young minds across Africa, fostering the next generation of tech innovators and creators.',
    features: ['Coding courses', 'Project-based learning', 'Mentor support', 'Community forums'],
    status: 'Live',
    gradient: 'from-purple-600 to-purple-400',
    link: '#'
  },
  {
    icon: <Rocket className="w-full h-full" />,
    title: 'Community Connect',
    category: 'Social Platform',
    description: 'A purpose-built platform for community organizations to engage members, organize events, and foster meaningful connections in digital and physical spaces.',
    features: ['Event management', 'Member profiles', 'Discussion boards', 'Analytics dashboard'],
    status: 'In Development',
    gradient: 'from-teal-600 to-teal-400',
    link: '#'
  },
  {
    icon: <Palette className="w-full h-full" />,
    title: 'CreativeStudio Pro',
    category: 'Creative Tools',
    description: 'An all-in-one creative workspace for designers and artists to collaborate, share work, and build portfolios with integrated feedback and version control.',
    features: ['Cloud storage', 'Team collaboration', 'Version history', 'Portfolio builder'],
    status: 'In Development',
    gradient: 'from-pink-600 to-pink-400',
    link: '#'
  },
  {
    icon: <Sparkles className="w-full h-full" />,
    title: 'Future Innovations',
    category: 'Coming Soon',
    description: 'We\'re constantly exploring new ideas and technologies to create products that solve real problems and empower communities worldwide.',
    features: ['AI-powered tools', 'Accessibility focus', 'Global reach', 'Open standards'],
    status: 'Planning',
    gradient: 'from-amber-600 to-amber-400',
    link: '#'
  }
];

export function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="mb-6">
              Our Products
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafted with care, built to inspire, designed to make a difference. 
              Explore our suite of digital products that empower minds and transform learning experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-card-bg backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/30">
                      {product.status}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground/80 mb-3">Key Features:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-foreground/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    {product.status === 'Live' ? 'Learn More' : 'View Details'}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="relative bg-gradient-to-br from-primary/10 to-primary/5 border border-white/10 rounded-2xl p-12 text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="mb-4">
                Need something custom?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We create bespoke digital products tailored to your unique needs. 
                Let's collaborate on building something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/contact"
                  className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="/about"
                  className="px-8 py-4 bg-white/5 text-foreground border border-white/20 rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 transition-all inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Us
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
