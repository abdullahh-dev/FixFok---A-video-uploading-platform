import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface AuthCardProps {
  title: string;
  children: React.ReactNode;
  footerLabel: string;
  footerLinkLabel: string;
  footerLinkHref: string;
}

const AuthCard = ({
  title,
  children,
  footerLabel,
  footerLinkLabel,
  footerLinkHref,
}: AuthCardProps) => {
  return (
    <Card className="w-[390px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
        <small className="text-center text-sm text-muted-foreground mt-2 block font-medium leading-none">
          {footerLabel}{" "}
          <Link href={footerLinkHref} className="underline dark:text-white">
            {footerLinkLabel}
          </Link>
        </small>
      </CardContent>
    </Card>
  );
};

export default AuthCard;
