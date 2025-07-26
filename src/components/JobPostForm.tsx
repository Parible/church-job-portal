// "use client";

// import { useState } from "react";
// // import { supabase } from "@/utils/supabase/supabase"; // your browser supabase client
// import { useUser } from "@/context/UserContext";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { toast } from "sonner";
// import LoadingSpinner from "./LoadingSpinner";

// type FormState = {
//   title: string;
//   description: string;
//   requirements: string;
//   location: string;
//   jobType: "onsite" | "remote" | "hybrid" | "";
//   postType: "formal" | "informal" | "";
//   category: "tech" | "admin" | "ministry" | "graduate" | "";
//   deadline: string;
//   link: string;
// };

// export default function JobPostForm() {
//   const [formData, setFormData] = useState<FormState>({
//     title: "",
//     description: "",
//     requirements: "",
//     location: "",
//     jobType: "",
//     postType: "",
//     category: "",
//     deadline: "",
//     link: "",
//   });

//   const { session, loading: authLoading } = useUser();
//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     if (authLoading) {
//       // toast.warning("Checking session...");
//       <LoadingSpinner />;
//       return;
//     }

//     if (!session) {
//       toast.error("You must be logged in to post a job.");
//       setLoading(false);
//       return;
//     }

//     const is_remote =
//       formData.jobType === "remote" || formData.jobType === "hybrid";
//     const is_onsite =
//       formData.jobType === "onsite" || formData.jobType === "hybrid";

//     const payload = {
//       title: formData.title,
//       description: formData.description,
//       requirements: formData.requirements,
//       location: formData.location,
//       is_remote,
//       is_onsite,
//       job_type: formData.postType,
//       category: formData.category,
//       deadline: formData.deadline,
//       link: formData.link,
//     };

//     try {
//       const res = await fetch("/api/jobs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(payload),
//       });

//       const result = await res.json();
//       if (!res.ok) throw new Error(result.message);

//       toast.success("Job posted successfully!");

//       setFormData({
//         title: "",
//         description: "",
//         requirements: "",
//         location: "",
//         jobType: "",
//         postType: "",
//         category: "",
//         deadline: "",
//         link: "",
//       });
//     } catch (err: any) {
//       toast.error(err.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-6 max-w-4xl mx-auto bg-white px-6 py-8 border border-muted rounded-xl"
//     >
//       <div className="space-y-2">
//         <Label>Job Title</Label>
//         <Input
//           name="title"
//           required
//           value={formData.title}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="space-y-2">
//         <Label>Description</Label>
//         <Textarea
//           name="description"
//           required
//           value={formData.description}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="space-y-2">
//         <Label>Requirements</Label>
//         <Textarea
//           name="requirements"
//           required
//           value={formData.requirements}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="space-y-2">
//         <Label>Location</Label>
//         <Input
//           name="location"
//           required
//           value={formData.location}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="space-y-2">
//         <Label>Work Type</Label>
//         <Select
//           value={formData.jobType}
//           onValueChange={(val: FormState["jobType"]) =>
//             setFormData((prev) => ({ ...prev, jobType: val }))
//           }
//         >
//           <SelectTrigger>
//             <SelectValue placeholder="Select work type" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="onsite">Onsite</SelectItem>
//             <SelectItem value="remote">Remote</SelectItem>
//             <SelectItem value="hybrid">Hybrid</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       <div className="space-y-2">
//         <Label>Post Type</Label>
//         <Select
//           value={formData.postType}
//           onValueChange={(val: FormState["postType"]) =>
//             setFormData((prev) => ({ ...prev, postType: val }))
//           }
//         >
//           <SelectTrigger>
//             <SelectValue placeholder="Formal or Informal" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="formal">Formal</SelectItem>
//             <SelectItem value="informal">Informal</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       <div className="space-y-2">
//         <Label>Category</Label>
//         <Select
//           value={formData.category}
//           onValueChange={(val: FormState["category"]) =>
//             setFormData((prev) => ({ ...prev, category: val }))
//           }
//         >
//           <SelectTrigger>
//             <SelectValue placeholder="Select category" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="tech">Tech</SelectItem>
//             <SelectItem value="admin">Admin</SelectItem>
//             <SelectItem value="ministry">Ministry</SelectItem>
//             <SelectItem value="graduate">Graduate</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       <div className="space-y-2">
//         <Label>Application Link (optional)</Label>
//         <Input
//           name="link"
//           type="url"
//           value={formData.link}
//           onChange={handleChange}
//           placeholder="https://example.com"
//         />
//       </div>

//       <div className="space-y-2">
//         <Label>Application Deadline</Label>
//         <Input
//           name="deadline"
//           type="date"
//           required
//           value={formData.deadline}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <Button disabled={loading} type="submit">
//           {loading ? <LoadingSpinner /> : "Post Job"}
//           {/* {loading ? "Posting..." : "Post Job"} */}
//         </Button>
//       </div>
//     </form>
//   );
// }

