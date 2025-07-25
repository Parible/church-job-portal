import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/supabaseServer";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log(`📥 GET /api/jobs/${id}`);

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .eq("approved", true)
    .single();

  if (error || !data) {
    console.error(`❌ GET /api/jobs/${id} - ${error?.message || "Not found"}`);
    return NextResponse.json(
      { message: "Job not found or not approved" },
      { status: 404 }
    );
  }

  console.log(`✅ Found job with ID ${id}`);
  return NextResponse.json({ data }, { status: 200 });
}
