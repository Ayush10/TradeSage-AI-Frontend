"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { ArrowUpDown, Wallet, Bot, AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

interface TradeConfirmation {
  type: "buy" | "sell";
  asset: string;
  amount: number;
  price: number;
  total: number;
}

// Mock data for assets
const assets = {
  stocks: [
    { symbol: "AAPL", name: "Apple Inc.", price: 172.45 },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 425.22 },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 152.50 },
  ],
  crypto: [
    { symbol: "BTC", name: "Bitcoin", price: 62737.20 },
    { symbol: "ETH", name: "Ethereum", price: 3284.15 },
    { symbol: "SOL", name: "Solana", price: 128.45 },
  ],
  futures: [
    { symbol: "ES", name: "E-mini S&P 500", price: 4825.50 },
    { symbol: "NQ", name: "E-mini NASDAQ", price: 17235.25 },
    { symbol: "CL", name: "Crude Oil", price: 82.45 },
  ],
  options: [
    { symbol: "AAPL240621C180", name: "AAPL $180 Call Jun-21", price: 5.45 },
    { symbol: "SPY240621P470", name: "SPY $470 Put Jun-21", price: 3.25 },
    { symbol: "TSLA240621C300", name: "TSLA $300 Call Jun-21", price: 8.75 },
  ],
};

// Mock AI recommendations
const aiRecommendations = {
  stocks: {
    risk: 65,
    suggestion: "Consider accumulating tech stocks. Market showing bullish patterns.",
    trades: [
      { symbol: "NVDA", action: "Buy", confidence: 85 },
      { symbol: "AMD", action: "Buy", confidence: 78 },
      { symbol: "INTC", action: "Sell", confidence: 72 },
    ]
  },
  crypto: {
    risk: 75,
    suggestion: "Crypto market showing strong momentum. Consider increasing exposure.",
    trades: [
      { symbol: "BTC", action: "Buy", confidence: 82 },
      { symbol: "ETH", action: "Buy", confidence: 75 },
      { symbol: "XRP", action: "Sell", confidence: 68 },
    ]
  },
  futures: {
    risk: 70,
    suggestion: "Commodities showing potential for upward movement.",
    trades: [
      { symbol: "GC", action: "Buy", confidence: 76 },
      { symbol: "SI", action: "Buy", confidence: 72 },
      { symbol: "CL", action: "Sell", confidence: 65 },
    ]
  },
  options: {
    risk: 85,
    suggestion: "High IV environment. Consider selling premium.",
    trades: [
      { symbol: "AAPL Calls", action: "Buy", confidence: 70 },
      { symbol: "SPY Puts", action: "Sell", confidence: 75 },
      { symbol: "QQQ Calls", action: "Buy", confidence: 68 },
    ]
  }
};

