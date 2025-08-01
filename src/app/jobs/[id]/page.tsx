// // // import { notFound } from "next/navigation";
// // // import { Briefcase, MapPin, Globe, Clock, ExternalLink } from "lucide-react";

// // // interface Job {
// // //   id: string;
// // //   title: string;
// // //   description: string;
// // //   location: string;
// // //   category: string;
// // //   is_remote: boolean;
// // //   is_onsite: boolean;
// // //   company?: string;
// // //   posted_at?: string;
// // //   link?: string;
// // // }

// // // // Server-safe base URL builder
// // // function getServerUrl(): string {
// // //   return process.env.NODE_ENV === "development"
// // //     ? "http://localhost:3000"
// // //     : `https://${process.env.VERCEL_URL}`;
// // // }

// // // // Fetch a single job by ID
// // // async function getJobById(id: string): Promise<Job | null> {
// // //   const baseUrl = getServerUrl();

// // //   const res = await fetch(`${baseUrl}/api/jobs/${id}`, {
// // //     cache: "no-store", // Always fetch fresh data
// // //   });

// // //   if (!res.ok) {
// // //     console.warn(`❌ Job fetch failed: ${res.status} ${res.statusText}`);
// // //     return null;
// // //   }

// // //   const { data } = await res.json();
// // //   return data ?? null;
// // // }

// // // export default async function JobDetailPage({
// // //   params,
// // // }: {
// // //   params: { id: string };
// // // }) {
// // //   const job = await getJobById(params.id);

// // //   if (!job) return notFound();

// // //   return (
// // //     <div className="w-full min-h-screen bg-white px-6 py-20 md:py-28">
// // //       <div className="max-w-4xl mx-auto space-y-10">
// // //         {/* Title & Company */}
// // //         <div className="space-y-2 text-center">
// // //           <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
// // //             {job.title}
// // //           </h1>
// // //           {job.company && (
// // //             <p className="text-neutral-500 text-sm">at {job.company}</p>
// // //           )}
// // //         </div>

// // //         {/* Metadata */}
// // //         <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
// // //           <div className="flex items-center gap-1">
// // //             <MapPin className="w-4 h-4" />
// // //             {job.location}
// // //           </div>
// // //           <div className="flex items-center gap-1">
// // //             <Briefcase className="w-4 h-4" />
// // //             {job.category}
// // //           </div>
// // //           <div className="flex items-center gap-1">
// // //             <Globe className="w-4 h-4" />
// // //             {job.is_remote ? "Remote" : job.is_onsite ? "Onsite" : "N/A"}
// // //           </div>
// // //           {job.posted_at && (
// // //             <div className="flex items-center gap-1">
// // //               <Clock className="w-4 h-4" />
// // //               {new Date(job.posted_at).toLocaleDateString()}
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Description */}
// // //         <div className="prose prose-neutral max-w-none text-neutral-800 text-base leading-relaxed">
// // //           {job.description}
// // //         </div>

// // //         {/* Apply Button */}
// // //         {job.link && (
// // //           <div className="text-center pt-10">
// // //             <a
// // //               href={job.link}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-neutral-900 transition"
// // //             >
// // //               <ExternalLink className="w-4 h-4" />
// // //               Apply Now
// // //             </a>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // import { notFound } from "next/navigation";
// // // import {
// // //   Briefcase,
// // //   MapPin,
// // //   Globe,
// // //   Clock,
// // //   ExternalLink,
// // //   Sparkles,
// // // } from "lucide-react";

// // // interface Job {
// // //   id: string;
// // //   title: string;
// // //   description: string;
// // //   location: string;
// // //   category: string;
// // //   is_remote: boolean;
// // //   is_onsite: boolean;
// // //   job_type?: string;
// // //   company?: string;
// // //   posted_at?: string;
// // //   link?: string;
// // // }

// // // // Server-safe base URL builder
// // // function getServerUrl(): string {
// // //   return process.env.NODE_ENV === "development"
// // //     ? "http://localhost:3000"
// // //     : `https://${process.env.VERCEL_URL}`;
// // // }

