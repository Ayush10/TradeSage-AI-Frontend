"use client";

import { Card } from "@/components/ui/card";
import { BarChart } from "@/components/charts/bar-chart";

interface TradingPatternsProps {
  timeframe: string;
}

const tradingHours = [
  { name: "00:00", value: 15 },
  { name: "04:00", value: 28 },
  { name: "08:00", value: 45 },
  { name: "12:00", value: 65 },
  { name: "16:00", value: 52 },
  { name: "20:00", value: 30 },
];

const successPatterns = [
  { name: "Mon", value: 75 },
  { name: "Tue", value: 68 },
  { name: "Wed", value: 82 },
  { name: "Thu", value: 71 },
  { name: "Fri", value: 65 },
];

export default function TradingPatterns({ timeframe }: TradingPatternsProps) {
  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Trading Hours Distribution</h3>
        <div className="h-[300px]">
          <BarChart data={tradingHours} />
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Success Rate by Day</h3>
        <div className="h-[300px]">
          <BarChart data={successPatterns} />
        </div>
      </Card>
    </div>
  );
}