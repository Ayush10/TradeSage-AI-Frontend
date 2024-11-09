"use client";

import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/charts/line-chart";
import { Progress } from "@/components/ui/progress";

interface RiskAnalysisProps {
  timeframe: string;
}

const riskMetrics = [
  { name: "Portfolio Volatility", value: 65, description: "Medium-High Risk" },
  { name: "Diversification Score", value: 82, description: "Well Diversified" },
  { name: "Market Correlation", value: 45, description: "Low Correlation" },
  { name: "Risk-Adjusted Return", value: 78, description: "Strong Performance" },
];

const volatilityData = [
  { name: "Jan", value: 45 },
  { name: "Feb", value: 52 },
  { name: "Mar", value: 48 },
  { name: "Apr", value: 65 },
  { name: "May", value: 58 },
  { name: "Jun", value: 63 },
];

export default function RiskAnalysis({ timeframe }: RiskAnalysisProps) {
  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-6">Risk Metrics</h3>
        <div className="grid gap-6">
          {riskMetrics.map((metric) => (
            <div key={metric.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{metric.name}</span>
                <span className="text-muted-foreground">{metric.description}</span>
              </div>
              <Progress value={metric.value} className="h-2" />
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Portfolio Volatility</h3>
        <div className="h-[300px]">
          <LineChart data={volatilityData} />
        </div>
      </Card>
    </div>
  );
}