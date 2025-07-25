// // // // // // app/api/jobs/route.ts
// // // // // import { NextResponse } from "next/server";
// // // // // import connectToDatabase from "@/lib/mongoose";
// // // // // import { Job } from "@/models/Job";

// // // // // export async function POST(req: Request) {
// // // // //   try {
// // // // //     const body = await req.json();
// // // // //     await connectToDatabase(); // make sure DB is connected
// // // // //     const job = await Job.create(body);
// // // // //     return NextResponse.json(job, { status: 201 });
// // // // //   } catch (error: any) {
// // // // //     return NextResponse.json(
// // // // //       { message: error.message || "Server Error" },
// // // // //       { status: 500 }
// // // // //     );
// // // // //   }
// // // // // }
// // // // // app/api/jobs/route.ts
// // // // import { NextResponse } from "next/server";
// // // // import connectToDatabase from "@/lib/mongoose";

// // // // export async function POST(req: Request) {
// // // //   try {
// // // //     const body = await req.json();

// // // //     // console.log("Received job data:", body);
// // // //     // Wait for DB connection before importing the model
// // // //     await connectToDatabase();
// // // //     const { Job } = await import("@/models/Job");

// // // //     const job = await Job.create(body);
// // // //     return NextResponse.json(job, { status: 201 });
// // // //   } catch (error: any) {
// // // //     return NextResponse.json(
// // // //       { message: error.message || "Server Error" },
// // // //       { status: 500 }
// // // //     );
// // // //   }
// // // // }
// // // import { NextResponse } from "next/server";
// // // import connectToDatabase from "@/lib/mongoose";
// // // import { getJobModel } from "@/models/Job";

// // // export async function POST(req: Request) {
// // //   try {
// // //     const body = await req.json();

// // //     // Ensure connection is established BEFORE model creation
// // //     await connectToDatabase();

// // //     const Job = getJobModel();
// // //     const job = await Job.create(body);

// // //     return NextResponse.json(job, { status: 201 });
// // //   } catch (error: any) {
// // //     return NextResponse.json(
// // //       { message: error.message || "Server Error" },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }

// // import { NextResponse } from "next/server";
// // import connectToDatabase from "@/lib/mongoose";
// // import { getJobModel } from "@/models/Job";

// // export async function POST(req: Request) {
// //   try {
// //     await connectToDatabase();

// //     const body = await req.json();
// //     const Job = getJobModel();

// //     const job = await Job.create(body);

// //     return NextResponse.json(job, { status: 201 });
// //   } catch (error: any) {
// //     console.error("API ERROR:", error);
// //     return NextResponse.json(
// //       { message: error.message || "Server Error" },
// //       { status: 500 }
// //     );
// //   }
// // }

// import { supabase } from "@/lib/supabase";
// import { createServerSupabaseClient } from "@/lib/SuperbaseServer";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const supabase = createServerSupabaseClient();

//   const searchParams = req.nextUrl.searchParams;
//   const keyword = searchParams.get("keyword") || "";
//   const location = searchParams.get("location") || "";
//   const sort = searchParams.get("sort") || "desc";
//   const categories = searchParams.getAll("category"); // can be multiple
//   const limit = parseInt(searchParams.get("limit") || "10");
//   const offset = parseInt(searchParams.get("offset") || "0");

//   let query = supabase
//     .from("jobs")
//     .select("*", { count: "exact" })
//     .ilike("title", `%${keyword}%`)
//     .ilike("location", `%${location}%`);

//   if (categories.length > 0) {
//     query = query.in("category", categories);
//   }

//   query = query.order("created_at", { ascending: sort === "asc" });

//   const { data, count, error } = await query.range(offset, offset + limit - 1);

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   return NextResponse.json({ data, total: count });
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { title, description, location, jobType, deadline } = body;

//     if (!title || !description || !jobType) {
//       return NextResponse.json({ message: "Missing fields" }, { status: 400 });
//     }

//     const { data, error } = await supabase.from("jobs").insert([
//       {
//         title,
//         description,
//         location,
//         job_type: jobType,
//         deadline,
//       },
//     ]);

//     if (error) throw error;

//     return NextResponse.json(
//       { success: true, job: data?.[0] },
//       { status: 201 }
//     );
//   } catch (error: any) {
//     return NextResponse.json({ message: error.message }, { status: 500 });
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import { createServerSupabaseClient } from "@/lib/SuperbaseServer";

// // GET /api/jobs
// export async function GET(req: NextRequest) {
//   const supabase = createServerSupabaseClient();

