const nodemailer = require("nodemailer");
const fs = require("fs");

const emailHtml = fs.readFileSync("email.html", "utf8");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "manuwald16@gmail.com",
        pass: "ucgfhkqhsoufqvfx"
    }
});

let mailOptions = {
    from: '"Manuel" <manuwald16@gmail.com>',
    to: "javi.cerruti@gmail.com",
    subject: "HTML de Manu",
    html: emailHtml
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log("Error sending email:", error);
    }
    console.log("Email sent: %s", info.response);
});


