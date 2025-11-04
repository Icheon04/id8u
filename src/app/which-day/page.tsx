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

const DateSchema = z.object({
  date: z.date().optional(),
})

export default function HomePage() {
  const router = useRouter()

  const [date, setDate] = React.useState<Date | undefined>(new Date(new Date().setDate(new Date().getDate() + 1)))
  const form = useForm<z.infer<typeof DateSchema>>({
    resolver: zodResolver(DateSchema),
    values: {date},
  })

  const onSubmit = () => {
    const selectedDate = date?.toLocaleDateString() ?? new Date().toLocaleDateString();
    const queries = new URLSearchParams({date: selectedDate});
    router.push(`/what-food?${queries}`)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1>Ahhh, quel jour t'arrangerait le mieux ?</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center p-4">
          <FormField
            name="date"
            control={form.control}
            render={({field}) => (
              <Calendar
                mode="single"
                locale={fr}
                selected = {date}
                onSelect={(value) => {
                  setDate(value)
                  field.onChange(value)
                }}
                disabled={(date) => date < new Date()}
                className="rounded-lg border mb-4 [--day:--spacing()] max-sm:[--cell-size:40px] md:[--cell-size:50px]"
              />
            )}/>
          <Button type="submit" disabled={!date}>
            {date ? "J'ai choisi ma date, à table !" : "Aïe il faut choisir une date"}
          </Button>
        </form>
      </Form>
    </main>
  );
}
