// "use client";

// import Link from "next/link";
// import { Briefcase, MapPin, Globe, CalendarDays } from "lucide-react";
// import clsx from "clsx";
// import { formatDistanceToNow } from "date-fns";

// type Job = {
//   id: string;
//   title: string;
//   location: string;
//   category: string;
//   description: string;
//   created_at: string;
//   is_remote: boolean;
//   is_onsite: boolean;
//   job_type?: string;
// };

// export default function JobCard({ job }: { job: Job }) {
//   return (
//     <Link key={job.id} href={`/jobs/${job.id}`} className="group">
//       <div className="p-5 h-full rounded-xl border border-neutral-200 bg-white hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col justify-between space-y-4">
//         <div className="flex items-center gap-3">
//           <div className="bg-blue-100 p-2 rounded-md">
//             <Briefcase className="w-5 h-5 text-blue-900" />
//           </div>
//           <h3 className="text-base font-medium text-foreground group-hover:text-black transition">
//             {job.title}
//           </h3>
//         </div>

//         <div className="flex flex-wrap items-center gap-3 text-xs capitalize text-neutral-600">
//           <span className="inline-flex items-center gap-1">
//             <MapPin className="w-4 h-4" />
//             {job.location}
//           </span>
//           <span className="inline-flex items-center gap-1">
//             <Briefcase className="w-4 h-4" />
//             {job.category}
//           </span>
//           <span className="inline-flex items-center gap-1">
//             <Globe className="w-4 h-4" />
//             {job.is_remote ? "Remote" : job.is_onsite ? "Onsite" : "Flexible"}
//           </span>
//           {job.job_type && (
//             <span
//               className={clsx(
//                 "text-xs font-medium px-2 py-0.5 rounded-full border",
//                 job.job_type === "Full-time"
//                   ? "bg-green-50 text-green-700 border-green-200"
//                   : "bg-yellow-50 text-yellow-700 border-yellow-200"
//               )}
//             >
//               {job.job_type}
//             </span>
//           )}
//         </div>

//         <p className="text-sm text-neutral-700 line-clamp-3 leading-snug">
//           {job.description}
//         </p>

//         <div className="flex items-center justify-between pt-3 border-t border-neutral-200 text-xs text-neutral-500">
//           <div className="flex items-center gap-1">
//             <CalendarDays className="w-4 h-4" />
//             <span>
//               {formatDistanceToNow(new Date(job.created_at), {
//                 addSuffix: true,
//               })}
//             </span>
//           </div>
//           <span className="font-medium text-blue-900 group-hover:underline">
//             View details →
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// }
"use client";

import Link from "next/link";
import { Briefcase, MapPin, Globe, CalendarDays } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

type Job = {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  created_at: string;
  is_remote: boolean;
  is_onsite: boolean;
  job_type?: string;
};

export default function JobCard({ job }: { job: Job }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href={`/jobs/${job.id}`} className="group block h-full">
        <div className="h-full flex flex-col justify-between space-y-6 bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-200">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-blue-900" />
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-black transition">
              {job.title}
            </h3>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium capitalize text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {job.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Globe className="w-4 h-4" />
              {job.is_remote ? "Remote" : job.is_onsite ? "Onsite" : "Flexible"}
            </span>
            {job.job_type && (
              <span
                className={clsx(
                  "text-xs font-semibold px-2 py-0.5 rounded-full border",
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

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-200 text-xs text-neutral-500">
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
    </motion.div>
  );
}
