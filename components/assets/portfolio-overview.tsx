"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Clock } from "lucide-react";
import PieChart from "@/components/charts/pie-chart";

const metrics = [
  {
    title: "Total Value",
    value: "$247,892.89",
    change: "+12.5%",
    timeframe: "24h",
    positive: true,
  },
  {
    title: "Crypto Assets",
    value: "$145,678.45",
    change: "+8.2%",
    timeframe: "24h",
    positive: true,
  },
  {
    title: "Stock Assets",
    value: "$102,214.44",
    change: "-3.1%",
    timeframe: "24h",
    positive: false,
  },
];

const allocationData = [
  { name: "Bitcoin", value: 35 },
  { name: "Ethereum", value: 25 },
  { name: "Apple", value: 20 },
  { name: "Tesla", value: 15 },
  { name: "Others", value: 5 },
];

export default function PortfolioOverview() {
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-6">
      <div className="grid grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">{metric.title}</p>
                <p className="text-2xl font-semibold mt-2">{metric.value}</p>
              </div>
              <div
                className={`p-2 rounded-full ${
                  metric.positive ? "bg-green-500/10" : "bg-red-500/10"
                }`}
              >
                {metric.positive ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
              </div>
            </div>
            <div className="flex items-center mt-2">
              <span
                className={`text-sm ${
                  metric.positive ? "text-green-500" : "text-red-500"
                }`}
              >
                {metric.change}
              </span>
              <div className="flex items-center ml-2 text-sm text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {metric.timeframe}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Asset Allocation</h3>
        <div className="h-[200px]">
          <PieChart data={allocationData} />
        </div>
      </Card>
    </div>
  );
}