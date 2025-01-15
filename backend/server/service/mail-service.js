import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
  throw new Error(
    "SMTP_USER and SMTP_PASSWORD must be defined in the .env file"
  );
}

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Временно отключаем проверку сертификатов
      },
    });
  }

  async sendActivationMail(to, link) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to,
      subject: "Активация аккаунта",
      html: `<p>Для активации перейдите по ссылке: <a href="${link}">${link}</a></p>`,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log("Письмо отправлено:", info.response);
    } catch (error) {
      console.error("Ошибка отправки письма:", error);
      throw new Error("Не удалось отправить письмо.");
    }
  }
}

export default new MailService();
