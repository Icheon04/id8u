import {Suspense} from "react";

import {CardDataType} from "@/components/GoogleMapsAddressCard/card";
import {GoogleMapsAddressCards} from "@/components/GoogleMapsAddressCard/cards";
import SkeletonCards from "@/components/GoogleMapsAddressCard/skeletonCards";

export default function WhatFood() {
  const data: CardDataType[] = [{
      title: "Le restau",
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
      title: "Le restau 2",
      address: {
          street: "Quelque part",
          district: "dans le 10e arrondissemnt peut être",
          location: "à Paris"
      },
      rating: 4,
      googleMapsUrl: "https://maps.app.goo.gl/Mj8omnVuQ57ctYZ76",
      googleMapsId: "1",
      pictureUrl: "none",
  }];


  return (
    <main className="flex justify-center">
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 w-fit">
        <h1>Dans quel restaurant tu souhaiterais manger ? </h1>
        <p>Je te mets des suggestions juste en bas, mais descends en fin de page si tu as une idée</p>
        <Suspense fallback={<SkeletonCards/>}>
          <GoogleMapsAddressCards data={data} redirectUrl="/what-activity" placeKeyQuery="placeFoodId"/>
        </Suspense>
      </div>
    </main>
  );
};
