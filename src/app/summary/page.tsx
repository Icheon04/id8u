import * as React from "react";
import {Suspense} from "react";

import SubmitRequest from "@/app/summary/SubmitRequest";


export default function Summary({
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
  const placeFoodId = searchParams.placeFoodId;
  const placeActivityId = searchParams.placeActivityId;
  const flower = searchParams.flower;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1>Résumé du rendez-vous</h1>
      <div className="flex items-center gap-4">
        <h2>La date</h2>
        <p>{localDate}</p>
      </div>
      <div className="flex items-center gap-4">
        <h2>Le restaurant</h2>
        <p>{placeFoodId}</p>
      </div>
      <div className="flex items-center gap-4">
        <h2>L'activité</h2>
        <p>{placeActivityId}</p>
      </div>
      <div className="flex items-center gap-4">
        <h2>La fleur</h2>
        <p>{flower}</p>
      </div>
      <Suspense>
        <SubmitRequest/>
      </Suspense>
    </main>
  );
}
