// 1. ELEGIR SI ENVIAR email.html o email-animated.html
// 2. ELEGIR A QUIEN LE ENVIAS EL MAIL
// 3. ELEGIR EL ASUNTO DEL MAIL
// 4. ESCRIBIR node .\send_email.js  EN LA CONSOLA ABAJO Y DAR ENTER

const nodemailer = require("nodemailer");
const fs = require("fs");

const emailHtml = fs.readFileSync("email-animated.html", "utf8");  // email.html = estático, email-animated.html = animado

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "manuwald16@gmail.com",
        pass: "bipdgzrvmdxfdjgm"
    }
});

let mailOptions = {
    from: '"Manuel" <manuwald16@gmail.com>',
    to: "manuwald16@gmail.com", // cambiar a mail que le querés mandar
    subject: "SEXO", // cambiar asunto
    html: emailHtml
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log("Error sending email:", error);
    }
    console.log("Email sent: %s", info.response);
});


