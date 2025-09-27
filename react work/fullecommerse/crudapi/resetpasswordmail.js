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

async function resetPasswordConfirmation(admin_email,admin_username,resetUrl) {
  try {
    const mailOptions = {
      from: '"Your Startup" <gateece493@gmail.com>',
      to: admin_email,
      subject: "Reset Your Password 🔑",
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px; background:#f9f9f9;">
      <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:10px; text-align:center;">
        <h2>Password Reset Request</h2>
        <p>Hi ${admin_username},</p>
        <p>You requested a password reset. Click the button below to set a new password:</p>
        <a href="${resetUrl}" style="display:inline-block; margin:20px 0; background:#4CAF50; color:white; padding:12px 20px; text-decoration:none; border-radius:5px;">
          Reset Password
        </a>
        <p>If you did not request this, ignore this email.</p>
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



module.exports = resetPasswordConfirmation;
 