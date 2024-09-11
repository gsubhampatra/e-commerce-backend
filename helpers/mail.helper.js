import mailer from "../config/email.js";

const sendVerificationEmail = async (email, token) => {
    const verificationUrl = `${process.env.BASE_URL}/api/auth/verify-email/${token}`;
  
    await mailer.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Verify Your Email',
      html: `Please click <a href="${verificationUrl}">here</a> to verify your email.`,
    });
  };
  
  const sendPasswordResetEmail = async (email, token) => {
    const resetUrl = `${process.env.BASE_URL}/api/auth/reset-password/${token}`;
  
    await mailer.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Reset Your Password',
      html: `Please click <a href="${resetUrl}">here</a> to reset your password.`,
    });
  };

export  { sendVerificationEmail, sendPasswordResetEmail };