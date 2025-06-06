import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Sparkles, X } from 'lucide-react';
import { useForm } from '../context/FormContext';
import { useState, useEffect } from 'react';

const Hero = () => {
  const { openForm } = useForm();
  const [showDemo, setShowDemo] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  
  useEffect(() => {
    if (showDemo && !scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
        setScriptLoaded(false);
      };
    }
  }, [showDemo, scriptLoaded]);

  const features = [
    'Reservas 24/7 con IA',
    'Gestión inteligente de disponibilidad',
    'Integración para múltiples negocios',
    'Analítica en tiempo real'
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-purple-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl will-change-transform"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center space-x-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Sistema de reservas impulsado por IA</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Reservas{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Inteligentes
              </span>{' '}
              para tu negocio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Transforma la gestión de tus reservas con inteligencia artificial que entiende tu empresa. Automatiza tus citas, optimiza la disponibilidad y sorprende a tus clientes en cualquier sector.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => openForm()}
                className="btn-primary group flex items-center justify-center gap-2"
              >
                Comienza tu prueba gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setShowDemo(true)}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <Play className="w-5 h-5" />
                <span>Ver demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
              className="flex items-center space-x-8 mt-12 pt-8 border-t border-white/20"
            >
              <div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-400">Negocios Activos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">2M+</div>
                <div className="text-sm text-gray-400">Reservaciones Gestionadas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </motion.div>
          </div>

          {/* Visual/Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
              {/* Mock Dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Vista General de Hoy</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">247</div>
                    <div className="text-sm text-gray-300">Reservas Activas</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-sm text-gray-300">Ocupación</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm text-gray-300">Reservaciones Recientes</div>
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1], delay: 0.5 + item * 0.05 }}
                      className="flex items-center space-x-3 bg-white/5 rounded-lg p-3"
                    >
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">{item}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-white text-sm">Mesa para 4</div>
                        <div className="text-gray-400 text-xs">7:30 PM - Restaurante</div>
                      </div>
                      <div className="text-green-400 text-xs">Confirmada</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 rounded-full p-3 shadow-lg will-change-transform"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-2xl relative flex flex-col"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: '90vh',
              maxHeight: '700px',
              padding: 0,
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col h-full w-full pt-12 px-2 sm:px-6 pb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Demo Interactiva</h3>
              <div className="flex-1 w-full overflow-auto flex items-center justify-center">
                <div className="w-full h-full" style={{ minHeight: '320px' }}>
                  <elevenlabs-convai 
                    agent-id="agent_01jwzj9strerpa60x5wmzshxvf"
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '320px',
                      display: 'block',
                    }}
                  ></elevenlabs-convai>
                </div>
              </div>
              <div className="text-center text-xs text-gray-400 mt-2">
                Powered by ElevenLabs Conversational AI
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero; 