export default function Trading() {
  const [assetType, setAssetType] = useState<keyof typeof assets>("stocks");
  const [selectedAsset, setSelectedAsset] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [amountType, setAmountType] = useState<"dollars" | "units">("dollars");
  const [aiTrading, setAiTrading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingTrade, setPendingTrade] = useState<TradeConfirmation | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleTrade = (type: "buy" | "sell") => {
    if (!selectedAsset || !amount || amount <= 0) {
      toast.error("Please select an asset and enter a valid amount");
      return;
    }

    const selectedAssetData = assets[assetType].find(a => a.symbol === selectedAsset);
    if (!selectedAssetData) return;

    const total = amountType === "dollars" ? amount : amount * selectedAssetData.price;
    setPendingTrade({
      type,
      asset: selectedAsset,
      amount,
      price: selectedAssetData.price,
      total
    });
    setShowConfirmation(true);
  };

  const executeTrade = async () => {
    if (!pendingTrade) return;
    
    setProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const success = Math.random() > 0.2;
    
    if (success) {
      toast.success(
        `Successfully ${pendingTrade.type === "buy" ? "bought" : "sold"} ${pendingTrade.asset}`,
        {
          description: `Total ${pendingTrade.type === "buy" ? "cost" : "received"}: $${pendingTrade.total.toLocaleString()}`
        }
      );
      setAmount(0);
    } else {
      toast.error("Trade failed", {
        description: "There was an issue processing your trade. Please try again."
      });
    }

    setProcessing(false);
    setShowConfirmation(false);
    setPendingTrade(null);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium">Trade</h3>
            <div className="flex items-center space-x-2">
              <Label htmlFor="ai-trading">AI Trading</Label>
              <Switch 
                id="ai-trading" 
                checked={aiTrading}
                onCheckedChange={setAiTrading}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Asset Type</Label>
              <Select value={assetType} onValueChange={(value: keyof typeof assets) => {
                setAssetType(value);
                setSelectedAsset("");
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select asset type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stocks">Stocks</SelectItem>
                  <SelectItem value="crypto">Cryptocurrency</SelectItem>
                  <SelectItem value="futures">Futures</SelectItem>
                  <SelectItem value="options">Options</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Select {assetType.charAt(0).toUpperCase() + assetType.slice(1)}</Label>
              <Select value={selectedAsset} onValueChange={setSelectedAsset}>
                <SelectTrigger>
                  <SelectValue placeholder={`Select ${assetType}`} />
                </SelectTrigger>
                <SelectContent>
                  {assets[assetType].map((asset) => (
                    <SelectItem key={asset.symbol} value={asset.symbol}>
                      {asset.name} (${asset.price.toLocaleString()})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Amount</Label>
                <div className="space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setAmountType("dollars")}
                    className={amountType === "dollars" ? "bg-primary text-primary-foreground" : ""}
                  >
                    USD
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setAmountType("units")}
                    className={amountType === "units" ? "bg-primary text-primary-foreground" : ""}
                  >
                    Units
                  </Button>
                </div>
              </div>
              <Input
                type="number"
                value={amount || ""}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder={amountType === "dollars" ? "Enter USD amount" : "Enter units"}
              />
            </div>

            {aiTrading && (
              <div className="space-y-2">
                <Label>AI Recommended Risk Level</Label>
                <Slider
                  defaultValue={[aiRecommendations[assetType].risk]}
                  max={100}
                  step={1}
                  className="cursor-not-allowed"
                  disabled
                />
                <p className="text-sm text-muted-foreground mt-2">
                  {aiRecommendations[assetType].suggestion}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <Button 
                className="w-full bg-green-500 hover:bg-green-600"
                onClick={() => handleTrade("buy")}
              >
                Buy
              </Button>
              <Button 
                className="w-full bg-red-500 hover:bg-red-600"
                onClick={() => handleTrade("sell")}
              >
                Sell
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">AI Insights</h3>
          <div className="space-y-4">
            {aiRecommendations[assetType].trades.map((signal, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-3 ${
                  signal.action === "Buy" ? "text-green-500" : "text-red-500"
                }`}
              >
                <Bot className="h-5 w-5" />
                <div>
                  <p className="font-medium">
                    {signal.action} {signal.symbol}
                  </p>
                  <p className="text-sm">
                    Confidence: {signal.confidence}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Order Book</h3>
          <div className="space-y-2">
            {[
              { price: 41278, amount: 0.5, type: "sell" },
              { price: 41276, amount: 1.2, type: "sell" },
              { price: 41275, amount: 0.8, type: "buy" },
              { price: 41273, amount: 2.1, type: "buy" },
            ].map((order, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <span
                  className={
                    order.type === "buy" ? "text-green-500" : "text-red-500"
                  }
                >
                  ${order.price.toLocaleString()}
                </span>
                <span className="text-muted-foreground">{order.amount} BTC</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Recent Trades</h3>
          <div className="space-y-2">
            {[
              { price: 41278, amount: 0.5, time: "12:45:30" },
              { price: 41276, amount: 1.2, time: "12:45:28" },
              { price: 41275, amount: 0.8, time: "12:45:25" },
              { price: 41273, amount: 2.1, time: "12:45:20" },
            ].map((trade, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <span>${trade.price.toLocaleString()}</span>
                <span className="text-muted-foreground">{trade.amount} BTC</span>
                <span className="text-sm text-muted-foreground">
                  {trade.time}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Trade</DialogTitle>
            <DialogDescription>
              Please review your trade details before confirming.
            </DialogDescription>
          </DialogHeader>

          {pendingTrade && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-muted-foreground">Type:</span>
                <span className={pendingTrade.type === "buy" ? "text-green-500" : "text-red-500"}>
                  {pendingTrade.type.toUpperCase()}
                </span>
                
                <span className="text-muted-foreground">Asset:</span>
                <span>{pendingTrade.asset}</span>
                
                <span className="text-muted-foreground">Amount:</span>
                <span>{pendingTrade.amount} {amountType === "dollars" ? "USD" : "units"}</span>
                
                <span className="text-muted-foreground">Price:</span>
                <span>${pendingTrade.price.toLocaleString()}</span>
                
                <span className="text-muted-foreground">Total:</span>
                <span>${pendingTrade.total.toLocaleString()}</span>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  This trade cannot be reversed once confirmed.
                </AlertDescription>
              </Alert>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowConfirmation(false)}
              disabled={processing}
            >
              Cancel
            </Button>
            <Button
              onClick={executeTrade}
              disabled={processing}
              className={pendingTrade?.type === "buy" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}
            >
              {processing ? "Processing..." : "Confirm Trade"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}