//   const searchParams = req.nextUrl.searchParams;
//   const keyword = searchParams.get("keyword") || "";
//   const location = searchParams.get("location") || "";
//   const sort = searchParams.get("sort") || "desc";
//   const categories = searchParams.getAll("category"); // Accepts multiple
//   const limit = parseInt(searchParams.get("limit") || "10");
//   const offset = parseInt(searchParams.get("offset") || "0");

//   let query = supabase
//     .from("jobs")
//     .select("*", { count: "exact" })
//     .ilike("title", `%${keyword}%`)
//     .ilike("location", `%${location}%`);

//   if (categories.length > 0) {
//     query = query.in("category", categories);
//   }

//   query = query.order("created_at", { ascending: sort === "asc" });

//   const { data, count, error } = await query.range(offset, offset + limit - 1);

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   return NextResponse.json({ data, total: count });
// }

// // POST /api/jobs
// export async function POST(req: NextRequest) {
//   const supabase = createServerSupabaseClient();
//   try {
//     const body = await req.json();
//     const { title, description, location, jobType, deadline, category } = body;

//     if (!title || !description || !jobType) {
//       return NextResponse.json({ message: "Missing fields" }, { status: 400 });
//     }

//     const { data, error } = await supabase.from("jobs").insert([
//       {
//         title,
//         description,
//         location,
//         job_type: jobType,
//         deadline,
//         category,
//       },
//     ]);

//     if (error) throw error;

//     return NextResponse.json(
//       { success: true, job: data?.[0] },
//       { status: 201 }
//     );
//   } catch (error: any) {
//     return NextResponse.json({ message: error.message }, { status: 500 });
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import { createServerSupabaseClient } from "@/lib/SuperbaseServer";

// // GET /api/jobs
// export async function GET(req: NextRequest) {
//   const supabase = createServerSupabaseClient();
//   const searchParams = req.nextUrl.searchParams;

//   const keyword = searchParams.get("keyword") || "";
//   const location = searchParams.get("location") || "";
//   const sort = searchParams.get("sort") || "desc";
//   const categories = searchParams.getAll("category");
//   const isRemote = searchParams.get("remote") === "true";
//   const isOnsite = searchParams.get("onsite") === "true";
//   const limit = parseInt(searchParams.get("limit") || "10");
//   const offset = parseInt(searchParams.get("offset") || "0");

//   let query = supabase
//     .from("jobs")
//     .select("*", { count: "exact" })
//     .eq("approved", true)
//     .ilike("title", `%${keyword}%`)
//     .ilike("location", `%${location}%`);

//   if (categories.length > 0) {
//     query = query.in("category", categories);
//   }

//   if (isRemote && !isOnsite) query = query.eq("is_remote", true);
//   if (isOnsite && !isRemote) query = query.eq("is_onsite", true);

//   query = query.order("created_at", { ascending: sort === "asc" });

//   const { data, count, error } = await query.range(offset, offset + limit - 1);

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   return NextResponse.json({ data, total: count });
// }

// // POST /api/jobs
// export async function POST(req: NextRequest) {
//   const supabase = createServerSupabaseClient();

//   try {
//     const body = await req.json();

//     const {
//       title,
//       description,
//       requirements,
//       location,
//       is_remote,
//       is_onsite,
//       job_type,
//       link,
//       deadline,
//       category,
//     } = body;

//     // Validate required fields
//     if (
//       !title ||
//       !description ||
//       !location ||
//       !job_type ||
//       (!is_remote && !is_onsite)
//     ) {
//       return NextResponse.json(
//         { message: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const { data, error } = await supabase.from("jobs").insert([
//       {
//         title,
//         description,
//         requirements: requirements || "",
//         location,
//         is_remote,
//         is_onsite,
//         job_type,
//         link: link || "",
//         deadline,
//         category,
//         approved: false, // Always false on creation
//       },
//     ]);

//     if (error) throw error;

//     return NextResponse.json(
//       { success: true, job: data?.[0] },
//       { status: 201 }
//     );
//   } catch (error: any) {
//     return NextResponse.json({ message: error.message }, { status: 500 });
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import { createServerSupabaseClient } from "@/lib/SuperbaseServer";
// import type { Database } from "@/types/supbase";
// import { cookies, headers } from "next/headers";
// // GET /api/jobs
// export async function GET(req: NextRequest) {
//   const supabase = createServerSupabaseClient(cookies());

