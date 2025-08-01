"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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

type Props = {
  formData: FormState;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSelectChange: (field: keyof FormState, value: string) => void;
};

export default function JobCardFormFields({
  formData,
  onChange,
  onSelectChange,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="title">Job Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="e.g. Human Resource Manager"
          value={formData.title}
          onChange={onChange}
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
          onChange={onChange}
          required
          className="placeholder:text-muted-foreground/60 text-sm h-10"
        />
      </div>

      <div className="space-y-2">
        <Label>Job Type</Label>
        <Select
          value={formData.jobType}
          onValueChange={(val) => onSelectChange("jobType", val)}
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
          onValueChange={(val) => onSelectChange("postType", val)}
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
          onValueChange={(val) => onSelectChange("category", val)}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          className="text-sm placeholder:text-muted-foreground/60 h-10"
        />
      </div>
    </div>
  );
}