"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";
import LoadingSpinner, { ButtonLoadingSpinner } from "./LoadingSpinner";

type FormState = {
  title: string;
  description: string;
  requirements: string;
  location: string;
  jobType: "onsite" | "remote" | "hybrid" | "";
  postType: "formal" | "informal" | "";
  category: "tech" | "admin" | "ministry" | "graduate" | "";
  deadline: string;
  link: string;
};

export default function JobPostForm() {
  const [formData, setFormData] = useState<FormState>({
    title: "",
    description: "",
    requirements: "",
    location: "",
    jobType: "",
    postType: "",
    category: "",
    deadline: "",
    link: "",
  });

  const { session, loading: authLoading } = useUser();
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (authLoading) return;

    if (!session) {
      toast.error("You must be logged in to post a job.");
      setLoading(false);
      return;
    }

    const payload = {
      title: formData.title,
      description: formData.description,
      requirements: formData.requirements,
      location: formData.location,
      is_remote: formData.jobType === "remote" || formData.jobType === "hybrid",
      is_onsite: formData.jobType === "onsite" || formData.jobType === "hybrid",
      job_type: formData.postType,
      category: formData.category,
      deadline: formData.deadline,
      link: formData.link,
    };

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);

      toast.success("Job posted successfully!");
      setFormData({
        title: "",
        description: "",
        requirements: "",
        location: "",
        jobType: "",
        postType: "",
        category: "",
        deadline: "",
        link: "",
      });
    } catch (err: any) {
      toast.error(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-300 rounded-xl px-6 py-10 max-w-5xl mx-auto space-y-10 "
    >
      <div className="space-y-1">
        <h2 className="text-3xl font-semibold text-foreground tracking-tight">
          Post a Job
        </h2>
        <p className="text-muted-foreground text-sm">
          Reach the right candidates - fast.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Job Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="e.g. Human Resource Manager"
            value={formData.title}
            onChange={handleChange}
            required
            className="placeholder:text-muted-foreground/60 text-sm h-10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            placeholder="e.g. Accra, Lapaz"
            value={formData.location}
            onChange={handleChange}
            required
            className="placeholder:text-muted-foreground/60 text-sm h-10"
          />
        </div>

        <div className="space-y-2">
          <Label>Job Type</Label>
          <Select
            value={formData.jobType}
            onValueChange={(val: FormState["jobType"]) =>
              setFormData((prev) => ({ ...prev, jobType: val }))
            }
          >
            <SelectTrigger className="h-10 text-sm">
              <SelectValue placeholder="Select job type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="onsite">Onsite</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Post Type</Label>
          <Select
            value={formData.postType}
            onValueChange={(val: FormState["postType"]) =>
              setFormData((prev) => ({ ...prev, postType: val }))
            }
          >
            <SelectTrigger className="h-10 text-sm">
              <SelectValue placeholder="Formal or Informal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="formal">Formal</SelectItem>
              <SelectItem value="informal">Informal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Category</Label>
          <Select
            value={formData.category}
            onValueChange={(val: FormState["category"]) =>
              setFormData((prev) => ({ ...prev, category: val }))
            }
          >
            <SelectTrigger className="h-10 text-sm">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tech">Tech</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="ministry">Ministry</SelectItem>
              <SelectItem value="graduate">Graduate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="deadline">Deadline</Label>
          <Input
            id="deadline"
            name="deadline"
            type="date"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="text-sm h-10"
          />
        </div>

        <div className="col-span-full space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Describe the role and expectations..."
            value={formData.description}
            onChange={handleChange}
            rows={5}
            required
            className="text-sm placeholder:text-muted-foreground/60"
          />
        </div>

        <div className="col-span-full space-y-2">
          <Label htmlFor="requirements">Requirements</Label>
          <Textarea
            id="requirements"
            name="requirements"
            placeholder="List key qualifications and experience..."
            value={formData.requirements}
            onChange={handleChange}
            rows={4}
            required
            className="text-sm placeholder:text-muted-foreground/60"
          />
        </div>

        <div className="col-span-full space-y-2">
          <Label htmlFor="link">External Link</Label>
          <Input
            id="link"
            name="link"
            type="url"
            placeholder="https://example.com"
            value={formData.link}
            onChange={handleChange}
            className="text-sm placeholder:text-muted-foreground/60 h-10"
          />
        </div>
      </div>

      <div className="pt-6">
        <Button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto h-11 px-6 text-base bg-blue-900 hover:bg-blue-800 text-white font-semibold"
        >
          {loading ? <ButtonLoadingSpinner /> : "Post Job"}
        </Button>
      </div>
    </form>
  );
}
