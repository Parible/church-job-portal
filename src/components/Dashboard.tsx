// // // // src/components/Dashboard.tsx
// // // "use client";

// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// // // const mockStats = [
// // //   { label: "Total Jobs Posted", value: 12 },
// // //   { label: "Applications Received", value: 38 },
// // //   { label: "Active Employers", value: 5 },
// // // ];

// // // export default function Dashboard() {
// // //   return (
// // //     <div className="grid gap-6 grid-cols-1 md:grid-cols-3 p-4 max-w-5xl mx-auto">
// // //       {mockStats.map((stat) => (
// // //         <Card key={stat.label}>
// // //           <CardHeader>
// // //             <CardTitle>{stat.label}</CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <p className="text-3xl font-bold">{stat.value}</p>
// // //           </CardContent>
// // //         </Card>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Button } from "@/components/ui/button";
// // // import { useRouter } from "next/navigation";

// // // type Job = {
// // //   id: string;
// // //   title: string;
// // //   approved: boolean;
// // //   created_at: string;
// // // };

// // // export default function EmployerDashboard() {
// // //   const [jobs, setJobs] = useState<Job[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [userId, setUserId] = useState<string | null>(null);
// // //   const router = useRouter();
// // //   const supabase = createClientComponentClient();

// // //   const fetchJobs = async () => {
// // //     setLoading(true);
// // //     const {
// // //       data: { user },
// // //     } = await supabase.auth.getUser();

// // //     if (!user) {
// // //       router.push("/signin");
// // //       return;
// // //     }

// // //     setUserId(user.id);

// // //     const { data, error } = await supabase
// // //       .from("jobs")
// // //       .select("id, title, approved, created_at")
// // //       .eq("employer_id", user.id)
// // //       .order("created_at", { ascending: false });

// // //     if (error) {
// // //       console.error("Error fetching jobs:", error.message);
// // //     } else {
// // //       setJobs(data || []);
// // //     }

// // //     setLoading(false);
// // //   };

// // //   const deleteJob = async (jobId: string) => {
// // //     const { error } = await supabase.from("jobs").delete().eq("id", jobId);
// // //     if (!error) {
// // //       setJobs((prev) => prev.filter((job) => job.id !== jobId));
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchJobs();
// // //   }, []);

// // //   return (
// // //     <div className="max-w-5xl mx-auto p-6">
// // //       <h1 className="text-2xl font-semibold mb-4">Your Job Listings</h1>

// // //       {loading && <p className="text-muted-foreground">Loading jobs...</p>}

// // //       {!loading && jobs.length === 0 && (
// // //         <p className="text-muted-foreground">
// // //           You haven’t posted any jobs yet.
// // //         </p>
// // //       )}

// // //       <div className="grid gap-4">
// // //         {jobs.map((job) => (
// // //           <Card key={job.id}>
// // //             <CardHeader className="flex flex-row justify-between items-center">
// // //               <div>
// // //                 <CardTitle className="text-lg">{job.title}</CardTitle>
// // //                 <p className="text-sm text-muted-foreground">
// // //                   Posted on {new Date(job.created_at).toLocaleDateString()}
// // //                 </p>
// // //               </div>
// // //               <span
// // //                 className={`text-sm px-2 py-1 rounded-md ${
// // //                   job.approved
// // //                     ? "bg-green-100 text-green-800"
// // //                     : "bg-yellow-100 text-yellow-800"
// // //                 }`}
// // //               >
// // //                 {job.approved ? "Approved" : "Pending"}
// // //               </span>
// // //             </CardHeader>

// // //             <CardContent className="flex gap-4">
// // //               <Button
// // //                 variant="outline"
// // //                 size="sm"
// // //                 onClick={() => router.push(`/edit-job/${job.id}`)}
// // //               >
// // //                 Edit
// // //               </Button>
// // //               <Button
// // //                 variant="destructive"
// // //                 size="sm"
// // //                 onClick={() => deleteJob(job.id)}
// // //               >
// // //                 Delete
// // //               </Button>
// // //             </CardContent>
// // //           </Card>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { useRouter } from "next/navigation";
// // // import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Button } from "@/components/ui/button";

