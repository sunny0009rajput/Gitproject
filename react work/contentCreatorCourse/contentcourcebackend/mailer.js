const nodemailer = require("nodemailer");

const node_password = process.env.NODEMAILER_PASWWORD;
const mail_sender = process.env.SMTP_USER_SENDER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: mail_sender, 
    pass: node_password, // ⚠️ must be Gmail app password, not your login password
  }
});

async function sendOrderConfirmation(userEmail, customerName, product_name) {
  try {
    const mailOptions = {
      from: '"Your Startup" <gateece493@gmail.com>',
      to: userEmail,
      subject: "Order Successful 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; background:#f9f9f9; padding:20px;">
          <div style="max-width:600px; margin:auto; background:white; border-radius:10px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1)">
            <div style="background:#4CAF50; padding:15px; text-align:center; color:white; font-size:20px;">
              ✅ Order Confirmation
            </div>
            <div style="padding:20px; color:#333;">
              <h2>Hi ${customerName},</h2>
              <p>Thank you for shopping with <strong>Your Startup</strong> 🎉</p>
              <p>Your order <strong>#${product_name}</strong> has been placed successfully.</p>
              
              <div style="margin:20px 0; text-align:center;">
                <a href="https://yourstartup.com/orders/${product_name}" 
                   style="background:#4CAF50; color:white; padding:12px 20px; text-decoration:none; border-radius:5px;">
                  View Your Order
                </a>
              </div>
              
              <p style="font-size:14px; color:#777;">If you have any questions, reply to this email or contact our support.</p>
            </div>
            <div style="background:#eee; text-align:center; padding:10px; font-size:12px; color:#555;">
              © 2025 Your Startup, All rights reserved.
            </div>
          </div>
        </div>
      `
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
  } catch (err) {
    console.error("❌ Error sending email:", err);
  }
}



module.exports = sendOrderConfirmation;
