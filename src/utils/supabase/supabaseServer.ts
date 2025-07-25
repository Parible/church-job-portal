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

// import { cookies } from "next/headers";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import type { Database } from "@/types/supbase"; // optional if you're using types

// export const createServerSupabaseClient = () => {
//   return createServerComponentClient<Database>({ cookies });
// };

// /lib/SuperbaseServer.ts

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}

// // Example: app/api/posts/route.ts
// import { NextResponse } from 'next/server';
// import { createServerSupabaseClient } from '@/lib/supabaseServer';

// export async function GET() {
//   const supabase = createServerSupabaseClient();

//   const { data, error } = await supabase.from('posts').select('*');

//   return NextResponse.json({ data, error });
// }
