'use client';

import {useRouter} from "next/navigation";
import * as React from 'react';
import '@/lib/env';

import Button from "@/components/buttons/Button";
import {Spinner} from "@/components/ui/spinner";

export default function HomePage() {
  const router = useRouter()
  const [clicked, setClicked] = React.useState<boolean>(false);

  function onClick(path: string) {
    setClicked(true);
    router.push(path);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="max-sm:text-xl">Hey ! Un petit tête à tête ça te dit ?</h1>
      <div className="flex gap-4">
        { clicked ? (<Spinner/>) :
          (
            <>
              <Button className="green" onClick={() => {onClick("/which-day")}}>Oui</Button>
              <Button className="red" onClick={() => {onClick("/are-you-sure")}}>Non</Button>
            </>
          )
      }
      </div>
    </main>
  );
}
