"use client";

import {useRouter} from "next/navigation";
import * as React from "react";

import {apiClient} from "@/lib/api/apiClient";

import {Button} from "@/components/ui/button";

function SubmitRequest({data} : {data: any}){
  const {sendDateRequest} = apiClient();
  const router = useRouter();

  const onClick = async () => {
    await sendDateRequest({
      date: data.date,
      restaurant: data.restaurant,
      restaurantMapsUrl: data.restaurantMapsUrl,
      activity: data.activity,
      activityMapsUrl: data.activityMapsUrl,
      flower: data.flower,
    })
    router.push("/summary/see-you-soon")
  }

  return <Button onClick={onClick}>Soumettre mon choix</Button>;
}

export default SubmitRequest;