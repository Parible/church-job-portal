"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { toast } from "sonner";

type User = {
  id: string;
  email: string;
  created_at: string;
  user_metadata: {
    role: "admin" | "employer" | "jobseeker" | string;
  };
  banned: boolean;
};

export default function AdminUsersPanelPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/users");
      const json = await res.json();
      if (res.ok) {
        const { users = [] } = json;
        setUsers(users);
      } else {
        toast.error(json.error || "Failed to fetch users.");
        setUsers([]);
      }
    } catch (err) {
      console.error("Failed to load users", err);
      toast.error("Unexpected error loading users.");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (
    id: string,
    payload: Partial<{ role: string; banned: boolean }>
  ) => {
    try {
      const res = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: id, ...payload }),
      });

      const json = await res.json();

      if (res.ok) {
        toast.success("User updated");
        setUsers((prev) =>
          prev.map((user) =>
            user.id === id
              ? {
                  ...user,
                  ...payload,
                  user_metadata: {
                    ...user.user_metadata,
                    role: payload.role ?? user.user_metadata.role,
                  },
                }
              : user
          )
        );
      } else {
        toast.error(json.error || "Failed to update user");
      }
    } catch (err) {
      console.error("Error updating user", err);
      toast.error("Unexpected error");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">User Management</h1>

      {loading && <p>Loading users...</p>}
      {!loading && users.length === 0 && <p>No users found.</p>}

      <div className="grid gap-4">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg">{user.email}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Joined: {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>
              <Badge className="capitalize">
                {user.user_metadata?.role || "user"}
              </Badge>
            </CardHeader>

            <CardContent className="flex flex-col md:flex-row gap-3 items-center justify-between">
              <Select
                value={user.user_metadata?.role ?? "jobseeker"}
                onValueChange={(val) => updateUser(user.id, { role: val })}
              >
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="employer">Employer</SelectItem>
                  <SelectItem value="jobseeker">Jobseeker</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="destructive"
                onClick={() => updateUser(user.id, { banned: !user.banned })}
              >
                {user.banned ? "Unban" : "Ban"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
