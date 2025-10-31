import {NextResponse} from "next/server";

import {Sendgrid} from "@/lib/mailer/sendgrid";
import {dateResponseSchema} from "@/lib/schema/dateResponseSchema";

export async function POST(req: Request){
  const data = await req.json();
  const result = dateResponseSchema.safeParse(data);
  const sendgridApi = new Sendgrid();

  const msg = {
    to: process.env.EMAIL_RECEIVER ?? "name@email.com",
    from: process.env.EMAIL_SENDER ?? "name@email.com",
    subject: "YOU HAVE A DATE!!!",
    text: "Lucky you, someone just submit a date with you",
    html: JSON.stringify(result.data, null, 2),
  };

  if (result.success) {
    try {
      await sendgridApi.send(msg);
      return NextResponse.json({message:"success"});
    } catch(e) {
      const error = e as Error;
      return NextResponse.json({message: error.message })
    }
  } else {
    return NextResponse.json({message: "Check your request body"}, {status: 400})
  }
}