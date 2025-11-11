
import {Address} from "@/lib/schema/addressBodySchema";

import {GoogleMapsAddressCard} from "@/components/GoogleMapsAddressCard/card";

export function GoogleMapsAddressCards({data, redirectUrl, placeKeyQuery}: Readonly<{
  data: Address[],
  redirectUrl: string,
  placeKeyQuery: string,
}>) {

  return (
    <>
      {data.map((address, index) => {
        return (
          <div key={index} className="w-full">
            <GoogleMapsAddressCard data={address} redirectUrl={redirectUrl} placeKeyQuery={placeKeyQuery}/>
          </div>
        )
      })}
    </>
  )
}
