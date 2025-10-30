'use client';

import {useRouter} from "next/navigation";
import * as React from 'react';
import '@/lib/env';

import Button from "@/components/buttons/Button";

export default function HomePage() {
  const router = useRouter()
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1>Hey ! Un petit tête à tête ça te dit ?</h1>
      <div className="flex gap-4">
        <Button className="green" onClick={() => {router.push("/which-day")}}>Oui</Button>
        <Button className="red" onClick={() => {router.push("/are-you-sure")}}>Non</Button>
      </div>
    </main>
  );
}
