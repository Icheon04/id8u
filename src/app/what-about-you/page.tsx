"use client";

import {FlowerCarousel} from "@/components/carousel/flowerCarousel";

export default function WhatAboutYouPage() {
  return (
    <main>
      <h1>Et dernière question...</h1>

      <h2>Quel bouquet choisirais tu ?</h2>
      <div className={"items-center justify-center"}>
        <FlowerCarousel className={"m-14"}/>
      </div>
    </main>
  );
}
