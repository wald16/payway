const nodemailer = require("nodemailer");
const fs = require("fs");

// Leer el archivo HTML
const emailHtml = fs.readFileSync("email.html", "utf8");

// Configuración del transportador con Mailtrap SMTP
let transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "35d7f00bb69b06",
        pass: "0e9b90a3f2da0a"
    }
});

let mailOptions = {
    from: '"Manuel" <manuwald16@gmail.com>',
    to: "test@example.com",
    subject: "Test Email from Mailtrap",
    html: emailHtml,
    attachments: [
        {
            filename: "Logo_Payway_mosca.png",
            path: "./Logo_Payway_mosca.png",
            cid: "logo_payway" // El mismo cid usado en el HTML
        },
        {
            filename: "Logo_Payway_con_Claim.png",
            path: "./Logo_Payway_con_Claim.png",
            cid: "logo_Claim"
        },
        {
            filename: "Tasa0_porcentaje.png",
            path: "./Tasa0_porcentaje.png",
            cid: "tasa0"
        },
        {
            filename: "Payway_URL.png",
            path: "./Payway_URL.png",
            cid: "payway_url"
        },
        {
            filename: "Wahtsapp_icono.png",
            path: "./Wahtsapp_icono.png",
            cid: "whatsapp_icon"
        },
        {
            filename: "instagram_icono.png",
            path: "./instagram_icono.png",
            cid: "instagram_icon"
        },
        {
            filename: "YouTube_icono.png",
            path: "./YouTube_icono.png",
            cid: "youtube_icon"
        },
        {
            filename: "LInkeding_icono.png",
            path: "./LInkeding_icono.png",
            cid: "linkedin_icon"
        }
    ]
};

// Enviar el correo
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
});
