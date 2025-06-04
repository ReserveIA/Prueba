import { motion } from 'framer-motion';
import { 
  Brain, 
  Calendar, 
  Users, 
  BarChart3, 
  Globe, 
  Shield, 
  Zap, 
  MessageSquare,
  Clock,
  CreditCard,
  Bell,
  Smartphone
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Inteligencia con IA',
      description: 'Algoritmos de aprendizaje automático que comprenden los patrones de tu negocio y optimizan la disponibilidad de reservas automáticamente.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Agendamiento inteligente',
      description: 'Gestión dinámica de calendarios con resolución automática de conflictos y recomendaciones óptimas de horarios.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Soporte multi-negocio',
      description: 'Administra reservas en restaurantes, salones, clínicas, hoteles y cualquier negocio de servicios.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'NO Analítica en tiempo real',
      description: 'Información detallada sobre tendencias de reservas, comportamiento de clientes y métricas de desempeño.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      title: 'NO Accesibilidad global',
      description: 'Soporte multilenguaje, manejo de zonas horarias y conversión de moneda para negocios internacionales.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'NO Seguridad empresarial',
      description: 'Encriptación de nivel bancario, cumplimiento con GDPR y medidas avanzadas para proteger tus datos.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Ultra rápido',
      description: 'Tiempos de respuesta menores a un segundo y garantía de 99.9% de disponibilidad.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: MessageSquare,
      title: 'Comunicación automatizada',
      description: 'Notificaciones inteligentes, recordatorios y mensajes personalizados para mantener a tus clientes informados.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Tu asistente de IA nunca duerme: acepta reservas y gestiona tu negocio en cualquier momento.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: CreditCard,
      title: 'NO Integración de pagos',
      description: 'Procesamiento de pagos seguro con soporte para anticipos, cancelaciones y reembolsos.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Bell,
      title: 'Notificaciones inteligentes',
      description: 'Sistema de alertas que notifica a tu equipo y clientes en el momento adecuado.',
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: Smartphone,
      title: 'Optimizado para móvil',
      description: 'Experiencia perfecta en todos los dispositivos con aplicaciones móviles dedicadas.',
      color: 'from-rose-500 to-rose-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Funciones Increíbles para
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Negocios Modernos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para transformar la gestión de reservas en una ventaja competitiva.
            Nuestra plataforma impulsada por IA crece con tu negocio.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { 
                    duration: 0.15,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 group will-change-transform"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para experimentar el futuro de las reservas?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Únete a miles de empresas que ya utilizan ReserveIA para optimizar sus operaciones y deleitar a sus clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Comenzar prueba gratuita
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Programar demostración
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 