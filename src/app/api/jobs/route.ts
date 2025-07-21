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
import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/SuperbaseServer";

// GET /api/jobs
export async function GET(req: NextRequest) {
  const supabase = createServerSupabaseClient();

  const searchParams = req.nextUrl.searchParams;
  const keyword = searchParams.get("keyword") || "";
  const location = searchParams.get("location") || "";
  const sort = searchParams.get("sort") || "desc";
  const categories = searchParams.getAll("category"); // Accepts multiple
  const limit = parseInt(searchParams.get("limit") || "10");
  const offset = parseInt(searchParams.get("offset") || "0");

  let query = supabase
    .from("jobs")
    .select("*", { count: "exact" })
    .ilike("title", `%${keyword}%`)
    .ilike("location", `%${location}%`);

  if (categories.length > 0) {
    query = query.in("category", categories);
  }

  query = query.order("created_at", { ascending: sort === "asc" });

  const { data, count, error } = await query.range(offset, offset + limit - 1);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data, total: count });
}

// POST /api/jobs
export async function POST(req: NextRequest) {
  const supabase = createServerSupabaseClient();
  try {
    const body = await req.json();
    const { title, description, location, jobType, deadline, category } = body;

    if (!title || !description || !jobType) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await supabase.from("jobs").insert([
      {
        title,
        description,
        location,
        job_type: jobType,
        deadline,
        category,
      },
    ]);

    if (error) throw error;

    return NextResponse.json(
      { success: true, job: data?.[0] },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
