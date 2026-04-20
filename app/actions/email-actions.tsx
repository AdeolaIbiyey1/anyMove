"use server";

import { Resend } from "resend";
import { QuoteEmailTemplate } from "@/components/emails/QuoteEmailTemplate";
import { ContactEmailTemplate } from "@/components/emails/ContactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT_EMAIL = "laseraglobal@gmail.com";

export async function sendQuoteEmail(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  moveType: string;
  homeSize: string;
  moveDate: string;
  fromAddress: string;
  toAddress: string;
  additionalServices: string[];
  specialInstructions?: string;
}) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured.");
    }

    const { data, error } = await resend.emails.send({
      from: "AnyMove Ireland <onboarding@resend.dev>",
      to: [RECIPIENT_EMAIL],
      replyTo: formData.email,
      subject: `New Quote Request: ${formData.moveType} from ${formData.firstName} ${formData.lastName}`,
      html: QuoteEmailTemplate(formData),
    });

    if (error) {
      console.error("Resend Error (Quote):", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Server Action Exception (Quote):", err);
    return { success: false, error: err.message || "Failed to send email." };
  }
}

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured.");
    }

    const { data, error } = await resend.emails.send({
      from: "AnyMove Ireland <onboarding@resend.dev>",
      to: [RECIPIENT_EMAIL],
      replyTo: formData.email,
      subject: `New Contact Inquiry: ${formData.subject} from ${formData.name}`,
      html: ContactEmailTemplate(formData),
    });

    if (error) {
      console.error("Resend Error (Contact):", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Server Action Exception (Contact):", err);
    return { success: false, error: err.message || "Failed to send email." };
  }
}
