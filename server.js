// server.js
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 3001);

/* ------------------------------ CORS & JSON ------------------------------ */
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || process.env.VITE_ALLOWED_ORIGIN || "*",
    methods: ["POST", "OPTIONS", "GET"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));

/* ---------------------------- Small utilities ---------------------------- */
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || "").trim());
const trimOrEmpty = (s) => (typeof s === "string" ? s.trim() : "");

/* ------------------------------ Health check ----------------------------- */
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Email API is running" });
});

/* ----------------------------- Preflight (CORS) -------------------------- */
app.options("/api/send-email", (_req, res) => res.status(200).end());

/* --------------------------------- Route --------------------------------- */
app.post("/api/send-email", async (req, res) => {
  try {
    // Destructure & sanitize
    const name = trimOrEmpty(req.body?.name);
    const email = trimOrEmpty(req.body?.email);
    const phone = trimOrEmpty(req.body?.phone);
    const company = trimOrEmpty(req.body?.company);
    const service = trimOrEmpty(req.body?.service);
    const message = trimOrEmpty(req.body?.message);

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Nome, email e mensagem são obrigatórios" });
    }
    if (!isEmail(email)) {
      return res.status(422).json({ error: "E-mail inválido" });
    }

    // Service styling (used in admin email)
    const serviceStyles = {
      "Construção Civil": { color: "#E8A341", icon: "🏗️" },
      "Remodelação": { color: "#D4941F", icon: "🔨" },
      "Pintura": { color: "#C88419", icon: "🎨" },
      "Carpintaria": { color: "#B87413", icon: "🪚" },
      "Serralharia": { color: "#A8640D", icon: "⚒️" },
      "Manutenção Automotiva": { color: "#985407", icon: "🚗" },
      "Lavagem de Carros": { color: "#884401", icon: "💧" },
      "Outro": { color: "#6c757d", icon: "📋" },
    };
    const style = serviceStyles[service] || serviceStyles["Outro"];

    // Env (supports SMTP_* or legacy VITE_* names)
    const SMTP_HOST = process.env.SMTP_HOST || process.env.VITE_SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT || process.env.VITE_SMTP_PORT || 465);
    const SMTP_USER = process.env.SMTP_USER || process.env.VITE_SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS || process.env.VITE_SMTP_PASS;
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || process.env.VITE_ADMIN_EMAIL;

    const missing = [];
    if (!SMTP_HOST) missing.push("SMTP_HOST/VITE_SMTP_HOST");
    if (!SMTP_PORT) missing.push("SMTP_PORT/VITE_SMTP_PORT");
    if (!SMTP_USER) missing.push("SMTP_USER/VITE_SMTP_USER");
    if (!SMTP_PASS) missing.push("SMTP_PASS/VITE_SMTP_PASS");
    if (!ADMIN_EMAIL) missing.push("ADMIN_EMAIL/VITE_ADMIN_EMAIL");
    if (missing.length) {
      return res.status(500).json({
        error:
          "Configuração SMTP incompleta. Defina as variáveis de ambiente requeridas.",
        details: `Faltando: ${missing.join(", ")}`,
      });
    }

    // Transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT, // 465 for SSL/TLS
      secure: SMTP_PORT === 465, // true if 465
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      // If your mail server uses a self-signed cert and you see CERT errors,
      // temporarily uncomment next line to confirm path, then fix cert/DNS:
      // tls: { rejectUnauthorized: false },
    });

    const currentDate = new Date().toLocaleString("pt-AO", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    /* --------------------------- Admin notification --------------------------- */
    const adminMailOptions = {
      from: `"Grupo Girassol Website" <${SMTP_USER}>`, // shows no-reply/no-replay as sender
      to: ADMIN_EMAIL, // suporte@grupogirassol.co.ao
      replyTo: email, // replying goes to the customer
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
              <div style="background:#d4edda;border:1px solid #c3e6cb;padding:15px;border-radius:8px;margin:20px 0;">
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

    /* ----------------------------- User confirmation ---------------------------- */
    const userMailOptions = {
      from: `"Grupo Girassol" <${SMTP_USER}>`, // shows no-reply/no-replay as sender
      to: email,
      // If you want user replies to go to suporte, uncomment:
      // replyTo: ADMIN_EMAIL,
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
              <p>Obrigado por entrar em contato com o Grupo Girassol.</p>
              <p>Recebemos sua solicitação em <strong>${currentDate}</strong> com os seguintes detalhes:</p>
              <div class="info-box">
                <h4>📋 Detalhes da Solicitação:</h4>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
                <p><strong>Empresa:</strong> ${company || "Não informado"}</p>
                <p><strong>Serviço:</strong> ${service || "Não especificado"}</p>
                <p><strong>Descrição do Projeto:</strong></p>
                <p style="background:#f5f5f5;padding:15px;border-radius:4px;font-style:italic;">${message}</p>
              </div>
              <div class="info-box" style="border-left-color:#28a745;">
                <h4>✅ Próximos Passos:</h4>
                <ul>
                  <li>Nossa equipe técnica analisará sua solicitação</li>
                  <li>Entraremos em contato em até <strong>24 horas</strong></li>
                  <li>Agendaremos uma reunião se necessário</li>
                  <li>Apresentaremos uma proposta personalizada</li>
                </ul>
              </div>
              <div class="info-box" style="border-left-color:#17a2b8;">
                <h4>📞 Contatos Diretos:</h4>
                <p><strong>Telefones:</strong> (+244) 945-537-787 | (+244) 945-537-677</p>
                <p><strong>E-mail:</strong> geral@grupogirassol.co.ao</p>
                <p><strong>Endereço:</strong> Centralidade Kilamba, Edifício Z2, Apt 33, Luanda</p>
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
});

/* ------------------------------- Start server ------------------------------ */
app.listen(PORT, () => {
  console.log(`✅ Email API server running on http://localhost:${PORT}`);
  console.log(`📧 SMTP configured: ${(process.env.SMTP_HOST || process.env.VITE_SMTP_HOST) || "undefined"}:${(process.env.SMTP_PORT || process.env.VITE_SMTP_PORT) || "undefined"}`);
});
