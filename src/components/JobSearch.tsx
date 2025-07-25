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

// export default function JobSearch() {
//   const [filters, setFilters] = useState({
//     keyword: "",
//     sort: "desc",
//   });

//   const [jobs, setJobs] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const limit = 9;

//   const handleChange = (field: string, value: string) => {
//     setFilters((prev) => ({ ...prev, [field]: value }));
//     setPage(1);
//   };

//   const fetchJobs = async () => {
//     setLoading(true);
//     const params = new URLSearchParams();

//     if (filters.keyword) params.set("keyword", filters.keyword);
//     params.set("sort", filters.sort);
//     params.set("limit", String(limit));
//     params.set("offset", String((page - 1) * limit));

//     const url = `/api/jobs?${params.toString()}`;
//     console.log("🔍 Fetching:", url);

//     try {
//       const res = await fetch(url);
//       const { data } = await res.json();
//       console.log("📦 Received:", data);
//       setJobs(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error("❌ Failed to fetch jobs:", error);
//       setJobs([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, [filters, page]);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
//       {/* Filters */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <Input
//           placeholder="Search jobs..."
//           className="h-11 px-4 text-sm"
//           value={filters.keyword}
//           onChange={(e) => handleChange("keyword", e.target.value)}
//         />
//         <Select
//           value={filters.sort}
//           onValueChange={(val) => handleChange("sort", val)}
//         >
//           <SelectTrigger className="h-11 text-sm">
//             <SelectValue placeholder="Sort" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="desc">Newest First</SelectItem>
//             <SelectItem value="asc">Oldest First</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Job Cards */}
//       {!loading && jobs.length === 0 && (
//         <div className="text-center text-gray-500 text-sm py-10">
//           No jobs found.
//         </div>
//       )}

//       {loading ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {Array.from({ length: 6 }).map((_, i) => (
//             <div key={i} className="p-6 border rounded-lg bg-white space-y-2">
//               <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse" />
//               <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
//               <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobs.map((job) => (
//             <div
//               key={job.id}
//               className="p-6 border rounded-lg bg-white space-y-2 shadow hover:shadow-md transition"
//             >
//               <h3 className="text-lg font-semibold text-gray-900">
//                 {job.title}
//               </h3>
//               <p className="text-sm text-gray-500">
//                 {job.location} • {job.category} •{" "}
//                 {job.is_remote ? "Remote" : job.is_onsite ? "Onsite" : "N/A"}
//               </p>
//               <p className="text-sm text-gray-700 line-clamp-3">
//                 {job.description}
//               </p>
//               {job.link && (
//                 <a
//                   href={job.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block text-sm text-primary hover:underline pt-2"
//                 >
//                   Apply now →
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Pagination */}
//       {!loading && jobs.length > 0 && (
//         <div className="flex justify-between items-center pt-6">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setPage((p) => Math.max(p - 1, 1))}
//             disabled={page === 1}
//           >
//             Previous
//           </Button>
//           <span className="text-sm text-muted-foreground">Page {page}</span>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setPage((p) => p + 1)}
//           >
//             Next
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }

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
// import { Loader2 } from "lucide-react";

// export default function JobSearch() {
//   const [filters, setFilters] = useState({
//     keyword: "",
//     sort: "desc",
//   });

//   const [jobs, setJobs] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const limit = 9;

//   const handleChange = (field: string, value: string) => {
//     setFilters((prev) => ({ ...prev, [field]: value }));
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
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, [filters, page]);

