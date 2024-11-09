"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, AlertTriangle, TrendingUp } from "lucide-react";

const recommendations = [
  {
    type: "opportunity",
    title: "Investment Opportunity",
    description: "Consider increasing BTC position. Technical analysis shows potential breakout pattern.",
    icon: TrendingUp,
  },
  {
    type: "risk",
    title: "Risk Alert",
    description: "Portfolio heavily concentrated in tech sector. Consider diversifying.",
    icon: AlertTriangle,
  },
];

export default function AIRecommendations() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <BrainCircuit className="h-5 w-5" />
        <h3 className="text-lg font-medium">SageAI Insights</h3>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg space-y-2"
          >
            <div className="flex items-center gap-2">
              <rec.icon className={`h-4 w-4 ${
                rec.type === "opportunity" ? "text-green-500" : "text-yellow-500"
              }`} />
              <h4 className="font-medium">{rec.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              {rec.description}
            </p>
          </div>
        ))}
      </div>

      <Button className="w-full mt-4">
        View All Insights
      </Button>
    </Card>
  );
}