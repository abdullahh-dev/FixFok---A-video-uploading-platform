"use client";

import React from "react";
import {
  FormMessage,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const FormInput = ({
  name,
  placeholder,
  label,
  type,
}: {
  name: string;
  placeholder: string;
  label: string;
  type: string;
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              className={`focus-visible:ring-1 text-sm ${
                errors[name] &&
                "bg-red-600/5 border focus-visible:ring-0 border-red-600 "
              }`}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
