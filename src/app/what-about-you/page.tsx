import { Suspense } from 'react';
import * as React from "react";

import {FlowerCarousel} from "@/components/carousel/flowerCarousel";

export default function WhatAboutYouPage() {
   return (
     <main className="flex p-5 justify-center">
       <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1>Et dernière question...</h1>
        <h2>Quel bouquet de fleur choisirais tu ?</h2>
        <div className="items-center justify-center">
          <div className="w-full max-w-5xl px-4">
            <Suspense>
              <FlowerCarousel className="m-14"/>
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
  }
