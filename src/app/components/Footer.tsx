import { Mail, Twitter, Linkedin, Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoLight from 'figma:asset/c612e158423c6a79984baab68630f1201eb5f5b9.png';
import logoDark from 'figma:asset/51cf85ad5296b0c4dab24b1a631ed5846d68d175.png';

export function Footer() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check theme on mount and listen for changes
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    // Create observer for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Mission', href: '#mission' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img src={isDark ? logoDark : logoLight} alt="StarNova Labs" className="h-7 w-auto" />
            </div>
            <p className="text-foreground/60 mb-6 max-w-sm leading-relaxed">
              Building meaningful technology for learning, creativity, and the future.
            </p>
            <p className="text-sm text-foreground/40">
              Built with ❤️ inside StarNova Labs
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="mailto:hello@starnovalabs.com"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/60 hover:text-primary transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/60 hover:text-primary transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/60 hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/60 hover:text-primary transition-all"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <a
              href="mailto:hello@starnovalabs.com"
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              hello@starnovalabs.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} StarNova Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}