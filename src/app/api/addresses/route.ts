import { withAccelerate } from '@prisma/extension-accelerate'
import {NextResponse} from "next/server";

import { PrismaClient } from '@/lib/prisma/generated/prisma-client'
import {addressBodySchema} from "@/lib/schema/addressBodySchema";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const prisma = new PrismaClient().$extends(withAccelerate());

export async function POST(req: Request){
  const data = await req.json();
  const result = addressBodySchema.safeParse(data);

  if (result.success) {
    const address = await prisma.address.create({
      data: {
        title : result.data.title,
        category : result.data.category,
        description : result.data.description,
        street : result.data.street,
        mapsUrl : result. data.mapsUrl,
      }
    })
    return NextResponse.json(address, {status: 201});
  } else {
    return NextResponse.json({message: "Check your request body"}, {status: 400})
  }
}
