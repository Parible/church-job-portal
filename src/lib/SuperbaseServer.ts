// // ⚠️ NEVER import this in the browser!
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// export const createServerSupabaseClient = () => {
//   const cookieStore = cookies();

//   return createServerComponentClient({
//     cookies: () => cookieStore,
//   });
// };
// lib/supabase-server.ts

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types/supbase"; // optional if you're using types

export const createServerSupabaseClient = () => {
  return createServerComponentClient<Database>({ cookies });
};

// // Example: app/api/posts/route.ts
// import { NextResponse } from 'next/server';
// import { createServerSupabaseClient } from '@/lib/supabaseServer';

// export async function GET() {
//   const supabase = createServerSupabaseClient();

//   const { data, error } = await supabase.from('posts').select('*');

//   return NextResponse.json({ data, error });
// }
