// /api/send-email.js  (Vercel serverless function - no Express)
import nodemailer from "nodemailer";

/** Read JSON body safely when not using Express */
async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8") || "{}";
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

const serviceStyles = {
  "Construção Civil": { color: "#E8A341", icon: "🏗️" },
  Remodelação: { color: "#D4941F", icon: "🔨" },
  Pintura: { color: "#C88419", icon: "🎨" },
  Carpintaria: { color: "#B87413", icon: "🪚" },
  Serralharia: { color: "#A8640D", icon: "⚒️" },
  "Manutenção Automotiva": { color: "#985407", icon: "🚗" },
  "Lavagem de Carros": { color: "#884401", icon: "💧" },
  Outro: { color: "#6c757d", icon: "📋" },
};

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || "").trim());
const trim = (s) => (typeof s === "string" ? s.trim() : "");

/** Vercel handler */
export default async function handler(req, res) {
  // CORS
  const allowedOrigin = process.env.ALLOWED_ORIGIN || process.env.VITE_ALLOWED_ORIGIN || "*";
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method === "GET") {
    return res.status(200).json({ status: "ok", message: "Email API is running" });
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = await readJsonBody(req);
    const name = trim(body.name);
    const email = trim(body.email);
    const phone = trim(body.phone);
    const company = trim(body.company);
    const service = trim(body.service);
    const message = trim(body.message);

    // Validate
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Nome, email e mensagem são obrigatórios" });
    }
    if (!isEmail(email)) {
      return res.status(422).json({ error: "E-mail inválido" });
    }

    // Env (supports SMTP_* or legacy VITE_* names)
    const SMTP_HOST = process.env.SMTP_HOST || process.env.VITE_SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT || process.env.VITE_SMTP_PORT || 465);
    const SMTP_USER = process.env.SMTP_USER || process.env.VITE_SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS || process.env.VITE_SMTP_PASS;
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || process.env.VITE_ADMIN_EMAIL;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !ADMIN_EMAIL) {
      return res.status(500).json({
        error: "Configuração SMTP incompleta. Verifique as variáveis de ambiente.",
        details:
          "Requer: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL (ou equivalentes VITE_*).",
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true for 465 (SSL/TLS)
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      // If you hit a CERT error from cPanel, temporarily:
      // tls: { rejectUnauthorized: false },
    });

    const currentDate = new Date().toLocaleString("pt-AO", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const style = serviceStyles[service] || serviceStyles["Outro"];
    const FROM = `"Grupo Girassol" <${SMTP_USER}>`; // sender will be your SMTP user (e.g., no-reply@...)

    // Admin notification email (to suporte)
    const adminMailOptions = {
      from: FROM,
      to: ADMIN_EMAIL, // suporte@grupogirassol.co.ao
      replyTo: email, // reply goes to the customer
      subject: `🔔 Nova Solicitação de Orçamento - ${name}`,
      html: `
        <!DOCTYPE html>
        <html><head><meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #dc3545; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
          .client-info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #dee2e6; }
          .urgent { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px; margin: 20px 0; }
          .message-box { background: #e9ecef; padding: 20px; border-radius: 8px; margin: 15px 0; }
          .badge { display: inline-block; padding: 4px 8px; border-radius: 4px; color: #fff; font-weight: bold; }
        </style></head>
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
                <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
                <p><strong>Empresa:</strong> ${company || "Não informado"}</p>
                <p><strong>Serviço de Interesse:</strong>
                  <span class="badge" style="background:${style.color}">${style.icon} ${service || "Não especificado"}</span>
                </p>
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
        </body></html>
      `,
    };

    // User confirmation email (to customer)
    const userMailOptions = {
      from: FROM,
      to: email,
      subject: "Confirmação de Solicitação - Grupo Girassol",
      html: `
        <!DOCTYPE html>
        <html><head><meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #E8A341, #D4941F); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #E8A341; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          .logo { font-size: 24px; font-weight: bold; }
        </style></head>
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
                <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
                <p><strong>Empresa:</strong> ${company || "Não informado"}</p>
                <p><strong>Serviço:</strong> ${service || "Não especificado"}</p>
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
              <p>© ${new Date().getFullYear()} Grupo Girassol - Construindo o futuro de Angola</p>
            </div>
          </div>
        </body></html>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return res.status(200).json({ success: true, message: "Emails enviados com sucesso!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({
      error: "Falha ao enviar emails",
      details: error?.message || "Erro desconhecido",
    });
  }
}
