import nodemailer from "nodemailer";

const email_sender = process.env.EMAIL_SENDER;
const email_receiver = process.env.EMAIL_RECEIVER;
const pass = process.env.EMAIL_PRIVATE_KEY;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email_sender,
    pass,
  },
});

export const mailOptions = {
  from: email_sender,
  to: email_receiver,
}
