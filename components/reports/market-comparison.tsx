"use client";

import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/charts/line-chart";
import { Badge } from "@/components/ui/badge";

interface MarketComparisonProps {
  timeframe: string;
}

const performanceData = [
  { name: "Jan", portfolio: 4000, benchmark: 3800 },
  { name: "Feb", portfolio: 4200, benchmark: 3900 },
  { name: "Mar", portfolio: 4800, benchmark: 4100 },
  { name: "Apr", portfolio: 4600, benchmark: 4300 },
  { name: "May", portfolio: 5200, benchmark: 4500 },
  { name: "Jun", portfolio: 5800, benchmark: 4800 },
];

export default function MarketComparison({ timeframe }: MarketComparisonProps) {
  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium">Performance vs Benchmark</h3>
          <div className="flex gap-2">
            <Badge variant="outline">Portfolio</Badge>
            <Badge variant="outline">S&P 500</Badge>
          </div>
        </div>
        <div className="h-[400px]">
          <LineChart data={performanceData} />
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Key Metrics</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">Alpha</p>
            <p className="text-2xl font-semibold">3.2%</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">Beta</p>
            <p className="text-2xl font-semibold">1.15</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">R-Squared</p>
            <p className="text-2xl font-semibold">0.85</p>
          </div>
        </div>
      </Card>
    </div>
  );
}