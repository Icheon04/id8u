import {Suspense} from "react";

import {prismaClient} from "@/lib/prisma/prismaClient";
import {Address} from "@/lib/schema/addressBodySchema";

import {GoogleMapsAddressCards} from "@/components/GoogleMapsAddressCard/cards";
import SkeletonCards from "@/components/GoogleMapsAddressCard/skeletonCards";

export default async function WhatFood() {
  const {prismaApi} = prismaClient();

  const data = await prismaApi().address.findMany({
    where: {
      category: "restaurant",
    }
  }) as Address[];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="text-center">
        <h1 className="max-sm:text-lg">Dans quel restaurant tu souhaiterais manger ? </h1>
        <p>Je te mets des suggestions juste en bas, mais descends en fin de page si tu as une idée</p>
      </div>
      <Suspense fallback={<SkeletonCards/>}>
        <GoogleMapsAddressCards data={data} redirectUrl="/what-activity" placeKeyQuery="placeFoodId"/>
      </Suspense>
    </main>
  );
};
