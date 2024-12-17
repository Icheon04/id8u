import {DateResponseType} from "@/lib/schema/dateResponseSchema";

export const sendDateResponse = async (data: DateResponseType) => fetch(
  "/api/date", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    }
  }
)
