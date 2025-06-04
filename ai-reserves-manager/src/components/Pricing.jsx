import { motion } from 'framer-motion';
import { Check, MessageSquare, Calendar, Zap, Smartphone, Bot } from 'lucide-react';
import { useState } from 'react';
import ContactForm from './ContactForm';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: 'Essentials',
      description: 'Perfecto para negocios que quieren automatizar sus reservas',
      price: '49',
      features: [
        'Reservas por llamada y mensajes',
        'Calendario básico',
        'Notificaciones por email',
        'Soporte por email',
        'Hasta 100 reservas/mes'
      ],
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      name: 'Business',
      description: 'Ideal para negocios que buscan una solución más completa',
      price: '99',
      features: [
        'Todo lo de Essentials',
        'Integración con WhatsApp',
        'Google Calendar',
        'Soporte prioritario',
        'Hasta 500 reservas/mes',
        'Analítica básica'
      ],
      icon: Calendar,
      color: 'from-purple-500 to-purple-600',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'La solución definitiva para negocios que buscan máxima integración',
      price: '199',
      features: [
        'Todo lo de Business',
        'Google Sheets',
        'API personalizada',
        'Soporte 24/7',
        'Reservas ilimitadas',
        'Analítica avanzada',
        'Personalización de marca'
      ],
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Planes que se adaptan a tu
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              {" "}negocio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan perfecto para tu negocio. Todos los planes incluyen actualizaciones gratuitas y soporte técnico.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                    Más popular
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  {/* Plan Header */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/mes</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 mt-auto ${
                      plan.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Comenzar ahora
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            ¿Necesitas un plan personalizado? Contáctanos para una solución a medida.
          </p>
          <button
            onClick={() => setSelectedPlan({ name: 'Personalizado' })}
            className="btn-primary"
          >
            Contactar ventas
          </button>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={selectedPlan !== null}
        onClose={() => setSelectedPlan(null)}
        planName={selectedPlan?.name}
      />
    </section>
  );
};

export default Pricing; 