"use client";

import {useRouter} from "next/navigation";
import * as React from "react";

import Button from "@/components/buttons/Button";

export default function AreYouSure() {
  const router = useRouter();

  return(
    <main>
      <h1>Donc c'est vraiment un non?</h1>
      <Button className="green" onClick={() => {router.push("/which-day")}}>Oui</Button>
      <Button className="red" onClick={() => {router.push("/are-you-sure/bye-bye")}}>Non</Button>
    </main>
  )
}
