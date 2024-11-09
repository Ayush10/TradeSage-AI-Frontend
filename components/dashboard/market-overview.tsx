"use client";

import { Card } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Asset {
  symbol: string;
  name: string;
  price: string;
  change: number;
  volume: string;
}

const assets: Record<string, Asset[]> = {
  crypto: [
    { symbol: "BTC", name: "Bitcoin", price: "$41,278", change: 2.5, volume: "$28.5B" },
    { symbol: "ETH", name: "Ethereum", price: "$2,284", change: -1.2, volume: "$15.2B" },
    { symbol: "SOL", name: "Solana", price: "$98.45", change: 5.8, volume: "$4.8B" },
  ],
  stocks: [
    { symbol: "AAPL", name: "Apple Inc.", price: "$172.45", change: 0.8, volume: "$12.4B" },
    { symbol: "TSLA", name: "Tesla", price: "$245.67", change: -2.3, volume: "$8.9B" },
    { symbol: "NVDA", name: "NVIDIA", price: "$875.32", change: 4.2, volume: "$15.7B" },
  ],
};

interface AssetListProps {
  assets: Asset[];
}

function AssetList({ assets }: AssetListProps) {
  return (
    <div className="space-y-4">
      {assets.map((asset) => (
        <div
          key={asset.symbol}
          className="flex items-center justify-between p-4 border border-border rounded-lg"
        >
          <div>
            <p className="font-medium">{asset.symbol}</p>
            <p className="text-sm text-muted-foreground">{asset.name}</p>
          </div>
          <div className="text-right">
            <p className="font-medium">{asset.price}</p>
            <div className="flex items-center space-x-1">
              {asset.change >= 0 ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span
                className={asset.change >= 0 ? "text-green-500" : "text-red-500"}
              >
                {Math.abs(asset.change)}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MarketOverview() {
  return (
    <>
      <TabsContent value="crypto" className="mt-0">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-6">Cryptocurrency Markets</h3>
          <AssetList assets={assets.crypto} />
        </Card>
      </TabsContent>
      <TabsContent value="stocks" className="mt-0">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-6">Stock Markets</h3>
          <AssetList assets={assets.stocks} />
        </Card>
      </TabsContent>
    </>
  );
}