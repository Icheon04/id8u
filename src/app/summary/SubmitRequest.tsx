"use client";

import {useRouter} from "next/navigation";
import * as React from "react";

import {apiClient} from "@/lib/api/apiClient";

import Button from "@/components/buttons/Button";
import {useState} from "react";
import {Spinner} from "@/components/ui/spinner";

function SubmitRequest({data} : {data: any}){
  const [clicked, setClicked] = useState(false);
  const {sendDateRequest} = apiClient();
  const router = useRouter();

  const onClick = async () => {
    setClicked(true);
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

  return (
    <>
    <Button onClick={onClick} className="justify-center min-h-[40px] min-w-[270px]">
      { clicked ? (<Spinner/>) : (
        "Et c'est parti pour le tête à tête !"
      )}
    </Button>
    </>);
}

export default SubmitRequest;