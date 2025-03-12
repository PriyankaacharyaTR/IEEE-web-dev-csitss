import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Committee', href: '/committee' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Call for Papers', href: '/call-for-papers' },
  { name: 'Awards', href: '/awards' },
  { name: 'Registration', href: '/registration' },
  { name: 'Sponsors', href: '/sponsors' },
  { name: 'Tracks', href: '/tracks' },
  { name: 'Contact', href: '/contact' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-200 dark:to-dark-300">
      <header className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg dark:bg-dark-100/80' : 'bg-transparent'
      )}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-bold text-xl text-gradient-to-r from-gradient-start to-gradient-end">
              CSITSS-2025
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    location.pathname === item.href
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-600 hover:text-primary-500 hover:bg-primary-50 dark:text-gray-300 dark:hover:bg-dark-200'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-primary-500 hover:bg-primary-50 dark:text-gray-300 dark:hover:bg-dark-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md shadow-lg dark:bg-dark-100/80">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'block px-3 py-2 rounded-md text-base font-medium',
                      location.pathname === item.href
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-600 hover:text-primary-500 hover:bg-primary-50 dark:text-gray-300 dark:hover:bg-dark-200'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-gradient-to-br from-primary-600 to-accent-purple text-white mt-20">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CSITSS-2025</h3>
              <p className="text-sm opacity-90">
                International Conference on Computer Science, Information Technology, and Smart Systems
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm opacity-90 hover:opacity-100 hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm opacity-90">
                Email: contact@csitss2025.org<br />
                Phone: +1 (555) 123-4567<br />
                Address: Conference Center, University Campus
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-center text-sm opacity-90">
              © 2025 CSITSS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}