// // // type Job = {
// // //   id: string;
// // //   title: string;
// // //   approved: boolean;
// // //   created_at: string;
// // // };

// // // export default function EmployerDashboard() {
// // //   const [jobs, setJobs] = useState<Job[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const supabase = createClientComponentClient();
// // //   const router = useRouter();

// // //   const fetchJobs = async () => {
// // //     setLoading(true);

// // //     const {
// // //       data: { user },
// // //     } = await supabase.auth.getUser();

// // //     if (!user) {
// // //       router.push("/signin");
// // //       return;
// // //     }

// // //     const { data, error } = await supabase
// // //       .from("jobs")
// // //       .select("id, title, approved, created_at")
// // //       .eq("employer_id", user.id)
// // //       .order("created_at", { ascending: false });

// // //     if (error) {
// // //       console.error("Error fetching jobs:", error.message);
// // //     } else {
// // //       setJobs(data ?? []);
// // //     }

// // //     setLoading(false);
// // //   };

// // //   const deleteJob = async (jobId: string) => {
// // //     const { error } = await supabase.from("jobs").delete().eq("id", jobId);
// // //     if (!error) {
// // //       setJobs((prev) => prev.filter((job) => job.id !== jobId));
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchJobs();
// // //   }, []);

// // //   return (
// // //     <div className="max-w-5xl mx-auto p-6">
// // //       <h1 className="text-2xl font-semibold mb-4">Your Job Listings</h1>

// // //       {loading && <p className="text-muted-foreground">Loading jobs...</p>}

// // //       {!loading && jobs.length === 0 && (
// // //         <p className="text-muted-foreground">
// // //           You haven’t posted any jobs yet.
// // //         </p>
// // //       )}

// // //       <div className="grid gap-4">
// // //         {jobs.map((job) => (
// // //           <Card key={job.id}>
// // //             <CardHeader className="flex justify-between items-center">
// // //               <div>
// // //                 <CardTitle className="text-lg">{job.title}</CardTitle>
// // //                 <p className="text-sm text-muted-foreground">
// // //                   Posted on {new Date(job.created_at).toLocaleDateString()}
// // //                 </p>
// // //               </div>
// // //               <span
// // //                 className={`text-sm px-2 py-1 rounded-md ${
// // //                   job.approved
// // //                     ? "bg-green-100 text-green-800"
// // //                     : "bg-yellow-100 text-yellow-800"
// // //                 }`}
// // //               >
// // //                 {job.approved ? "Approved" : "Pending"}
// // //               </span>
// // //             </CardHeader>

// // //             <CardContent className="flex gap-4">
// // //               <Button
// // //                 variant="outline"
// // //                 size="sm"
// // //                 onClick={() => router.push(`/edit-job/${job.id}`)}
// // //               >
// // //                 Edit
// // //               </Button>
// // //               <Button
// // //                 variant="destructive"
// // //                 size="sm"
// // //                 onClick={() => deleteJob(job.id)}
// // //               >
// // //                 Delete
// // //               </Button>
// // //             </CardContent>
// // //           </Card>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// // // import { useRouter } from "next/navigation";
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Button } from "@/components/ui/button";
// // // import { Badge } from "@/components/ui/badge";

// // // type Job = {
// // //   id: string;
// // //   title: string;
// // //   approved: boolean;
// // //   created_at: string;
// // //   employer_id: string;
// // // };

// // // export default function AdminDashboard() {
// // //   const [jobs, setJobs] = useState<Job[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const supabase = createClientComponentClient();
// // //   const router = useRouter();

// // //   const fetchPendingJobs = async () => {
// // //     setLoading(true);

// // //     const { data, error } = await supabase
// // //       .from("jobs")
// // //       .select("id, title, approved, created_at, employer_id")
// // //       .eq("approved", false)
// // //       .order("created_at", { ascending: false });

