import { Suspense } from 'react';

import {FlowerCarousel} from "@/components/carousel/flowerCarousel";

export default function WhatAboutYouPage({searchParams}: {
    searchParams: Promise<{ q?: string }>}
) {
   return (
    <main>
      <h1>Et dernière question...</h1>
      <h2>Quel bouquet de fleur choisirais tu ?</h2>
      <div className="items-center justify-center">
        <Suspense>
          <FlowerCarousel className="m-14"/>
        </Suspense>
      </div>
    </main>
  );
  }
