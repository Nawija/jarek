import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: "seovileo@gmail.com",
        subject: `${name} -- ${email}`,
        text: `${name}\n${email}\n\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: "Email sent successfully" });
    } catch (error) {
        return NextResponse.json(
            { error: "Error sending email" },
            { status: 500 }
        );
    }
}
