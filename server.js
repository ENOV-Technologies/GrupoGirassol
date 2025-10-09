const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
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
      secure: false, // true for 465, false for other ports
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

    // Admin notification email
    const adminMailOptions = {
      from: `"Grupo Girassol Website" <${process.env.VITE_SMTP_USER}>`,
      to: process.env.VITE_ADMIN_EMAIL,
      subject: `🔔 Nova Solicitação de Orçamento - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #dc3545; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .client-info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #dee2e6; }
            .urgent { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .message-box { background: #e9ecef; padding: 20px; border-radius: 8px; margin: 15px 0; }
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
              
              <div class="client-info">
                <h3>👤 Informações do Cliente:</h3>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
                <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
                <p><strong>Serviço de Interesse:</strong> <span style="background: #E8A341; color: white; padding: 4px 8px; border-radius: 4px;">${service || 'Não especificado'}</span></p>
              </div>

              <div class="message-box">
                <h4>💬 Descrição do Projeto:</h4>
                <p style="font-style: italic; white-space: pre-wrap;">${message}</p>
              </div>

              <div style="background: #d4edda; border: 1px solid #c3e6cb; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h4>📋 Próximas Ações Sugeridas:</h4>
                <ul>
                  <li>Analisar o projeto e viabilidade</li>
                  <li>Preparar orçamento preliminar</li>
                  <li>Agendar reunião/visita técnica</li>
                  <li>Responder ao cliente em até 24h</li>
                </ul>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // User confirmation email
    const userMailOptions = {
      from: `"Grupo Girassol" <${process.env.VITE_SMTP_USER}>`,
      to: email,
      subject: 'Confirmação de Solicitação - Grupo Girassol',
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
            .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #E8A341; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .logo { font-size: 24px; font-weight: bold; }
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
              
              <p>Recebemos sua solicitação em <strong>${currentDate}</strong> com os seguintes detalhes:</p>
              
              <div class="info-box">
                <h4>📋 Detalhes da Solicitação:</h4>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
                <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
                <p><strong>Serviço:</strong> ${service || 'Não especificado'}</p>
                <p><strong>Descrição do Projeto:</strong></p>
                <p style="background: #f5f5f5; padding: 15px; border-radius: 4px; font-style: italic;">${message}</p>
              </div>

              <div class="info-box" style="border-left-color: #28a745;">
                <h4>✅ Próximos Passos:</h4>
                <ul>
                  <li>Nossa equipe técnica analisará sua solicitação</li>
                  <li>Entraremos em contato em até <strong>24 horas</strong></li>
                  <li>Agendaremos uma reunião se necessário</li>
                  <li>Apresentaremos uma proposta personalizada</li>
                </ul>
              </div>

              <div class="info-box" style="border-left-color: #17a2b8;">
                <h4>📞 Contatos Diretos:</h4>
                <p><strong>Telefones:</strong> (+244) 945-537-787 | (+244) 945-537-677</p>
                <p><strong>E-mail:</strong> geral@grupogirassol.co.ao</p>
                <p><strong>Endereço:</strong> Centralidade Kilamba, Edificio Z2, Apt 33, Luanda</p>
              </div>

              <p>Atenciosamente,<br><strong>Equipe Grupo Girassol</strong></p>
            </div>
            <div class="footer">
              <p>© 2024 Grupo Girassol - Construindo o futuro de Angola</p>
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
});

app.listen(PORT, () => {
  console.log(`Email API server running on port ${PORT}`);
});