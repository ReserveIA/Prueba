import emailjs from '@emailjs/browser';

// Inicializar EmailJS
emailjs.init("41xmXYsZmk72k39hM");

export const sendEmail = async (formData) => {
  try {
    // Verificar que el servicio esté disponible
    const serviceID = 'service_m2l3cqn';
    const templateID = 'template_itmwx9u';

    console.log('Verificando configuración de EmailJS:', {
      publicKey: "41xmXYsZmk72k39hM",
      serviceID,
      templateID
    });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: formData.email, // ← Esta línea es nueva
      company: formData.company,
      phone: formData.phone,
      plan: formData.plan || 'Prueba Gratuita',
      to_name: 'Equipo ReserveIA',
    };

    console.log('Enviando email con parámetros:', templateParams);

    const response = await emailjs.send(
      serviceID,
      templateID,
      templateParams
    );

    console.log('Respuesta de EmailJS:', response);
    return { success: true, data: response };
  } catch (error) {
    console.error('Error detallado de EmailJS:', {
      message: error.message,
      text: error.text,
      status: error.status,
      stack: error.stack
    });
    return { 
      success: false, 
      error: {
        message: error.message,
        text: error.text,
        status: error.status
      }
    };
  }
}; 