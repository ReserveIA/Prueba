import { motion } from 'framer-motion';
import { Smartphone, Mail, MessageSquare, Bot, Calendar, CheckCircle } from 'lucide-react';
import { useForm } from '../context/FormContext';

const steps = [
  {
    icon: MessageSquare,
    title: 'Recibe reservas por cualquier canal',
    description: 'Tus clientes pueden reservar por WhatsApp, web, teléfono, redes sociales o email. ReserveIA centraliza todo en un solo lugar.'
  },
  {
    icon: Bot,
    title: 'Automatización inteligente',
    description: 'Nuestra IA responde, agenda y confirma automáticamente cada reserva, sin intervención manual.'
  },
  {
    icon: Calendar,
    title: 'Gestión y disponibilidad en tiempo real',
    description: 'El sistema actualiza la disponibilidad y evita dobles reservas, integrándose con tus calendarios y herramientas.'
  },
  {
    icon: CheckCircle,
    title: 'Notificaciones y recordatorios',
    description: 'Tus clientes y tu equipo reciben confirmaciones y recordatorios automáticos para reducir ausencias.'
  }
];

const HowItWorks = () => {
  const { openForm } = useForm();
  return (
    <section id="how-it-works" className="py-24 bg-white">
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
            ¿Cómo funciona <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">ReserveIA</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automatiza tus reservas y comunicaciones en minutos. Así de simple y potente es nuestro sistema:
          </p>
        </motion.div>
        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-primary-600 to-purple-600 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">¿Listo para automatizar tus reservas?</h3>
          <button
            onClick={() => openForm({ name: 'Prueba Gratuita' })}
            className="btn-primary px-8 py-3 text-lg"
          >
            Comenzar prueba gratuita
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 