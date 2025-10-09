export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export const sendContactEmails = async (formData: ContactFormData) => {
  try {
    // Use our local API endpoint
    const apiEndpoint = '/api/send-email';
    
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Falha ao enviar emails');
    }

    return {
      success: true,
      message: result.message
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Falha ao enviar emails. Verifique sua conexão e tente novamente.');
  }
};