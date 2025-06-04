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
      title: 'AI-Powered Intelligence',
      description: 'Machine learning algorithms that understand your business patterns and optimize booking availability automatically.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Dynamic calendar management with intelligent conflict resolution and optimal time slot recommendations.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Multi-Business Support',
      description: 'Seamlessly manage reservations across restaurants, salons, clinics, hotels, and any service-based business.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights into booking trends, customer behavior, and business performance metrics.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Multi-language support, timezone handling, and currency conversion for international businesses.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, GDPR compliance, and advanced security measures to protect your data.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-second response times with 99.9% uptime guarantee for uninterrupted service.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: MessageSquare,
      title: 'Automated Communication',
      description: 'Smart notifications, reminders, and personalized messages to keep customers engaged.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Your AI assistant never sleeps - accept bookings and manage reservations around the clock.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Secure payment processing with support for deposits, cancellations, and refund management.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Intelligent alert system that notifies staff and customers at the right time with relevant information.',
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect experience across all devices with dedicated mobile apps for staff and customers.',
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
            Powerful Features for
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Modern Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your reservation management into a competitive advantage.
            Our AI-powered platform grows with your business.
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
              Ready to experience the future of reservations?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using AI ReserveManager to streamline their operations and delight their customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 