//   return (
//     <div className="w-full min-h-screen bg-white px-6 py-20 md:py-28">
//       {/* Header */}
//       <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
//         <h1 className="text-4xl font-semibold tracking-tight">
//           Find your next opportunity
//         </h1>
//         <p className="text-neutral-500 text-sm">
//           Search roles, sort results, and apply easily.
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 mb-12">
//         <Input
//           placeholder="Search by title, company, or keyword..."
//           className="h-12 text-sm border-neutral-300 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-black transition"
//           value={filters.keyword}
//           onChange={(e) => handleChange("keyword", e.target.value)}
//         />
//         <Select
//           value={filters.sort}
//           onValueChange={(val) => handleChange("sort", val)}
//         >
//           <SelectTrigger className="h-12 text-sm border-neutral-300">
//             <SelectValue placeholder="Sort" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="desc">Newest First</SelectItem>
//             <SelectItem value="asc">Oldest First</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Job Cards */}
//       <div className="max-w-7xl mx-auto px-1">
//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {Array.from({ length: 6 }).map((_, i) => (
//               <div
//                 key={i}
//                 className="p-6 rounded-xl border border-neutral-200 bg-white space-y-3 animate-pulse"
//               >
//                 <div className="h-5 bg-neutral-200 rounded w-2/3" />
//                 <div className="h-4 bg-neutral-200 rounded w-1/2" />
//                 <div className="h-4 bg-neutral-200 rounded w-full" />
//               </div>
//             ))}
//           </div>
//         ) : jobs.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {jobs.map((job) => (
//               <div
//                 key={job.id}
//                 className="group p-6 rounded-xl border border-neutral-200 bg-white hover:shadow-md transition-shadow space-y-4"
//               >
//                 <div className="space-y-1.5">
//                   <h3 className="text-lg font-medium text-neutral-900 group-hover:text-black transition-colors">
//                     {job.title}
//                   </h3>
//                   <p className="text-sm text-neutral-500">
//                     {job.location} • {job.category} •{" "}
//                     {job.is_remote
//                       ? "Remote"
//                       : job.is_onsite
//                       ? "Onsite"
//                       : "N/A"}
//                   </p>
//                 </div>
//                 <p className="text-sm text-neutral-700 line-clamp-3">
//                   {job.description}
//                 </p>
//                 {job.link && (
//                   <a
//                     href={job.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block text-sm text-black font-medium hover:underline pt-1"
//                   >
//                     Apply now →
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center text-neutral-400 text-sm py-12">
//             No jobs found.
//           </div>
//         )}
//       </div>

//       {/* Pagination */}
//       {!loading && jobs.length > 0 && (
//         <div className="mt-12 flex justify-center items-center gap-4">
//           <Button
//             variant="outline"
//             size="sm"
//             className="rounded-md"
//             onClick={() => setPage((p) => Math.max(p - 1, 1))}
//             disabled={page === 1}
//           >
//             Previous
//           </Button>
//           <span className="text-sm text-neutral-500">Page {page}</span>
//           <Button
//             variant="outline"
//             size="sm"
//             className="rounded-md"
//             onClick={() => setPage((p) => p + 1)}
//           >
//             Next
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }\

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { Loader2, ArrowLeft, ArrowRight, Briefcase } from "lucide-react";

// export default function JobSearch() {
//   const [filters, setFilters] = useState({
//     keyword: "",
//     sort: "desc",
//   });

//   const [jobs, setJobs] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const limit = 9;

//   const handleChange = (field: string, value: string) => {
//     setFilters((prev) => ({ ...prev, [field]: value }));
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
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, [filters, page]);

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-b from-white to-neutral-50 px-6 py-20 md:py-28">
//       {/* Header */}
//       <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
//         <h1 className="text-4xl md:text-5xl font-bold text-black">
//           Discover Your Next Role
//         </h1>
//         <p className="text-neutral-500 text-base">
//           Search open positions, sort listings, and apply in seconds.
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 mb-12">
//         <Input
//           placeholder="Search roles, companies, or keywords..."
//           className="h-12 text-sm border border-neutral-300 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-0 transition"
//           value={filters.keyword}
//           onChange={(e) => handleChange("keyword", e.target.value)}
//         />
//         <Select
//           value={filters.sort}
//           onValueChange={(val) => handleChange("sort", val)}
//         >
//           <SelectTrigger className="h-12 text-sm border border-neutral-300 focus-visible:ring-2 focus-visible:ring-black">
//             <SelectValue placeholder="Sort" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="desc">Newest First</SelectItem>
//             <SelectItem value="asc">Oldest First</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Job Cards */}
//       <div className="max-w-7xl mx-auto px-1">
//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {Array.from({ length: 6 }).map((_, i) => (
//               <div
//                 key={i}
//                 className="p-6 rounded-xl border border-neutral-200 bg-white space-y-3 animate-pulse"
//               >
//                 <div className="h-5 bg-neutral-200 rounded w-2/3" />
//                 <div className="h-4 bg-neutral-200 rounded w-1/2" />
//                 <div className="h-4 bg-neutral-200 rounded w-full" />
//               </div>
//             ))}
//           </div>
//         ) : jobs.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {jobs.map((job) => {
//               const jobHref = job.id ? `/jobs/${job.id}` : null;
//               const card = (
//                 <div
//                   key={job.id}
//                   className="group p-6 rounded-xl border border-neutral-200 bg-white hover:border-black hover:shadow-md transition space-y-4"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div className="bg-neutral-100 p-2 rounded-md">
//                       <Briefcase className="w-5 h-5 text-black" />
//                     </div>
//                     <div className="space-y-1">
//                       <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-black transition">
//                         {job.title}
//                       </h3>
//                       <p className="text-sm text-neutral-500">
//                         {job.location} • {job.category} •{" "}
//                         {job.is_remote
//                           ? "Remote"
//                           : job.is_onsite
//                           ? "Onsite"
//                           : "N/A"}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-sm text-neutral-700 line-clamp-3">
//                     {job.description}
//                   </p>
//                   {job.link && !jobHref && (
//                     <a
//                       href={job.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block text-sm text-black font-medium hover:underline"
//                     >
//                       Apply now →
//                     </a>
//                   )}
//                 </div>
//               );

