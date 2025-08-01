// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import Link from "next/link";
// // // import { Input } from "@/components/ui/input";
// // // import { Button } from "@/components/ui/button";
// // // import {
// // //   Select,
// // //   SelectTrigger,
// // //   SelectValue,
// // //   SelectContent,
// // //   SelectItem,
// // // } from "@/components/ui/select";
// // // import {
// // //   ArrowLeft,
// // //   ArrowRight,
// // //   Briefcase,
// // //   MapPin,
// // //   Globe,
// // //   Sparkles,
// // //   CalendarDays,
// // //   X,
// // // } from "lucide-react";
// // // import clsx from "clsx";

// // // import { formatDistanceToNow } from "date-fns";

// // // export default function JobSearch() {
// // //   const [filters, setFilters] = useState({
// // //     keyword: "",
// // //     sort: "desc",
// // //   });

// // //   const [jobs, setJobs] = useState<any[]>([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [page, setPage] = useState(1);
// // //   const limit = 9;

// // //   const handleChange = (field: string, value: string) => {
// // //     setFilters((prev) => ({ ...prev, [field]: value }));
// // //     setPage(1);
// // //   };

// // //   const clearFilters = () => {
// // //     setFilters({ keyword: "", sort: "desc" });
// // //     setPage(1);
// // //   };

// // //   const fetchJobs = async () => {
// // //     setLoading(true);
// // //     const params = new URLSearchParams();

// // //     if (filters.keyword) params.set("keyword", filters.keyword);
// // //     params.set("sort", filters.sort);
// // //     params.set("limit", String(limit));
// // //     params.set("offset", String((page - 1) * limit));

// // //     try {
// // //       const res = await fetch(`/api/jobs?${params.toString()}`);
// // //       const { data } = await res.json();
// // //       setJobs(Array.isArray(data) ? data : []);
// // //     } catch (error) {
// // //       console.error("❌ Failed to fetch jobs:", error);
// // //       setJobs([]);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchJobs();
// // //   }, [filters, page]);

// // //   return (
// // //     <div className="w-full min-h-screen px-6 py-20 md:py-28">
// // //       {/* Header */}
// // //       <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
// // //         <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
// // //           Discover Your Next Role
// // //         </h1>
// // //         <p className="text-neutral-500 text-base">
// // //           Search open positions, sort listings, and apply in seconds.
// // //         </p>
// // //       </div>

// // //       {/* Filters */}
// // //       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 mb-12">
// // //         <Input
// // //           placeholder="Search roles, companies, or keywords..."
// // //           className="h-12 text-sm border border-neutral-300 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-0 transition"
// // //           value={filters.keyword}
// // //           onChange={(e) => handleChange("keyword", e.target.value)}
// // //         />
// // //         <Select
// // //           value={filters.sort}
// // //           onValueChange={(val) => handleChange("sort", val)}
// // //         >
// // //           <SelectTrigger className="h-12 text-sm border border-neutral-300 focus-visible:ring-2 focus-visible:ring-black">
// // //             <SelectValue placeholder="Sort" />
// // //           </SelectTrigger>
// // //           <SelectContent>
// // //             <SelectItem value="desc">Newest First</SelectItem>
// // //             <SelectItem value="asc">Oldest First</SelectItem>
// // //           </SelectContent>
// // //         </Select>
// // //       </div>

// // //       {/* Job Cards */}
// // //       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {loading ? (
// // //           Array.from({ length: 9 }).map((_, i) => (
// // //             <div
// // //               key={i}
// // //               className="p-6 rounded-xl border border-neutral-200 bg-white animate-pulse space-y-4"
// // //             >
// // //               <div className="h-4 w-1/3 bg-neutral-200 rounded" />
// // //               <div className="flex gap-2">
// // //                 <div className="h-4 w-16 bg-neutral-200 rounded" />
// // //                 <div className="h-4 w-16 bg-neutral-200 rounded" />
// // //                 <div className="h-4 w-20 bg-neutral-200 rounded" />
// // //               </div>
// // //               <div className="h-4 bg-neutral-200 rounded w-full" />
// // //               <div className="h-4 bg-neutral-200 rounded w-4/5" />
// // //             </div>
// // //           ))
// // //         ) : jobs.length > 0 ? (
// // //           jobs.map((job) => (
// // //             <Link key={job.id} href={`/jobs/${job.id}`} className="group">
// // //               <div className="p-6 h-full rounded-2xl border border-neutral-200 bg-white hover:border-black hover:shadow-lg transition-all space-y-4 flex flex-col justify-between">
// // //                 {/* Title */}
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="bg-neutral-100 p-2 rounded-md">
// // //                     <Briefcase className="w-5 h-5 text-black" />
// // //                   </div>
// // //                   <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-black transition">
// // //                     {job.title}
// // //                   </h3>
// // //                 </div>

// // //                 {/* Metadata row */}
// // //                 <div className="flex flex-wrap items-center gap-3 text-sm capitalize text-neutral-600">
// // //                   <span className="inline-flex items-center gap-1">
// // //                     <MapPin className="w-4 h-4 text-neutral-400" />
// // //                     {job.location}
// // //                   </span>
// // //                   <span className="inline-flex items-center gap-1">
// // //                     <Briefcase className="w-4 h-4 text-neutral-400" />
// // //                     {job.category}
// // //                   </span>
// // //                   <span className="inline-flex items-center gap-1">
// // //                     <Globe className="w-4 h-4 text-neutral-400" />
// // //                     {job.is_remote
// // //                       ? "Remote"
// // //                       : job.is_onsite
// // //                       ? "Onsite"
// // //                       : "N/A"}
// // //                   </span>
// // //                   {job.job_type && (
// // //                     <span
// // //                       className={clsx(
// // //                         "text-xs font-medium px-2 py-0.5 rounded-full border",
// // //                         job.job_type === "Full-time"
// // //                           ? "bg-green-50 text-green-700 border-green-200"
// // //                           : "bg-yellow-50 text-yellow-700 border-yellow-200"
// // //                       )}
// // //                     >
// // //                       {job.job_type}
// // //                     </span>
// // //                   )}
// // //                 </div>

// // //                 {/* Description */}
// // //                 <p className="text-sm text-neutral-700 line-clamp-3 leading-relaxed">
// // //                   {job.description}
// // //                 </p>

// // //                 {/* Footer: Created Date & CTA */}
// // //                 <div className="flex items-center justify-between text-sm pt-4 border-t border-neutral-100">
// // //                   <div className="flex items-center gap-1 text-neutral-500">
// // //                     <CalendarDays className="w-4 h-4" />
// // //                     {formatDistanceToNow(new Date(job.created_at), {
// // //                       addSuffix: true,
// // //                     })}
// // //                   </div>
// // //                   <span className="font-medium text-black group-hover:underline">
// // //                     View details →
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </Link>
// // //           ))
// // //         ) : (
// // //           <div className="col-span-full text-center text-neutral-400 text-sm py-12 space-y-4">
// // //             <div className="text-5xl">🔍</div>
// // //             <p>No jobs found matching your criteria.</p>
// // //             <Button
// // //               variant="outline"
// // //               className="inline-flex gap-2 items-center"
// // //               onClick={clearFilters}
// // //             >
// // //               <X className="w-4 h-4" />
// // //               Clear filters
// // //             </Button>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Pagination */}
// // //       {!loading && jobs.length > 0 && (
// // //         <div className="mt-12 flex justify-center items-center gap-4">
// // //           <Button
// // //             variant="outline"
// // //             size="icon"
// // //             className="rounded-full"
// // //             onClick={() => setPage((p) => Math.max(p - 1, 1))}
// // //             disabled={page === 1}
// // //           >
// // //             <ArrowLeft className="w-4 h-4" />
// // //           </Button>
// // //           <span className="text-sm text-neutral-600">Page {page}</span>
// // //           <Button
// // //             variant="outline"
// // //             size="icon"
// // //             className="rounded-full"
// // //             onClick={() => setPage((p) => p + 1)}
// // //           >
// // //             <ArrowRight className="w-4 h-4" />
// // //           </Button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import Link from "next/link";
// // // import { Input } from "@/components/ui/input";
// // // import { Button } from "@/components/ui/button";
// // // import {
// // //   Select,
// // //   SelectTrigger,
// // //   SelectValue,
// // //   SelectContent,
// // //   SelectItem,
// // // } from "@/components/ui/select";
// // // import {
// // //   ArrowLeft,
// // //   ArrowRight,
// // //   Briefcase,
// // //   MapPin,
// // //   Globe,
// // //   CalendarDays,
// // //   X,
// // // } from "lucide-react";
// // // import clsx from "clsx";
// // // import { formatDistanceToNow } from "date-fns";

// // // export default function JobSearch() {
// // //   const [filters, setFilters] = useState({
// // //     keyword: "",
// // //     sort: "desc",
// // //   });

// // //   const [jobs, setJobs] = useState<any[]>([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [page, setPage] = useState(1);
// // //   const limit = 9;

