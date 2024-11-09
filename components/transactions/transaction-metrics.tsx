"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Activity, TrendingUp } from "lucide-react";

const metrics = [
  {
    title: "Total Transactions",
    value: "1,284",
    change: "+12.5%",
    icon: Activity,
    positive: true,
  },
  {
    title: "Buy Orders",
    value: "745",
    change: "+8.2%",
    icon: ArrowUpRight,
    positive: true,
  },
  {
    title: "Sell Orders",
    value: "539",
    change: "-3.1%",
    icon: ArrowDownRight,
    positive: false,
  },
  {
    title: "Success Rate",
    value: "92.4%",
    change: "+5.4%",
    icon: TrendingUp,
    positive: true,
  },
];

export default function TransactionMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <metric.icon
                className={`h-4 w-4 ${
                  metric.positive ? "text-green-500" : "text-red-500"
                }`}
              />
            </div>
          </div>
          <p
            className={`text-sm mt-2 ${
              metric.positive ? "text-green-500" : "text-red-500"
            }`}
          >
            {metric.change} from last month
          </p>
        </Card>
      ))}
    </div>
  );
}