// src/lib/emailService.ts
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
}

/** Basic client-side validation (no external libs). */
function validate(data: ContactFormData) {
  const trimmed = {
    ...data,
    name: data.name?.trim(),
    email: data.email?.trim(),
    phone: data.phone?.trim() || "",
    company: data.company?.trim() || "",
    service: data.service?.trim() || "",
    message: data.message?.trim(),
  };

  if (!trimmed.name || trimmed.name.length < 2) {
    throw new Error("Informe um nome válido.");
  }
  if (!trimmed.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
    throw new Error("Informe um e-mail válido.");
  }
  if (!trimmed.message || trimmed.message.length < 5) {
    throw new Error("A mensagem deve ter pelo menos 5 caracteres.");
  }
  return trimmed;
}

export const sendContactEmails = async (
  formData: ContactFormData,
): Promise<SendEmailResult> => {
  const data = validate(formData);

  // For production deployment, you'll need to:
  // 1. Deploy the server.js to a hosting service (Vercel, Railway, etc.)
  // 2. Set VITE_PUBLIC_API_URL to your deployed backend URL
  // 3. Ensure SMTP env variables are set on the backend server
  
  const apiUrl = import.meta.env.VITE_PUBLIC_API_URL;
  
  if (!apiUrl) {
    // Development mode - show helpful message
    console.log("📧 Contact Form Submission:", data);
    
    return {
      success: true,
      message: "Formulário validado com sucesso! Para enviar emails reais, configure VITE_PUBLIC_API_URL com o URL do seu backend."
    };
  }

  // Production mode - call actual backend
  const url = `${apiUrl.replace(/\/+$/, "")}/api/send-email`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    const text = await res.text();
    const json = text ? JSON.parse(text) : {};

    if (!res.ok) {
      const msg =
        json?.error ||
        json?.message ||
        `Falha ao enviar emails (HTTP ${res.status})`;
      throw new Error(msg);
    }

    return {
      success: Boolean(json?.success),
      message: json?.message || "Emails enviados com sucesso!",
    };
  } catch (err: any) {
    if (err?.name === "AbortError") {
      throw new Error("Tempo de envio esgotado. Tente novamente.");
    }
    console.error("Email sending failed:", err);
    throw new Error(
      err?.message ||
        "Falha ao enviar emails. Verifique sua conexão e tente novamente.",
    );
  } finally {
    clearTimeout(timeout);
  }
};