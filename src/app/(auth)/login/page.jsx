"use client";

import Link from "next/link";
import Image from "next/image";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { authClient } from "@/lib/auth-client";
import { Toast, toast } from '@heroui/react';


export default function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const handleLogin = async (data) => {
    console.log(data);

    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({

      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",

    })

    console.log(error);

    if (error) {
      toast.danger("Access Denied", {
        description: error.message || "Invalid credentials provided.",
        position: "bottom"
      });
    }

    if (res) {
      toast.success("Authentication Successful", {
        description: "Welcome to Larana",
        position: "bottom"
      });

      setTimeout(() => {
        router.push("/");
      }, 1500);
    }


  }

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }


  return (
    <div className="flex h-[90vh] md:h-screen w-full bg-white">

      <div className="relative hidden w-1/2 lg:block">
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
          alt="Medical professional in a modern clinic"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute bottom-12 left-12 right-12 text-white">
          <h2 className="text-3xl font-bold mb-2">Elevating Healthcare.</h2>
          <p className="text-white/80 text-lg">
            Join the trust of thousands of patients managing their health effortlessly.
          </p>
        </div>
      </div>


      <div className="flex w-full flex-col items-center justify-center p-8 sm:p-12 lg:w-1/2">
        <div className="flex w-full max-w-md flex-col gap-8">
          <div className="flex flex-col items-start gap-2 md:mt-10">
            <Link href="/" className="mb-4">
              <Image
                src={'/logo.png'}
                alt='Larana logo'
                width={110}
                height={30}
                priority
                className="object-contain"
              />
            </Link>
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
              Welcome back
            </h1>
            <p className="text-gray-500 font-medium">
              Please enter your details to sign in.
            </p>
          </div>


          <Form className="flex max-w-[95%] md:w-96 flex-col gap-4" onSubmit={handleSubmit(handleLogin)}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="font-semibold mb-1">Email</Label>
              <Input placeholder="larana@doc.com" {...register("email", { required: "Email is required" })}/>
              <FieldError />
            </TextField>


            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
              className="mb-2"
            >
              <Label className="font-semibold mb-1">Password</Label>
              <Input placeholder="Enter your password" {...register("password", { required: "Password is required" })}/>
              <FieldError />
            </TextField>


            <div className="flex gap-2">
              <Button type="submit" className="bg-[#0066ff] font-bold">
                <Check />
                Log In
              </Button>
              <Button type="reset" variant="secondary">
                Reset Credentials
              </Button>
            </div>
          </Form>


          <div className="flex flex-col gap-4 -mt-2.5">
            <div className="relative flex items-center">
              <div className="grow border-t border-gray-200"></div>
              <span className="shrink-0 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                Or continue with
              </span>
              <div className="grow border-t border-gray-200"></div>
            </div>

            <Button className="w-full py-5" variant="tertiary" onClick={handleGoogleSignIn}>
              <Icon icon="devicon:google" />
              Sign in with Google
            </Button>
          </div>

          <p className="text-center text-sm text-gray-500 font-medium">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-extrabold text-[#0066FF] hover:underline">
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}