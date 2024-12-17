'use client';

import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import * as React from 'react';
import {fr} from "react-day-picker/locale";
import {useForm} from "react-hook-form";
import {z} from "zod";
import '@/lib/env';

import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {Form, FormField} from "@/components/ui/form";
import {useState} from "react";

const DateSchema = z.object({
  date: z.date(),
})

export default function HomePage() {
  const router = useRouter()
  const [isPicked, setIsPicked] = useState(false);

  const form = useForm<z.infer<typeof DateSchema>>({
    resolver: zodResolver(DateSchema),
  })

  const onSubmit = (data: z.infer<typeof DateSchema>) => {
    const selectedDate = data.date.toLocaleDateString();
    const queries = new URLSearchParams({date: selectedDate});
    router.push(`/what-food?${queries}`)
   }

  return (
    <main>
      <h1>Quel jour t'arrangerait le mieux ?</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="date"
            control={form.control}
            render={({field}) => (
              <Calendar
                mode="single"
                locale={fr}
                weekStartsOn={1}
                selected={field.value}
                onSelect={(value) => {
                  value ? setIsPicked(true) : setIsPicked(false)
                  field.onChange(value)
                }}
                disabled={(date) => date < new Date()}
              />
            )}/>
          <Button type="submit" disabled={!isPicked}>
            {isPicked ? "J'ai choisi ma date, à table !" : "Aïe, il faut choisir une date"}
          </Button>
        </form>
      </Form>
    </main>
  );
}
