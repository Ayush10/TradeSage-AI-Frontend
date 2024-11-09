"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Share2 } from "lucide-react";
import PortfolioSummary from "@/components/reports/portfolio-summary";
import PerformanceAnalysis from "@/components/reports/performance-analysis";
import TransactionHistory from "@/components/reports/transaction-history";
import RiskAnalysis from "@/components/reports/risk-analysis";
import TradingPatterns from "@/components/reports/trading-patterns";
import MarketComparison from "@/components/reports/market-comparison";
import Projections from "@/components/reports/projections";

const timeframes = ["7D", "1M", "3M", "6M", "YTD", "1Y", "ALL"];

export default function ReportsPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1M");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
          <p className="text-muted-foreground">
            Comprehensive analysis of your trading activity
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {timeframes.map((timeframe) => (
          <Button
            key={timeframe}
            variant={selectedTimeframe === timeframe ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTimeframe(timeframe)}
          >
            {timeframe}
          </Button>
        ))}
      </div>

      <Tabs defaultValue="summary" className="space-y-4">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
          <TabsTrigger value="patterns">Trading Patterns</TabsTrigger>
          <TabsTrigger value="comparison">Market Comparison</TabsTrigger>
          <TabsTrigger value="projections">Projections</TabsTrigger>
        </TabsList>

        <TabsContent value="summary">
          <PortfolioSummary timeframe={selectedTimeframe} />
        </TabsContent>
        <TabsContent value="performance">
          <PerformanceAnalysis timeframe={selectedTimeframe} />
        </TabsContent>
        <TabsContent value="transactions">
          <TransactionHistory timeframe={selectedTimeframe} />
        </TabsContent>
        <TabsContent value="risk">
          <RiskAnalysis timeframe={selectedTimeframe} />
        </TabsContent>
        <TabsContent value="patterns">
          <TradingPatterns timeframe={selectedTimeframe} />
        </TabsContent>
        <TabsContent value="comparison">
          <MarketComparison timeframe={selectedTimeframe} />
        </TabsContent>
        <TabsContent value="projections">
          <Projections timeframe={selectedTimeframe} />
        </TabsContent>
      </Tabs>
    </div>
  );
}