// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { createClient } from "@/utils/supabase/supabaseServer";
// import JobPostForm from "@/components/JobPostForm";

// export default async function PostPage() {
//   const supabase = await createClient();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     return (
//       <div className="max-w-2xl mx-auto mt-28 text-center px-6">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
//           You must be logged in to post a job
//         </h2>
//         <p className="text-gray-500 mb-6">
//           Access job posting by signing in with your account.
//         </p>
//         <Link href="/signin">
//           <Button className="px-6 py-3 text-sm font-medium rounded-lg shadow-md transition duration-300">
//             Go to Login
//           </Button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="py-12 px-4 sm:px-6 lg:px-8">
//       <JobPostForm />
//     </div>
//   );
// }
// app/post/page.tsx
import { createClient } from "@/utils/supabase/supabaseServer";
import JobPostForm from "@/components/JobPostForm";
import LoginRequired from "@/components/LoginRequired"; //

export default async function PostPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <LoginRequired />;
  }

  return <JobPostForm />;
}
