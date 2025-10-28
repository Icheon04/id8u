import Link from "next/link";
import {Suspense} from "react";

import {CardDataType} from "@/components/GoogleMapsAddressCard/card";
import {GoogleMapsAddressCards} from "@/components/GoogleMapsAddressCard/cards";

import ClientSearch from "@/app/client-search";

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
      <main>
        <Link href={{pathname: "/which-day"}}>Back</Link>
        <h1>Dans quel restaurant tu souhaiterais manger ? </h1>
        <p>Je te mets des suggestions juste en bas, mais descends en fin de page si tu as une idée</p>
        <Suspense>
          <GoogleMapsAddressCards data={data} redirectUrl="/what-activity" placeKeyQuery="placeFoodId"/>
        </Suspense>
      </main>
    );
};
