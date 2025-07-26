// import { NextRequest, NextResponse } from "next/server";
// import { createClient } from "@/utils/supabase/supabaseServer";

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = params;
//   console.log(`📥 GET /api/jobs/${id}`);

//   const supabase = await createClient();

//   const { data, error } = await supabase
//     .from("jobs")
//     .select("*")
//     .eq("id", id)
//     .eq("approved", true)
//     .single();

//   if (error || !data) {
//     console.error(`❌ GET /api/jobs/${id} - ${error?.message || "Not found"}`);
//     return NextResponse.json(
//       { message: "Job not found or not approved" },
//       { status: 404 }
//     );
//   }

//   console.log(`✅ Found job with ID ${id}`);
//   return NextResponse.json({ data }, { status: 200 });
// }

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/supabaseServer";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split("/").pop();

  if (!id || id === "[id]") {
    return NextResponse.json(
      { message: "Job ID is required" },
      { status: 400 }
    );
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("*, created_at") // make sure created_at is selected
    .eq("id", id)
    .eq("approved", true)
    .single();

  if (error || !data) {
    return NextResponse.json(
      { message: "Job not found or not approved" },
      { status: 404 }
    );
  }

  const withPostedAt = {
    ...data,
    posted_at: data.posted_at ?? data.created_at,
  };

  return NextResponse.json({ data: withPostedAt }, { status: 200 });
}
