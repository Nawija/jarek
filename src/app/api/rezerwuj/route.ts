// app/api/routers.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    const { name, email, type, features, budget, additionalInfo } =
        await request.json();

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
        subject: `Nowa Wycena ${type} od ${name}`,
        text: `
        Imię: ${name}
        Email: ${email}
        Typ Strony: ${type}
        Funkcjonalności: ${features.join(", ")}
        Budżet: ${budget}
        Dodatkowe Informacje: ${additionalInfo}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({
            message: "Quote request sent successfully",
        });
    } catch (error) {
        return NextResponse.json(
            { message: "Failed to send quote request" },
            { status: 500 }
        );
    }
}
