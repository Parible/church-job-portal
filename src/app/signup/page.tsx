// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { supabase } from "@/utils/supabase/supabase";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// export default function SignupPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     const { error } = await supabase.auth.signUp({
//       email: formData.email,
//       password: formData.password,
//     });

//     setLoading(false);

//     if (error) {
//       toast.error(error.message);
//     } else {
//       toast.success("Check your email to confirm sign-up.");
//       router.push("/signin");
//     }
//   };

//   const handleOAuth = async (provider: "google" | "facebook") => {
//     await supabase.auth.signInWithOAuth({ provider });
//   };

//   return (
//     <div className="max-w-md mx-auto space-y-6 mt-10">
//       <form onSubmit={handleSignup} className="space-y-4">
//         <div>
//           <Label>Email</Label>
//           <Input name="email" type="email" onChange={handleChange} required />
//         </div>
//         <div>
//           <Label>Password</Label>
//           <Input
//             name="password"
//             type="password"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <Button className="w-full" type="submit" disabled={loading}>
//           {loading ? "Signing up..." : "Sign Up"}
//         </Button>
//       </form>

//       <div className="text-center text-sm text-muted-foreground">or</div>

//       <Button
//         variant="outline"
//         className="w-full"
//         onClick={() => handleOAuth("google")}
//       >
//         Continue with Google
//       </Button>

//       <Button
//         variant="outline"
//         className="w-full"
//         onClick={() => handleOAuth("facebook")}
//       >
//         Continue with Facebook
//       </Button>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { supabase } from "@/utils/supabase/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Sign up successful");
    router.push("/");
  };

  const handleOAuth = async (provider: "google" | "facebook") => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/dashboard`,
      },
    });

    if (error) {
      toast.error(`Failed to sign in with ${provider}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white border border-border rounded-xl shadow-sm p-6 md:p-8 space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-semibold text-foreground">Sign Up</h1>
          <p className="text-sm text-muted-foreground">
            Create your account to get started
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              onChange={handleChange}
              required
              autoFocus
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
              onChange={handleChange}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white "
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </Button>
        </form>

        {/* <div className="relative text-center">
          <span className="text-xs text-muted-foreground bg-white px-2 relative z-10">
            or continue with
          </span>
          <div className="absolute inset-0 top-1/2 border-t border-border z-0" />
        </div>

        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleOAuth("google")}
          >
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleOAuth("facebook")}
          >
            Continue with Facebook
          </Button>
        </div> */}

        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => router.push("/signin")}
            className="text-primary hover:underline underline-offset-4 font-medium"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
