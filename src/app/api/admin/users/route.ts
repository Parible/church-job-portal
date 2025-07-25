// // app/api/admin/users/route.ts
// import { createClient } from "@/utils/supabase/supabaseServer";
// import { NextRequest, NextResponse } from "next/server";

// // GET: fetch all users with metadata
// export async function GET(req: NextRequest) {
//   const supabase = await createClient();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (user?.user_metadata?.role !== "admin") {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//   }

//   const { data: users, error } = await supabase.auth.admin.listUsers();

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   return NextResponse.json({ users });
// }

// // PATCH: update role or ban user
// export async function PATCH(req: NextRequest) {
//   const supabase = await createClient();
//   const body = await req.json();

//   const {
//     user_id,
//     role,
//     banned,
//   }: { user_id: string; role?: string; banned?: boolean } = body;

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (user?.user_metadata?.role !== "admin") {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//   }

//   if (!user_id) {
//     return NextResponse.json({ error: "Missing user_id" }, { status: 400 });
//   }

//   if (role) {
//     await supabase.auth.admin.updateUserById(user_id, {
//       user_metadata: { role },
//     });
//   }

//   if (typeof banned === "boolean") {
//     await supabase.auth.admin.updateUserById(user_id, {
//       banned,
//     });
//   }

//   return NextResponse.json({ success: true });
// // }
// // app/api/admin/users/route.ts
// import { createClient } from "@/utils/supabase/supabaseServer";
// import { NextRequest, NextResponse } from "next/server";

// // GET: fetch all users with metadata
// export async function GET(req: NextRequest) {
//   const supabase = await createClient();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (user?.user_metadata?.role !== "admin") {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//   }

//   const { data, error } = await supabase.auth.admin.listUsers();

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   const users = data.users.map((u) => ({
//     id: u.id,
//     email: u.email,
//     created_at: u.created_at,
//     user_metadata: u.user_metadata || {},
//     banned: u.banned ?? false,
//   }));

//   return NextResponse.json({ users });
// }

// // PATCH: update role or ban user
// export async function PATCH(req: NextRequest) {
//   const supabase = await createClient();
//   const body = await req.json();

//   const {
//     user_id,
//     role,
//     banned,
//   }: { user_id: string; role?: string; banned?: boolean } = body;

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (user?.user_metadata?.role !== "admin") {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//   }

//   if (!user_id) {
//     return NextResponse.json({ error: "Missing user_id" }, { status: 400 });
//   }

//   if (role) {
//     await supabase.auth.admin.updateUserById(user_id, {
//       user_metadata: { role },
//     });
//   }

//   if (typeof banned === "boolean") {
//     await supabase.auth.admin.updateUserById(user_id, {
//       banned,
//     });
//   }

//   return NextResponse.json({ success: true });
// }

// import { createClient } from "@/utils/supabase/supabaseServer"; //
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const supabase = await createClient();

//   const {
//     data: { user },
//     error: sessionError,
//   } = await supabase.auth.getUser();

//   if (sessionError) {
//     return NextResponse.json({ error: sessionError.message }, { status: 500 });
//   }

//   if (user?.user_metadata?.role !== "admin") {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//   }

//   const { data, error } = await supabase.auth.admin.listUsers();

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   const users = data.users.map((u) => ({
//     id: u.id,
//     email: u.email,
//     created_at: u.created_at,
//     user_metadata: u.user_metadata || {},
//     banned: u.banned ?? false,
//   }));

//   return NextResponse.json({ users });
// }

// export async function PATCH(req: NextRequest) {
//   const supabase = await createClient();
//   const body = await req.json();

//   const {
//     user_id,
//     role,
//     banned,
//   }: { user_id: string; role?: string; banned?: boolean } = body;

//   const {
//     data: { user },
//     error: sessionError,
//   } = await supabase.auth.getUser();

//   if (sessionError) {
//     return NextResponse.json({ error: sessionError.message }, { status: 500 });
//   }

//   if (user?.user_metadata?.role !== "admin") {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//   }

//   if (!user_id) {
//     return NextResponse.json({ error: "Missing user_id" }, { status: 400 });
//   }

//   const updateOps = [];

//   if (role) {
//     updateOps.push(
//       supabase.auth.admin.updateUserById(user_id, {
//         user_metadata: { role },
//       })
//     );
//   }

//   if (typeof banned === "boolean") {
//     updateOps.push(
//       supabase.auth.admin.updateUserById(user_id, {
//         banned,
//       })
//     );
//   }

//   await Promise.all(updateOps);

//   return NextResponse.json({ success: true });
// }

// import { createClient } from "@/utils/supabase/supabaseServer"; //
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   console.log("[GET] Start request");
//   const supabase = await createClient();

//   const {
//     data: { user },
//     error: sessionError,
//   } = await supabase.auth.getUser();

//   if (sessionError) {
//     console.error("[GET] Session error:", sessionError);
//     return NextResponse.json({ error: sessionError.message }, { status: 500 });
//   }

//   console.log(
//     "[GET] User fetched:",
//     user?.id,
//     "Role:",
//     user?.user_metadata?.role
//   );

//   if (user?.user_metadata?.role !== "admin") {
//     console.warn(
//       "[GET] Unauthorized access attempt by user:",
//       user?.id,
//       "Role:",
//       user?.user_metadata?.role
//     );
//     return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//   }

//   const { data, error } = await supabase.auth.admin.listUsers();

//   if (error) {
//     console.error("[GET] Error listing users:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   const users = data.users.map((u) => ({
//     id: u.id,
//     email: u.email,
//     created_at: u.created_at,
//     user_metadata: u.user_metadata || {},
//     banned: u.banned ?? false,
//   }));

//   console.log("[GET] Returning users list, count:", users.length);

//   return NextResponse.json({ users });
// }

// export async function PATCH(req: NextRequest) {
//   console.log("[PATCH] Start request");
//   const supabase = await createClient();
//   const body = await req.json();

//   const {
//     user_id,
//     role,
//     banned,
//   }: { user_id: string; role?: string; banned?: boolean } = body;

//   console.log("[PATCH] Request body:", body);

//   const {
//     data: { user },
//     error: sessionError,
//   } = await supabase.auth.getUser();

//   if (sessionError) {
//     console.error("[PATCH] Session error:", sessionError);
//     return NextResponse.json({ error: sessionError.message }, { status: 500 });
//   }

//   console.log(
//     "[PATCH] User fetched:",
//     user?.id,
//     "Role:",
//     user?.user_metadata?.role
//   );

//   if (user?.user_metadata?.role !== "admin") {
//     console.warn(
//       "[PATCH] Unauthorized access attempt by user:",
//       user?.id,
//       "Role:",
//       user?.user_metadata?.role
//     );
//     return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//   }

//   if (!user_id) {
//     console.warn("[PATCH] Missing user_id in request");
//     return NextResponse.json({ error: "Missing user_id" }, { status: 400 });
//   }

//   const updateOps = [];

//   if (role) {
//     console.log(`[PATCH] Updating role for user ${user_id} to ${role}`);
//     updateOps.push(
//       supabase.auth.admin.updateUserById(user_id, {
//         user_metadata: { role },
//       })
//     );
//   }

//   if (typeof banned === "boolean") {
//     console.log(
//       `[PATCH] Updating banned status for user ${user_id} to ${banned}`
//     );
//     updateOps.push(
//       supabase.auth.admin.updateUserById(user_id, {
//         banned,
//       })
//     );
//   }

//   try {
//     await Promise.all(updateOps);
//   } catch (err) {
//     console.error("[PATCH] Error updating user:", err);
//     return NextResponse.json(
//       { error: "Failed to update user" },
//       { status: 500 }
//     );
//   }

//   console.log("[PATCH] Update successful for user:", user_id);
//   return NextResponse.json({ success: true });
// }
import { supabaseAdmin } from "@/utils/supabase/supabaseAdmin"; // Admin client
import { createClient } from "@/utils/supabase/supabaseServer"; // Authenticated server client
import { NextRequest, NextResponse } from "next/server";

// GET: Return list of all users (admin only)
export async function GET(req: NextRequest) {
  console.log("[GET] Start request");

  const sessionClient = await createClient();
  const {
    data: { user },
    error: sessionError,
  } = await sessionClient.auth.getUser();

  if (sessionError || !user) {
    console.error("[GET] Session error:", sessionError?.message);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (user.user_metadata?.role !== "admin") {
    console.warn("[GET] Unauthorized access attempt by:", user.id);
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { data, error } = await supabaseAdmin.auth.admin.listUsers();

  if (error) {
    console.error("[GET] Error listing users:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const users = data.users.map((u) => ({
    id: u.id,
    email: u.email,
    created_at: u.created_at,
    user_metadata: u.user_metadata || {},
    // banned: u.banned ?? false,
  }));

  console.log("[GET] Returning users list, count:", users.length);
  return NextResponse.json({ users });
}

// PATCH: Update user role or banned status (admin only)
export async function PATCH(req: NextRequest) {
  console.log("[PATCH] Start request");

  const sessionClient = await createClient();
  const {
    data: { user },
    error: sessionError,
  } = await sessionClient.auth.getUser();

  if (sessionError || !user) {
    console.error("[PATCH] Session error:", sessionError?.message);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (user.user_metadata?.role !== "admin") {
    console.warn("[PATCH] Unauthorized access by:", user.id);
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  let body;
  try {
    body = await req.json();
  } catch (err) {
    console.error("[PATCH] Invalid JSON:", err);
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const {
    user_id,
    role,
    banned,
  }: { user_id: string; role?: string; banned?: boolean } = body;

  if (!user_id) {
    return NextResponse.json({ error: "Missing user_id" }, { status: 400 });
  }

  const updates = [];

  if (role) {
    updates.push(
      supabaseAdmin.auth.admin.updateUserById(user_id, {
        user_metadata: { role },
      })
    );
  }

  if (typeof banned === "boolean") {
    updates.push(
      supabaseAdmin.auth.admin.updateUserById(user_id, {
        // banned,
      })
    );
  }

  try {
    await Promise.all(updates);
    console.log(`[PATCH] Updated user: ${user_id}`);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("[PATCH] Update failed:", err.message);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
