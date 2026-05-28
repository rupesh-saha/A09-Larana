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



const RegisterPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const handleRegister = async (data) => {
    console.log(data);

    const { name, url, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({

      name: name, // required
      email: email, // required
      password: password, // required
      image: url,
      callbackURL: "/login",

    })

    console.log(error);

    if (error) {
      toast.danger("Sign Up failed", {
        description: error.message || "Try again. Larana awaits for you",
        position: "bottom"
      });
    }

    if (res) {
      toast.success("Registration Successful", {
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

    toast.success("Registration Successful", {
      description: "Welcome to Larana",
      position: "bottom"
    });

    setTimeout(() => {
      router.push("/");
    }, 1500);
  }




  return (
    <div className="flex h-[90vh] md:h-screen w-full bg-white">

      <div className="flex w-full flex-col items-center justify-center p-8 sm:p-12 lg:w-1/2">
        <div className="flex w-full max-w-md flex-col gap-6">

          <div className="flex flex-col items-start gap-2 mt-16 md:mt-24">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Create an account
            </h1>
            <p className="text-gray-500 font-medium">
              Enter your details to get started with Larana.
            </p>
          </div>

          <Form className="flex max-w-[95%] md:w-96 flex-col gap-4" onSubmit={handleSubmit(handleRegister)}>

            <TextField
              isRequired
              name="name"
              type="text"
              validate={(value) => {
                if (value.length < 2) {
                  return "Please enter your full name";
                }
                return null;
              }}
            >
              <Label className="font-semibold mb-1">Full Name</Label>
              <Input placeholder="John Doe" {...register("name", { required: "Name is required" })} />
              <FieldError />
            </TextField>

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
              <Input placeholder="larana@doc.com" {...register("email", { required: "Email is required" })} />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="url"
              type="text"
            >
              <Label className="font-semibold mb-1">Profile URL</Label>
              <Input placeholder="Enter Your Avatar URL" {...register("url", { required: "Photo URL is required" })} />
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
              className="mb-1"
            >
              <Label className="font-semibold mb-1">Password</Label>
              <Input placeholder="Create a strong password"  {...register("password", { required: "Password is required" })} />

              <Description className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex gap-2 mt-2">
              <Button type="submit" className="bg-[#0066FF] text-white font-bold">
                <Check />
                Sign Up
              </Button>
              <Button type="reset" variant="secondary">
                Clear Form
              </Button>
            </div>
          </Form>

          <div className="flex flex-col gap-4 mt-2">
            <div className="relative flex w-full items-center">
              <div className="grow border-t border-gray-200"></div>
              <span className="shrink-0 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                Or register with
              </span>
              <div className="grow border-t border-gray-200"></div>
            </div>

            <Button className="w-full py-5" variant="tertiary" onClick={handleGoogleSignIn}>
              <Icon icon="devicon:google" />
              Sign up with Google
            </Button>
          </div>

          <p className="text-center text-sm text-gray-500 font-medium">
            Already have an account?{" "}
            <Link href="/login" className="font-extrabold text-[#0066FF] hover:underline">
              Log in
            </Link>
          </p>

        </div>
      </div>

      <div className="relative hidden w-1/2 lg:block">
        <Image
          src="/signupcover.jpg"
          alt="Modern hospital interior and healthcare professionals"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0066ff]/70 via-black/10 to-transparent"></div>

        <div className="absolute bottom-12 left-12 right-12 text-white">
          <h2 className="text-3xl font-bold mb-2">Your Health, Simplified.</h2>
          <p className="text-white/80 text-lg">
            Create an account today to book appointments, manage your medical history, and get the care you deserve.
          </p>
        </div>
      </div>

    </div>
  );
}


export default RegisterPage;