// // //     if (error) {
// // //       console.error("Error fetching pending jobs:", error.message);
// // //     } else {
// // //       setJobs(data ?? []);
// // //     }

// // //     setLoading(false);
// // //   };

// // //   const approveJob = async (id: string) => {
// // //     const { error } = await supabase
// // //       .from("jobs")
// // //       .update({ approved: true })
// // //       .eq("id", id);

// // //     if (!error) {
// // //       setJobs((prev) => prev.filter((job) => job.id !== id));
// // //     }
// // //   };

// // //   const deleteJob = async (id: string) => {
// // //     const { error } = await supabase.from("jobs").delete().eq("id", id);
// // //     if (!error) {
// // //       setJobs((prev) => prev.filter((job) => job.id !== id));
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchPendingJobs();
// // //   }, []);

// // //   return (
// // //     <div className="max-w-5xl mx-auto p-6">
// // //       <h1 className="text-2xl font-semibold mb-4">Jobs Pending Approval</h1>

// // //       {loading && <p className="text-muted-foreground">Loading jobs...</p>}

// // //       {!loading && jobs.length === 0 && (
// // //         <p className="text-muted-foreground">No jobs pending approval.</p>
// // //       )}

// // //       <div className="grid gap-4">
// // //         {jobs.map((job) => (
// // //           <Card key={job.id}>
// // //             <CardHeader className="flex justify-between items-center">
// // //               <div>
// // //                 <CardTitle className="text-lg">{job.title}</CardTitle>
// // //                 <p className="text-sm text-muted-foreground">
// // //                   Posted on {new Date(job.created_at).toLocaleDateString()}
// // //                 </p>
// // //               </div>
// // //               <Badge
// // //                 variant="outline"
// // //                 className="text-yellow-700 border-yellow-400 bg-yellow-100"
// // //               >
// // //                 Pending
// // //               </Badge>
// // //             </CardHeader>

// // //             <CardContent className="flex gap-3">
// // //               <Button
// // //                 size="sm"
// // //                 variant="default"
// // //                 onClick={() => approveJob(job.id)}
// // //               >
// // //                 Approve
// // //               </Button>

// // //               <Button
// // //                 size="sm"
// // //                 variant="outline"
// // //                 onClick={() => router.push(`/job/${job.id}`)}
// // //               >
// // //                 View
// // //               </Button>

// // //               <Button
// // //                 size="sm"
// // //                 variant="destructive"
// // //                 onClick={() => deleteJob(job.id)}
// // //               >
// // //                 Delete
// // //               </Button>
// // //             </CardContent>
// // //           </Card>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import { useUser } from "@/context/UserContext";
// // import { supabase } from "@/utils/supabase/supabase";
// // import { useRouter } from "next/navigation";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Badge } from "@/components/ui/badge";
// // import { toast } from "sonner";

// // type Job = {
// //   id: string;
// //   title: string;
// //   approved: boolean;
// //   created_at: string;
// //   employer_id: string;
// // };

// // export default function AdminDashboard() {
// //   const [jobs, setJobs] = useState<Job[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const router = useRouter();

// //   const { session, loading: authLoading } = useUser();
// //   const userId = session?.user.id;
// //   const userRole = session?.user.user_metadata?.role;

// //   useEffect(() => {
// //     if (!authLoading && (!session || userRole !== "admin")) {
// //       toast.error("Unauthorized. Admin access only.");
// //       router.push("/");
// //     }
// //   }, [authLoading, session, userRole, router]);

// //   const fetchPendingJobs = async () => {
// //     setLoading(true);

// //     const { data, error } = await supabase
// //       .from("jobs")
// //       .select("id, title, approved, created_at, employer_id")
// //       .eq("approved", false)
// //       .order("created_at", { ascending: false });

// //     if (error) {
// //       toast.error("Failed to fetch jobs.");
// //       console.error("Error fetching pending jobs:", error.message);
// //     } else {
// //       setJobs(data ?? []);
// //     }

