"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface AssetTableProps {
  assetType: string;
}

const assets = {
  Crypto: [
    { name: "Bitcoin", symbol: "BTC", amount: "0.45 BTC", totalPaid: "$41,278.16", status: "Active", value: "$62,737.20", change: "+2.5%", avgPrice: "$40,123.45", unrealizedPL: "+$15,234.56" },
    { name: "Ethereum", symbol: "ETH", amount: "4.2 ETH", totalPaid: "$2,461.16", status: "Active", value: "$2,284.20", change: "-1.2%", avgPrice: "$2,350.80", unrealizedPL: "-$234.12" },
  ],
  Stocks: [
    { name: "Apple Inc.", symbol: "AAPL", amount: "25 shares", totalPaid: "$172.45", status: "Active", value: "$175.20", change: "+0.8%", avgPrice: "$170.25", unrealizedPL: "+$123.75" },
    { name: "Tesla", symbol: "TSLA", amount: "10 shares", totalPaid: "$245.67", status: "Active", value: "$240.30", change: "-2.3%", avgPrice: "$242.50", unrealizedPL: "-$22.00" },
  ],
};

export default function AssetTable({ assetType }: AssetTableProps) {
  const filteredAssets = assetType === "All" 
    ? Object.values(assets).flat()
    : assets[assetType as keyof typeof assets] || [];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Asset</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>24h Change</TableHead>
          <TableHead>Avg Price</TableHead>
          <TableHead>Unrealized P/L</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredAssets.map((asset) => (
          <TableRow key={asset.symbol}>
            <TableCell>
              <div>
                <p className="font-medium">{asset.name}</p>
                <p className="text-sm text-muted-foreground">{asset.symbol}</p>
              </div>
            </TableCell>
            <TableCell>{asset.amount}</TableCell>
            <TableCell>{asset.value}</TableCell>
            <TableCell>
              <div className="flex items-center">
                {asset.change.startsWith("+") ? (
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={asset.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                  {asset.change}
                </span>
              </div>
            </TableCell>
            <TableCell>{asset.avgPrice}</TableCell>
            <TableCell className={asset.unrealizedPL.startsWith("+") ? "text-green-500" : "text-red-500"}>
              {asset.unrealizedPL}
            </TableCell>
            <TableCell>
              <Badge variant="outline" className="bg-green-500/10 text-green-500">
                {asset.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}