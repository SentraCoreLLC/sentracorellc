import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@3.5.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  honeypot?: string;
}

// HTML escape function to prevent XSS
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Validation function
function validateInput(data: ContactEmailRequest): { valid: boolean; error?: string } {
  // Check honeypot field (should be empty)
  if (data.honeypot && data.honeypot.length > 0) {
    return { valid: false, error: "Invalid submission" };
  }

  // Validate required fields
  if (!data.name || data.name.trim().length === 0 || data.name.length > 100) {
    return { valid: false, error: "Invalid name" };
  }

  if (!data.email || data.email.trim().length === 0 || data.email.length > 255) {
    return { valid: false, error: "Invalid email" };
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, error: "Invalid email format" };
  }

  if (!data.message || data.message.trim().length === 0 || data.message.length > 2000) {
    return { valid: false, error: "Invalid message" };
  }

  // Validate optional fields
  if (data.company && data.company.length > 100) {
    return { valid: false, error: "Invalid company name" };
  }

  if (data.phone && data.phone.length > 20) {
    return { valid: false, error: "Invalid phone number" };
  }

  return { valid: true };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, phone, message, honeypot }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission from:", email);

    // Validate input
    const validation = validateInput({ name, email, company, phone, message, honeypot });
    if (!validation.valid) {
      console.error("Validation failed:", validation.error);
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize all inputs by escaping HTML
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeCompany = company ? escapeHtml(company.trim()) : "N/A";
    const safePhone = phone ? escapeHtml(phone.trim()) : "N/A";
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>');

    console.log("Sending contact email from:", safeName, safeEmail);

    // Send email to company
    const emailResponse = await resend.emails.send({
      from: "SentraCore Contact <onboarding@resend.dev>",
      to: ["info@sentracorellc.com"],
      cc: ["tatendachitanda6@gmail.com"],
      reply_to: email,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <h3>Message:</h3>
        <p>${safeMessage}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
