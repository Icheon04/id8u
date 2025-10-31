"use client";

import {useRouter, useSearchParams} from "next/navigation";
import * as React from "react";

import {sendDateResponse} from "@/lib/api/api";
import {DateResponseType} from "@/lib/schema/dateResponseSchema";

import {Button} from "@/components/ui/button";

function SubmitRequest(){
  const router = useRouter();
  const searchParams = useSearchParams();
  const response: DateResponseType = {
    date: searchParams.get("date") ?? "undefined",
    activityPlaceGoogleMapsId: searchParams.get("placeActivityId")  ?? "undefined",
    foodPlaceGoogleMapsId: searchParams.get("placeFoodId") ?? "undefined",
    flower: searchParams.get("flower") ?? "undefined",
  }

  const onClick = async () => {
    await sendDateResponse(response)
    router.push("/summary/see-you-soon")
  }

  return <Button onClick={onClick}>Soumettre mon choix</Button>;
}

export default SubmitRequest;