// // //   const handleChange = (field: string, value: string) => {
// // //     setFilters((prev) => ({ ...prev, [field]: value }));
// // //     setPage(1);
// // //   };

// // //   const clearFilters = () => {
// // //     setFilters({ keyword: "", sort: "desc" });
// // //     setPage(1);
// // //   };

// // //   const fetchJobs = async () => {
// // //     setLoading(true);
// // //     const params = new URLSearchParams();

// // //     if (filters.keyword) params.set("keyword", filters.keyword);
// // //     params.set("sort", filters.sort);
// // //     params.set("limit", String(limit));
// // //     params.set("offset", String((page - 1) * limit));

// // //     try {
// // //       const res = await fetch(`/api/jobs?${params.toString()}`);
// // //       const { data } = await res.json();
// // //       setJobs(Array.isArray(data) ? data : []);
// // //     } catch (error) {
// // //       console.error("❌ Failed to fetch jobs:", error);
// // //       setJobs([]);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchJobs();
// // //   }, [filters, page]);

// // //   return (
// // //     <div>
// // //       {/* Header */}
// // //       <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
// // //         <p className="text-neutral-500 text-base">
// // //           Search open positions, sort listings, and apply in seconds.
// // //         </p>
// // //       </div>

// // //       {/* Filters */}
// // //       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 mb-12">
// // //         <Input
// // //           placeholder="Search roles, companies, or keywords..."
// // //           className="h-12 text-sm border border-neutral-200 shadow-sm"
// // //           value={filters.keyword}
// // //           onChange={(e) => handleChange("keyword", e.target.value)}
// // //         />
// // //         <Select
// // //           value={filters.sort}
// // //           onValueChange={(val) => handleChange("sort", val)}
// // //         >
// // //           <SelectTrigger className="h-12 text-sm border border-neutral-200 shadow-sm">
// // //             <SelectValue placeholder="Sort" />
// // //           </SelectTrigger>
// // //           <SelectContent>
// // //             <SelectItem value="desc">Newest First</SelectItem>
// // //             <SelectItem value="asc">Oldest First</SelectItem>
// // //           </SelectContent>
// // //         </Select>
// // //       </div>

// // //       {/* Job Cards */}
// // //       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {loading ? (
// // //           Array.from({ length: 9 }).map((_, i) => (
// // //             <div
// // //               key={i}
// // //               className="p-6 rounded-xl border border-neutral-200 bg-white animate-pulse space-y-4"
// // //             >
// // //               <div className="h-4 w-1/3 bg-neutral-200 rounded" />
// // //               <div className="flex gap-2">
// // //                 <div className="h-4 w-16 bg-neutral-200 rounded" />
// // //                 <div className="h-4 w-16 bg-neutral-200 rounded" />
// // //                 <div className="h-4 w-20 bg-neutral-200 rounded" />
// // //               </div>
// // //               <div className="h-4 bg-neutral-200 rounded w-full" />
// // //               <div className="h-4 bg-neutral-200 rounded w-4/5" />
// // //             </div>
// // //           ))
// // //         ) : jobs.length > 0 ? (
// // //           jobs.map((job) => (
// // //             <Link key={job.id} href={`/jobs/${job.id}`} className="group">
// // //               <div className="p-6 h-full rounded-xl border border-neutral-200 bg-gradient-to-br from-white via-white to-gray-50 hover:shadow-md hover:border-gray-300 transition-shadow flex flex-col justify-between space-y-4">
// // //                 {/* Title & Job Type */}
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="bg-blue-100 p-2 rounded-md">
// // //                     <Briefcase className="w-5 h-5 text-blue-900" />
// // //                   </div>
// // //                   <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-black transition">
// // //                     {job.title}
// // //                   </h3>
// // //                 </div>

// // //                 {/* Metadata row */}
// // //                 <div className="flex flex-wrap items-center gap-3 text-sm capitalize text-neutral-600">
// // //                   <span className="inline-flex items-center gap-1">
// // //                     <MapPin className="w-4 h-4 text-neutral-400" />
// // //                     {job.location}
// // //                   </span>
// // //                   <span className="inline-flex items-center gap-1">
// // //                     <Briefcase className="w-4 h-4 text-neutral-400" />
// // //                     {job.category}
// // //                   </span>
// // //                   <span className="inline-flex items-center gap-1">
// // //                     <Globe className="w-4 h-4 text-neutral-400" />
// // //                     {job.is_remote
// // //                       ? "Remote"
// // //                       : job.is_onsite
// // //                       ? "Onsite"
// // //                       : "N/A"}
// // //                   </span>
// // //                   {job.job_type && (
// // //                     <span
// // //                       className={clsx(
// // //                         "text-xs font-medium px-2 py-0.5 rounded-full border",
// // //                         job.job_type === "Full-time"
// // //                           ? "bg-green-50 text-green-700 border-green-200"
// // //                           : "bg-yellow-50 text-yellow-700 border-yellow-200"
// // //                       )}
// // //                     >
// // //                       {job.job_type}
// // //                     </span>
// // //                   )}
// // //                 </div>

// // //                 {/* Short Description */}
// // //                 <p className="text-sm text-neutral-700 leading-relaxed line-clamp-3">
// // //                   {job.description}
// // //                 </p>

// // //                 {/* Footer */}
// // //                 <div className="flex items-center justify-between pt-4 border-t border-neutral-200 text-sm text-neutral-500">
// // //                   <div className="flex items-center gap-1">
// // //                     <CalendarDays className="w-4 h-4" />
// // //                     <span>
// // //                       {formatDistanceToNow(new Date(job.created_at), {
// // //                         addSuffix: true,
// // //                       })}
// // //                     </span>
// // //                   </div>
// // //                   <span className="font-medium text-blue-900 group-hover:underline">
// // //                     View details →
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </Link>
// // //           ))
// // //         ) : (
// // //           <div className="col-span-full text-center text-neutral-400 text-sm py-12 space-y-4">
// // //             <div className="text-5xl">🔍</div>
// // //             <p>No jobs found matching your criteria.</p>
// // //             <Button
// // //               variant="outline"
// // //               className="inline-flex gap-2 items-center"
// // //               onClick={clearFilters}
// // //             >
// // //               <X className="w-4 h-4" />
// // //               Clear filters
// // //             </Button>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Pagination */}
// // //       {!loading && jobs.length > 0 && (
// // //         <div className="mt-12 flex justify-center items-center gap-4">
// // //           <Button
// // //             variant="outline"
// // //             size="icon"
// // //             className="rounded-full"
// // //             onClick={() => setPage((p) => Math.max(p - 1, 1))}
// // //             disabled={page === 1}
// // //           >
// // //             <ArrowLeft className="w-4 h-4" />
// // //           </Button>
// // //           <span className="text-sm text-neutral-600">Page {page}</span>
// // //           <Button
// // //             variant="outline"
// // //             size="icon"
// // //             className="rounded-full"
// // //             onClick={() => setPage((p) => p + 1)}
// // //           >
// // //             <ArrowRight className="w-4 h-4" />
// // //           </Button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import Link from "next/link";
// // // import { Input } from "@/components/ui/input";
// // // import { Button } from "@/components/ui/button";
// // // import {
// // //   Select,
// // //   SelectTrigger,
// // //   SelectValue,
// // //   SelectContent,
// // //   SelectItem,
// // // } from "@/components/ui/select";
// // // import {
// // //   ArrowLeft,
// // //   ArrowRight,
// // //   Briefcase,
// // //   MapPin,
// // //   Globe,
// // //   CalendarDays,
// // //   X,
// // // } from "lucide-react";
// // // import clsx from "clsx";
// // // import { formatDistanceToNow } from "date-fns";

// // // export default function JobSearch() {
// // //   const [filters, setFilters] = useState({ keyword: "", sort: "desc" });
// // //   const [jobs, setJobs] = useState<any[]>([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [page, setPage] = useState(1);
// // //   const limit = 9;

// // //   const handleChange = (field: string, value: string) => {
// // //     setFilters((prev) => ({ ...prev, [field]: value }));
// // //     setPage(1);
// // //   };

// // //   const clearFilters = () => {
// // //     setFilters({ keyword: "", sort: "desc" });
// // //     setPage(1);
// // //   };

// // //   const fetchJobs = async () => {
// // //     setLoading(true);
// // //     const params = new URLSearchParams();

// // //     if (filters.keyword) params.set("keyword", filters.keyword);
// // //     params.set("sort", filters.sort);
// // //     params.set("limit", String(limit));
// // //     params.set("offset", String((page - 1) * limit));

// // //     try {
// // //       const res = await fetch(`/api/jobs?${params.toString()}`);
// // //       const { data } = await res.json();
// // //       setJobs(Array.isArray(data) ? data : []);
// // //     } catch (error) {
// // //       console.error("❌ Failed to fetch jobs:", error);
// // //       setJobs([]);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchJobs();
// // //   }, [filters, page]);

