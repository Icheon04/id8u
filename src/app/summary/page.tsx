"use client";

import * as React from "react";
import {Button} from "@/components/ui/button";
import {sendDateResponse} from "@/lib/api/api";
import {useRouter, useSearchParams} from "next/navigation";
import {DateResponseType} from "@/lib/schema/dateResponseSchema";

export default function Summary() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const response: DateResponseType = {
    date: searchParams.get("date") ?? "undefined",
    foodPlaceGoogleMapsId: searchParams.get("placeFoodId") ?? "undefined",
    activityPlaceGoogleMapsId: searchParams.get("placeActivityId")  ?? "undefined",
    flower: searchParams.get("flower") ?? "undefined",
  }

  const onClick = async () => {
    await sendDateResponse(response)
    router.push("/summary/see-you-soon")
  }

  return (
    <main>
      <h1>Résumé du rendez-vous</h1>
      <h2>La date</h2>
      <h2>Le restaurant</h2>
      <h2>L'activité</h2>
      <Button onClick={onClick}>Soumettre mon choix</Button>
    </main>
  );
}