// //     setLoading(false);
// //   };

// //   const approveJob = async (id: string) => {
// //     const { error } = await supabase
// //       .from("jobs")
// //       .update({ approved: true })
// //       .eq("id", id);

// //     if (!error) {
// //       toast.success("Job approved");
// //       setJobs((prev) => prev.filter((job) => job.id !== id));
// //     } else {
// //       toast.error("Failed to approve job");
// //     }
// //   };

// //   const deleteJob = async (id: string) => {
// //     const { error } = await supabase.from("jobs").delete().eq("id", id);
// //     if (!error) {
// //       toast.success("Job deleted");
// //       setJobs((prev) => prev.filter((job) => job.id !== id));
// //     } else {
// //       toast.error("Failed to delete job");
// //     }
// //   };

// //   useEffect(() => {
// //     if (session && userRole === "admin") {
// //       fetchPendingJobs();
// //     }
// //   }, [session, userRole]);

// //   if (authLoading || (session && userRole !== "admin")) {
// //     return (
// //       <div className="max-w-2xl mx-auto mt-10 text-center text-muted-foreground">
// //         Checking admin access...
// //       </div>
// //     );
// //   }

// //   console.log("USER METADATA", session?.user.user_metadata);
// //   return (
// //     <div className="max-w-5xl mx-auto p-6">
// //       <h1 className="text-2xl font-semibold mb-4">Jobs Pending Approval</h1>

// //       {loading && <p className="text-muted-foreground">Loading jobs...</p>}

// //       {!loading && jobs.length === 0 && (
// //         <p className="text-muted-foreground">No jobs pending approval.</p>
// //       )}

// //       <div className="grid gap-4">
// //         {jobs.map((job) => (
// //           <Card key={job.id}>
// //             <CardHeader className="flex justify-between items-center">
// //               <div>
// //                 <CardTitle className="text-lg">{job.title}</CardTitle>
// //                 <p className="text-sm text-muted-foreground">
// //                   Posted on {new Date(job.created_at).toLocaleDateString()}
// //                 </p>
// //               </div>
// //               <Badge
// //                 variant="outline"
// //                 className="text-yellow-700 border-yellow-400 bg-yellow-100"
// //               >
// //                 Pending
// //               </Badge>
// //             </CardHeader>

// //             <CardContent className="flex gap-3">
// //               <Button size="sm" onClick={() => approveJob(job.id)}>
// //                 Approve
// //               </Button>

// //               <Button
// //                 size="sm"
// //                 variant="outline"
// //                 onClick={() => router.push(`/job/${job.id}`)}
// //               >
// //                 View
// //               </Button>

// //               <Button
// //                 size="sm"
// //                 variant="destructive"
// //                 onClick={() => deleteJob(job.id)}
// //               >
// //                 Delete
// //               </Button>
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import { useUser } from "@/context/UserContext";
// // import { supabase } from "@/utils/supabase/supabase";
// // import { useRouter } from "next/navigation";
// // import { toast } from "sonner";

// // type Job = {
// //   id: string;
// //   title: string;
// //   approved: boolean;
// //   created_at: string;
// //   employer_id: string;
// // };

// // export default function AdminDashboard() {
// //   const [jobs, setJobs] = useState<Job[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const router = useRouter();

// //   const { session, loading: authLoading } = useUser();
// //   const userRole = session?.user.user_metadata?.role;

// //   useEffect(() => {
// //     if (!authLoading && (!session || userRole !== "admin")) {
// //       toast.error("Unauthorized. Admin access only.");
// //       router.push("/");
// //     }
// //   }, [authLoading, session, userRole, router]);

// //   const fetchPendingJobs = async () => {
// //     setLoading(true);

// //     const { data, error } = await supabase
// //       .from("jobs")
// //       .select("id, title, approved, created_at, employer_id")
// //       .eq("approved", false)
// //       .order("created_at", { ascending: false });