// // // // Fetch a single job by ID
// // // async function getJobById(id: string): Promise<Job | null> {
// // //   const baseUrl = getServerUrl();

// // //   const res = await fetch(`${baseUrl}/api/jobs/${id}`, {
// // //     cache: "no-store",
// // //   });

// // //   if (!res.ok) {
// // //     console.warn(`❌ Job fetch failed: ${res.status} ${res.statusText}`);
// // //     return null;
// // //   }

// // //   const { data } = await res.json();
// // //   return data ?? null;
// // // }

// // // export default async function JobDetailPage({
// // //   params,
// // // }: {
// // //   params: { id: string };
// // // }) {
// // //   const job = await getJobById(params.id);
// // //   if (!job) return notFound();

// // //   const postedDate = job.posted_at
// // //     ? new Date(job.posted_at).toLocaleDateString()
// // //     : null;

// // //   return (
// // //     <div className="w-full min-h-screen bg-white px-6 py-20 md:py-28">
// // //       <div className="max-w-4xl mx-auto space-y-10">
// // //         {/* Header */}
// // //         <div className="space-y-2 text-center">
// // //           <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
// // //             {job.title}
// // //           </h1>
// // //           {job.company && (
// // //             <p className="text-neutral-500 text-sm">
// // //               <span className="font-medium text-black">{job.company}</span>
// // //             </p>
// // //           )}
// // //           {postedDate && (
// // //             <p className="text-xs text-neutral-400 mt-1">
// // //               Posted on {postedDate}
// // //             </p>
// // //           )}
// // //         </div>

// // //         {/* Metadata */}
// // //         <div className="flex flex-wrap justify-center gap-3 text-sm text-neutral-600">
// // //           <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
// // //             <MapPin className="w-4 h-4 text-neutral-500" />
// // //             {job.location}
// // //           </span>
// // //           <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
// // //             <Briefcase className="w-4 h-4 text-neutral-500" />
// // //             {job.category}
// // //           </span>
// // //           <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
// // //             <Globe className="w-4 h-4 text-neutral-500" />
// // //             {job.is_remote ? "Remote" : job.is_onsite ? "Onsite" : "Flexible"}
// // //           </span>
// // //           {job.job_type && (
// // //             <span
// // //               className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${
// // //                 job.job_type === "Full-time"
// // //                   ? "bg-green-50 text-green-700 border-green-200"
// // //                   : "bg-yellow-50 text-yellow-700 border-yellow-200"
// // //               }`}
// // //             >
// // //               <Sparkles className="w-3.5 h-3.5" />
// // //               {job.job_type}
// // //             </span>
// // //           )}
// // //         </div>

// // //         {/* Description */}
// // //         <div className="prose prose-neutral prose-p:leading-relaxed max-w-none text-base text-neutral-800">
// // //           <div dangerouslySetInnerHTML={{ __html: job.description }} />
// // //         </div>

// // //         {/* Apply Button */}
// // //         {job.link && (
// // //           <div className="text-center pt-10">
// // //             <a
// // //               href={job.link}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-neutral-900 transition"
// // //             >
// // //               <ExternalLink className="w-4 h-4" />
// // //               Apply Now
// // //             </a>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import { notFound } from "next/navigation";
// // import {
// //   Briefcase,
// //   MapPin,
// //   Globe,
// //   Clock,
// //   ExternalLink,
// //   Sparkles,
// // } from "lucide-react";

// // interface Job {
// //   id: string;
// //   title: string;
// //   description: string;
// //   location: string;
// //   category: string;
// //   is_remote: boolean;
// //   is_onsite: boolean;
// //   job_type?: string;
// //   company?: string;
// //   posted_at?: string;
// //   link?: string;
// // }

// // function getServerUrl(): string {
// //   return process.env.NODE_ENV === "development"
// //     ? "http://localhost:3000"
// //     : `https://${process.env.VERCEL_URL}`;
// // }

// // async function getJobById(id: string): Promise<Job | null> {
// //   const res = await fetch(`${getServerUrl()}/api/jobs/${id}`, {
// //     cache: "no-store",
// //   });

