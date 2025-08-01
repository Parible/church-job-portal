"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "../LoadingSpinner";

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
  const [globalFilter, setGlobalFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  useEffect(() => {
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

    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchRole =
        roleFilter === "all" || u.user_metadata?.role === roleFilter;
      const matchSearch = u.email
        .toLowerCase()
        .includes(globalFilter.toLowerCase());
      return matchRole && matchSearch;
    });
  }, [users, globalFilter, roleFilter]);

  const roleCounts = useMemo(() => {
    return users.reduce((acc, user) => {
      const role = user.user_metadata?.role ?? "unknown";
      acc[role] = (acc[role] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [users]);

  const columns: ColumnDef<User>[] = [
    {
      header: "Email",
      accessorKey: "email",
      cell: ({ row }) => <div>{row.original.email}</div>,
    },
    {
      header: "Joined",
      accessorKey: "created_at",
      cell: ({ row }) => (
        <div>{new Date(row.original.created_at).toLocaleDateString()}</div>
      ),
    },
    {
      header: "Role",
      accessorKey: "user_metadata.role",
      cell: ({ row }) => (
        <Select
          value={row.original.user_metadata?.role ?? "jobseeker"}
          onValueChange={(val) =>
            updateUser(row.original.id, { role: val as string })
          }
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="employer">Employer</SelectItem>
            <SelectItem value="jobseeker">Jobseeker</SelectItem>
          </SelectContent>
        </Select>
      ),
    },
    {
      header: "Banned",
      accessorKey: "banned",
      cell: ({ row }) => (
        <Button
          variant={row.original.banned ? "default" : "destructive"}
          onClick={() =>
            updateUser(row.original.id, { banned: !row.original.banned })
          }
        >
          {row.original.banned ? "Unban" : "Ban"}
        </Button>
      ),
    },
  ];

  const table = useReactTable({
    data: filteredUsers,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

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

  // ✅ SAFE: after all hooks
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">User Management</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {["admin", "employer", "jobseeker"].map((role) => (
          <Card key={role}>
            <CardHeader>
              <CardTitle className="capitalize">{role}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{roleCounts[role] || 0}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Input
          placeholder="Search by email"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-full sm:w-1/2"
        />
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="employer">Employer</SelectItem>
            <SelectItem value="jobseeker">Jobseeker</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Data Table */}
      <div className="rounded-md border mt-4 overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
