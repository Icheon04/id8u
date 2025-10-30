import * as React from "react";
import {Suspense} from "react";

import {CardDataType} from "@/components/GoogleMapsAddressCard/card";
import {GoogleMapsAddressCards} from "@/components/GoogleMapsAddressCard/cards";

export default function HomePage()  {
  const data: CardDataType[] = [{
    title: "L'activité",
    address: {
      street: "Quelque part",
      district: "dans le 10e arrondissemnt peut être",
      location: "à Paris"
    },
    rating: 4,
    googleMapsUrl: "https://maps.app.goo.gl/Mj8omnVuQ57ctYZ76",
    googleMapsId: "0",
    pictureUrl: "none",
  }, {
    title: "L'activité 2",
    address: {
      street: "Quelque part",
      district: "dans le 10e arrondissemnt peut être",
      location: "à Paris"
    },
    rating: 4,
    googleMapsUrl: "https://maps.app.goo.gl/Mj8omnVuQ57ctYZ76",
    googleMapsId: "0",
    pictureUrl: "none",
  }];

  return (
    <main className="flex justify-center">
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 w-fit">
        <h1>Peut être que tu voudrais faire une activitée ? </h1>
        <p>Ce qu'il y a en étoile c'est que j'aurais aimé faire</p>
        <Suspense>
          <GoogleMapsAddressCards data={data} redirectUrl="/what-about-you" placeKeyQuery="placeActivityId"/>
        </Suspense>
      </div>
    </main>
  );
}
