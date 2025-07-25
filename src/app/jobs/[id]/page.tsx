// import { notFound } from "next/navigation";
// import { Briefcase, MapPin, Globe, Clock, ExternalLink } from "lucide-react";

// interface Job {
//   id: string;
//   title: string;
//   description: string;
//   location: string;
//   category: string;
//   is_remote: boolean;
//   is_onsite: boolean;
//   company?: string;
//   posted_at?: string;
//   link?: string;
// }

// // Server-safe base URL builder
// function getServerUrl(): string {
//   return process.env.NODE_ENV === "development"
//     ? "http://localhost:3000"
//     : `https://${process.env.VERCEL_URL}`;
// }

// // Fetch a single job by ID
// async function getJobById(id: string): Promise<Job | null> {
//   const baseUrl = getServerUrl();

//   const res = await fetch(`${baseUrl}/api/jobs/${id}`, {
//     cache: "no-store", // Always fetch fresh data
//   });

//   if (!res.ok) {
//     console.warn(`❌ Job fetch failed: ${res.status} ${res.statusText}`);
//     return null;
//   }

//   const { data } = await res.json();
//   return data ?? null;
// }

// export default async function JobDetailPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const job = await getJobById(params.id);

//   if (!job) return notFound();

//   return (
//     <div className="w-full min-h-screen bg-white px-6 py-20 md:py-28">
//       <div className="max-w-4xl mx-auto space-y-10">
//         {/* Title & Company */}
//         <div className="space-y-2 text-center">
//           <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
//             {job.title}
//           </h1>
//           {job.company && (
//             <p className="text-neutral-500 text-sm">at {job.company}</p>
//           )}
//         </div>

//         {/* Metadata */}
//         <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
//           <div className="flex items-center gap-1">
//             <MapPin className="w-4 h-4" />
//             {job.location}
//           </div>
//           <div className="flex items-center gap-1">
//             <Briefcase className="w-4 h-4" />
//             {job.category}
//           </div>
//           <div className="flex items-center gap-1">
//             <Globe className="w-4 h-4" />
//             {job.is_remote ? "Remote" : job.is_onsite ? "Onsite" : "N/A"}
//           </div>
//           {job.posted_at && (
//             <div className="flex items-center gap-1">
//               <Clock className="w-4 h-4" />
//               {new Date(job.posted_at).toLocaleDateString()}
//             </div>
//           )}
//         </div>

//         {/* Description */}
//         <div className="prose prose-neutral max-w-none text-neutral-800 text-base leading-relaxed">
//           {job.description}
//         </div>

//         {/* Apply Button */}
//         {job.link && (
//           <div className="text-center pt-10">
//             <a
//               href={job.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-neutral-900 transition"
//             >
//               <ExternalLink className="w-4 h-4" />
//               Apply Now
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import { notFound } from "next/navigation";
import {
  Briefcase,
  MapPin,
  Globe,
  Clock,
  ExternalLink,
  Sparkles,
} from "lucide-react";

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

// Server-safe base URL builder
function getServerUrl(): string {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${process.env.VERCEL_URL}`;
}

// Fetch a single job by ID
async function getJobById(id: string): Promise<Job | null> {
  const baseUrl = getServerUrl();

  const res = await fetch(`${baseUrl}/api/jobs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.warn(`❌ Job fetch failed: ${res.status} ${res.statusText}`);
    return null;
  }

  const { data } = await res.json();
  return data ?? null;
}

export default async function JobDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const job = await getJobById(params.id);
  if (!job) return notFound();

  const postedDate = job.posted_at
    ? new Date(job.posted_at).toLocaleDateString()
    : null;

  return (
    <div className="w-full min-h-screen bg-white px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-2 text-center">
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
        </div>

        {/* Metadata */}
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

        {/* Description */}
        <div className="prose prose-neutral prose-p:leading-relaxed max-w-none text-base text-neutral-800">
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>

        {/* Apply Button */}
        {job.link && (
          <div className="text-center pt-10">
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-neutral-900 transition"
            >
              <ExternalLink className="w-4 h-4" />
              Apply Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
