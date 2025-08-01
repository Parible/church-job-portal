"use client";

import { useEffect, useMemo, useState } from "react";
import { useUser } from "@/context/UserContext";
import { supabase } from "@/utils/supabase/supabase";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import LoadingSpinner from "./LoadingSpinner";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type Job = {
  id: string;
  title: string;
  approved: boolean;
  created_at: string;
  employer_id: string;
  description: string;
  requirements: string;
  location: string;
  is_remote: boolean;
  is_onsite: boolean;
  job_type: string;
  link: string;
  deadline: string;
  category: string;
};

export default function AdminDashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const router = useRouter();
  const { session, loading: authLoading } = useUser();
  const userRole = session?.user.user_metadata?.role;

  const fetchAllJobs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to fetch jobs.");
      console.error("Error fetching jobs:", error.message);
    } else {
      setJobs(data ?? []);
    }
    setLoading(false);
  };

  const toggleApproval = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from("jobs")
      .update({ approved: !currentStatus })
      .eq("id", id);

    if (!error) {
      toast.success(!currentStatus ? "Job approved" : "Job marked as pending");
      setJobs((prev) =>
        prev.map((job) =>
          job.id === id ? { ...job, approved: !currentStatus } : job
        )
      );
    } else {
      toast.error("Failed to update job status");
    }
  };

  const deleteJob = async (id: string) => {
    const { error } = await supabase.from("jobs").delete().eq("id", id);
    if (!error) {
      toast.success("Job deleted");
      setJobs((prev) => prev.filter((job) => job.id !== id));
    } else {
      toast.error("Failed to delete job");
    }
  };

  useEffect(() => {
    if (!authLoading && (!session || userRole !== "admin")) {
      router.push("/");
    }
  }, [authLoading, session, userRole, router]);

  useEffect(() => {
    if (session && userRole === "admin") {
      fetchAllJobs();
    }
  }, [session, userRole]);

  const approvedCount = jobs.filter((j) => j.approved).length;
  const pendingCount = jobs.filter((j) => !j.approved).length;

  const filteredJobs = useMemo(() => {
    return jobs
      .filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((job) =>
        filterStatus === "all"
          ? true
          : filterStatus === "approved"
          ? job.approved
          : !job.approved
      )
      .filter((job) =>
        filterCategory === "all" ? true : job.category === filterCategory
      )
      .sort((a, b) => {
        const aDate = new Date(a.created_at).getTime();
        const bDate = new Date(b.created_at).getTime();
        return sortOrder === "asc" ? aDate - bDate : bDate - aDate;
      });
  }, [jobs, searchTerm, filterStatus, filterCategory, sortOrder]);

  const uniqueCategories = Array.from(
    new Set(jobs.map((job) => job.category))
  ).filter(Boolean);

  if (authLoading || (session && userRole !== "admin") || loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Jobs Management</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-md shadow p-4">
          <p className="text-sm text-muted-foreground">Total Jobs</p>
          <p className="text-xl font-semibold">{jobs.length}</p>
        </div>
        <div className="bg-white rounded-md shadow p-4">
          <p className="text-sm text-muted-foreground">Approved</p>
          <p className="text-xl font-semibold text-green-600">
            {approvedCount}
          </p>
        </div>
        <div className="bg-white rounded-md shadow p-4">
          <p className="text-sm text-muted-foreground">Pending</p>
          <p className="text-xl font-semibold text-yellow-600">
            {pendingCount}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <Input
          placeholder="Search jobs..."
          className="w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex gap-4 w-full md:w-auto">
          <Select
            onValueChange={(val) => setFilterStatus(val)}
            defaultValue="all"
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Filter Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(val) => setSortOrder(val as "asc" | "desc")}
            defaultValue="desc"
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sort By Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">Newest</SelectItem>
              <SelectItem value="asc">Oldest</SelectItem>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(val) => setFilterCategory(val)}
            defaultValue="all"
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Filter Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {uniqueCategories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <Skeleton className="w-full h-64 rounded-md" />
      ) : filteredJobs.length === 0 ? (
        <p className="text-muted-foreground">No jobs found.</p>
      ) : (
        <div className="overflow-auto rounded-md border bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Remote</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium max-w-[200px] truncate">
                    {job.title}
                  </TableCell>

                  <TableCell>
                    {job.approved ? (
                      <span className="text-green-700 bg-green-100 px-2 py-1 rounded text-xs font-medium">
                        Approved
                      </span>
                    ) : (
                      <span className="text-yellow-700 bg-yellow-100 px-2 py-1 rounded text-xs font-medium">
                        Pending
                      </span>
                    )}
                  </TableCell>
                  <TableCell>{job.job_type}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.is_remote ? "Yes" : "No"}</TableCell>
                  <TableCell>{job.category}</TableCell>
                  <TableCell>
                    {job.deadline
                      ? new Date(job.deadline).toLocaleDateString()
                      : "-"}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleApproval(job.id, job.approved)}
                    >
                      {job.approved ? "Unapprove" : "Approve"}
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => router.push(`/job/${job.id}`)}
                    >
                      View
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => setSelectedJobId(job.id)}
                        >
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will permanently delete this job.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => {
                              if (selectedJobId) {
                                deleteJob(selectedJobId);
                              }
                            }}
                          >
                            Confirm Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
