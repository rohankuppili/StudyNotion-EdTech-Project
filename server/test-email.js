const nodemailer = require("nodemailer");
require("dotenv").config();

async function testEmailConfig() {
  console.log("Testing email configuration...");
  console.log("MAIL_HOST:", process.env.MAIL_HOST);
  console.log("MAIL_USER:", process.env.MAIL_USER);
  console.log("MAIL_PASS:", process.env.MAIL_PASS ? "***configured***" : "NOT SET");

  try {
    let transporter = nodemailer.createTransporter({
      host: process.env.MAIL_HOST,
      port: 587,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    });

    // Verify connection
    console.log("Verifying SMTP connection...");
    await transporter.verify();
    console.log("✅ SMTP connection verified successfully");

    // Send test email
    console.log("Sending test email...");
    let info = await transporter.sendMail({
      from: `"StudyNotion Test" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER, // Send to yourself for testing
      subject: "Test Email - OTP Configuration",
      html: `<h2>Test OTP: 123456</h2><p>If you receive this email, your configuration is working!</p>`,
    });

    console.log("✅ Test email sent successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);
  } catch (error) {
    console.error("❌ Email configuration error:");
    console.error("Error type:", error.code || error.name);
    console.error("Error message:", error.message);
    
    // Common Gmail issues
    if (error.code === "EAUTH") {
      console.error("\n🔧 Possible solutions:");
      console.error("1. Enable 2-factor authentication on Gmail");
      console.error("2. Generate App Password (not regular password)");
      console.error("3. Use the 16-character app password in MAIL_PASS");
    }
    
    if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
      console.error("\n🔧 Possible solutions:");
      console.error("1. Check internet connection");
      console.error("2. Try different SMTP port (465 with secure: true)");
      console.error("3. Check firewall/antivirus blocking SMTP");
    }
  }
}

testEmailConfig();
