import { motion } from 'framer-motion';
import { 
  UtensilsCrossed, 
  Scissors, 
  Stethoscope, 
  Building2, 
  Dumbbell, 
  GraduationCap,
  Car,
  Palette
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: UtensilsCrossed,
      title: 'Restaurantes y Cafeterías',
      description: 'Gestión de mesas, optimización de listas de espera y experiencias gastronómicas amenas.',
      features: ['Reservas de mesas', 'Gestión de listas de espera', 'Eventos especiales', 'Reservas para grupos'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Scissors,
      title: 'Salones y Spas',
      description: 'Agendamiento de personal, reservas de servicios y seguimiento de preferencias de clientes.',
      features: ['Citas de servicios', 'Asignación de personal', 'Reservas de paquetes', 'Visitas recurrentes'],
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: Stethoscope,
      title: 'Salud y Clínicas',
      description: 'Citas de pacientes, horarios de profesionales y cumplimiento médico.',
      features: ['Agendamiento de pacientes', 'Disponibilidad de profesionales', 'Integración de telemedicina', 'Gestión de seguros'],
      gradient: 'from-blue-500 to-teal-500'
    },
    {
      icon: Building2,
      title: 'Hoteles y Hospitalidad',
      description: 'Reservas de habitaciones, espacios para eventos y gestión de la experiencia del huésped.',
      features: ['Reservas de habitaciones', 'Espacios para eventos', 'Servicios de concierge', 'Preferencias de huéspedes'],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Dumbbell,
      title: 'Gimnasios y Bienestar',
      description: 'Agendamiento de clases, reservas de entrenadores y equipos.',
      features: ['Horarios de clases', 'Entrenamiento personal', 'Reserva de equipos', 'Gestión de membresías'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: GraduationCap,
      title: 'Educación y Capacitación',
      description: 'Programación de cursos, asignación de tutores y recursos.',
      features: ['Reservas de cursos', 'Agendamiento de tutores', 'Reservas de aulas', 'Coordinación de materiales'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Car,
      title: 'Servicios Automotrices',
      description: 'Citas de servicio, mantenimiento de vehículos y comunicación con clientes.',
      features: ['Agendamiento de servicios', 'Seguimiento de mantenimiento', 'Recolección y entrega', 'Pedido de repuestos'],
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: Palette,
      title: 'Servicios Creativos',
      description: 'Consultas de proyectos, alquiler de estudios y colaboración creativa.',
      features: ['Reservas de consultas', 'Alquiler de estudios', 'Programación de proyectos', 'Compartir recursos'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hecho para
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Cualquier Industria
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra IA se ajusta a las necesidades únicas de tu negocio,
            ya sea la gestión de mesas, citas o cualquier otro tipo de sistema de reservas."
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${industry.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Tipos de Industrias</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfacción de Clientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Disponibilidad IA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">∞</div>
              <div className="text-gray-600">Opciones de Personalización</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries; 