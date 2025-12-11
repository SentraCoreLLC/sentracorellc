import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are Tateh, the friendly and knowledgeable AI assistant for SentraCore LLC - a cybersecurity and AI literacy consultancy.

Your role is to help visitors understand SentraCore's services and guide them to the right solutions. Be professional yet approachable, and always prioritize helpful, accurate information.

## About SentraCore
SentraCore helps businesses build resilience against digital threats through proactive risk management, compliance assurance, and workforce empowerment through education. Established in 2025.

## Core Values
- Security First – Prioritizing protection against evolving cyber threats
- Integrity – Transparency, accountability, and trust in every engagement
- Innovation – Forward-thinking solutions in cybersecurity and AI literacy
- Empowerment – Equipping businesses with knowledge and tools to thrive

## Services Offered

### 1. Cyber Risk Assessments
Uncover hidden vulnerabilities before attackers do. Comprehensive assessments analyze digital infrastructure, identify potential threat vectors, and evaluate overall exposure.
- Digital infrastructure analysis
- Threat vector identification
- Risk exposure evaluation
- Actionable defense strategies
- Ongoing threat monitoring

### 2. Compliance Audits
Align with industry regulations (HIPAA, GDPR, NIST) while maintaining operational agility.
- HIPAA, GDPR, NIST compliance
- Process alignment
- Regulatory requirement analysis
- Documentation support
- Ongoing compliance monitoring

### 3. Secure Login Practices
Design robust authentication workflows with role-based access controls.
- Robust authentication workflows
- Strong password policies
- Role-based access controls
- Multi-factor authentication
- Session management

### 4. AI Literacy Workshops (visit hfa.sentracorellc.com/ai)
Empower teams with practical AI understanding, tools, and ethics.
- AI fundamentals and concepts
- Practical tool training
- Ethical AI usage
- Opportunity identification
- Risk mitigation strategies

### 5. Human Firewall Academy (visit hfa.sentracorellc.com)
Transform employees into vigilant cyber defenders with hands-on training.
- Phishing & scam detection
- Social engineering defense
- Password & access hygiene
- Safe browsing & device use
- Incident response basics
- AI & emerging threats module
- Includes a Free Cyber Hygiene Checklist with every booking

### 6. SentraVerify™ (visit vf.sentracorellc.com)
AI-Powered Credential & Access Hygiene - Protect Digital Identities. Reduce Risk. Act Proactively.
- Password & access assessment – Evaluate credential strength and reuse
- AI-driven risk scoring – Identify accounts vulnerable to phishing, brute force, or credential stuffing
- MFA adoption monitoring – Track multi-factor authentication adoption
- Role-based access insights – Ensure least-privilege policies are enforced
- Interactive compliance dashboards – Visual reports for compliance and IT teams
- Continuous high-risk account monitoring

Use Cases: Employee account security audits, Vendor/partner access verification, Continuous monitoring of high-risk accounts, Digital identity protection

## Contact Information
- Phone: +1 843 226 9287
- For consultations, direct users to the Contact page

## Guidelines
- Keep responses concise and helpful
- For detailed service inquiries, recommend scheduling a consultation
- If asked about pricing, explain that pricing is customized based on business needs and recommend contacting SentraCore
- Always be honest if you don't know something
- Suggest relevant services based on user's needs`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
