import LoginForm from "@/components/Auth/Login/LoginForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <Card className="w-[390px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <small className="text-center text-sm text-muted-foreground mt-2 block font-medium leading-none">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline dark:text-white">
            Signup
          </Link>
        </small>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
