import {CardDataType, GoogleMapsAddressCard} from "@/components/GoogleMapsAddressCard/card";
import {ReadonlyURLSearchParams} from "next/navigation";

export function GoogleMapsAddressCards({data, redirectUrl, placeKeyQuery}: Readonly<{
  data: CardDataType[],
  redirectUrl: string,
  placeKeyQuery: string,
}>) {

  return (
    <>
      {data.map((address, index) => {
        return (
          <div key={index} className={"m-5"}>
            <GoogleMapsAddressCard data={address} redirectUrl={redirectUrl} placeKeyQuery={placeKeyQuery}/>
          </div>
        )
      })}
    </>
  )
}
