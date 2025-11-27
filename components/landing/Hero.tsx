"use client";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
      {/* Solid Purple Blob Background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="rounded-full blur-3xl opacity-10"
          style={{
            width: "320px",
            height: "320px",
            background: "#8B5CF6",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Organize Your Tasks. Effortlessly.
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          A clean, modern dashboard to keep everything on track.
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

