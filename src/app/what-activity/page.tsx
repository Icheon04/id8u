import * as React from "react";
import {Suspense} from "react";

import {prismaClient} from "@/lib/prisma/prismaClient";
import {Address} from "@/lib/schema/addressBodySchema";

import {GoogleMapsAddressCards} from "@/components/GoogleMapsAddressCard/cards";
import SkeletonCards from "@/components/GoogleMapsAddressCard/skeletonCards";

export default async function HomePage()  {
  const {prismaApi} = prismaClient();

  const data = await prismaApi().address.findMany({
    where: {
      category: "activity",
    }
  }) as Address[];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="text-center mx-2">
        <h1>Peut être que tu voudrais faire une activitée ? </h1>
        <p>Ça nous permettra de nous apprendre un peu plus comme ça !</p>
      </div>
      <Suspense fallback={<SkeletonCards/>}>
        <GoogleMapsAddressCards data={data} redirectUrl="/what-about-you" placeKeyQuery="placeActivityId"/>
      </Suspense>
    </main>
  );
}
