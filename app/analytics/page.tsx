"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, PieChart, BarChart2 } from "lucide-react";
import dynamic from "next/dynamic";
import StatsCard from "@/components/analytics/stats-card";
import TradeHistory from "@/components/analytics/trade-history";
import AIInsight from "@/components/analytics/ai-insight";

const LineChart = dynamic(() => import("@/components/charts/line-chart"), { ssr: false });

const chartData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const tradeHistory = [
  { date: "2024-03-20", pair: "BTC/USD", type: "buy", amount: "+2.4", price: "41,278", profit: "+$520" },
  { date: "2024-03-19", pair: "ETH/USD", type: "sell", amount: "-18.2", price: "2,284", profit: "-$120" },
  { date: "2024-03-19", pair: "SOL/USD", type: "buy", amount: "+145", price: "98.45", profit: "+$890" },
];

const aiInsights = [
  {
    title: "Market Sentiment Analysis",
    description: "AI detects bullish momentum in BTC/USD with 87% confidence. Consider increasing long positions."
  },
  {
    title: "Risk Assessment",
    description: "Current market volatility is moderate. Recommended position size: 2-3% of portfolio."
  }
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Win Rate"
          value="76%"
          icon={TrendingUp}
          iconClassName="text-green-500"
        />
        <StatsCard
          title="Loss Rate"
          value="24%"
          icon={TrendingDown}
          iconClassName="text-red-500"
        />
        <StatsCard
          title="ROI"
          value="32.5%"
          icon={PieChart}
          iconClassName="text-primary"
        />
        <StatsCard
          title="Total Trades"
          value="1,284"
          icon={BarChart2}
          iconClassName="text-primary"
        />
      </div>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="trades">Trade History</TabsTrigger>
          <TabsTrigger value="ai">AI Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="performance">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Performance Overview</h3>
            <div className="h-[400px]">
              <LineChart data={chartData} />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="trades">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Recent Trades</h3>
            <TradeHistory trades={tradeHistory} />
          </Card>
        </TabsContent>

        <TabsContent value="ai">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">AI Trading Insights</h3>
            <div className="space-y-4">
              {aiInsights.map((insight, index) => (
                <AIInsight
                  key={index}
                  title={insight.title}
                  description={insight.description}
                />
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}