//   const searchParams = req.nextUrl.searchParams;
//   const keyword = searchParams.get("keyword") || "";
//   const location = searchParams.get("location") || "";
//   const sort = searchParams.get("sort") || "desc";
//   const categories = searchParams.getAll("category");
//   const isRemote = searchParams.get("remote") === "true";
//   const isOnsite = searchParams.get("onsite") === "true";
//   const limit = parseInt(searchParams.get("limit") || "10");
//   const offset = parseInt(searchParams.get("offset") || "0");

//   let query = supabase
//     .from("jobs")
//     .select("*", { count: "exact" })
//     .eq("approved", true)
//     .ilike("title", `%${keyword}%`)
//     .ilike("location", `%${location}%`);

//   if (categories.length > 0) query = query.in("category", categories);
//   if (isRemote && !isOnsite) query = query.eq("is_remote", true);
//   if (isOnsite && !isRemote) query = query.eq("is_onsite", true);

//   query = query.order("created_at", { ascending: sort === "asc" });

//   const { data, count, error } = await query.range(offset, offset + limit - 1);

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   return NextResponse.json({ data, total: count });
// }

// export async function POST(req: NextRequest) {
//   const supabase = createServerClient<Database>(cookies(), headers());

//   try {
//     const {
//       data: { user },
//       error: userError,
//     } = await supabase.auth.getUser();

//     if (userError || !user) {
//       return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//     }

//     const body = await req.json();

//     const {
//       title,
//       description,
//       requirements,
//       location,
//       is_remote,
//       is_onsite,
//       job_type,
//       link,
//       deadline,
//       category,
//     } = body;

//     if (
//       !title ||
//       !description ||
//       !location ||
//       !job_type ||
//       (!is_remote && !is_onsite)
//     ) {
//       return NextResponse.json(
//         { message: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const { data, error } = await supabase.from("jobs").insert([
//       {
//         title,
//         description,
//         requirements: requirements || "",
//         location,
//         is_remote,
//         is_onsite,
//         job_type,
//         link: link || "",
//         deadline,
//         category,
//         employer_id: user.id,
//         approved: false,
//       },
//     ]);

//     if (error) throw error;

//     return NextResponse.json(
//       { success: true, job: data?.[0] },
//       { status: 201 }
//     );
//   } catch (error: any) {
//     return NextResponse.json({ message: error.message }, { status: 500 });
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import { createServerSupabaseClient } from "@/utils/supabase/supabaseServer";

// export async function GET(req: NextRequest) {
//   console.log("GET /api/jobs - handler hit");

//   const supabase = createServerSupabaseClient();

//   const searchParams = req.nextUrl.searchParams;
//   const keyword = searchParams.get("keyword") || "";
//   const location = searchParams.get("location") || "";
//   const sort = searchParams.get("sort") || "desc";
//   const categories = searchParams.getAll("category");
//   const isRemote = searchParams.get("remote") === "true";
//   const isOnsite = searchParams.get("onsite") === "true";
//   const limit = parseInt(searchParams.get("limit") || "10");
//   const offset = parseInt(searchParams.get("offset") || "0");

//   let query = supabase
//     .from("jobs")
//     .select("*", { count: "exact" })
//     .eq("approved", true)
//     .ilike("title", `%${keyword}%`)
//     .ilike("location", `%${location}%`);

//   if (categories.length > 0) query = query.in("category", categories);
//   if (isRemote && !isOnsite) query = query.eq("is_remote", true);
//   if (isOnsite && !isRemote) query = query.eq("is_onsite", true);

//   query = query.order("created_at", { ascending: sort === "asc" });

//   const { data, count, error } = await query.range(offset, offset + limit - 1);

//   if (error) {
//     console.error("GET /api/jobs - Error:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   return NextResponse.json({ data, total: count });
// }

// export async function POST(req: NextRequest) {
//   console.log("✅ POST /api/jobs - handler hit");

//   const supabase = createServerSupabaseClient();

//   const {
//     data: { user },
//     error: userError,
//   } = await supabase.auth.getUser();

//   console.log("🔍 Supabase Auth Result:", { user, userError });

//   if (userError || !user) {
//     console.warn("❌ Unauthorized POST attempt");
//     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//   }

//   const body = await req.json();
//   console.log("📦 Request Body:", body);

//   const {
//     title,
//     description,
//     requirements,
//     location,
//     is_remote,
//     is_onsite,
//     job_type,
//     link,
//     deadline,
//     category,
//   } = body;

//   if (
//     !title ||
//     !description ||
//     !location ||
//     !job_type ||
//     (!is_remote && !is_onsite)
//   ) {
//     console.warn("⚠️ Missing required fields");
//     return NextResponse.json(
//       { message: "Missing required fields" },
//       { status: 400 }
//     );
//   }

