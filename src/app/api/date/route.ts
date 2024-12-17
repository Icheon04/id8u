import {dateResponseSchema} from "@/lib/schema/dateResponseSchema";
import {NextResponse} from "next/server";
import {mailOptions, transporter} from "@/lib/mailer/nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  const result = dateResponseSchema.safeParse(data)
  if (result.success) {

    try{
      await transporter.sendMail({
        ...mailOptions,
        subject: "YOU HAVE A DATE!!!",
        text: "Lucky you, someone just submit a date with you",
        html: JSON.stringify(result.data)
      })

      return NextResponse.json(result.data);
    }catch(e) {
      console.error(e);
      const error = e as Error;
      return NextResponse.json({message: error.message })
    }
  } else {
    return NextResponse.json({message: "Check your request body"}, {status: 400})
  }
}