// //     if (error) {
// //       toast.error("Failed to fetch jobs.");
// //       console.error("Error fetching pending jobs:", error.message);
// //     } else {
// //       setJobs(data ?? []);
// //     }

// //     setLoading(false);
// //   };

// //   const approveJob = async (id: string) => {
// //     const { error } = await supabase
// //       .from("jobs")
// //       .update({ approved: true })
// //       .eq("id", id);

// //     if (!error) {
// //       toast.success("Job approved");
// //       setJobs((prev) => prev.filter((job) => job.id !== id));
// //     } else {
// //       toast.error("Failed to approve job");
// //     }
// //   };

// //   const deleteJob = async (id: string) => {
// //     const { error } = await supabase.from("jobs").delete().eq("id", id);
// //     if (!error) {
// //       toast.success("Job deleted");
// //       setJobs((prev) => prev.filter((job) => job.id !== id));
// //     } else {
// //       toast.error("Failed to delete job");
// //     }
// //   };

// //   useEffect(() => {
// //     if (session && userRole === "admin") {
// //       fetchPendingJobs();
// //     }
// //   }, [session, userRole]);

// //   if (authLoading || (session && userRole !== "admin")) {
// //     return (
// //       <div className="max-w-2xl mx-auto mt-10 text-center text-gray-500">
// //         Checking admin access...
// //       </div>
// //     );
// //   }
// //   console.log("JOBS", jobs);

// //   return (
// //     <div className="max-w-5xl mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-6">Jobs Pending Approval</h1>

// //       {loading && <p className="text-gray-500 mb-4">Loading jobs...</p>}

