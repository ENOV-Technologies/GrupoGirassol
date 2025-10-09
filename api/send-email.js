const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nome, email e mensagem são obrigatórios' });
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.VITE_SMTP_HOST,
      port: parseInt(process.env.VITE_SMTP_PORT),
      secure: true, // true for 465
      auth: {
        user: process.env.VITE_SMTP_USER,
        pass: process.env.VITE_SMTP_PASS,
      },
    });

    const currentDate = new Date().toLocaleDateString('pt-AO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Get service-specific styling and icon
    const getServiceStyle = (serviceName) => {
      const serviceMap = {
        'Construção Civil': { color: '#dc3545', icon: '🏗️' },
        'Projetos Residenciais': { color: '#28a745', icon: '🏠' },
        'Projetos Comerciais e Industriais': { color: '#007bff', icon: '🏢' },
        'Fiscalização e Gestão de Obras': { color: '#6f42c1', icon: '📋' },
        'Obras de Infraestrutura': { color: '#fd7e14', icon: '🛣️' },
        'Mecânica e Eletrônica Automotiva': { color: '#20c997', icon: '🔧' },
        'Bate-Chapa e Pintura': { color: '#e83e8c', icon: '🎨' },
        'Serviços Especiais Automotivos': { color: '#17a2b8', icon: '🚗' },
        'Outros': { color: '#6c757d', icon: '📦' }
      };
      return serviceMap[serviceName] || serviceMap['Outros'];
    };

    const serviceStyle = getServiceStyle(service);

    // Admin notification email with prominent service display
    const adminMailOptions = {
      from: `\"Grupo Girassol Website\" <${process.env.VITE_SMTP_USER}>`,
      to: process.env.VITE_ADMIN_EMAIL,
      subject: `${serviceStyle.icon} Nova Solicitação: ${service || 'Serviço Não Especificado'} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: ${serviceStyle.color}; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .service-highlight { 
              background: linear-gradient(135deg, ${serviceStyle.color}, ${serviceStyle.color}dd); 
              color: white; 
              padding: 25px; 
              border-radius: 12px; 
              margin: 20px 0; 
              text-align: center;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .service-icon { font-size: 48px; margin-bottom: 10px; }
            .client-info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #dee2e6; }
            .urgent { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .message-box { background: #e9ecef; padding: 20px; border-radius: 8px; margin: 15px 0; }
            .signature { 
              background: linear-gradient(135deg, #E8A341, #D4941F); 
              color: white; 
              padding: 25px; 
              border-radius: 8px; 
              margin: 30px 0 0 0;
              text-align: center;
            }
            .signature-divider { border-top: 2px solid rgba(255,255,255,0.3); margin: 15px 0; }
            .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px; text-align: left; }
            .contact-item { font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🚨 NOVA SOLICITAÇÃO DE ORÇAMENTO</h2>
              <p>Recebida em ${currentDate}</p>
            </div>
            <div class="content">
              <div class="urgent">
                <strong>⏰ AÇÃO NECESSÁRIA:</strong> Responder em até 24 horas
              </div>
              
              <div class="service-highlight">
                <div class="service-icon">${serviceStyle.icon}</div>
                <h2 style="margin: 10px 0; font-size: 28px;">SERVIÇO SOLICITADO</h2>
                <h3 style="margin: 10px 0; font-size: 24px; font-weight: bold;">${service || 'Não Especificado'}</h3>
              </div>
              
              <div class="client-info">
                <h3>👤 Informações do Cliente:</h3>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
                <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
              </div>

              <div class="message-box">
                <h4>💬 Descrição do Projeto:</h4>
                <p style="font-style: italic; white-space: pre-wrap;">${message}</p>
              </div>

              <div style="background: #d4edda; border: 1px solid #c3e6cb; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h4>📋 Próximas Ações Sugeridas:</h4>
                <ul>
                  <li>Analisar o projeto e viabilidade para <strong>${service}</strong></li>
                  <li>Preparar orçamento preliminar específico</li>
                  <li>Agendar reunião/visita técnica</li>
                  <li>Responder ao cliente em até 24h</li>
                </ul>
              </div>
            </div>
            
            <div class="signature">
              <h3 style="margin: 0 0 10px 0; font-size: 24px;">🌻 GRUPO GIRASSOL</h3>
              <p style="margin: 5px 0; font-size: 16px; font-weight: 500;">Construindo o Futuro de Angola</p>
              <div class="signature-divider"></div>
              <div class="contact-grid">
                <div class="contact-item">📞 <strong>Tel:</strong> (+244) 945-537-787</div>
                <div class="contact-item">📱 <strong>Tel:</strong> (+244) 945-537-677</div>
                <div class="contact-item">✉️ <strong>Email:</strong> geral@grupogirassol.co.ao</div>
                <div class="contact-item">🌐 <strong>Web:</strong> www.grupogirassol.co.ao</div>
              </div>
              <div class="signature-divider"></div>
              <p style="margin: 10px 0 0 0; font-size: 13px;">📍 Centralidade Kilamba, Edificio Z2, Apt 33, Luanda - Angola</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // User confirmation email with service emphasis
    const userMailOptions = {
      from: `\"Grupo Girassol\" <${process.env.VITE_SMTP_USER}>`,
      to: email,
      subject: `${serviceStyle.icon} Confirmação: ${service || 'Sua Solicitação'} - Grupo Girassol`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #E8A341, #D4941F); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .service-box { 
              background: linear-gradient(135deg, ${serviceStyle.color}, ${serviceStyle.color}dd); 
              color: white; 
              padding: 20px; 
              border-radius: 12px; 
              margin: 20px 0; 
              text-align: center;
            }
            .service-icon { font-size: 40px; margin-bottom: 10px; }
            .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #E8A341; }
            .logo { font-size: 24px; font-weight: bold; }
            .signature { 
              background: linear-gradient(135deg, #E8A341, #D4941F); 
              color: white; 
              padding: 30px; 
              border-radius: 8px; 
              margin: 30px 0 0 0;
              text-align: center;
            }
            .signature-name { font-size: 18px; font-weight: bold; margin: 15px 0 5px 0; }
            .signature-title { font-size: 14px; font-style: italic; margin: 0 0 15px 0; opacity: 0.9; }
            .signature-divider { border-top: 2px solid rgba(255,255,255,0.3); margin: 15px 0; }
            .contact-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 12px; 
              margin-top: 15px; 
              text-align: left;
              font-size: 14px;
            }
            .contact-item { display: flex; align-items: center; }
            .social-links { margin-top: 15px; }
            .social-links a { 
              color: white; 
              text-decoration: none; 
              margin: 0 10px; 
              font-size: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">🌻 GRUPO GIRASSOL</div>
              <h2>Confirmação de Solicitação</h2>
            </div>
            <div class="content">
              <h3>Olá ${name}!</h3>
              <p>Obrigado por entrar em contato com o Grupo Girassol!</p>
              
              <div class="service-box">
                <div class="service-icon">${serviceStyle.icon}</div>
                <h3 style="margin: 10px 0;">Serviço Solicitado</h3>
                <h2 style="margin: 10px 0; font-size: 24px;">${service || 'Não Especificado'}</h2>
              </div>
              
              <p>Recebemos sua solicitação em <strong>${currentDate}</strong> com os seguintes detalhes:</p>
              
              <div class="info-box">
                <h4>📋 Detalhes da Solicitação:</h4>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
                <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
                <p><strong>Serviço:</strong> <span style="background: ${serviceStyle.color}; color: white; padding: 4px 12px; border-radius: 4px; display: inline-block;">${serviceStyle.icon} ${service || 'Não especificado'}</span></p>
                <p><strong>Descrição do Projeto:</strong></p>
                <p style="background: #f5f5f5; padding: 15px; border-radius: 4px; font-style: italic;">${message}</p>
              </div>

              <div class="info-box" style="border-left-color: #28a745;">
                <h4>✅ Próximos Passos:</h4>
                <ul>
                  <li>Nossa equipe especializada em <strong>${service}</strong> analisará sua solicitação</li>
                  <li>Entraremos em contato em até <strong>24 horas</strong></li>
                  <li>Agendaremos uma reunião se necessário</li>
                  <li>Apresentaremos uma proposta personalizada</li>
                </ul>
              </div>

              <p style="margin-top: 30px;">Atenciosamente,</p>
            </div>
            
            <div class="signature">
              <h3 style="margin: 0 0 5px 0; font-size: 26px;">🌻 GRUPO GIRASSOL</h3>
              <p style="margin: 0 0 5px 0; font-size: 16px; font-weight: 500;">Construindo o Futuro de Angola</p>
              <p style="margin: 0; font-size: 13px; opacity: 0.9;">Excelência em Construção Civil e Serviços Automotivos</p>
              
              <div class="signature-divider"></div>
              
              <div class="signature-name">Equipe de Atendimento</div>
              <div class="signature-title">Departamento Comercial</div>
              
              <div class="signature-divider"></div>
              
              <div class="contact-grid">
                <div class="contact-item">📞 (+244) 945-537-787</div>
                <div class="contact-item">📱 (+244) 945-537-677</div>
                <div class="contact-item">✉️ geral@grupogirassol.co.ao</div>
                <div class="contact-item">🌐 www.grupogirassol.co.ao</div>
              </div>
              
              <div class="signature-divider"></div>
              
              <p style="margin: 10px 0 0 0; font-size: 13px;">📍 Centralidade Kilamba, Edificio Z2, Apt 33<br>Luanda - Angola</p>
              
              <p style="margin: 15px 0 0 0; font-size: 11px; opacity: 0.8;">
                Este e-mail é confidencial e destinado exclusivamente ao destinatário.<br>
                Se você recebeu esta mensagem por engano, por favor, notifique-nos imediatamente.
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    res.status(200).json({ 
      success: true, 
      message: 'Emails enviados com sucesso!' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      error: 'Falha ao enviar emails', 
      details: error.message 
    });
  }
}