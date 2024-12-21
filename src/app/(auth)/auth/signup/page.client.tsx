"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormValues, signUpValidation } from "./signup.validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { authClient } from "~/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const SignUpForm: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpValidation),
  });
  const router = useRouter();
  const onSubmit = async (values: SignUpFormValues) => {
    const { email, name, password } = values;
    await authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onRequest: () => setLoading(true),
        onSuccess: () => router.replace("/"),
        onResponse: () => setLoading(false),
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      },
    );
  };
  return (
    <div className="grid gap-6">
      <form onSubmit={form.handleSubmit(() => onSubmit(form.getValues()))}>
        <Form {...form}>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="please enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="please enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              {loading ? "Loading..." : "Create Account"}
            </Button>
          </div>
        </Form>
      </form>
    </div>
  );
};
