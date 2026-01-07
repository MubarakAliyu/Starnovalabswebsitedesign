import { motion } from 'motion/react';
import { ArrowRight, Heart, Users, Lightbulb, Code, BookOpen, Sparkles, Mail, Send } from 'lucide-react';
import { ParticleField } from '../components/ParticleField';
import { ProductCarousel } from '../components/ProductCarousel';
import { CompaniesSection } from '../components/CompaniesSection';
import { useState } from 'react';
import { toast } from 'sonner';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleField />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            We build meaningful technology that empowers minds and transforms learning.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            StarNova Labs is a technology innovator creating digital products for education, 
            creativity, and community growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#products"
              className="group relative px-8 py-4 bg-primary text-white rounded-full font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>

            <motion.a
              href="#about"
              className="px-8 py-4 bg-white/5 dark:bg-white/5 text-foreground border border-white/20 rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About Us
            </motion.a>
          </motion.div>

          <ProductCarousel />
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 px-6 lg:px-8 relative border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="mb-6">
              Why StarNova Labs Exists
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We believe technology should empower, educate, and inspire.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Heart className="w-full h-full" />,
                title: 'Human-Centered Design',
                description: 'Every product is built with empathy and deep respect for the people who use it.'
              },
              {
                icon: <Lightbulb className="w-full h-full" />,
                title: 'Purpose-Driven Innovation',
                description: 'We create tools that solve real problems and make meaningful impacts.'
              },
              {
                icon: <Users className="w-full h-full" />,
                title: 'Community First',
                description: 'Building solutions that reflect our values and empower communities globally.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-card-bg backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="w-16 h-16 mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-foreground mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="mb-6">
              Our Products
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Crafted with care, built to inspire, designed to make a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <BookOpen className="w-full h-full" />,
                title: 'NūrAla Learning',
                description: 'Arabic & Qur\'anic Learning Platform',
                gradient: 'from-blue-600 to-blue-400'
              },
              {
                icon: <Code className="w-full h-full" />,
                title: 'Kids in Tech Africa',
                description: 'Youth Coding & Digital Skills',
                gradient: 'from-purple-600 to-purple-400'
              },
              {
                icon: <Sparkles className="w-full h-full" />,
                title: 'Future Products',
                description: 'Innovative Tools in Development',
                gradient: 'from-teal-600 to-teal-400'
              }
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative bg-card-bg backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    {product.description}
                  </p>
                  <motion.button
                    className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
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

          <motion.div {...fadeInUp} className="text-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="mb-6">
              What We Do
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Full-stack capabilities to bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Custom Development', desc: 'Tailored solutions for unique challenges' },
              { title: 'Digital Strategy & Design', desc: 'User-centered design thinking' },
              { title: 'EdTech Platforms', desc: 'Interactive learning experiences' },
              { title: 'Community Growth Tools', desc: 'Scale with purpose and impact' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card-bg border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-foreground/60 text-lg px-8">
                    Innovation meets purpose
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6">
                A people-first tech innovation studio
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                StarNova Labs is a technology design and products company building digital tools 
                that make learning intuitive, joyful, and accessible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine cutting-edge technology with human-centered design to create 
                experiences that truly matter. From education to community growth, our products 
                are built with purpose and passion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Companies/Brands Section */}
      <CompaniesSection />

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-6">
              Let's build something remarkable together
            </h2>
            <p className="text-muted-foreground">
              Ready to transform your vision into reality? We'd love to hear from you.
            </p>
          </motion.div>

          <motion.form
            {...fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="px-6 py-4 bg-card-bg border border-white/10 rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="px-6 py-4 bg-card-bg border border-white/10 rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="w-full px-6 py-4 bg-card-bg border border-white/10 rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            {...fadeInUp}
            className="mt-12 flex items-center justify-center gap-8"
          >
            <a href="mailto:hello@starnovalabs.com" className="text-foreground/70 hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}