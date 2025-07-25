import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/supabaseServer";

export async function GET(req: NextRequest) {
  console.log("📥 GET /api/jobs/pending");

  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user || user.user_metadata.role !== "admin") {
    console.warn("❌ Unauthorized access to pending jobs");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("jobs")
    .select("id, title, approved, created_at, employer_id")
    .eq("approved", false)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("❌ Supabase fetch error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}
