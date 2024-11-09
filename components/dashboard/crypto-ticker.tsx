"use client";

import { Card } from "@/components/ui/card";

const cryptoData = [
  { symbol: "BTC", price: "62,737.16", change: "+0.04" },
  { symbol: "ETH", price: "2,461.16", change: "+0.66" },
  { symbol: "BNB", price: "571.6", change: "-0.59" },
];

export default function CryptoTicker() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-2">
      <div className="container mx-auto flex justify-between">
        {cryptoData.map((crypto) => (
          <div key={crypto.symbol} className="flex items-center space-x-2">
            <span className="font-medium">{crypto.symbol}</span>
            <span>${crypto.price}</span>
            <span
              className={
                crypto.change.startsWith("+")
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              ({crypto.change}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}