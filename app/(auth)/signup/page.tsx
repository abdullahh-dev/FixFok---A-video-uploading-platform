import SignUpForm from "@/components/Auth/Signup/SignupForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <Card className="w-[390px]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <SignUpForm />
        <small className="text-center text-sm text-muted-foreground mt-2 block font-medium leading-none">
          Already have an account?{" "}
          <Link href="/login" className="underline dark:text-white">
            Login
          </Link>
        </small>
      </CardContent>
    </Card>
  );
};

export default SignUpPage;
