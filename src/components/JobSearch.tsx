"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function JobSearch() {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    categories: [] as string[],
    sort: "desc",
  });

  const [jobs, setJobs] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  const handleChange = (field: string, value: string | string[]) => {
    setFilters({ ...filters, [field]: value });
    setPage(1);
  };

  const toggleCategory = (cat: string) => {
    setFilters((prev) => {
      const newCategories = prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat];
      return { ...prev, categories: newCategories };
    });
  };

  const fetchJobs = async () => {
    const params = new URLSearchParams();
    if (filters.keyword) params.set("keyword", filters.keyword);
    if (filters.location) params.set("location", filters.location);
    filters.categories.forEach((cat) => params.append("category", cat));
    params.set("sort", filters.sort);
    params.set("limit", String(limit));
    params.set("offset", String((page - 1) * limit));

    const res = await fetch(`/api/jobs?${params.toString()}`);
    const { data } = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, [filters, page]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8 bg-white">
      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Input
          placeholder="Keyword"
          className="h-11 px-4 rounded-md border border-muted text-sm"
          onChange={(e) => handleChange("keyword", e.target.value)}
        />
        <Input
          placeholder="Location"
          className="h-11 px-4 rounded-md border border-muted text-sm"
          onChange={(e) => handleChange("location", e.target.value)}
        />
        <Select
          defaultValue={filters.sort}
          onValueChange={(val) => handleChange("sort", val)}
        >
          <SelectTrigger className="h-11 px-4 rounded-md border border-muted text-sm">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desc">Newest First</SelectItem>
            <SelectItem value="asc">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Category Checkboxes */}
      <div className="flex flex-wrap gap-3">
        {["tech", "admin", "ministry"].map((cat) => (
          <label
            key={cat}
            className="flex items-center gap-2 px-3 py-2 rounded-md border border-muted text-sm hover:bg-muted/30 transition"
          >
            <Checkbox
              checked={filters.categories.includes(cat)}
              onCheckedChange={() => toggleCategory(cat)}
            />
            <span className="capitalize">{cat}</span>
          </label>
        ))}
      </div>

      {/* Search Button */}
      <div>
        <Button
          className="w-full sm:w-auto h-11 px-6 text-sm font-medium rounded-md"
          onClick={fetchJobs}
        >
          Search Jobs
        </Button>
      </div>

      {/* Job Listings */}
      <div className="border divide-y rounded-lg overflow-hidden">
        {jobs.map((job) => (
          <div key={job.id} className="p-5 hover:bg-muted/40 transition-colors">
            <h3 className="text-lg font-medium text-foreground">{job.title}</h3>
            <p className="text-sm text-muted-foreground mb-1">
              {job.location} • {job.category}
            </p>
            <p className="text-sm text-foreground leading-relaxed">
              {job.description}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center pt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">Page {page}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
