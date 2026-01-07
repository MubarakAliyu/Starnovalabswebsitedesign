import { motion } from 'motion/react';
import { Heart, Users, Lightbulb, Sparkles, Target, Zap } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export function AboutPage() {
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
              Building meaningful technology with purpose
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              StarNova Labs was founded on the belief that technology should empower, educate, and inspire. 
              We're a team of designers, developers, and dreamers committed to creating digital products 
              that make a real difference in people's lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A people-first tech innovation studio passionate about education and community growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              {...fadeInUp}
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

            <motion.div {...fadeInUp}>
              <h3 className="mb-6">
                Our Story
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                StarNova Labs began with a simple question: How can we use technology to create 
                experiences that truly matter? From our early days, we've focused on building 
                tools that empower minds and transform learning.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Today, we work with educational institutions, community organizations, and forward-thinking 
                companies to design and develop digital products that make learning intuitive, joyful, 
                and accessible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every project we take on is guided by our core values: empathy, innovation, and impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-6">
              What We Build
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From concept to launch, we create digital experiences that inspire and empower.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-full h-full" />,
                title: 'EdTech Platforms',
                description: 'Interactive learning experiences designed for modern learners and educators.'
              },
              {
                icon: <Zap className="w-full h-full" />,
                title: 'Custom Development',
                description: 'Tailored digital solutions built to solve unique challenges and opportunities.'
              },
              {
                icon: <Users className="w-full h-full" />,
                title: 'Community Tools',
                description: 'Platforms that bring people together and facilitate meaningful connections.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
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
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-6">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="mb-6">
              Let's work together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to bring your vision to life? We'd love to hear about your project 
              and explore how we can help make it remarkable.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