// //       {!loading && jobs.length === 0 && (
// //         <p className="text-gray-500 mb-4">No jobs pending approval.</p>
// //       )}

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {jobs.map((job) => (
// //           <div
// //             key={job.id}
// //             className="border border-gray-300 rounded-md p-4 flex flex-col justify-between"
// //           >
// //             <div>
// //               <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
// //               <p className="text-sm text-gray-600 mb-2">
// //                 Posted on {new Date(job.created_at).toLocaleDateString()}
// //               </p>
// //               <span className="inline-block px-2 py-1 text-yellow-800 bg-yellow-200 rounded text-xs font-medium">
// //                 Pending
// //               </span>
// //             </div>

// //             <div className="mt-4 flex gap-3">
// //               <button
// //                 onClick={() => approveJob(job.id)}
// //                 className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded"
// //               >
// //                 Approve
// //               </button>

// //               <button
// //                 onClick={() => router.push(`/job/${job.id}`)}
// //                 className="border border-gray-500 hover:bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded"
// //               >
// //                 View
// //               </button>

// //               <button
// //                 onClick={() => deleteJob(job.id)}
// //                 className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";
// import { useUser } from "@/context/UserContext";
// import { supabase } from "@/utils/supabase/supabase";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";

// type Job = {
//   id: string;
//   title: string;
//   approved: boolean;
//   created_at: string;
//   employer_id: string;
// };

// export default function AdminDashboard() {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   const { session, loading: authLoading } = useUser();
//   const userRole = session?.user.user_metadata?.role;

//   useEffect(() => {
//     if (!authLoading && (!session || userRole !== "admin")) {
//       toast.error("Unauthorized. Admin access only.");
//       router.push("/");
//     }
//   }, [authLoading, session, userRole, router]);

//   const fetchPendingJobs = async () => {
//     setLoading(true);

//     const { data, error } = await supabase
//       .from("jobs")
//       .select("id, title, approved, created_at, employer_id")
//       .eq("approved", false)
//       .order("created_at", { ascending: false });

//     if (error) {
//       toast.error("Failed to fetch jobs.");
//       console.error("Error fetching pending jobs:", error.message);
//     } else {
//       setJobs(data ?? []);
//     }

//     setLoading(false);
//   };

//   const approveJob = async (id: string) => {
//     const { error } = await supabase
//       .from("jobs")
//       .update({ approved: true })
//       .eq("id", id);

//     if (!error) {
//       toast.success("Job approved");
//       setJobs((prev) => prev.filter((job) => job.id !== id));
//     } else {
//       toast.error("Failed to approve job");
//     }
//   };

//   const deleteJob = async (id: string) => {
//     const { error } = await supabase.from("jobs").delete().eq("id", id);
//     if (!error) {
//       toast.success("Job deleted");
//       setJobs((prev) => prev.filter((job) => job.id !== id));
//     } else {
//       toast.error("Failed to delete job");
//     }
//   };

//   useEffect(() => {
//     if (session && userRole === "admin") {
//       fetchPendingJobs();
//     }
//   }, [session, userRole]);

//   if (authLoading || (session && userRole !== "admin")) {
//     return (
//       <div className="max-w-2xl mx-auto mt-10 text-center text-muted-foreground">
//         Checking admin access...
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-10">
//       <h1 className="text-3xl font-bold mb-8">Jobs Pending Approval</h1>

//       {loading ? (
//         <Skeleton className="w-full h-64 rounded-md" />
//       ) : jobs.length === 0 ? (
//         <p className="text-muted-foreground">No jobs pending approval.</p>
//       ) : (
//         <div className="rounded-md border">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Title</TableHead>
//                 <TableHead>Date</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead className="text-right">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {jobs.map((job) => (
//                 <TableRow key={job.id}>
//                   <TableCell className="font-medium">{job.title}</TableCell>
//                   <TableCell>
//                     {new Date(job.created_at).toLocaleDateString()}
//                   </TableCell>
//                   <TableCell>
//                     <span className="text-yellow-800 bg-yellow-100 px-2 py-1 rounded text-xs font-semibold">
//                       Pending
//                     </span>
//                   </TableCell>
//                   <TableCell className="text-right space-x-2">
//                     <Button
//                       variant="default"
//                       size="sm"
//                       onClick={() => approveJob(job.id)}
//                     >
//                       Approve
//                     </Button>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => router.push(`/job/${job.id}`)}
//                     >
//                       View
//                     </Button>
//                     <Button
//                       variant="destructive"
//                       size="sm"
//                       onClick={() => deleteJob(job.id)}
//                     >
//                       Delete
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type Job = {
  id: string;
  title: string;
  approved: boolean;
  created_at: string;
  employer_id: string;
};

export default function AdminDashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { session, loading: authLoading } = useUser();
  const userRole = session?.user.user_metadata?.role;

  useEffect(() => {
    if (!authLoading && (!session || userRole !== "admin")) {
      toast.error("Unauthorized. Admin access only.");
      router.push("/");
    }
  }, [authLoading, session, userRole, router]);

  const fetchAllJobs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("jobs")
      .select("id, title, approved, created_at, employer_id")
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
    if (session && userRole === "admin") {
      fetchAllJobs();
    }
  }, [session, userRole]);

  if (authLoading || (session && userRole !== "admin")) {
    return (
      <div className="max-w-2xl mx-auto mt-10 text-center text-muted-foreground">
        Checking admin access...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">All Jobs</h1>

      {loading ? (
        <Skeleton className="w-full h-64 rounded-md" />
      ) : jobs.length === 0 ? (
        <p className="text-muted-foreground">No jobs found.</p>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell>
                    {new Date(job.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {job.approved ? (
                      <span className="text-green-800 bg-green-100 px-2 py-1 rounded text-xs font-semibold">
                        Approved
                      </span>
                    ) : (
                      <span className="text-yellow-800 bg-yellow-100 px-2 py-1 rounded text-xs font-semibold">
                        Pending
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      size="sm"
                      onClick={() => toggleApproval(job.id, job.approved)}
                    >
                      {job.approved ? "Unapprove" : "Approve"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => router.push(`/job/${job.id}`)}
                    >
                      View
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteJob(job.id)}
                    >
                      Delete
                    </Button>
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
