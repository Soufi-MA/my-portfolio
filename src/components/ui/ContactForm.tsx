"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./textarea";
import { getDictionary } from "@/app/[lang]/dictionaries";

const ContactForm = ({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: dict.contact.errorMessages.name.min,
    }),
    email: z.string().email(dict.contact.errorMessages.email.invalid),
    message: z
      .string()
      .min(10, {
        message: dict.contact.errorMessages.message.min,
      })
      .max(160, {
        message: dict.contact.errorMessages.message.max,
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-[1000px] mx-auto w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={dict.contact.placeholders.name}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={dict.contact.placeholders.email}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder={dict.contact.placeholders.message}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          {dict.contact.send}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