//               return jobHref ? (
//                 <Link key={job.id} href={jobHref}>
//                   {card}
//                 </Link>
//               ) : (
//                 card
//               );
//             })}
//           </div>
//         ) : (
//           <div className="text-center text-neutral-400 text-sm py-12 space-y-2">
//             <div className="text-5xl">🔍</div>
//             <p>No jobs found matching your criteria.</p>
//           </div>
//         )}
//       </div>

//       {/* Pagination */}
//       {!loading && jobs.length > 0 && (
//         <div className="mt-12 flex justify-center items-center gap-4">
//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-full"
//             onClick={() => setPage((p) => Math.max(p - 1, 1))}
//             disabled={page === 1}
//           >
//             <ArrowLeft className="w-4 h-4" />
//           </Button>
//           <span className="text-sm text-neutral-600">Page {page}</span>
//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-full"
//             onClick={() => setPage((p) => p + 1)}
//           >
//             <ArrowRight className="w-4 h-4" />
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { ArrowLeft, ArrowRight, Briefcase, MapPin, Globe } from "lucide-react";

// export default function JobSearch() {
//   const [filters, setFilters] = useState({
//     keyword: "",
//     sort: "desc",
//   });

//   const [jobs, setJobs] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const limit = 9;

//   const handleChange = (field: string, value: string) => {
//     setFilters((prev) => ({ ...prev, [field]: value }));
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
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, [filters, page]);

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-b from-white to-neutral-50 px-6 py-20 md:py-28">
//       {/* Header */}
//       <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
//         <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
//           Discover Your Next Role
//         </h1>
//         <p className="text-neutral-500 text-base">
//           Search open positions, sort listings, and apply in seconds.
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 mb-12">
//         <Input
//           placeholder="Search roles, companies, or keywords..."
//           className="h-12 text-sm border border-neutral-300 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-0 transition"
//           value={filters.keyword}
//           onChange={(e) => handleChange("keyword", e.target.value)}
//         />
//         <Select
//           value={filters.sort}
//           onValueChange={(val) => handleChange("sort", val)}
//         >
//           <SelectTrigger className="h-12 text-sm border border-neutral-300 focus-visible:ring-2 focus-visible:ring-black">
//             <SelectValue placeholder="Sort" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="desc">Newest First</SelectItem>
//             <SelectItem value="asc">Oldest First</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Job Cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {loading ? (
//           Array.from({ length: 6 }).map((_, i) => (
//             <div
//               key={i}
//               className="p-6 rounded-xl border border-neutral-200 bg-white space-y-3 animate-pulse"
//             >
//               <div className="h-5 bg-neutral-200 rounded w-2/3" />
//               <div className="h-4 bg-neutral-200 rounded w-1/2" />
//               <div className="h-4 bg-neutral-200 rounded w-full" />
//             </div>
//           ))
//         ) : jobs.length > 0 ? (
//           jobs.map((job) => (
//             <Link key={job.id} href={`/jobs/${job.id}`} className="group">
//               <div className="p-6 h-full rounded-2xl border border-neutral-200 bg-white hover:border-black hover:shadow-xl transition-all space-y-5 flex flex-col justify-between">
//                 {/* Top: Icon + Title */}
//                 <div className="flex items-start gap-3">
//                   <div className="bg-neutral-100 p-2 rounded-md">
//                     <Briefcase className="w-5 h-5 text-black" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-black transition">
//                       {job.title}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Metadata */}
//                 <div className="space-y-2 text-sm text-neutral-600">
//                   <div className="flex items-center gap-2">
//                     <MapPin className="w-4 h-4 text-neutral-500" />
//                     <span>{job.location}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Briefcase className="w-4 h-4 text-neutral-500" />
//                     <span>{job.category}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Globe className="w-4 h-4 text-neutral-500" />
//                     <span>
//                       {job.is_remote
//                         ? "Remote"
//                         : job.is_onsite
//                         ? "Onsite"
//                         : "N/A"}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-sm text-neutral-700 line-clamp-3 leading-relaxed">
//                   {job.description}
//                 </p>

