"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../../ui/form";
import FormInput from "../../ui/Input/FormInput";
import FormPasswordField from "@/components/ui/Input/FormPasswordField";
import { SignupFormSchema } from "@/Schema/AuthSchema";
import { z } from "zod";

const SignUpForm = () => {
  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      fullname: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  function onSubmit(values: z.infer<typeof SignupFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-[6px]">
          <FormInput
            type="string"
            label="Name"
            name="fullname"
            placeholder="Enter your name"
          />
          <FormInput
            type="string"
            label="Username"
            name="username"
            placeholder="Enter username"
          />
          <FormInput
            type="string"
            label="Email"
            name="email"
            placeholder="Enter email"
          />
          <FormPasswordField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter Password"
          />
          <FormPasswordField
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Re-enter password"
          />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