// // //   return (
// // //     <div>
// // //       {/* Header */}
// // //       <div className="max-w-3xl mx-auto text-center mb-12 space-y-2">
// // //         <h1 className="text-2xl font-semibold text-foreground">
// // //           Explore Opportunities
// // //         </h1>
// // //         <p className="text-muted-foreground text-sm">
// // //           Search open positions and apply in seconds.
// // //         </p>
// // //       </div>

// // //       {/* Filters */}
// // //       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_180px] gap-4 mb-12">
// // //         <Input
// // //           placeholder="Search by title or keyword..."
// // //           className="h-11 rounded-lg text-sm placeholder:text-neutral-400"
// // //           value={filters.keyword}
// // //           onChange={(e) => handleChange("keyword", e.target.value)}
// // //         />
// // //         <Select
// // //           value={filters.sort}
// // //           onValueChange={(val) => handleChange("sort", val)}
// // //         >
// // //           <SelectTrigger className="h-11 rounded-lg text-sm">
// // //             <SelectValue placeholder="Sort by" />
// // //           </SelectTrigger>
// // //           <SelectContent>
// // //             <SelectItem value="desc">Newest First</SelectItem>
// // //             <SelectItem value="asc">Oldest First</SelectItem>
// // //           </SelectContent>
// // //         </Select>
// // //       </div>

// // //       {/* Job Grid */}
// // //       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {loading ? (
// // //           Array.from({ length: 9 }).map((_, i) => (
// // //             <div
// // //               key={i}
// // //               className="p-6 rounded-xl border border-neutral-200 bg-white animate-pulse space-y-4 shadow-sm"
// // //             >
// // //               <div className="h-4 w-1/2 bg-neutral-200 rounded" />
// // //               <div className="flex gap-2">
// // //                 <div className="h-4 w-16 bg-neutral-200 rounded" />
// // //                 <div className="h-4 w-20 bg-neutral-200 rounded" />
// // //               </div>
// // //               <div className="h-4 bg-neutral-200 rounded w-full" />
// // //               <div className="h-4 bg-neutral-200 rounded w-4/5" />
// // //             </div>
// // //           ))
// // //         ) : jobs.length > 0 ? (
// // //           jobs.map((job) => (
// // //             <Link key={job.id} href={`/jobs/${job.id}`} className="group">
// // //               <div className="p-5 h-full rounded-xl border border-neutral-200 bg-white hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col justify-between space-y-4">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="bg-blue-100 p-2 rounded-md">
// // //                     <Briefcase className="w-5 h-5 text-blue-900" />
// // //                   </div>
// // //                   <h3 className="text-base font-medium text-foreground group-hover:text-black transition">
// // //                     {job.title}
// // //                   </h3>
// // //                 </div>

// // //                 <div className="flex flex-wrap items-center gap-3 text-xs capitalize text-neutral-600">
// // //                   <span className="inline-flex items-center gap-1">
// // //                     <MapPin className="w-4 h-4" />
// // //                     {job.location}
// // //                   </span>
// // //                   <span className="inline-flex items-center gap-1">
// // //                     <Briefcase className="w-4 h-4" />
// // //                     {job.category}
// // //                   </span>
// // //                   <span className="inline-flex items-center gap-1">
// // //                     <Globe className="w-4 h-4" />
// // //                     {job.is_remote
// // //                       ? "Remote"
// // //                       : job.is_onsite
// // //                       ? "Onsite"
// // //                       : "Flexible"}
// // //                   </span>
// // //                   {job.job_type && (
// // //                     <span
// // //                       className={clsx(
// // //                         "text-xs font-medium px-2 py-0.5 rounded-full border",
// // //                         job.job_type === "Full-time"
// // //                           ? "bg-green-50 text-green-700 border-green-200"
// // //                           : "bg-yellow-50 text-yellow-700 border-yellow-200"
// // //                       )}
// // //                     >
// // //                       {job.job_type}
// // //                     </span>
// // //                   )}
// // //                 </div>

// // //                 <p className="text-sm text-neutral-700 line-clamp-3 leading-snug">
// // //                   {job.description}
// // //                 </p>

// // //                 <div className="flex items-center justify-between pt-3 border-t border-neutral-200 text-xs text-neutral-500">
// // //                   <div className="flex items-center gap-1">
// // //                     <CalendarDays className="w-4 h-4" />
// // //                     <span>
// // //                       {formatDistanceToNow(new Date(job.created_at), {
// // //                         addSuffix: true,
// // //                       })}
// // //                     </span>
// // //                   </div>
// // //                   <span className="font-medium text-blue-900 group-hover:underline">
// // //                     View details →
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </Link>
// // //           ))
// // //         ) : (
// // //           <div className="col-span-full text-center text-neutral-400 text-sm py-12 space-y-4">
// // //             <div className="text-5xl">🔍</div>
// // //             <p>No jobs found matching your criteria.</p>
// // //             <Button
// // //               variant="outline"
// // //               className="inline-flex gap-2 items-center"
// // //               onClick={clearFilters}
// // //             >
// // //               <X className="w-4 h-4" />
// // //               Clear filters
// // //             </Button>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Pagination */}
// // //       {!loading && jobs.length > 0 && (
// // //         <div className="mt-14 flex justify-center items-center gap-4">
// // //           <Button
// // //             variant="outline"
// // //             size="icon"
// // //             className="rounded-full"
// // //             onClick={() => setPage((p) => Math.max(p - 1, 1))}
// // //             disabled={page === 1}
// // //           >
// // //             <ArrowLeft className="w-4 h-4" />
// // //           </Button>
// // //           <span className="text-sm text-neutral-600">Page {page}</span>
// // //           <Button
// // //             variant="outline"
// // //             size="icon"
// // //             className="rounded-full"
// // //             onClick={() => setPage((p) => p + 1)}
// // //           >
// // //             <ArrowRight className="w-4 h-4" />
// // //           </Button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useEffect, useState } from "react";
// // import Link from "next/link";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Select,
// //   SelectTrigger,
// //   SelectValue,
// //   SelectContent,
// //   SelectItem,
// // } from "@/components/ui/select";
// // import {
// //   ArrowLeft,
// //   ArrowRight,
// //   Briefcase,
// //   MapPin,
// //   Globe,
// //   CalendarDays,
// //   X,
// // } from "lucide-react";
// // import clsx from "clsx";
// // import { formatDistanceToNow } from "date-fns";

// // export default function JobSearch() {
// //   const [filters, setFilters] = useState({ keyword: "", sort: "desc" });
// //   const [jobs, setJobs] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(false);
// //   const [page, setPage] = useState(1);
// //   const limit = 9;

// //   const handleChange = (field: string, value: string) => {
// //     setFilters((prev) => ({ ...prev, [field]: value }));
// //     setPage(1);
// //   };

// //   const clearFilters = () => {
// //     setFilters({ keyword: "", sort: "desc" });
// //     setPage(1);
// //   };

// //   const fetchJobs = async () => {
// //     setLoading(true);
// //     const params = new URLSearchParams();

// //     if (filters.keyword) params.set("keyword", filters.keyword);
// //     params.set("sort", filters.sort);
// //     params.set("limit", String(limit));
// //     params.set("offset", String((page - 1) * limit));

// //     try {
// //       const res = await fetch(`/api/jobs?${params.toString()}`);
// //       const { data } = await res.json();
// //       setJobs(Array.isArray(data) ? data : []);
// //     } catch (error) {
// //       console.error("❌ Failed to fetch jobs:", error);
// //       setJobs([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchJobs();
// //   }, [filters, page]);

// //   return (
// //     <div className="px-4 pb-20">
// //       {/* Page header */}
// //       <div className="max-w-3xl mx-auto text-center mb-10">
// //         <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900">
// //           Explore Opportunities
// //         </h1>
// //         <p className="text-sm md:text-base text-neutral-500 mt-1">
// //           Find jobs by category, location, and type.
// //         </p>
// //       </div>

// //       {/* Filters */}
// //       <div className="sticky top-[65px] z-10 bg-white/90 backdrop-blur-md pb-6 mb-8 border-b">
// //         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_180px] gap-3 px-1">
// //           <Input
// //             placeholder="Search job title, company or keyword..."
// //             className="h-11 rounded-lg text-sm placeholder:text-neutral-400"
// //             value={filters.keyword}
// //             onChange={(e) => handleChange("keyword", e.target.value)}
// //           />
// //           <Select
// //             value={filters.sort}
// //             onValueChange={(val) => handleChange("sort", val)}
// //           >
// //             <SelectTrigger className="h-11 rounded-lg text-sm">
// //               <SelectValue placeholder="Sort" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="desc">Newest First</SelectItem>
// //               <SelectItem value="asc">Oldest First</SelectItem>
// //             </SelectContent>
// //           </Select>
// //         </div>
// //       </div>

