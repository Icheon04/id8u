'use client';

import {CardDataType} from "@/components/GoogleMapsAddressCard/card";
import {GoogleMapsAddressCards} from "@/components/GoogleMapsAddressCard/cards";
import * as React from "react";
import Link from "next/link";

export default function HomePage() {

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
    <main>
      <Link href={{pathname: "/what-food"}}>Back</Link>
      <h1>Peut être que tu voudrais faire une activitée ? </h1>
      <p>Ce qu'il y a en étoile c'est que j'aurais aimé faire</p>
      <GoogleMapsAddressCards data={data} redirectUrl={"/what-about-you"} placeKeyQuery={"placeActivityId"}/>
    </main>
  );
}
