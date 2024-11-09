"use client";

import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/charts/line-chart";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface PortfolioSummaryProps {
  timeframe: string;
}

const portfolioData = [
  { name: "Jan", value: 50000 },
  { name: "Feb", value: 52000 },
  { name: "Mar", value: 55000 },
  { name: "Apr", value: 54000 },
  { name: "May", value: 58000 },
  { name: "Jun", value: 62000 },
];

const topAssets = [
  { name: "Bitcoin", return: 32.5, amount: "₿ 0.45" },
  { name: "Ethereum", return: 28.2, amount: "Ξ 4.2" },
  { name: "Apple Inc.", return: 25.8, amount: "15 shares" },
  { name: "Tesla", return: 22.4, amount: "12 shares" },
];

export default function PortfolioSummary({ timeframe }: PortfolioSummaryProps) {
  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-medium">Portfolio Value</h3>
            <p className="text-3xl font-bold mt-2">$62,000.00</p>
            <div className="flex items-center mt-1 text-green-500">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+24% ({timeframe})</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total Profit/Loss</p>
            <p className="text-2xl font-semibold text-green-500">+$12,000.00</p>
          </div>
        </div>
        <div className="h-[300px]">
          <LineChart data={portfolioData} />
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Top Performing Assets</h3>
        <div className="space-y-4">
          {topAssets.map((asset) => (
            <div
              key={asset.name}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <p className="font-medium">{asset.name}</p>
                <p className="text-sm text-muted-foreground">{asset.amount}</p>
              </div>
              <div className="text-right">
                <Badge variant="outline" className="text-green-500">
                  +{asset.return}%
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}