import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth:{
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
});