import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// POST handler for sending emails
export async function POST(request: NextRequest) {
  try {
    // Rate limiting (basic - prevents spam)
    // In production, use a proper rate limiting solution like upstash/ratelimit
    
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL || smtpUser;

    // Validate environment variables
    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error('Missing SMTP configuration in environment variables');
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 503 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      // For debugging in development
      ...(process.env.NODE_ENV === 'development' && {
        tls: {
          rejectUnauthorized: false, // Only in development
        },
      }),
    });

    // Sanitize input to prevent email header injection
    const sanitize = (text: string) => text.replace(/[\r\n]/g, ' ').trim();
    
    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedSubject = sanitize(subject || 'No subject');
    const sanitizedMessage = sanitize(message);

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: recipientEmail,
      subject: `Portfolio: ${sanitizedSubject}`,
      replyTo: sanitizedEmail,
      text: `
New contact form submission:

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Subject: ${sanitizedSubject}
Message: ${sanitizedMessage}

---
Sent from portfolio contact form
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; border-radius: 8px; }
    .label { font-weight: bold; color: #667eea; margin-top: 10px; }
    .value { margin-bottom: 15px; padding: 10px; background: white; border-radius: 4px; }
    .footer { text-align: center; padding: 10px; font-size: 12px; color: #666; margin-top: 20px; }
    .subject-tag { display: inline-block; background: #667eea; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>🔔 New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="label">Name:</div>
      <div class="value">${sanitizedName}</div>
      
      <div class="label">Email:</div>
      <div class="value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div>
      
      <div class="label">Subject:</div>
      <div class="value"><span class="subject-tag">${sanitizedSubject}</span></div>
      
      <div class="label">Message:</div>
      <div class="value" style="white-space: pre-wrap;">${sanitizedMessage}</div>
    </div>
    <div class="footer">
      <p>Sent from portfolio contact form</p>
      <p>${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);

    // Handle specific nodemailer errors
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { success: false, message: 'Email authentication failed. Check credentials.' },
          { status: 401 }
        );
      }
      if (error.message.includes('ENOENT') || error.message.includes('ECONNREFUSED')) {
        return NextResponse.json(
          { success: false, message: 'Could not connect to email server.' },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

// GET handler for testing
export async function GET() {
  return NextResponse.json(
    { 
      status: 'ok', 
      message: 'Email API is running',
      info: 'Use POST request to send emails'
    },
    { status: 200 }
  );
}
