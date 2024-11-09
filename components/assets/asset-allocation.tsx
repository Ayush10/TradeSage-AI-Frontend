"use client";

import { Card } from "@/components/ui/card";
import { PieChart } from "@/components/charts/pie-chart";

const allocationData = [
  { name: "Bitcoin", value: 35 },
  { name: "Ethereum", value: 25 },
  { name: "Apple", value: 20 },
  { name: "Tesla", value: 15 },
  { name: "Others", value: 5 },
];

export default function AssetAllocation() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-6">Asset Allocation</h3>
      <div className="h-[300px]">
        <PieChart data={allocationData} />
      </div>
      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Diversification Score</span>
          <span className="font-medium">8.5/10</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Risk Level</span>
          <span className="font-medium">Moderate</span>
        </div>
      </div>
    </Card>
  );
}