// //   if (!res.ok) return null;

// //   const { data } = await res.json();
// //   return data ?? null;
// // }

// // export default async function JobDetailPage(props: { params: { id: string } }) {
// //   const { params } = await props; // ✅ Await the props before accessing params

// //   const job = await getJobById(params.id);
// //   if (!job) return notFound();

// //   const postedDate = job.posted_at
// //     ? new Date(job.posted_at).toLocaleDateString(undefined, {
// //         month: "short",
// //         day: "numeric",
// //         year: "numeric",
// //       })
// //     : null;

// //   return (
// //     <main className="w-full min-h-screen bg-white px-6 py-20 md:py-28">
// //       <section className="max-w-4xl mx-auto space-y-10">
// //         {/* Header */}
// //         <header className="space-y-2 text-center">
// //           <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
// //             {job.title}
// //           </h1>
// //           {job.company && (
// //             <p className="text-neutral-500 text-sm">
// //               <span className="font-medium text-black">{job.company}</span>
// //             </p>
// //           )}
// //           {postedDate && (
// //             <p className="text-xs text-neutral-400 mt-1">
// //               Posted on {postedDate}
// //             </p>
// //           )}
// //         </header>

// //         {/* Metadata */}
// //         <div className="flex flex-wrap justify-center gap-3 text-sm text-neutral-600">
// //           <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
// //             <MapPin className="w-4 h-4 text-neutral-500" />
// //             {job.location}
// //           </span>
// //           <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
// //             <Briefcase className="w-4 h-4 text-neutral-500" />
// //             {job.category}
// //           </span>
// //           <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
// //             <Globe className="w-4 h-4 text-neutral-500" />
// //             {job.is_remote ? "Remote" : job.is_onsite ? "Onsite" : "Flexible"}
// //           </span>
// //           {job.job_type && (
// //             <span
// //               className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${
// //                 job.job_type === "Full-time"
// //                   ? "bg-green-50 text-green-700 border-green-200"
// //                   : "bg-yellow-50 text-yellow-700 border-yellow-200"
// //               }`}
// //             >
// //               <Sparkles className="w-3.5 h-3.5" />
// //               {job.job_type}
// //             </span>
// //           )}
// //         </div>

// //         {/* Description */}
// //         <div className="prose prose-neutral prose-p:leading-relaxed max-w-none text-base text-neutral-800">
// //           <div dangerouslySetInnerHTML={{ __html: job.description }} />
// //         </div>

// //         {/* Apply Button */}
// //         {job.link && (
// //           <div className="text-center pt-10">
// //             <a
// //               href={job.link}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-neutral-900 transition"
// //             >
// //               <ExternalLink className="w-4 h-4" />
// //               Apply Now
// //             </a>
// //           </div>
// //         )}
// //       </section>
// //     </main>
// //   );
// // }

// import { notFound } from "next/navigation";
// import { Briefcase, MapPin, Globe, ExternalLink, Sparkles } from "lucide-react";

// interface Job {
//   id: string;
//   title: string;
//   description: string;
//   location: string;
//   category: string;
//   is_remote: boolean;
//   is_onsite: boolean;
//   job_type?: string;
//   company?: string;
//   posted_at?: string;
//   link?: string;
// }

// function getServerUrl(): string {
//   return process.env.NODE_ENV === "development"
//     ? "http://localhost:3000"
//     : `https://${process.env.VERCEL_URL}`;
// }

// async function getJobById(id: string): Promise<Job | null> {
//   const res = await fetch(`https://piwc-job-portal.vercel.app/api/jobs/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) return null;

//   const { data } = await res.json();
//   return data ?? null;
// }

// export default async function JobDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params; // ✅ FIXED: await the `params` object

//   const job = await getJobById(id);
//   if (!job) return notFound();

//   const postedDate = job.posted_at
//     ? new Date(job.posted_at).toLocaleDateString(undefined, {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       })
//     : null;

