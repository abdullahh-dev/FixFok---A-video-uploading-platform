"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../../ui/form";
import FormInput from "../../ui/Input/FormInput";

const SignUpForm = () => {
  const formSchema = z.object({
    username: z
      .string()
      .min(2, "Username must be atleast 2 characters")
      .max(40),
    email: z.string().email("Enter a valid email address"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const { handleSubmit } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <FormInput
            label="Username"
            name="username"
            placeholder="Enter username"
          />
          <FormInput label="Email" name="email" placeholder="Enter email" />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
