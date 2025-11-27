"use client";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center px-4 py-20 md:py-32">
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Manage Your Tasks. Your Way.
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          A clean, modern dashboard for tracking tasks across your day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <SignedOut>
            <SignInButton mode="modal">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Dashboard
              </Button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </section>
  );
}

