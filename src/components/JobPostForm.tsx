// src/components/JobPostForm.tsx
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
import { toast } from "sonner"; // Optional toast UI if using shadcn

export default function JobPostForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    jobType: "",
    deadline: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);

      toast.success("Job posted successfully!");
      setFormData({
        title: "",
        description: "",
        location: "",
        jobType: "",
        deadline: "",
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
      className="space-y-6 max-w-4xl mx-auto bg-white px-6 py-8 border border-muted rounded-xl"
    >
      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground">Job Title</Label>
        <Input
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          className="h-11 px-4 rounded-md border text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground">
          Description
        </Label>
        <Textarea
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
          className="min-h-[120px] px-4 py-3 rounded-md border text-sm resize-y"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground">Location</Label>
        <Input
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="h-11 px-4 rounded-md border text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-foreground">Job Type</Label>
        <Select
          value={formData.jobType}
          onValueChange={(val) => setFormData({ ...formData, jobType: val })}
        >
          <SelectTrigger className="h-11 px-4 rounded-md border text-sm">
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
        <Label className="text-sm font-medium text-foreground">
          Application Deadline
        </Label>
        <Input
          name="deadline"
          type="date"
          value={formData.deadline}
          onChange={handleChange}
          className="h-11 px-4 rounded-md border text-sm"
        />
      </div>

      <div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto h-11 px-6 text-sm font-medium rounded-md"
        >
          {loading ? "Posting..." : "Post Job"}
        </Button>
      </div>
    </form>
  );
}
