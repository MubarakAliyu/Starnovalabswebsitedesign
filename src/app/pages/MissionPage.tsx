import { motion } from 'motion/react';
import { Heart, Eye, Target, Compass, Zap, Globe } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export function MissionPage() {
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
              Why StarNova Labs Exists
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe technology should empower, educate, and inspire. 
              Our mission is to create digital products that make meaningful impacts on lives, 
              communities, and the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Eye className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Vision</span>
              </div>
              <h2 className="mb-6">
                A world where technology serves humanity
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We envision a future where every person has access to digital tools that 
                empower them to learn, grow, and achieve their full potential. Technology 
                should be inclusive, intuitive, and purposeful.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through our products and partnerships, we're building that future—one 
                thoughtful, human-centered experience at a time.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Eye className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-foreground/60 text-lg px-8">
                    Technology with vision and purpose
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInUp}
              className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 order-2 lg:order-1"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Target className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-foreground/60 text-lg px-8">
                    Building with purpose and passion
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Mission</span>
              </div>
              <h2 className="mb-6">
                Create technology that transforms learning
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our mission is to design and develop digital products that make learning 
                more accessible, engaging, and effective. We focus on education technology, 
                community platforms, and tools that foster growth and connection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every line of code we write, every interface we design, is driven by a 
                commitment to quality, empathy, and impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-6">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every product we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-full h-full" />,
                title: 'Human-Centered Design',
                description: 'Every product is built with empathy and deep respect for the people who use it. We prioritize user needs, accessibility, and inclusive design.'
              },
              {
                icon: <Compass className="w-full h-full" />,
                title: 'Purpose-Driven Innovation',
                description: 'We create tools that solve real problems and make meaningful impacts. Innovation without purpose is just noise.'
              },
              {
                icon: <Globe className="w-full h-full" />,
                title: 'Community First',
                description: 'Building solutions that reflect our values and empower communities globally. We believe in technology that brings people together.'
              },
              {
                icon: <Zap className="w-full h-full" />,
                title: 'Excellence in Execution',
                description: 'Quality is non-negotiable. We craft every detail with care, ensuring our products are beautiful, functional, and reliable.'
              },
              {
                icon: <Eye className="w-full h-full" />,
                title: 'Transparency & Trust',
                description: 'We build trust through honest communication, ethical practices, and a commitment to doing what\'s right.'
              },
              {
                icon: <Target className="w-full h-full" />,
                title: 'Continuous Growth',
                description: 'We\'re always learning, adapting, and improving. Our curiosity drives us to explore new ideas and better solutions.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-card-bg backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="w-16 h-16 mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-foreground mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="relative bg-gradient-to-br from-primary/10 to-primary/5 border border-white/10 rounded-2xl p-12 text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="mb-6">
                Join us in building the future
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Whether you're an educator, an entrepreneur, or an organization with a vision, 
                we'd love to collaborate with you to create technology that matters.
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}