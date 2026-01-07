import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

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
              Let's build something remarkable together
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? We'd love to hear about your project, 
              answer your questions, or simply connect and explore possibilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div {...fadeInUp}>
              <h3 className="mb-6">
                Send us a message
              </h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-6 py-4 bg-card-bg border border-white/10 rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-6 py-4 bg-card-bg border border-white/10 rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-6 py-4 bg-card-bg border border-white/10 rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-card-bg border border-white/10 rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div {...fadeInUp} className="space-y-8">
              <div>
                <h3 className="mb-6">
                  Get in touch
                </h3>
                <p className="text-muted-foreground mb-8">
                  Prefer to reach out directly? Here's how you can contact us.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@starnovalabs.com"
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-4 p-6 bg-card-bg backdrop-blur-sm border border-white/10 rounded-xl hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Email Us</h4>
                    <p className="text-sm text-muted-foreground">hello@starnovalabs.com</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-4 p-6 bg-card-bg backdrop-blur-sm border border-white/10 rounded-xl hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Call Us</h4>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-4 p-6 bg-card-bg backdrop-blur-sm border border-white/10 rounded-xl hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">Remote & Global</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-white/10">
                <h4 className="text-foreground font-semibold mb-4">Connect with us</h4>
                <div className="flex items-center gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-card-bg border border-white/10 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-card-bg border border-white/10 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    <Twitter className="w-5 h-5 text-foreground" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-card-bg border border-white/10 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    <Github className="w-5 h-5 text-foreground" />
                  </motion.a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
                <h4 className="text-foreground font-semibold mb-2">Office Hours</h4>
                <p className="text-sm text-muted-foreground mb-1">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="mb-6">
              Have a question?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're interested in our products, looking to collaborate, or just want to 
              say hello, we're here and happy to connect.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
