"use client";
import React, { useState } from "react";
import FormInput from "./FormInput";
import { EyeClosedIcon, EyeIcon } from "lucide-react";

const FormPasswordField = ({
  type,
  label,
  name,
  placeholder,
}: {
  type: string;
  label: string;
  name: string;
  placeholder: string;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="flex relative w-full">
      <div className="flex-1">
        <FormInput
          type={isVisible ? "text" : type}
          label={label}
          name={name}
          placeholder={placeholder}
        />
      </div>
      <div className="absolute top-[32px] right-2">
        {isVisible ? (
          <EyeClosedIcon
            onClick={() => setIsVisible(false)}
            className="w-5 h-5"
          />
        ) : (
          <EyeIcon onClick={() => setIsVisible(true)} className="w-5 h-5" />
        )}
      </div>
    </div>
  );
};

export default FormPasswordField;
