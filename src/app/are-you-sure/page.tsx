"use client";

import Button from "@/components/buttons/Button";
import * as React from "react";
import {useRouter} from "next/navigation";

export default function AreYouSure() {
  const router = useRouter();

  return(
    <main>
      <h1>Donc c'est vraiment un non?</h1>
      <Button className={"green"} onClick={() => {router.push("/which-day")}}>Oui</Button>
      <Button className={"red"} onClick={() => {router.push("/are-you-sure/bye-bye")}}>Non</Button>
    </main>
  )
}
