import {NextResponse} from "next/server";

import {ResendApi} from "@/lib/mailer/resend";

export async function POST(req: Request){
  const data = await req.json();
  const emailerApi = new ResendApi();

  const msg = {
    to: process.env.EMAIL_RECEIVER ?? "name@email.com",
    from: process.env.EMAIL_SENDER ?? "name@email.com",
    subject: "YOU HAVE A DATE!!!",
    text: "Lucky you, someone just submit a date with you",
    html: JSON.stringify(data, null, 2),
  };

  try {
    await emailerApi.send(msg);
    return NextResponse.json({message:"success"});
  } catch(e) {
    const error = e as Error;
    return NextResponse.json({message: error.message })
  }
}