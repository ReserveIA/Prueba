import { useState, useEffect } from 'react';
import { Menu, X, Bot, Calendar, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from '../context/FormContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openForm } = useForm();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Funciones', href: '#features' },
    { name: 'Cómo Funciona', href: '#how-it-works' },
    { name: 'Industrias', href: '#industries' },
    { name: 'Precios', href: '#pricing' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="bg-primary-600 p-2 rounded-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              ReserveIA
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-primary-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white hover:text-primary-200'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => openForm()}
              className="btn-primary"
            >
              Comenzar prueba
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            className="md:hidden fixed top-20 left-2 right-2 z-40 rounded-3xl shadow-2xl bg-white backdrop-blur-2xl border border-gray-200"
            style={{ overflow: 'hidden', maxWidth: '480px', margin: '0 auto' }}
          >
            <div className="py-6 space-y-4 px-4">
              {navItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-2 py-3 text-lg text-gray-800 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ transition: 'background 0.2s, color 0.2s' }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button 
                  onClick={() => {
                    openForm();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-primary-700 transition-colors text-lg"
                  style={{ boxShadow: '0 4px 24px 0 rgba(80, 112, 255, 0.10)' }}
                >
                  Comenzar prueba
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 