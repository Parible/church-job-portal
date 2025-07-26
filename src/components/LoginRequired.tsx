// // components/LoginRequired.tsx
// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function LoginRequired() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className="w-full max-w-sm space-y-5"
//       >
//         <h1 className="text-2xl font-bold tracking-tight">Sign in required</h1>
//         <p className="text-muted-foreground text-sm">
//           Please sign in to post a job. You’ll be redirected back here.
//         </p>
//         <Link href="/signin">
//           <Button className="w-full mt-2 bg-blue-900 text-white hover:bg-blue-800">
//             Go to Login
//           </Button>
//         </Link>
//       </motion.div>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, ArrowLeft } from "lucide-react";

export default function LoginRequired() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-[80vh] ">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full max-w-xl  border border-border  rounded-2xl px-8 py-10 space-y-6 text-center"
      >
        <div className="flex justify-center">
          <div className="bg-blue-100 text-blue-900 dark:bg-blue-900/10 dark:text-blue-300 p-3 rounded-full">
            <Lock className="w-6 h-6" aria-hidden="true" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Sign in required
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You must be signed in to post a job. After logging in, you'll be
            redirected back to this page.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Link href="/signin" passHref>
            <Button className="w-full bg-blue-900 text-white hover:bg-blue-800 transition-colors">
              Go to Login
            </Button>
          </Link>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
