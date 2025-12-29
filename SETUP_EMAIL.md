# Email Setup Guide

The contact form now supports real email sending using Nodemailer. Here's how to set it up:

## Quick Setup

1. **Open the environment file**:
   ```bash
   # If you don't have one, create it:
   touch .env.local
   ```

2. **Configure your email provider**:

   ### Option 1: Gmail (Recommended)
   
   1. Go to [Google Account Security](https://myaccount.google.com/security)
   2. Enable **2-Factor Authentication** (required)
   3. Generate an **App Password**:
      - Go to: https://myaccount.google.com/apppasswords
      - Select "Mail" and "Other (Custom Name)"
      - Name it "Portfolio Contact Form"
      - Copy the generated password (16 characters)
   
   2. **Add to .env.local**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_SECURE=false
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

   ### Option 2: Outlook/Hotmail
   
   ```env
   SMTP_HOST=smtp.office365.com
   SMTP_PORT=587
   SMTP_USER=your-email@outlook.com
   SMTP_PASS=your-password
   SMTP_SECURE=false
   RECIPIENT_EMAIL=your-email@outlook.com
   ```

   ### Option 3: Yahoo
   
   ```env
   SMTP_HOST=smtp.mail.yahoo.com
   SMTP_PORT=587
   SMTP_USER=your-email@yahoo.com
   SMTP_PASS=your-password
   SMTP_SECURE=false
   ```

   ### Option 4: SendGrid (Recommended for Production)
   
   1. Sign up at [SendGrid](https://signup.sendgrid.com)
   2. Create an API Key (not a password)
   3. **Add to .env.local**:
   ```env
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=your-sendgrid-api-key
   SMTP_SECURE=false
   ```

   ### Option 5: Mailgun
   
   ```env
   SMTP_HOST=smtp.mailgun.org
   SMTP_PORT=587
   SMTP_USER=your-username
   SMTP_PASS=your-api-key
   ```

## Testing

### 1. Test the API endpoint directly:
```bash
curl -X POST http://localhost:3000/api/send \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","subject":"Test","message":"Hello World"}'
```

### 2. Test via the contact form:
- Start development server: `npm run dev`
- Go to http://localhost:3000/contact
- Fill out and submit the form
- Check your email inbox

## Troubleshooting

### Common Issues:

1. **"Email authentication failed"**
   - Verify your credentials
   - Gmail: Make sure you use App Password, not regular password
   - Enable 2FA on your email account

2. **"Could not connect to email server"**
   - Check your internet connection
   - Verify SMTP host and port
   - Some ISPs block SMTP ports

3. **"Invalid login"**
   - Email/password incorrect
   - Gmail: 2FA not enabled
   - Gmail: App password not generated

4. **Emails going to spam**
   - Use your own domain (not @gmail.com)
   - Set up SPF/DKIM records
   - Use a professional email service

## Security Notes

⚠️ **Important Security Considerations**:

1. **Never commit `.env.local` to git**
   - It's already in `.gitignore`
   - Contains sensitive credentials

2. **Use App Passwords**
   - Never use your main password
   - App passwords can be revoked easily

3. **Rate Limiting**
   - The current API has no rate limiting
   - For production, add rate limiting (see below)

4. **Input Validation**
   - The API validates email format
   - Client-side validation prevents basic errors

## Adding Rate Limiting (Production)

For production, add rate limiting to prevent spam:

```bash
npm install @upstash/ratelimit
```

Add to your API route:

```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '1 h'), // 3 requests per hour per IP
  analytics: true,
});

// In POST handler:
const { success } = await ratelimit.limit(request.ip || 'anonymous');
if (!success) {
  return NextResponse.json(
    { success: false, message: 'Too many requests' },
    { status: 429 }
  );
}
```

## Environment Variables

The API automatically reads these from `.env.local`:

- `SMTP_HOST`: SMTP server hostname
- `SMTP_PORT`: SMTP port (587 for TLS, 465 for SSL)
- `SMTP_USER`: Your email/username
- `SMTP_PASS`: Your password/API key
- `SMTP_SECURE`: 'true' or 'false' (usually 'false' for port 587)
- `RECIPIENT_EMAIL`: Where to send emails (defaults to SMTP_USER)

## Going Live

1. **Deploy to Vercel/Netlify**
2. **Add environment variables** in the hosting dashboard
3. **Test the contact form** with your live URL
4. **Monitor your email** for test messages

## Support

If you need help:
- Check console logs for detailed error messages
- Test with different email providers
- Use a dedicated email service (SendGrid, Mailgun) for better deliverability
