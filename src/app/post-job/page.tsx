import JobPostForm from "@/components/JobPostForm";

export default function PostJobPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Post a New Job</h1>
      <JobPostForm />
    </div>
  );
}