//   return (
//     <main>
//       <section className="max-w-4xl mx-auto space-y-10">
//         <header className="space-y-2 text-center">
//           <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
//             {job.title}
//           </h1>
//           {job.company && (
//             <p className="text-neutral-500 text-sm">
//               <span className="font-medium text-black">{job.company}</span>
//             </p>
//           )}
//           {postedDate && (
//             <p className="text-xs text-neutral-400 mt-1">
//               Posted on {postedDate}
//             </p>
//           )}
//         </header>

//         <div className="flex flex-wrap justify-center gap-3 text-sm text-neutral-600">
//           <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
//             <MapPin className="w-4 h-4 text-neutral-500" />
//             {job.location}
//           </span>
//           <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
//             <Briefcase className="w-4 h-4 text-neutral-500" />
//             {job.category}
//           </span>
//           <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
//             <Globe className="w-4 h-4 text-neutral-500" />
//             {job.is_remote ? "Remote" : job.is_onsite ? "Onsite" : "Flexible"}
//           </span>
//           {job.job_type && (
//             <span
//               className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${
//                 job.job_type === "Full-time"
//                   ? "bg-green-50 text-green-700 border-green-200"
//                   : "bg-yellow-50 text-yellow-700 border-yellow-200"
//               }`}
//             >
//               <Sparkles className="w-3.5 h-3.5" />
//               {job.job_type}
//             </span>
//           )}
//         </div>

//         <div className="prose prose-neutral prose-p:leading-relaxed max-w-none text-base text-neutral-800">
//           <div dangerouslySetInnerHTML={{ __html: job.description }} />
//         </div>

//         {job.link && (
//           <div className="text-center pt-10">
//             <a
//               href={job.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white text-sm font-medium rounded-md hover:bg-blue-950 transition"
//             >
//               <ExternalLink className="w-4 h-4" />
//               Apply Now
//             </a>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Briefcase, MapPin, Globe, ExternalLink, Sparkles } from "lucide-react";

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  category: string;
  is_remote: boolean;
  is_onsite: boolean;
  job_type?: string;
  company?: string;
  posted_at?: string;
  link?: string;
}

// async function getJobById(id: string): Promise<Job | null> {
//   const res = await fetch(`https://piwc-job-portal.vercel.app/api/jobs/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) return null;

//   const { data } = await res.json();
//   return data ?? null;
// }

async function getJobById(id: string): Promise<Job | null> {
  try {
    const res = await fetch(`/api/jobs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const { data } = await res.json();
    return data ?? null;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getJobById(id).then((data) => {
      if (!data) {
        notFound();
        return;
      }
      setJob(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <LoadingSpinner size={48} label="Loading job details..." />
      </div>
    );
  }

  if (!job) return notFound();

  const postedDate = job.posted_at
    ? new Date(job.posted_at).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <main>
      <section className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
            {job.title}
          </h1>
          {job.company && (
            <p className="text-neutral-500 text-sm">
              <span className="font-medium text-black">{job.company}</span>
            </p>
          )}
          {postedDate && (
            <p className="text-xs text-neutral-400 mt-1">
              Posted on {postedDate}
            </p>
          )}
        </header>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-neutral-600">
          <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
            <MapPin className="w-4 h-4 text-neutral-500" />
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
            <Briefcase className="w-4 h-4 text-neutral-500" />
            {job.category}
          </span>
          <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
            <Globe className="w-4 h-4 text-neutral-500" />
            {job.is_remote ? "Remote" : job.is_onsite ? "Onsite" : "Flexible"}
          </span>
          {job.job_type && (
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${
                job.job_type === "Full-time"
                  ? "bg-green-50 text-green-700 border-green-200"
                  : "bg-yellow-50 text-yellow-700 border-yellow-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {job.job_type}
            </span>
          )}
        </div>

        <div className="prose prose-neutral prose-p:leading-relaxed max-w-none text-base text-neutral-800">
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>

        {job.link && (
          <div className="text-center pt-10">
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white text-sm font-medium rounded-md hover:bg-blue-950 transition"
            >
              <ExternalLink className="w-4 h-4" />
              Apply Now
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