//   const role = user.user_metadata?.role ?? "user";
//   const autoApprove = role === "admin" || role === "moderator";

//   const insertPayload = {
//     title,
//     description,
//     requirements: requirements || "",
//     location,
//     is_remote,
//     is_onsite,
//     job_type,
//     link: link || "",
//     deadline,
//     category,
//     employer_id: user.id,
//     approved: autoApprove,
//   };

//   console.log("📥 Inserting job:", insertPayload);

//   const { data, error } = await supabase.from("jobs").insert([insertPayload]);

//   if (error) {
//     console.error("❌ Supabase Insert Error:", error.message);
//     return NextResponse.json({ message: error.message }, { status: 500 });
//   }

//   console.log("✅ Job Inserted:", data?.[0]);

//   return NextResponse.json({ success: true, job: data?.[0] }, { status: 201 });
// }

// app/api/jobs/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/supabaseServer";

// export async function GET(req: NextRequest) {
//   console.log("GET /api/jobs - handler hit");

//   const supabase = await createClient();
//   const searchParams = req.nextUrl.searchParams;

//   const keyword = searchParams.get("keyword") || "";
//   const location = searchParams.get("location") || "";
//   const sort = searchParams.get("sort") || "desc";
//   const categories = searchParams.getAll("category");
//   const jobType = searchParams.get("job_type") || "";
//   const isRemote = searchParams.get("remote") === "true";
//   const isOnsite = searchParams.get("onsite") === "true";
//   const limit = parseInt(searchParams.get("limit") || "10");
//   const offset = parseInt(searchParams.get("offset") || "0");

//   let query = supabase
//     .from("jobs")
//     .select("*", { count: "exact" })
//     .eq("approved", true)
//     .ilike("title", `%${keyword}%`)
//     .ilike("location", `%${location}%`);

//   if (categories.length > 0) {
//     query = query.in("category", categories);
//   }

//   if (jobType) {
//     query = query.eq("job_type", jobType);
//   }

//   if (isRemote && !isOnsite) {
//     query = query.eq("is_remote", true);
//   }

//   if (isOnsite && !isRemote) {
//     query = query.eq("is_onsite", true);
//   }

//   query = query.order("created_at", { ascending: sort === "asc" });

//   const { data, count, error } = await query.range(offset, offset + limit - 1);

//   if (error) {
//     console.error("GET /api/jobs - Error:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   return NextResponse.json({ data, total: count });
// }

export async function GET(req: NextRequest) {
  console.log("📥 GET /api/jobs");

  const supabase = await createClient();

  const searchParams = req.nextUrl.searchParams;
  const sort = searchParams.get("sort") || "desc";
  const limit = parseInt(searchParams.get("limit") || "10");
  const offset = parseInt(searchParams.get("offset") || "0");
  const keyword = searchParams.get("keyword")?.trim();

  let query = supabase
    .from("jobs")
    .select("*", { count: "exact" })
    .eq("approved", true);

  if (keyword) {
    query = query.or(
      `title.ilike.%${keyword}%,description.ilike.%${keyword}%,location.ilike.%${keyword}%`
    );
  }

  query = query
    .order("created_at", { ascending: sort === "asc" })
    .range(offset, offset + limit - 1);

  const { data, count, error } = await query;

  if (error) {
    console.error("❌ GET /api/jobs - Supabase error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log("✅ Returning jobs:", data?.length);
  return NextResponse.json({ data, total: count });
}
export async function POST(req: NextRequest) {
  console.log("✅ POST /api/jobs - handler hit");

  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  console.log("🔍 Supabase Auth Result:", { user, userError });

  if (userError || !user) {
    console.warn("❌ Unauthorized POST attempt");
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const {
    title,
    description,
    requirements,
    location,
    is_remote,
    is_onsite,
    job_type,
    link,
    deadline,
    category,
  } = body;

  if (
    !title ||
    !description ||
    !location ||
    !job_type ||
    (!is_remote && !is_onsite)
  ) {
    console.warn("⚠️ Missing required fields");
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const role = user.user_metadata?.role ?? "user";
  const autoApprove = role === "admin" || role === "moderator";

  const { data, error } = await supabase.from("jobs").insert([
    {
      title,
      description,
      requirements: requirements || "",
      location,
      is_remote,
      is_onsite,
      job_type,
      link: link || "",
      deadline,
      category,
      employer_id: user.id,
      approved: autoApprove,
    },
  ]);

  if (error) {
    console.error("❌ Supabase Insert Error:", error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, job: data?.[0] }, { status: 201 });
}
