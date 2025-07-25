// //for client use
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

// // Example: app/page.tsx or app/posts/page.tsx
// 'use client';

// import { supabase } from '@/lib/supabaseClient';

// export default function HomePage() {
//   useEffect(() => {
//     const fetchData = async () => {
//       const { data } = await supabase.from('posts').select('*');
//       console.log(data);
//     };

//     fetchData();
//   }, []);

//   return <div>Hello!</div>;
// }
