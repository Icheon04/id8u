import * as React from "react";
import {Suspense} from "react";

import {Address} from "@/lib/prisma/generated/prisma-client";
import {prismaClient} from "@/lib/prisma/prismaClient";

import SubmitRequest from "@/app/summary/SubmitRequest";


export default async function Summary({
                                  searchParams,
                                }: {
  searchParams: { [key: string]: string | undefined }
}) {
  const date = searchParams.date ?? Date.now();
  const localDate = new Date(date).toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const placeFoodId = searchParams.placeFoodId ?? "Wooow il faut choisir un lieu !";
  const placeActivityId = searchParams.placeActivityId ?? "Wooow il faut choisir un lieu !";
  const flower = searchParams.flower;

  async function retrieveData(addressId: string): Promise<Address | null>{
    const prismaApi = prismaClient().prismaApi();
    return await prismaApi.address.findUnique({
      where: {
        id: addressId,
      }
    });
  }

  // TODO remove null exception
  const restaurantData = await retrieveData(placeFoodId);
  const activityData = await retrieveData(placeActivityId);

  const dataToSend = {
    date: localDate,
    restaurant: `${restaurantData?.title} - ${restaurantData?.street}`,
    restaurantMapsUrl: restaurantData?.mapsUrl,
    activity: `${activityData?.title} - ${activityData?.street}`,
    activityMapsUrl: activityData?.mapsUrl,
    flower,
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1>Résumé du rendez-vous</h1>
      <div className="flex flex-col items-center my-4 gap-4">
        <div className="flex items-baseline gap-4">
          <h2>La date</h2>
          <p>{localDate}</p>
        </div>
        <div className="flex items-baseline gap-4">
          <h2>Le restaurant</h2>
          <p>{`${restaurantData?.title} - ${restaurantData?.street}`}</p>
        </div>
        <div className="flex items-baseline gap-4">
          <h2>L'activité</h2>
          <p>{`${activityData?.title} - ${activityData?.street}`}</p>
        </div>
        <div className="flex items-baseline gap-4">
          <h2>La fleur</h2>
          <p>{flower}</p>
        </div>
      </div>
      <Suspense>
        <SubmitRequest data={dataToSend}/>
      </Suspense>
    </main>
  );
}
