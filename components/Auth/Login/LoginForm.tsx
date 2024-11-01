"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../../ui/form";
import FormInput from "../../ui/Input/FormInput";
import FormPasswordField from "@/components/ui/Input/FormPasswordField";
import { LoginFormSchema } from "@/Schema/AuthSchema";
import { z } from "zod";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: undefined,
      password: "",
    },
  });

  const { handleSubmit } = form;

  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-[6px]">
          <FormInput
            type="string"
            label="Username"
            name="username"
            placeholder="Enter username"
          />

          <FormPasswordField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter Password"
          />
        </div>
        <Button className="w-full" type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
