export function QuoteEmailTemplate(props: {
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
}): string {
  const services =
    props.additionalServices.length > 0
      ? props.additionalServices.join(", ")
      : "No additional services selected.";

  const specialBlock = props.specialInstructions
    ? `<div style="background-color:#fffbe6;padding:20px;border:1px solid #ffe58f;border-radius:8px;margin-bottom:20px">
        <h3 style="color:#856404">Special Instructions</h3>
        <p>${props.specialInstructions}</p>
       </div>`
    : "";

  return `
    <div style="font-family:sans-serif;color:#333;line-height:1.6">
      <h2 style="color:#003366">New Moving Quote Request</h2>
      <p>A new quote request has been submitted through the AnyMove Ireland website.</p>

      <div style="background-color:#f9f9f9;padding:20px;border-radius:8px;margin-bottom:20px">
        <h3 style="border-bottom:1px solid #ddd;padding-bottom:10px">Customer Information</h3>
        <p><strong>Name:</strong> ${props.firstName} ${props.lastName}</p>
        <p><strong>Email:</strong> ${props.email}</p>
        <p><strong>Phone:</strong> ${props.phone}</p>
      </div>

      <div style="background-color:#f9f9f9;padding:20px;border-radius:8px;margin-bottom:20px">
        <h3 style="border-bottom:1px solid #ddd;padding-bottom:10px">Move Details</h3>
        <p><strong>Type of Move:</strong> ${props.moveType}</p>
        <p><strong>Home/Office Size:</strong> ${props.homeSize}</p>
        <p><strong>Preferred Date:</strong> ${props.moveDate}</p>
      </div>

      <div style="background-color:#f9f9f9;padding:20px;border-radius:8px;margin-bottom:20px">
        <h3 style="border-bottom:1px solid #ddd;padding-bottom:10px">Locations</h3>
        <p><strong>Moving From:</strong> ${props.fromAddress}</p>
        <p><strong>Moving To:</strong> ${props.toAddress}</p>
      </div>

      <div style="background-color:#f9f9f9;padding:20px;border-radius:8px;margin-bottom:20px">
        <h3 style="border-bottom:1px solid #ddd;padding-bottom:10px">Additional Services</h3>
        <p>${services}</p>
      </div>

      ${specialBlock}

      <hr style="border:0;border-top:1px solid #eee;margin:30px 0" />
      <p style="font-size:12px;color:#666">
        This email was sent automatically from the AnyMove Ireland website quote form.
      </p>
    </div>
  `;
}
