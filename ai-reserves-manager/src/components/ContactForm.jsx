import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, Building, Phone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from '../context/FormContext';
import { useState } from 'react';
import { sendEmail } from '../config/email';

const ContactForm = () => {
  const { isFormOpen, selectedPlan, closeForm } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Agregar el plan seleccionado a los datos
    if (selectedPlan) {
      data.plan = selectedPlan.name;
    }

    data.to_email = data.email;

    try {
      const result = await sendEmail(data);
      
      if (result.success) {
        setSubmitStatus('success');
        // Cerrar el formulario después de 2 segundos
        setTimeout(() => {
          closeForm();
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error?.text || result.error?.message || 'Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Error al enviar el formulario');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-100">
              <button
                onClick={closeForm}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                disabled={isSubmitting}
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedPlan ? `Comienza tu prueba de ${selectedPlan.name}` : 'Comienza tu prueba gratuita'}
              </h3>
              <p className="text-gray-600 mt-2">
                Completa el formulario y te contactaremos para configurar tu cuenta.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                    placeholder="Juan Pérez"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Empresa
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                    placeholder="Mi Empresa S.A."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                    placeholder="+57 300 123 4567"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:bg-primary-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      ¡Enviado con éxito!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Error al enviar
                    </>
                  ) : (
                    'Comenzar prueba gratuita'
                  )}
                </button>
              </div>

              {submitStatus === 'error' && (
                <div className="text-sm text-red-600 text-center space-y-2">
                  <p>Hubo un error al enviar el formulario.</p>
                  {errorMessage && (
                    <p className="text-xs bg-red-50 p-2 rounded">
                      {errorMessage}
                    </p>
                  )}
                  <p>Por favor, intenta nuevamente.</p>
                </div>
              )}

              <p className="text-sm text-gray-500 text-center mt-4">
                Al enviar este formulario, aceptas nuestros{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  términos y condiciones
                </a>
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm; 