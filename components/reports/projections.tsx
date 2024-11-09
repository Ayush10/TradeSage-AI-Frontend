"use client";

import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/charts/line-chart";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

interface ProjectionsProps {
  timeframe: string;
}

const projectionData = [
  { name: "Current", value: 50000 },
  { name: "3M", value: 54000 },
  { name: "6M", value: 58000 },
  { name: "9M", value: 63000 },
  { name: "12M", value: 68000 },
];

export default function Projections({ timeframe }: ProjectionsProps) {
  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Portfolio Value Projection</h3>
        <Alert className="mb-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            Projections are based on historical performance and market conditions.
            Actual results may vary.
          </AlertDescription>
        </Alert>
        <div className="h-[300px]">
          <LineChart data={projectionData} />
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Investment Recommendations</h3>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Portfolio Rebalancing</h4>
            <p className="text-sm text-muted-foreground">
              Consider increasing technology sector allocation by 5% to optimize returns.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Risk Management</h4>
            <p className="text-sm text-muted-foreground">
              Implement stop-loss orders at -10% for volatile assets to protect gains.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Diversification</h4>
            <p className="text-sm text-muted-foreground">
              Add exposure to emerging markets to reduce portfolio correlation.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}