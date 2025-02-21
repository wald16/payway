# Email Sender with Nodemailer & Gmail

This project allows sending HTML emails using Nodemailer and Gmail SMTP.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/email-sender.git
   cd email-sender
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Gmail SMTP:
   - Enable "App Passwords" in your Gmail account: [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Generate an App Password and use it in `server.js`.

## Sending an Email

1. Modify `email.html` for your email content.
2. Run the script:
   ```bash
   node server.js
   ```
3. Check your inbox.

## Troubleshooting

- Ensure you are using an App Password, not your Gmail password.
- If images don’t load, check that the image URLs or CID references are correct.
- If emails don’t send, verify your SMTP credentials.

## License

This project is open-source under the MIT License.

