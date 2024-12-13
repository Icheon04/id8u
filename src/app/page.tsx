'use client';

import * as React from 'react';
import '@/lib/env';
import Button from "@/components/buttons/Button";
import {useRouter} from "next/navigation";

export default function HomePage() {
  const router = useRouter()
  return (
    <main>
        <h1>Veux tu faire un tête à tête avec moi ?</h1>
        <Button className={"green"} onClick={() => {router.push("/which-day")}}>Oui</Button>
        <Button className={"red"} onClick={() => {router.push("/are-you-sure")}}>Non</Button>
    </main>
  );
}
