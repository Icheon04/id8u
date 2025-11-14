"use client";

import {useRouter} from "next/navigation";
import * as React from "react";

import Button from "@/components/buttons/Button";
import {Spinner} from "@/components/ui/spinner";

export default function AreYouSure() {
  const router = useRouter();
  const [clicked, setClicked] = React.useState(false);

  function onClick(path: string){
    setClicked(true);
    router.push(path)
  }

  return(
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="max-sm:text-xl">Donc c'est vraiment un non?</h1>
      <div className="flex gap-4">
        { clicked ? (<Spinner/>) : (
        <>
          <Button className="green" onClick={() => {onClick("/are-you-sure/bye-bye")}}>Oui</Button>
          <Button className="red" onClick={() => {onClick("/which-day")}}>Non</Button>
        </>
        )}
      </div>
    </main>
  )
}
