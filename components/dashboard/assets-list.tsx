"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useRouter } from "next/navigation";

const assets = {
  crypto: [
    { name: "Bitcoin", symbol: "BTC", price: "$62,737.16", volume: "0.45 BTC", trend: 2.5 },
    { name: "Ethereum", symbol: "ETH", price: "$2,461.16", volume: "4.2 ETH", trend: 0.66 },
    { name: "BNB", symbol: "BNB", price: "$571.60", volume: "15.8 BNB", trend: -0.59 },
    { name: "Solana", symbol: "SOL", price: "$98.45", volume: "45.6 SOL", trend: 3.8 },
    { name: "Cardano", symbol: "ADA", price: "$0.87", volume: "250 ADA", trend: -1.2 }
  ],
  stocks: [
    { name: "Apple Inc.", symbol: "AAPL", price: "$172.45", volume: "25 shares", trend: 1.2 },
    { name: "Tesla", symbol: "TSLA", price: "$245.67", volume: "10 shares", trend: -2.3 },
    { name: "NVIDIA", symbol: "NVDA", price: "$875.32", volume: "8 shares", trend: 3.8 },
    { name: "Microsoft", symbol: "MSFT", price: "$425.22", volume: "15 shares", trend: 0.9 },
    { name: "Amazon", symbol: "AMZN", price: "$178.35", volume: "20 shares", trend: -0.7 }
  ],
  options: [
    { name: "AAPL 175c", symbol: "AAPL240419C175", price: "$3.45", volume: "10 contracts", trend: 5.2 },
    { name: "SPY 500p", symbol: "SPY240419P500", price: "$2.30", volume: "5 contracts", trend: -3.1 },
    { name: "TSLA 300c", symbol: "TSLA240419C300", price: "$4.80", volume: "3 contracts", trend: 2.8 },
    { name: "NVDA 800p", symbol: "NVDA240419P800", price: "$5.60", volume: "2 contracts", trend: -1.5 },
    { name: "AMD 150c", symbol: "AMD240419C150", price: "$2.15", volume: "8 contracts", trend: 4.2 }
  ],
  futures: [
    { name: "ES", symbol: "ES1!", price: "$4,825.50", volume: "2 contracts", trend: 0.8 },
    { name: "NQ", symbol: "NQ1!", price: "$17,235.25", volume: "1 contract", trend: 1.1 },
    { name: "CL", symbol: "CL1!", price: "$82.45", volume: "3 contracts", trend: -0.9 },
    { name: "GC", symbol: "GC1!", price: "$2,185.30", volume: "1 contract", trend: 0.3 },
    { name: "SI", symbol: "SI1!", price: "$24.85", volume: "5 contracts", trend: -0.5 }
  ]
};

export default function AssetsList() {
  const router = useRouter();

  return (
    <Card className="p-6">
      <Tabs defaultValue="crypto">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
          <TabsTrigger value="options">Options</TabsTrigger>
          <TabsTrigger value="futures">Futures</TabsTrigger>
        </TabsList>

        {Object.entries(assets).map(([type, items]) => (
          <TabsContent key={type} value={type} className="space-y-4">
            {items.map((asset) => (
              <div key={asset.symbol} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{asset.name}</p>
                  <p className="text-sm text-muted-foreground">{asset.volume}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{asset.price}</p>
                  <div className="flex items-center justify-end gap-1">
                    {asset.trend >= 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <span
                      className={asset.trend >= 0 ? "text-green-500" : "text-red-500"}
                    >
                      {Math.abs(asset.trend)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => router.push("/trade")}
              className="w-full text-center text-sm text-primary hover:underline mt-4"
            >
              See More
            </button>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
}