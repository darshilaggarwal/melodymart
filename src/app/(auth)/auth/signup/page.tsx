import { Metadata } from "next";
import { SignUpForm } from "./page.client";

export const metadata: Metadata = {
  title: "Create An Account",
  description: "Sign up for a new account",
};

export default function Page() {
  return (
    <div>
      <SignUpForm />
    </div>
  );
}
