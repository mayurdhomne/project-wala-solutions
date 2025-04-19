
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  project: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    const { name, email, project } = formData;

    console.log("Received form data:", { name, email, project });
    
    // Send copy to the user's email (will work even with free tier)
    try {
      const userEmailResponse = await resend.emails.send({
        from: "Lovable <onboarding@resend.dev>", // Using verified Resend sender
        to: [email], // Send to the user who submitted the form
        subject: `We received your contact request - ProjectTwala`,
        html: `
          <h2>Thank you for contacting ProjectTwala!</h2>
          <p>Hello ${name},</p>
          <p>We have received your project request and will get back to you soon.</p>
          <p><strong>Project Requirements Summary:</strong></p>
          <p>${project}</p>
          <p>Best regards,<br>ProjectTwala Team</p>
        `,
      });
      console.log("Confirmation email sent to user:", userEmailResponse);
    } catch (emailError) {
      console.error("Error sending confirmation email to user:", emailError);
      // We continue even if this fails - don't block the whole process
    }
    
    // Store the submission in a log message (since we can't send directly to the target email)
    console.log("⚠️ NEW CONTACT SUBMISSION - Please forward to info.projecttwala@gmail.com:");
    console.log(`From: ${name} (${email})`);
    console.log(`Project Requirements: ${project}`);
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: "Your message has been received. We'll get back to you soon!" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error processing contact request:", error);
    return new Response(
      JSON.stringify({ error: error.message, details: error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
