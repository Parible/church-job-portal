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
// import {
//   ArrowLeft,
//   ArrowRight,
//   Briefcase,
//   MapPin,
//   Globe,
//   Sparkles,
//   CalendarDays,
//   X,
// } from "lucide-react";
// import clsx from "clsx";

// import { formatDistanceToNow } from "date-fns";

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
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, [filters, page]);

//   return (
//     <div className="w-full min-h-screen px-6 py-20 md:py-28">
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
//           Array.from({ length: 9 }).map((_, i) => (
//             <div
//               key={i}
//               className="p-6 rounded-xl border border-neutral-200 bg-white animate-pulse space-y-4"
//             >
//               <div className="h-4 w-1/3 bg-neutral-200 rounded" />
//               <div className="flex gap-2">
//                 <div className="h-4 w-16 bg-neutral-200 rounded" />
//                 <div className="h-4 w-16 bg-neutral-200 rounded" />
//                 <div className="h-4 w-20 bg-neutral-200 rounded" />
//               </div>
//               <div className="h-4 bg-neutral-200 rounded w-full" />
//               <div className="h-4 bg-neutral-200 rounded w-4/5" />
//             </div>
//           ))
//         ) : jobs.length > 0 ? (
//           jobs.map((job) => (
//             <Link key={job.id} href={`/jobs/${job.id}`} className="group">
//               <div className="p-6 h-full rounded-2xl border border-neutral-200 bg-white hover:border-black hover:shadow-lg transition-all space-y-4 flex flex-col justify-between">
//                 {/* Title */}
//                 <div className="flex items-center gap-3">
//                   <div className="bg-neutral-100 p-2 rounded-md">
//                     <Briefcase className="w-5 h-5 text-black" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-black transition">
//                     {job.title}
//                   </h3>
//                 </div>

//                 {/* Metadata row */}
//                 <div className="flex flex-wrap items-center gap-3 text-sm capitalize text-neutral-600">
//                   <span className="inline-flex items-center gap-1">
//                     <MapPin className="w-4 h-4 text-neutral-400" />
//                     {job.location}
//                   </span>
//                   <span className="inline-flex items-center gap-1">
//                     <Briefcase className="w-4 h-4 text-neutral-400" />
//                     {job.category}
//                   </span>
//                   <span className="inline-flex items-center gap-1">
//                     <Globe className="w-4 h-4 text-neutral-400" />
//                     {job.is_remote
//                       ? "Remote"
//                       : job.is_onsite
//                       ? "Onsite"
//                       : "N/A"}
//                   </span>
//                   {job.job_type && (
//                     <span
//                       className={clsx(
//                         "text-xs font-medium px-2 py-0.5 rounded-full border",
//                         job.job_type === "Full-time"
//                           ? "bg-green-50 text-green-700 border-green-200"
//                           : "bg-yellow-50 text-yellow-700 border-yellow-200"
//                       )}
//                     >
//                       {job.job_type}
//                     </span>
//                   )}
//                 </div>

//                 {/* Description */}
//                 <p className="text-sm text-neutral-700 line-clamp-3 leading-relaxed">
//                   {job.description}
//                 </p>

//                 {/* Footer: Created Date & CTA */}
//                 <div className="flex items-center justify-between text-sm pt-4 border-t border-neutral-100">
//                   <div className="flex items-center gap-1 text-neutral-500">
//                     <CalendarDays className="w-4 h-4" />
//                     {formatDistanceToNow(new Date(job.created_at), {
//                       addSuffix: true,
//                     })}
//                   </div>
//                   <span className="font-medium text-black group-hover:underline">
//                     View details →
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <div className="col-span-full text-center text-neutral-400 text-sm py-12 space-y-4">
//             <div className="text-5xl">🔍</div>
//             <p>No jobs found matching your criteria.</p>
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
  CalendarDays,
  X,
} from "lucide-react";
import clsx from "clsx";
import { formatDistanceToNow } from "date-fns";

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
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters, page]);

  return (
    <div>
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
        <p className="text-neutral-500 text-base">
          Search open positions, sort listings, and apply in seconds.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 mb-12">
        <Input
          placeholder="Search roles, companies, or keywords..."
          className="h-12 text-sm border border-neutral-200 shadow-sm"
          value={filters.keyword}
          onChange={(e) => handleChange("keyword", e.target.value)}
        />
        <Select
          value={filters.sort}
          onValueChange={(val) => handleChange("sort", val)}
        >
          <SelectTrigger className="h-12 text-sm border border-neutral-200 shadow-sm">
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
              <div className="p-6 h-full rounded-xl border border-neutral-200 bg-gradient-to-br from-white via-white to-gray-50 hover:shadow-md hover:border-gray-300 transition-shadow flex flex-col justify-between space-y-4">
                {/* Title & Job Type */}
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Briefcase className="w-5 h-5 text-blue-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-black transition">
                    {job.title}
                  </h3>
                </div>

                {/* Metadata row */}
                <div className="flex flex-wrap items-center gap-3 text-sm capitalize text-neutral-600">
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

                {/* Short Description */}
                <p className="text-sm text-neutral-700 leading-relaxed line-clamp-3">
                  {job.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200 text-sm text-neutral-500">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    <span>
                      {formatDistanceToNow(new Date(job.created_at), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                  <span className="font-medium text-blue-900 group-hover:underline">
                    View details →
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-neutral-400 text-sm py-12 space-y-4">
            <div className="text-5xl">🔍</div>
            <p>No jobs found matching your criteria.</p>
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
