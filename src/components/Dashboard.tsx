// src/components/Dashboard.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockStats = [
  { label: "Total Jobs Posted", value: 12 },
  { label: "Applications Received", value: 38 },
  { label: "Active Employers", value: 5 },
];

export default function Dashboard() {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 p-4 max-w-5xl mx-auto">
      {mockStats.map((stat) => (
        <Card key={stat.label}>
          <CardHeader>
            <CardTitle>{stat.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