// //       {/* Job cards */}
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {loading ? (
// //           Array.from({ length: 9 }).map((_, i) => (
// //             <div
// //               key={i}
// //               className="p-6 rounded-xl border border-neutral-200 bg-white animate-pulse space-y-4 shadow-sm"
// //             >
// //               <div className="h-4 w-1/2 bg-neutral-200 rounded" />
// //               <div className="flex gap-2">
// //                 <div className="h-4 w-20 bg-neutral-200 rounded" />
// //                 <div className="h-4 w-24 bg-neutral-200 rounded" />
// //               </div>
// //               <div className="h-4 bg-neutral-200 rounded w-full" />
// //               <div className="h-4 bg-neutral-200 rounded w-4/5" />
// //             </div>
// //           ))
// //         ) : jobs.length > 0 ? (
// //           jobs.map((job) => (
// //             <Link key={job.id} href={`/jobs/${job.id}`} className="group">
// //               <div className="p-5 rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:shadow-md hover:border-neutral-300 transition-all duration-200 flex flex-col justify-between space-y-4">
// //                 <div className="flex items-start gap-3">
// //                   <div className="bg-blue-100 p-2 rounded-md">
// //                     <Briefcase className="w-5 h-5 text-blue-900" />
// //                   </div>
// //                   <div>
// //                     <h3 className="text-base font-medium text-neutral-900 group-hover:text-blue-900 transition">
// //                       {job.title}
// //                     </h3>
// //                     <p className="text-xs text-neutral-500 capitalize">
// //                       {job.category}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-600">
// //                   <span className="inline-flex items-center gap-1">
// //                     <MapPin className="w-4 h-4" />
// //                     {job.location}
// //                   </span>
// //                   <span className="inline-flex items-center gap-1">
// //                     <Globe className="w-4 h-4" />
// //                     {job.is_remote
// //                       ? "Remote"
// //                       : job.is_onsite
// //                       ? "Onsite"
// //                       : "Flexible"}
// //                   </span>
// //                   {job.job_type && (
// //                     <span
// //                       className={clsx(
// //                         "px-2 py-0.5 rounded-full border text-xs font-medium",
// //                         job.job_type === "Full-time"
// //                           ? "bg-green-50 text-green-700 border-green-200"
// //                           : "bg-yellow-50 text-yellow-700 border-yellow-200"
// //                       )}
// //                     >
// //                       {job.job_type}
// //                     </span>
// //                   )}
// //                 </div>

// //                 <p className="text-sm text-neutral-700 line-clamp-3 leading-snug">
// //                   {job.description}
// //                 </p>

// //                 <div className="flex items-center justify-between pt-4 border-t border-neutral-200 text-xs text-neutral-500">
// //                   <div className="flex items-center gap-1">
// //                     <CalendarDays className="w-4 h-4" />
// //                     <span>
// //                       {formatDistanceToNow(new Date(job.created_at), {
// //                         addSuffix: true,
// //                       })}
// //                     </span>
// //                   </div>
// //                   <span className="font-medium text-blue-900 group-hover:underline">
// //                     View →
// //                   </span>
// //                 </div>
// //               </div>
// //             </Link>
// //           ))
// //         ) : (
// //           <div className="col-span-full text-center text-neutral-400 text-sm py-16 space-y-4">
// //             <div className="text-5xl">🔍</div>
// //             <p>No jobs found matching your criteria.</p>
// //             <Button
// //               variant="outline"
// //               className="inline-flex gap-2 items-center"
// //               onClick={clearFilters}
// //             >
// //               <X className="w-4 h-4" />
// //               Clear filters
// //             </Button>
// //           </div>
// //         )}
// //       </div>

// //       {/* Pagination */}
// //       {!loading && jobs.length > 0 && (
// //         <div className="mt-16 flex justify-center items-center gap-4">
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             className="rounded-full"
// //             onClick={() => setPage((p) => Math.max(p - 1, 1))}
// //             disabled={page === 1}
// //           >
// //             <ArrowLeft className="w-4 h-4" />
// //           </Button>
// //           <span className="text-sm text-neutral-600">Page {page}</span>
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             className="rounded-full"
// //             onClick={() => setPage((p) => p + 1)}
// //           >
// //             <ArrowRight className="w-4 h-4" />
// //           </Button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import Link from "next/link";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Select,
// //   SelectTrigger,
// //   SelectValue,
// //   SelectContent,
// //   SelectItem,
// // } from "@/components/ui/select";
// // import {
// //   ArrowLeft,
// //   ArrowRight,
// //   Briefcase,
// //   MapPin,
// //   Globe,
// //   CalendarDays,
// //   X,
// // } from "lucide-react";
// // import clsx from "clsx";
// // import { formatDistanceToNow } from "date-fns";
// // import { ButtonLoadingSpinner } from "@/components/LoadingSpinner";

// // export default function JobSearch() {
// //   const [filters, setFilters] = useState({ keyword: "", sort: "desc" });
// //   const [jobs, setJobs] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(false);
// //   const [page, setPage] = useState(1);
// //   const limit = 9;

// //   const handleChange = (field: string, value: string) => {
// //     setFilters((prev) => ({ ...prev, [field]: value }));
// //     setPage(1);
// //   };

// //   const clearFilters = () => {
// //     setFilters({ keyword: "", sort: "desc" });
// //     setPage(1);
// //   };

// //   const fetchJobs = async () => {
// //     setLoading(true);
// //     const params = new URLSearchParams();

// //     if (filters.keyword) params.set("keyword", filters.keyword);
// //     params.set("sort", filters.sort);
// //     params.set("limit", String(limit));
// //     params.set("offset", String((page - 1) * limit));

// //     try {
// //       const res = await fetch(`/api/jobs?${params.toString()}`);
// //       const { data } = await res.json();
// //       setJobs(Array.isArray(data) ? data : []);
// //     } catch (error) {
// //       console.error("❌ Failed to fetch jobs:", error);
// //       setJobs([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchJobs();
// //   }, [filters, page]);

// //   return (
// //     <div className="px-4 pb-20">
// //       {/* Header */}
// //       <div className="text-center max-w-xl mx-auto mt-6 mb-8">
// //         <h1 className="text-2xl font-semibold text-foreground">Find a Job</h1>
// //         <p className="text-sm text-muted-foreground">
// //           Explore curated opportunities tailored for you.
// //         </p>
// //       </div>

// //       {/* Filters */}
// //       <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-3 mb-10">
// //         <Input
// //           placeholder="Search job title, keyword..."
// //           className="h-11 rounded-md text-sm"
// //           value={filters.keyword}
// //           onChange={(e) => handleChange("keyword", e.target.value)}
// //         />
// //         <Select
// //           value={filters.sort}
// //           onValueChange={(val) => handleChange("sort", val)}
// //         >
// //           <SelectTrigger className="h-11 rounded-md text-sm">
// //             <SelectValue placeholder="Sort by" />
// //           </SelectTrigger>
// //           <SelectContent>
// //             <SelectItem value="desc">Newest First</SelectItem>
// //             <SelectItem value="asc">Oldest First</SelectItem>
// //           </SelectContent>
// //         </Select>
// //       </div>

// //       {/* Job Cards */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
// //         {loading ? (
// //           Array.from({ length: limit }).map((_, i) => (
// //             <div
// //               key={i}
// //               className="h-[320px] p-6 rounded-xl border flex items-center justify-center border-neutral-200 bg-white"
// //             >
// //               <ButtonLoadingSpinner size={24} thickness={3} />
// //             </div>
// //           ))
// //         ) : jobs.length > 0 ? (
// //           jobs.map((job) => (
// //             <Link key={job.id} href={`/jobs/${job.id}`}>
// //               <div className="group p-5 h-[320px] rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:shadow-md hover:border-neutral-300 transition-all duration-200 flex flex-col justify-between">
// //                 {/* Top */}
// //                 <div className="flex items-start gap-3">
// //                   <div className="bg-blue-100 p-2 rounded-md">
// //                     <Briefcase className="w-5 h-5 text-blue-900" />
// //                   </div>
// //                   <div className="flex-1">
// //                     <h3 className="text-base font-medium text-neutral-900 group-hover:text-blue-900 line-clamp-2">
// //                       {job.title}
// //                     </h3>
// //                     <p className="text-xs text-neutral-500 capitalize mt-0.5">
// //                       {job.category}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 {/* Meta */}
// //                 <div className="flex flex-wrap gap-2 text-xs mt-3 text-neutral-600">
// //                   <span className="inline-flex items-center gap-1">
// //                     <MapPin className="w-4 h-4" />
// //                     {job.location}
// //                   </span>
// //                   <span className="inline-flex items-center gap-1">
// //                     <Globe className="w-4 h-4" />
// //                     {job.is_remote
// //                       ? "Remote"
// //                       : job.is_onsite
// //                       ? "Onsite"
// //                       : "Flexible"}
// //                   </span>
// //                   {job.job_type && (
// //                     <span
// //                       className={clsx(
// //                         "px-2 py-0.5 rounded-full border text-xs font-medium",
// //                         job.job_type === "Full-time"
// //                           ? "bg-green-50 text-green-700 border-green-200"
// //                           : "bg-yellow-50 text-yellow-700 border-yellow-200"
// //                       )}
// //                     >
// //                       {job.job_type}
// //                     </span>
// //                   )}
// //                 </div>

// //                 {/* Description */}
// //                 <p className="text-sm text-neutral-700 line-clamp-3 mt-2">
// //                   {job.description}
// //                 </p>

// //                 {/* Footer */}
// //                 <div className="flex items-center justify-between pt-3 border-t border-neutral-200 text-xs text-neutral-500 mt-4">
// //                   <div className="flex items-center gap-1">
// //                     <CalendarDays className="w-4 h-4" />
// //                     <span>
// //                       {formatDistanceToNow(new Date(job.created_at), {
// //                         addSuffix: true,
// //                       })}
// //                     </span>
// //                   </div>
// //                   <span className="font-medium text-blue-900 group-hover:underline">
// //                     View →
// //                   </span>
// //                 </div>
// //               </div>
// //             </Link>
// //           ))
// //         ) : (
// //           <div className="col-span-full text-center text-neutral-400 text-sm py-16 space-y-4">
// //             <div className="text-5xl">🔍</div>
// //             <p>No jobs found matching your criteria.</p>
// //             <Button
// //               variant="outline"
// //               className="inline-flex gap-2 items-center"
// //               onClick={clearFilters}
// //             >
// //               <X className="w-4 h-4" />
// //               Clear filters
// //             </Button>
// //           </div>
// //         )}
// //       </div>

// //       {/* Pagination */}
// //       {!loading && jobs.length > 0 && (
// //         <div className="mt-14 flex justify-center items-center gap-4">
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             className="rounded-full"
// //             onClick={() => setPage((p) => Math.max(p - 1, 1))}
// //             disabled={page === 1}
// //           >
// //             <ArrowLeft className="w-4 h-4" />
// //           </Button>
// //           <span className="text-sm text-neutral-600">Page {page}</span>
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             className="rounded-full"
// //             onClick={() => setPage((p) => p + 1)}
// //           >
// //             <ArrowRight className="w-4 h-4" />
// //           </Button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import Link from "next/link";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Select,
// //   SelectTrigger,
// //   SelectValue,
// //   SelectContent,
// //   SelectItem,
// // } from "@/components/ui/select";
// // import {
// //   ArrowLeft,
// //   ArrowRight,
// //   Briefcase,
// //   MapPin,
// //   Globe,
// //   CalendarDays,
// //   X,
// // } from "lucide-react";
// // import clsx from "clsx";
// // import { formatDistanceToNow } from "date-fns";
// // import { ButtonLoadingSpinner } from "@/components/LoadingSpinner";

// // export default function JobSearch() {
// //   const [filters, setFilters] = useState({ keyword: "", sort: "desc" });
// //   const [jobs, setJobs] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(false);
// //   const [page, setPage] = useState(1);
// //   const limit = 9;

// //   const handleChange = (field: string, value: string) => {
// //     setFilters((prev) => ({ ...prev, [field]: value }));
// //     setPage(1);
// //   };

// //   const clearFilters = () => {
// //     setFilters({ keyword: "", sort: "desc" });
// //     setPage(1);
// //   };

// //   const fetchJobs = async () => {
// //     setLoading(true);
// //     const params = new URLSearchParams();

// //     if (filters.keyword) params.set("keyword", filters.keyword);
// //     params.set("sort", filters.sort);
// //     params.set("limit", String(limit));
// //     params.set("offset", String((page - 1) * limit));

// //     try {
// //       const res = await fetch(`/api/jobs?${params.toString()}`);
// //       const { data } = await res.json();
// //       setJobs(Array.isArray(data) ? data : []);
// //     } catch (error) {
// //       console.error("❌ Failed to fetch jobs:", error);
// //       setJobs([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchJobs();
// //   }, [filters, page]);

// //   return (
// //     <div className="px-4 pb-20">
// //       {/* Header */}
// //       <div className="text-center max-w-xl mx-auto mt-6 mb-8">
// //         <h1 className="text-2xl font-semibold text-foreground">
// //           Discover Opportunities
// //         </h1>
// //         <p className="text-sm text-muted-foreground">
// //           Explore curated roles across Ghana and beyond.
// //         </p>
// //       </div>

// //       {/* Sticky Filter Bar */}
// //       <div className="sticky top-[60px] z-20 bg-white/80 backdrop-blur-sm border-y border-border py-3 mb-8">
// //         <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-3 px-2">
// //           <Input
// //             placeholder="Search by title or keyword..."
// //             className="h-11 rounded-md text-sm"
// //             value={filters.keyword}
// //             onChange={(e) => handleChange("keyword", e.target.value)}
// //           />
// //           <Select
// //             value={filters.sort}
// //             onValueChange={(val) => handleChange("sort", val)}
// //           >
// //             <SelectTrigger className="h-11 rounded-md text-sm">
// //               <SelectValue placeholder="Sort by" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="desc">Newest First</SelectItem>
// //               <SelectItem value="asc">Oldest First</SelectItem>
// //             </SelectContent>
// //           </Select>
// //         </div>
// //       </div>

// //       {/* Job Cards */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
// //         {loading ? (
// //           Array.from({ length: limit }).map((_, i) => (
// //             <div
// //               key={i}
// //               className="h-[280px] p-6 rounded-xl border flex items-center justify-center border-neutral-200 bg-white"
// //             >
// //               <ButtonLoadingSpinner size={28} thickness={4} />
// //             </div>
// //           ))
// //         ) : jobs.length > 0 ? (
// //           jobs.map((job) => (
// //             <Link key={job.id} href={`/jobs/${job.id}`} className="group">
// //               <div className="p-5 h-full rounded-xl border border-neutral-200 bg-white hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col justify-between space-y-4">
// //                 <div className="flex items-center gap-3">
// //                   <div className="bg-blue-100 p-2 rounded-md">
// //                     <Briefcase className="w-5 h-5 text-blue-900" />
// //                   </div>
// //                   <h3 className="text-base font-medium text-foreground group-hover:text-black transition">
// //                     {job.title}
// //                   </h3>
// //                 </div>

// //                 <div className="flex flex-wrap items-center gap-3 text-xs capitalize text-neutral-600">
// //                   <span className="inline-flex items-center gap-1">
// //                     <MapPin className="w-4 h-4" />
// //                     {job.location}
// //                   </span>
// //                   <span className="inline-flex items-center gap-1">
// //                     <Briefcase className="w-4 h-4" />
// //                     {job.category}
// //                   </span>
// //                   <span className="inline-flex items-center gap-1">
// //                     <Globe className="w-4 h-4" />
// //                     {job.is_remote
// //                       ? "Remote"
// //                       : job.is_onsite
// //                       ? "Onsite"
// //                       : "Flexible"}
// //                   </span>
// //                   {job.job_type && (
// //                     <span
// //                       className={clsx(
// //                         "text-xs font-medium px-2 py-0.5 rounded-full border",
// //                         job.job_type === "Full-time"
// //                           ? "bg-green-50 text-green-700 border-green-200"
// //                           : "bg-yellow-50 text-yellow-700 border-yellow-200"
// //                       )}
// //                     >
// //                       {job.job_type}
// //                     </span>
// //                   )}
// //                 </div>

// //                 <p className="text-sm text-neutral-700 line-clamp-3 leading-snug">
// //                   {job.description}
// //                 </p>

// //                 <div className="flex items-center justify-between pt-3 border-t border-neutral-200 text-xs text-neutral-500">
// //                   <div className="flex items-center gap-1">
// //                     <CalendarDays className="w-4 h-4" />
// //                     <span>
// //                       {formatDistanceToNow(new Date(job.created_at), {
// //                         addSuffix: true,
// //                       })}
// //                     </span>
// //                   </div>
// //                   <span className="font-medium text-blue-900 group-hover:underline">
// //                     View details →
// //                   </span>
// //                 </div>
// //               </div>
// //             </Link>
// //           ))
// //         ) : (
// //           <div className="col-span-full text-center text-neutral-400 text-sm py-16 space-y-4">
// //             <div className="text-5xl">🔍</div>
// //             <p>No jobs found matching your criteria.</p>
// //             <Button
// //               variant="outline"
// //               className="inline-flex gap-2 items-center"
// //               onClick={clearFilters}
// //             >
// //               <X className="w-4 h-4" />
// //               Clear filters
// //             </Button>
// //           </div>
// //         )}
// //       </div>

// //       {/* Pagination */}
// //       {!loading && jobs.length > 0 && (
// //         <div className="mt-14 flex justify-center items-center gap-4">
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             className="rounded-full"
// //             onClick={() => setPage((p) => Math.max(p - 1, 1))}
// //             disabled={page === 1}
// //           >
// //             <ArrowLeft className="w-4 h-4" />
// //           </Button>
// //           <span className="text-sm text-neutral-600">Page {page}</span>
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             className="rounded-full"
// //             onClick={() => setPage((p) => p + 1)}
// //           >
// //             <ArrowRight className="w-4 h-4" />
// //           </Button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import Link from "next/link";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Select,
// //   SelectTrigger,
// //   SelectValue,
// //   SelectContent,
// //   SelectItem,
// // } from "@/components/ui/select";
// // import {
// //   ArrowLeft,
// //   ArrowRight,
// //   Briefcase,
// //   MapPin,
// //   Globe,
// //   CalendarDays,
// //   X,
// // } from "lucide-react";
// // import clsx from "clsx";
// // import { formatDistanceToNow } from "date-fns";
// // import LoadingSpinner, {
// //   ButtonLoadingSpinner,
// // } from "@/components/LoadingSpinner";

// // export default function JobSearch() {
// //   const [filters, setFilters] = useState({ keyword: "", sort: "desc" });
// //   const [jobs, setJobs] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(false);
// //   const [hasFetchedOnce, setHasFetchedOnce] = useState(false);
// //   const [page, setPage] = useState(1);
// //   const limit = 9;

// //   const handleChange = (field: string, value: string) => {
// //     setFilters((prev) => ({ ...prev, [field]: value }));
// //     setPage(1);
// //   };

// //   const clearFilters = () => {
// //     setFilters({ keyword: "", sort: "desc" });
// //     setPage(1);
// //   };

// //   const fetchJobs = async () => {
// //     setLoading(true);
// //     const params = new URLSearchParams();

// //     if (filters.keyword) params.set("keyword", filters.keyword);
// //     params.set("sort", filters.sort);
// //     params.set("limit", String(limit));
// //     params.set("offset", String((page - 1) * limit));

// //     try {
// //       const res = await fetch(`/api/jobs?${params.toString()}`);
// //       const { data } = await res.json();
// //       setJobs(Array.isArray(data) ? data : []);
// //     } catch (error) {
// //       console.error("❌ Failed to fetch jobs:", error);
// //       setJobs([]);
// //     } finally {
// //       setHasFetchedOnce(true);
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchJobs();
// //   }, [filters, page]);

// //   return (
// //     <div className="px-4 pb-20">
// //       {/* Header */}
// //       <div className="text-center max-w-xl mx-auto mt-6 mb-8">
// //         <h1 className="text-2xl font-semibold text-foreground">
// //           Discover Opportunities
// //         </h1>
// //         <p className="text-sm text-muted-foreground">
// //           Explore curated roles across Ghana and beyond.
// //         </p>
// //       </div>

// //       {/* Sticky Filter Bar */}
// //       <div className="sticky top-[60px] z-20 bg-white/80 backdrop-blur-sm border-y border-border py-3 mb-8">
// //         <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-3 px-2">
// //           <Input
// //             placeholder="Search by title or keyword..."
// //             className="h-11 rounded-md text-sm"
// //             value={filters.keyword}
// //             onChange={(e) => handleChange("keyword", e.target.value)}
// //           />
// //           <Select
// //             value={filters.sort}
// //             onValueChange={(val) => handleChange("sort", val)}
// //           >
// //             <SelectTrigger className="h-11 rounded-md text-sm">
// //               <SelectValue placeholder="Sort by" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="desc">Newest First</SelectItem>
// //               <SelectItem value="asc">Oldest First</SelectItem>
// //             </SelectContent>
// //           </Select>
// //         </div>
// //       </div>

// //       {/* Job Cards or Spinner */}
// //       {!hasFetchedOnce && loading ? (
// //         <div className="flex justify-center items-center py-40">
// //           <LoadingSpinner />
// //         </div>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
// //           {loading ? (
// //             Array.from({ length: limit }).map((_, i) => (
// //               <div
// //                 key={i}
// //                 className="h-[280px] p-6 rounded-xl border flex items-center justify-center border-neutral-200 bg-white"
// //               >
// //                 <LoadingSpinner size={28} thickness={4} />
// //               </div>
// //             ))
// //           ) : jobs.length > 0 ? (
// //             jobs.map((job) => (
// //               <Link key={job.id} href={`/jobs/${job.id}`} className="group">
// //                 <div className="p-5 h-full rounded-xl border border-neutral-200 bg-white hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col justify-between space-y-4">
// //                   <div className="flex items-center gap-3">
// //                     <div className="bg-blue-100 p-2 rounded-md">
// //                       <Briefcase className="w-5 h-5 text-blue-900" />
// //                     </div>
// //                     <h3 className="text-base font-medium text-foreground group-hover:text-black transition">
// //                       {job.title}
// //                     </h3>
// //                   </div>

// //                   <div className="flex flex-wrap items-center gap-3 text-xs capitalize text-neutral-600">
// //                     <span className="inline-flex items-center gap-1">
// //                       <MapPin className="w-4 h-4" />
// //                       {job.location}
// //                     </span>
// //                     <span className="inline-flex items-center gap-1">
// //                       <Briefcase className="w-4 h-4" />
// //                       {job.category}
// //                     </span>
// //                     <span className="inline-flex items-center gap-1">
// //                       <Globe className="w-4 h-4" />
// //                       {job.is_remote
// //                         ? "Remote"
// //                         : job.is_onsite
// //                         ? "Onsite"
// //                         : "Flexible"}
// //                     </span>
// //                     {job.job_type && (
// //                       <span
// //                         className={clsx(
// //                           "text-xs font-medium px-2 py-0.5 rounded-full border",
// //                           job.job_type === "Full-time"
// //                             ? "bg-green-50 text-green-700 border-green-200"
// //                             : "bg-yellow-50 text-yellow-700 border-yellow-200"
// //                         )}
// //                       >
// //                         {job.job_type}
// //                       </span>
// //                     )}
// //                   </div>

// //                   <p className="text-sm text-neutral-700 line-clamp-3 leading-snug">
// //                     {job.description}
// //                   </p>

// //                   <div className="flex items-center justify-between pt-3 border-t border-neutral-200 text-xs text-neutral-500">
// //                     <div className="flex items-center gap-1">
// //                       <CalendarDays className="w-4 h-4" />
// //                       <span>
// //                         {formatDistanceToNow(new Date(job.created_at), {
// //                           addSuffix: true,
// //                         })}
// //                       </span>
// //                     </div>
// //                     <span className="font-medium text-blue-900 group-hover:underline">
// //                       View details →
// //                     </span>
// //                   </div>
// //                 </div>
// //               </Link>
// //             ))
// //           ) : (
// //             <div className="col-span-full text-center text-neutral-400 text-sm py-16 space-y-4">
// //               <div className="text-5xl">🔍</div>
// //               <p>No jobs found matching your criteria.</p>
// //               <Button
// //                 variant="outline"
// //                 className="inline-flex gap-2 items-center"
// //                 onClick={clearFilters}
// //               >
// //                 <X className="w-4 h-4" />
// //                 Clear filters
// //               </Button>
// //             </div>
// //           )}
// //         </div>
// //       )}

// //       {/* Pagination */}
// //       {!loading && jobs.length > 0 && (
// //         <div className="mt-14 flex justify-center items-center gap-4">
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             className="rounded-full"
// //             onClick={() => setPage((p) => Math.max(p - 1, 1))}
// //             disabled={page === 1}
// //           >
// //             <ArrowLeft className="w-4 h-4" />
// //           </Button>
// //           <span className="text-sm text-neutral-600">Page {page}</span>
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             className="rounded-full"
// //             onClick={() => setPage((p) => p + 1)}
// //           >
// //             <ArrowRight className="w-4 h-4" />
// //           </Button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import Link from "next/link";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Select,
// //   SelectTrigger,
// //   SelectValue,
// //   SelectContent,
// //   SelectItem,
// // } from "@/components/ui/select";
// // import {
// //   ArrowLeft,
// //   ArrowRight,
// //   Briefcase,
// //   MapPin,
// //   Globe,
// //   CalendarDays,
// //   X,
// // } from "lucide-react";
// // import clsx from "clsx";
// // import { formatDistanceToNow } from "date-fns";
// // import LoadingSpinner from "@/components/LoadingSpinner";

// // export default function JobSearch() {
// //   const [filters, setFilters] = useState({ keyword: "", sort: "desc" });
// //   const [jobs, setJobs] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(false);
// //   const [hasFetchedOnce, setHasFetchedOnce] = useState(false);
// //   const [page, setPage] = useState(1);
// //   const limit = 9;

// //   const handleChange = (field: string, value: string) => {
// //     setFilters((prev) => ({ ...prev, [field]: value }));
// //     setPage(1);
// //   };

// //   const clearFilters = () => {
// //     setFilters({ keyword: "", sort: "desc" });
// //     setPage(1);
// //   };

// //   const fetchJobs = async () => {
// //     setLoading(true);
// //     const params = new URLSearchParams();

// //     if (filters.keyword) params.set("keyword", filters.keyword);
// //     params.set("sort", filters.sort);
// //     params.set("limit", String(limit));
// //     params.set("offset", String((page - 1) * limit));

// //     try {
// //       const res = await fetch(`/api/jobs?${params.toString()}`);
// //       const { data } = await res.json();
// //       setJobs(Array.isArray(data) ? data : []);
// //     } catch (error) {
// //       console.error("❌ Failed to fetch jobs:", error);
// //       setJobs([]);
// //     } finally {
// //       setHasFetchedOnce(true);
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchJobs();
// //   }, [filters, page]);

// //   return (
// //     <div className="px-4 pb-20">
// //       {/* Header */}
// //       <div className="text-center max-w-xl mx-auto mt-6 mb-8">
// //         <h1 className="text-2xl font-semibold text-foreground">
// //           Discover Opportunities
// //         </h1>
// //         <p className="text-sm text-muted-foreground">
// //           Explore curated roles across Ghana and beyond.
// //         </p>
// //       </div>

// //       {/* Sticky Filter Bar */}
// //       <div className="sticky top-[60px] z-20 bg-white/80 backdrop-blur-sm border-y border-border py-3 mb-8">
// //         <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-3 px-2">
// //           <Input
// //             placeholder="Search by title or keyword..."
// //             className="h-11 rounded-md text-sm"
// //             value={filters.keyword}
// //             onChange={(e) => handleChange("keyword", e.target.value)}
// //           />
// //           <Select
// //             value={filters.sort}
// //             onValueChange={(val) => handleChange("sort", val)}
// //           >
// //             <SelectTrigger className="h-11 rounded-md text-sm">
// //               <SelectValue placeholder="Sort by" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="desc">Newest First</SelectItem>
// //               <SelectItem value="asc">Oldest First</SelectItem>
// //             </SelectContent>
// //           </Select>
// //         </div>
// //       </div>

// //       {/* Jobs Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
// //         {loading && (
// //           <div className="col-span-full flex justify-center items-center py-40">
// //             <LoadingSpinner />
// //           </div>
// //         )}

// //         {!loading && jobs.length > 0 && (
// //           <>
// //             {jobs.map((job) => (
// //               <Link key={job.id} href={`/jobs/${job.id}`} className="group">
// //                 <div className="p-5 h-full rounded-xl border border-neutral-200 bg-white hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col justify-between space-y-4">
// //                   <div className="flex items-center gap-3">
// //                     <div className="bg-blue-100 p-2 rounded-md">
// //                       <Briefcase className="w-5 h-5 text-blue-900" />
// //                     </div>
// //                     <h3 className="text-base font-medium text-foreground group-hover:text-black transition">
// //                       {job.title}
// //                     </h3>
// //                   </div>

// //                   <div className="flex flex-wrap items-center gap-3 text-xs capitalize text-neutral-600">
// //                     <span className="inline-flex items-center gap-1">
// //                       <MapPin className="w-4 h-4" />
// //                       {job.location}
// //                     </span>
// //                     <span className="inline-flex items-center gap-1">
// //                       <Briefcase className="w-4 h-4" />
// //                       {job.category}
// //                     </span>
// //                     <span className="inline-flex items-center gap-1">
// //                       <Globe className="w-4 h-4" />
// //                       {job.is_remote
// //                         ? "Remote"
// //                         : job.is_onsite
// //                         ? "Onsite"
// //                         : "Flexible"}
// //                     </span>
// //                     {job.job_type && (
// //                       <span
// //                         className={clsx(
// //                           "text-xs font-medium px-2 py-0.5 rounded-full border",
// //                           job.job_type === "Full-time"
// //                             ? "bg-green-50 text-green-700 border-green-200"
// //                             : "bg-yellow-50 text-yellow-700 border-yellow-200"
// //                         )}
// //                       >
// //                         {job.job_type}
// //                       </span>
// //                     )}
// //                   </div>

// //                   <p className="text-sm text-neutral-700 line-clamp-3 leading-snug">
// //                     {job.description}
// //                   </p>

// //                   <div className="flex items-center justify-between pt-3 border-t border-neutral-200 text-xs text-neutral-500">
// //                     <div className="flex items-center gap-1">
// //                       <CalendarDays className="w-4 h-4" />
// //                       <span>
// //                         {formatDistanceToNow(new Date(job.created_at), {
// //                           addSuffix: true,
// //                         })}
// //                       </span>
// //                     </div>
// //                     <span className="font-medium text-blue-900 group-hover:underline">
// //                       View details →
// //                     </span>
// //                   </div>
// //                 </div>
// //               </Link>
// //             ))}
// //           </>
// //         )}

// //         {!loading && jobs.length === 0 && hasFetchedOnce && (
// //           <div className="col-span-full text-center text-neutral-400 text-sm py-16 space-y-4">
// //             <div className="text-5xl">🔍</div>
// //             <p>No jobs found matching your criteria.</p>
// //             <Button
// //               variant="outline"
// //               className="inline-flex gap-2 items-center"
// //               onClick={clearFilters}
// //             >
// //               <X className="w-4 h-4" />
// //               Clear filters
// //             </Button>
// //           </div>
// //         )}
// //       </div>

// //       {/* Pagination */}
// //       {!loading && jobs.length > 0 && (
// //         <div className="mt-14 flex justify-center items-center gap-4">
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             className="rounded-full"
// //             onClick={() => setPage((p) => Math.max(p - 1, 1))}
// //             disabled={page === 1}
// //           >
// //             <ArrowLeft className="w-4 h-4" />
// //           </Button>
// //           <span className="text-sm text-neutral-600">Page {page}</span>
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             className="rounded-full"
// //             onClick={() => setPage((p) => p + 1)}
// //           >
// //             <ArrowRight className="w-4 h-4" />
// //           </Button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Select,
// //   SelectTrigger,
// //   SelectValue,
// //   SelectContent,
// //   SelectItem,
// // } from "@/components/ui/select";
// // import { ArrowLeft, ArrowRight, X } from "lucide-react";
// // import LoadingSpinner from "@/components/LoadingSpinner";
// // import JobCard from "@/components/JobCard";

// // export default function JobSearch() {
// //   const [filters, setFilters] = useState({ keyword: "", sort: "desc" });
// //   const [jobs, setJobs] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(false);
// //   const [hasFetchedOnce, setHasFetchedOnce] = useState(false);
// //   const [page, setPage] = useState(1);
// //   const limit = 9;

// //   const handleChange = (field: string, value: string) => {
// //     setFilters((prev) => ({ ...prev, [field]: value }));
// //     setPage(1);
// //   };

// //   const clearFilters = () => {
// //     setFilters({ keyword: "", sort: "desc" });
// //     setPage(1);
// //   };

// //   const fetchJobs = async () => {
// //     setLoading(true);
// //     const params = new URLSearchParams();

// //     if (filters.keyword) params.set("keyword", filters.keyword);
// //     params.set("sort", filters.sort);
// //     params.set("limit", String(limit));
// //     params.set("offset", String((page - 1) * limit));

// //     try {
// //       const res = await fetch(`/api/jobs?${params.toString()}`);
// //       const { data } = await res.json();
// //       setJobs(Array.isArray(data) ? data : []);
// //     } catch (error) {
// //       console.error("❌ Failed to fetch jobs:", error);
// //       setJobs([]);
// //     } finally {
// //       setHasFetchedOnce(true);
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchJobs();
// //   }, [filters, page]);

// //   return (
// //     <div className="px-4 pb-20">
// //       {/* Header */}
// //       <div className="text-center max-w-xl mx-auto mt-6 mb-8">
// //         <h1 className="text-2xl font-semibold text-foreground">
// //           Discover Opportunities
// //         </h1>
// //         <p className="text-sm text-muted-foreground">
// //           Explore curated roles across Ghana and beyond.
// //         </p>
// //       </div>

// //       {/* Sticky Filter Bar */}
// //       <div className="sticky top-[60px] z-20 bg-white/80 backdrop-blur-sm border-y border-border py-3 mb-8">
// //         <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-3 px-2">
// //           <Input
// //             placeholder="Search by title or keyword..."
// //             className="h-11 rounded-md text-sm"
// //             value={filters.keyword}
// //             onChange={(e) => handleChange("keyword", e.target.value)}
// //           />
// //           <Select
// //             value={filters.sort}
// //             onValueChange={(val) => handleChange("sort", val)}
// //           >
// //             <SelectTrigger className="h-11 rounded-md text-sm">
// //               <SelectValue placeholder="Sort by" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="desc">Newest First</SelectItem>
// //               <SelectItem value="asc">Oldest First</SelectItem>
// //             </SelectContent>
// //           </Select>
// //         </div>
// //       </div>

// //       {/* Jobs Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
// //         {loading && (
// //           <div className="col-span-full flex justify-center items-center py-40">
// //             <LoadingSpinner />
// //           </div>
// //         )}

// //         {!loading && jobs.length > 0 && (
// //           <>
// //             {jobs.map((job) => (
// //               <JobCard key={job.id} job={job} />
// //             ))}
// //           </>
// //         )}

// //         {!loading && jobs.length === 0 && hasFetchedOnce && (
// //           <div className="col-span-full text-center text-neutral-400 text-sm py-16 space-y-4">
// //             <div className="text-5xl">🔍</div>
// //             <p>No jobs found matching your criteria.</p>
// //             <Button
// //               variant="outline"
// //               className="inline-flex gap-2 items-center"
// //               onClick={clearFilters}
// //             >
// //               <X className="w-4 h-4" />
// //               Clear filters
// //             </Button>
// //           </div>
// //         )}
// //       </div>

// //       {/* Pagination */}
// //       {!loading && jobs.length > 0 && (
// //         <div className="mt-14 flex justify-center items-center gap-4">
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             className="rounded-full"
// //             onClick={() => setPage((p) => Math.max(p - 1, 1))}
// //             disabled={page === 1}
// //           >
// //             <ArrowLeft className="w-4 h-4" />
// //           </Button>
// //           <span className="text-sm text-neutral-600">Page {page}</span>
// //           <Button
// //             variant="outline"
// //             size="icon"
// //             className="rounded-full"
// //             onClick={() => setPage((p) => p + 1)}
// //           >
// //             <ArrowRight className="w-4 h-4" />
// //           </Button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { ArrowLeft, ArrowRight, X } from "lucide-react";
// import LoadingSpinner from "@/components/LoadingSpinner";
// import JobCard from "@/components/JobCard";

// export default function JobSearch() {
//   const [filters, setFilters] = useState({ keyword: "", sort: "desc" });
//   const [jobs, setJobs] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [hasFetchedOnce, setHasFetchedOnce] = useState(false);
//   const [page, setPage] = useState(1);
//   const limit = 9;

//   const handleChange = (field: string, value: string) => {
//     setFilters((prev) => ({ ...prev, [field]: value }));
//     setPage(1);
//   };

//   const clearFilters = () => {
//     setFilters({ keyword: "", sort: "desc" });
//     setPage(1);
//   };

//   const fetchJobs = async () => {
//     setLoading(true);
//     const params = new URLSearchParams();

//     if (filters.keyword) params.set("keyword", filters.keyword);
//     params.set("sort", filters.sort);
//     params.set("limit", String(limit));
//     params.set("offset", String((page - 1) * limit));

//     try {
//       const res = await fetch(`/api/jobs?${params.toString()}`);
//       const { data } = await res.json();
//       setJobs(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error("❌ Failed to fetch jobs:", error);
//       setJobs([]);
//     } finally {
//       setHasFetchedOnce(true);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, [filters, page]);

//   return (
//     <section className="px-6 sm:px-10 pb-24">
//       {/* Header */}
//       <div className="text-center max-w-xl mx-auto mt-12 mb-10 space-y-2">
//         <h1 className="text-3xl font-bold tracking-tight text-foreground">
//           🌍 Discover Opportunities
//         </h1>
//         <p className="text-base text-muted-foreground">
//           Explore curated tech roles across Ghana and beyond.
//         </p>
//       </div>

//       {/* Sticky Filter Bar */}
//       <div className="sticky top-[60px] z-30 border border-border/60 bg-white/80 backdrop-blur-md shadow-sm rounded-md py-4 mb-10 transition-all duration-300">
//         <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 px-4 sm:px-6">
//           <Input
//             placeholder="🔍 Search by title or keyword..."
//             className="h-11 rounded-md text-sm transition-all focus-visible:ring-2"
//             value={filters.keyword}
//             onChange={(e) => handleChange("keyword", e.target.value)}
//           />
//           <Select
//             value={filters.sort}
//             onValueChange={(val) => handleChange("sort", val)}
//           >
//             <SelectTrigger className="h-11 rounded-md text-sm w-full sm:w-[180px]">
//               <SelectValue placeholder="Sort by" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="desc">📅 Newest First</SelectItem>
//               <SelectItem value="asc">🕒 Oldest First</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       {/* Jobs Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//         {loading && (
//           <div className="col-span-full flex justify-center items-center py-40">
//             <LoadingSpinner />
//           </div>
//         )}

//         {!loading &&
//           jobs.length > 0 &&
//           jobs.map((job) => <JobCard key={job.id} job={job} />)}

//         {!loading && jobs.length === 0 && hasFetchedOnce && (
//           <div className="col-span-full text-center text-muted-foreground py-20 space-y-6 animate-in fade-in slide-in-from-bottom">
//             <div className="text-6xl">😕</div>
//             <p className="text-base">No jobs found matching your filters.</p>
//             <Button
//               variant="outline"
//               className="inline-flex gap-2 items-center"
//               onClick={clearFilters}
//             >
//               <X className="w-4 h-4" />
//               Clear filters
//             </Button>
//           </div>
//         )}
//       </div>

//       {/* Pagination */}
//       {!loading && jobs.length > 0 && (
//         <div className="mt-14 flex justify-center items-center gap-5 animate-in fade-in slide-in-from-bottom">
//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-full shadow-sm"
//             onClick={() => setPage(Math.max(page - 1, 1))}
//             disabled={page === 1}
//           >
//             <ArrowLeft className="w-4 h-4" />
//           </Button>
//           <span className="text-sm font-medium text-neutral-600">
//             Page {page}
//           </span>
//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-full shadow-sm"
//             onClick={() => setPage(page + 1)}
//           >
//             <ArrowRight className="w-4 h-4" />
//           </Button>
//         </div>
//       )}
//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  ArrowLeft,
  ArrowRight,
  X,
  Search,
  Clock,
  CalendarDays,
  Briefcase,
} from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";
import JobCard from "@/components/JobCard";

export default function JobSearch() {
  const [filters, setFilters] = useState({ keyword: "", sort: "desc" });
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasFetchedOnce, setHasFetchedOnce] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 9;

  const handleChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
    setPage(1);
  };

  const clearFilters = () => {
    setFilters({ keyword: "", sort: "desc" });
    setPage(1);
  };

  const fetchJobs = async () => {
    setLoading(true);
    const params = new URLSearchParams();

    if (filters.keyword) params.set("keyword", filters.keyword);
    params.set("sort", filters.sort);
    params.set("limit", String(limit));
    params.set("offset", String((page - 1) * limit));

    try {
      const res = await fetch(`/api/jobs?${params.toString()}`);
      const { data } = await res.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("❌ Failed to fetch jobs:", error);
      setJobs([]);
    } finally {
      setHasFetchedOnce(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters, page]);

  return (
    <section className="px-2 sm:px-10 pb-24">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mt-12 mb-10 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center justify-center gap-2">
          {/* <Briefcase className="w-6 h-6 text-primary" /> */}
          Discover Opportunities
        </h1>
        <p className="text-base text-muted-foreground">
          Explore exclusive jobs across Ghana and beyond
        </p>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[60px] z-30 border border-border/60 bg-white/80 backdrop-blur-md shadow-sm rounded-md py-4 mb-10 transition-all duration-300">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 px-4 sm:px-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search by title or keyword..."
              className="pl-10 h-11 rounded-md text-sm transition-all focus-visible:ring-2"
              value={filters.keyword}
              onChange={(e) => handleChange("keyword", e.target.value)}
            />
          </div>
          <Select
            value={filters.sort}
            onValueChange={(val) => handleChange("sort", val)}
          >
            <SelectTrigger className="h-11 rounded-md text-sm w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">
                <CalendarDays className="w-4 h-4 mr-2" />
                Newest First
              </SelectItem>
              <SelectItem value="asc">
                <Clock className="w-4 h-4 mr-2" />
                Oldest First
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {loading && (
          <div className="col-span-full flex justify-center items-center py-40">
            <LoadingSpinner />
          </div>
        )}

        {!loading &&
          jobs.length > 0 &&
          jobs.map((job) => <JobCard key={job.id} job={job} />)}

        {!loading && jobs.length === 0 && hasFetchedOnce && (
          <div className="col-span-full text-center text-muted-foreground py-20 space-y-6 animate-in fade-in slide-in-from-bottom">
            <Search className="w-10 h-10 mx-auto text-muted-foreground" />
            <p className="text-base">No jobs found matching your filters.</p>
            <Button
              variant="outline"
              className="inline-flex gap-2 items-center"
              onClick={clearFilters}
            >
              <X className="w-4 h-4" />
              Clear filters
            </Button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {!loading && jobs.length > 0 && (
        <div className="mt-14 flex justify-center items-center gap-5 animate-in fade-in slide-in-from-bottom">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-sm"
            onClick={() => setPage(Math.max(page - 1, 1))}
            disabled={page === 1}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm font-medium text-neutral-600">
            Page {page}
          </span>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-sm"
            onClick={() => setPage(page + 1)}
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </section>
  );
}
