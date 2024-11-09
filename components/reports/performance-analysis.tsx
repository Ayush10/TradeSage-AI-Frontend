"use client";

import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/charts/line-chart";
import { BarChart } from "@/components/charts/bar-chart";

interface PerformanceAnalysisProps {
  timeframe: string;
}

const performanceData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 4200 },
  { name: "Mar", value: 4800 },
  { name: "Apr", value: 4600 },
  { name: "May", value: 5200 },
  { name: "Jun", value: 5800 },
];

const sectorData = [
  { name: "Technology", value: 35 },
  { name: "Finance", value: 25 },
  { name: "Healthcare", value: 20 },
  { name: "Energy", value: 15 },
  { name: "Others", value: 5 },
];

export default function PerformanceAnalysis({ timeframe }: PerformanceAnalysisProps) {
  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Trade Performance by Asset</h3>
        <div className="h-[300px]">
          <LineChart data={performanceData} />
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Sector Performance</h3>
        <div className="h-[300px]">
          <BarChart data={sectorData} />
        </div>
      </Card>
    </div>
  );
}