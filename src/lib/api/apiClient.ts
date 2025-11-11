import ky from "ky";

import {DateRequestType} from "@/lib/schema/dateRequestSchema";

export function apiClient(){
  const prefixUrl = process.env.NEXT_PUBLIC_APP_API_URL ?? "http://localhost:3030/api/"
  const kyClient = ky.create({
    prefixUrl,
  });

  async function sendDateRequest(data: DateRequestType){
    await kyClient.post("dates", {
      json: data
    })
  }

  return {sendDateRequest}
}