//                 {/* CTA */}
//                 <div className="pt-2">
//                   <span className="inline-block text-sm font-medium text-black underline underline-offset-2 group-hover:text-black">
//                     View details →
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <div className="col-span-full text-center text-neutral-400 text-sm py-12 space-y-2">
//             <div className="text-5xl">🔍</div>
//             <p>No jobs found matching your criteria.</p>
//           </div>
//         )}
//       </div>

//       {/* Pagination */}
//       {!loading && jobs.length > 0 && (
//         <div className="mt-12 flex justify-center items-center gap-4">
//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-full"
//             onClick={() => setPage((p) => Math.max(p - 1, 1))}
//             disabled={page === 1}
//           >
//             <ArrowLeft className="w-4 h-4" />
//           </Button>
//           <span className="text-sm text-neutral-600">Page {page}</span>
//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-full"
//             onClick={() => setPage((p) => p + 1)}
//           >
//             <ArrowRight className="w-4 h-4" />
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
  Briefcase,
  MapPin,
  Globe,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";

export default function JobSearch() {
  const [filters, setFilters] = useState({
    keyword: "",
    sort: "desc",
  });

  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 9;

  const handleChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
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
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters, page]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-neutral-50 px-6 py-20 md:py-28">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
          Discover Your Next Role
        </h1>
        <p className="text-neutral-500 text-base">
          Search open positions, sort listings, and apply in seconds.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 mb-12">
        <Input
          placeholder="Search roles, companies, or keywords..."
          className="h-12 text-sm border border-neutral-300 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-0 transition"
          value={filters.keyword}
          onChange={(e) => handleChange("keyword", e.target.value)}
        />
        <Select
          value={filters.sort}
          onValueChange={(val) => handleChange("sort", val)}
        >
          <SelectTrigger className="h-12 text-sm border border-neutral-300 focus-visible:ring-2 focus-visible:ring-black">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desc">Newest First</SelectItem>
            <SelectItem value="asc">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Job Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-neutral-200 bg-white animate-pulse space-y-4"
            >
              <div className="h-4 w-1/3 bg-neutral-200 rounded" />
              <div className="flex gap-2">
                <div className="h-4 w-16 bg-neutral-200 rounded" />
                <div className="h-4 w-16 bg-neutral-200 rounded" />
                <div className="h-4 w-20 bg-neutral-200 rounded" />
              </div>
              <div className="h-4 bg-neutral-200 rounded w-full" />
              <div className="h-4 bg-neutral-200 rounded w-4/5" />
            </div>
          ))
        ) : jobs.length > 0 ? (
          jobs.map((job) => (
            <Link key={job.id} href={`/jobs/${job.id}`} className="group">
              <div className="p-6 h-full rounded-2xl border border-neutral-200 bg-white hover:border-black hover:shadow-xl transition-all space-y-4">
                {/* Title */}
                <div className="flex items-center gap-3">
                  <div className="bg-neutral-100 p-2 rounded-md">
                    <Briefcase className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-black transition">
                    {job.title}
                  </h3>
                </div>

                {/* Metadata row */}
                <div
                  className="flex flex-wrap items-center gap-3 text-sm capitalize
 text-neutral-600"
                >
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-neutral-400" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Briefcase className="w-4 h-4 text-neutral-400" />
                    {job.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Globe className="w-4 h-4 text-neutral-400" />
                    {job.is_remote
                      ? "Remote"
                      : job.is_onsite
                      ? "Onsite"
                      : "N/A"}
                  </span>
                  {job.job_type && (
                    <span
                      className={clsx(
                        "text-xs font-medium px-2 py-0.5 rounded-full border",
                        job.job_type === "Full-time"
                          ? "bg-green-50 text-green-700 border-green-200"
                          : "bg-yellow-50 text-yellow-700 border-yellow-200"
                      )}
                    >
                      {job.job_type}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-700 line-clamp-3 leading-relaxed">
                  {job.description}
                </p>

                {/* CTA */}
                <div className="pt-1">
                  <span className="inline-block text-sm font-medium text-black underline underline-offset-2 group-hover:text-black">
                    View details →
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-neutral-400 text-sm py-12 space-y-2">
            <div className="text-5xl">🔍</div>
            <p>No jobs found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {!loading && jobs.length > 0 && (
        <div className="mt-12 flex justify-center items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm text-neutral-600">Page {page}</span>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => setPage((p) => p + 1)}
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
