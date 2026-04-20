export function ContactEmailTemplate(props: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): string {
  return `
    <div style="font-family:sans-serif;color:#333;line-height:1.6">
      <h2 style="color:#003366">New Contact Message - ${props.subject}</h2>
      <p>A new message has been submitted through the AnyMove Ireland website contact form.</p>

      <div style="background-color:#f9f9f9;padding:20px;border-radius:8px;margin-bottom:20px">
        <h3 style="border-bottom:1px solid #ddd;padding-bottom:10px">Contact Person</h3>
        <p><strong>Name:</strong> ${props.name}</p>
        <p><strong>Email:</strong> ${props.email}</p>
        <p><strong>Phone:</strong> ${props.phone || "Not provided."}</p>
      </div>

      <div style="background-color:#f9f9f9;padding:20px;border-radius:8px;margin-bottom:20px">
        <h3 style="border-bottom:1px solid #ddd;padding-bottom:10px">Message Details</h3>
        <p><strong>Subject:</strong> ${props.subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;border:1px solid #eee;padding:15px;border-radius:4px;background-color:#fff">
          ${props.message}
        </p>
      </div>

      <hr style="border:0;border-top:1px solid #eee;margin:30px 0" />
      <p style="font-size:12px;color:#666">
        This email was sent automatically from the AnyMove Ireland website contact form.
      </p>
    </div>
  `;
}
