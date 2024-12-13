'use client';

import {useRouter} from "next/navigation";
import * as React from 'react';
import {useForm} from "react-hook-form";
import {z} from "zod";
import '@/lib/env';

import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form} from "@/components/ui/form";

const DateSchema = z.object({
  date: z.date({
    required_error: "Hop hop hop, il faut choisir une date !.",
  }),
})

export default function HomePage() {
  const router = useRouter()

  const form = useForm<z.infer<typeof DateSchema>>({
    resolver: zodResolver(DateSchema),
  })
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const onSubmit = (data: z.infer<typeof DateSchema>) => {
    router.push("/what-food");
    console.log(data);
  }

  return (
    <main>
      <h1>Quel jour t'arrangerait le mieux ?</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            className=""
          />
          <Button type="submit">J'ai choisi ma date ! Passons au restaurant</Button>
        </form>
      </Form>
    </main>
  );
}
