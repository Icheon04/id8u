import {Address} from "@/lib/schema/addressBodySchema";

import {GoogleMapsAddressCard} from "@/components/GoogleMapsAddressCard/card";

export function GoogleMapsAddressCards({data, redirectUrl, placeKeyQuery}: Readonly<{
  data: Address[],
  redirectUrl: string,
  placeKeyQuery: string,
}>) {

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {data.map((address, index) => {
        return (
          <div key={index} className="w-fit">
            <GoogleMapsAddressCard data={address} redirectUrl={redirectUrl} placeKeyQuery={placeKeyQuery}/>
          </div>
        )
      })}
    </div>
  )
}
