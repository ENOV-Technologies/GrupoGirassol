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

  if (!trimmed.name || trimmed.name.length < 2)
    throw new Error("Informe um nome válido.");
  if (!trimmed.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email))
    throw new Error("Informe um e-mail válido.");
  if (!trimmed.message || trimmed.message.length < 5)
    throw new Error("A mensagem deve ter pelo menos 5 caracteres.");

  return trimmed;
}

export const sendContactEmails = async (
  formData: ContactFormData
): Promise<SendEmailResult> => {
  const data = validate(formData);

  // If API is deployed separately, set VITE_PUBLIC_API_URL=https://api.domain.com
  const base =
    (import.meta as any).env?.VITE_PUBLIC_API_URL?.replace(/\/+$/, "") || "";
  const url = `${base}/api/send-email`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    const text = await res.text();
    const json = text ? JSON.parse(text) : {};

    if (!res.ok) {
      throw new Error(json?.error || json?.message || `Falha (HTTP ${res.status})`);
    }

    return {
      success: Boolean(json?.success),
      message: json?.message || "Emails enviados com sucesso!",
    };
  } catch (err: any) {
    if (err?.name === "AbortError") throw new Error("Tempo de envio esgotado.");
    console.error("Email sending failed:", err);
    throw new Error(err?.message || "Falha ao enviar emails.");
  } finally {
    clearTimeout(timeout);
  }
};
