"use client";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-xl border border-border bg-muted p-8 md:p-12">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Start organizing your day today.
            </h2>
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Link href="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  Go to Dashboard
                </Button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </div>
    </section>
  );
}
