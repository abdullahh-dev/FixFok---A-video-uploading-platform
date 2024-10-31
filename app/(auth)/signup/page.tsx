import SignUpForm from "@/components/Auth/Signup/SignupForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const SignUpPage = () => {
  return (
    <Card className="w-[390px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  );
};

export default SignUpPage;
