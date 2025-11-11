import {withAccelerate} from "@prisma/extension-accelerate";

import {PrismaClient} from "@/lib/prisma/generated/prisma-client";

export function prismaClient() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const prisma = new PrismaClient().$extends(withAccelerate());

  function prismaApi(){
    return prisma;
  }

  return {prismaApi}
}