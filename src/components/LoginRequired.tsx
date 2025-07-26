// components/LoginRequired.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginRequired() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-sm space-y-5"
      >
        <h1 className="text-2xl font-bold tracking-tight">Sign in required</h1>
        <p className="text-muted-foreground text-sm">
          Please sign in to post a job. You’ll be redirected back here.
        </p>
        <Link href="/signin">
          <Button className="w-full mt-2 bg-blue-900 text-white hover:bg-blue-800">
            Go to Login
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
