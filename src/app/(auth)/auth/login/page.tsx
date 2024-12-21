import { Metadata } from "next";
import { LogInForm } from "./page.client";

export const metadata: Metadata = {
  title: "Welcome back",
  description: "Sign in to your existing account",
};

export default function Page() {
  return (
    <div>
      <LogInForm />
    </div>
  );
}
