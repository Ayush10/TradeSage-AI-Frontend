"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Filter, PieChart, TrendingUp, TrendingDown } from "lucide-react";
import PortfolioOverview from "@/components/assets/portfolio-overview";
import AssetTable from "@/components/assets/asset-table";
import AssetFilters from "@/components/assets/asset-filters";
import AssetAllocation from "@/components/assets/asset-allocation";
import AIRecommendations from "@/components/assets/ai-recommendations";

const assetTypes = ["All", "Crypto", "Stocks", "Options", "Futures"];

export default function AssetsPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Assets</h1>
          <p className="text-sm text-muted-foreground">
            Manage and track your investment portfolio
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <PortfolioOverview />

      {showFilters && <AssetFilters />}

      <div className="grid grid-cols-[2fr,1fr] gap-6">
        <div className="space-y-6">
          <Card className="p-6">
            <Tabs defaultValue="All" className="space-y-6">
              <TabsList>
                {assetTypes.map((type) => (
                  <TabsTrigger key={type} value={type}>
                    {type}
                  </TabsTrigger>
                ))}
              </TabsList>

              {assetTypes.map((type) => (
                <TabsContent key={type} value={type}>
                  <AssetTable assetType={type} />
                </TabsContent>
              ))}
            </Tabs>
          </Card>
        </div>

        <div className="space-y-6">
          <AssetAllocation />
          <AIRecommendations />
        </div>
      </div>
    </div>
  );
}