"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Login successful!");
      router.push("/");
    }
  };

  const handleOAuth = async (provider: "google" | "facebook") => {
    await supabase.auth.signInWithOAuth({ provider });
  };

  return (
    <div className="max-w-md mx-auto space-y-6 mt-10">
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <Label>Email</Label>
          <Input name="email" type="email" onChange={handleChange} required />
        </div>
        <div>
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
        </div>
        <Button className="w-full" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </Button>
      </form>

      <div className="text-center text-sm text-muted-foreground">or</div>

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
    </div>
  );
}
