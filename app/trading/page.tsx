"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { ArrowUpDown, Wallet, Bot } from "lucide-react";

export default function Trading() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium">Trade</h3>
            <div className="flex items-center space-x-2">
              <Label htmlFor="ai-trading">AI Trading</Label>
              <Switch id="ai-trading" />
            </div>
          </div>

          <Tabs defaultValue="market" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="market">Market</TabsTrigger>
              <TabsTrigger value="limit">Limit</TabsTrigger>
            </TabsList>
            <TabsContent value="market">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Asset</Label>
                  <Input placeholder="BTC/USD" />
                </div>
                <div className="space-y-2">
                  <Label>Amount</Label>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Risk Level</Label>
                  <Slider
                    defaultValue={[50]}
                    max={100}
                    step={1}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    Buy
                  </Button>
                  <Button className="w-full bg-red-500 hover:bg-red-600">
                    Sell
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="limit">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Asset</Label>
                  <Input placeholder="BTC/USD" />
                </div>
                <div className="space-y-2">
                  <Label>Price</Label>
                  <Input type="number" placeholder="Enter limit price" />
                </div>
                <div className="space-y-2">
                  <Label>Amount</Label>
                  <Input type="number" placeholder="Enter amount" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    Buy Limit
                  </Button>
                  <Button className="w-full bg-red-500 hover:bg-red-600">
                    Sell Limit
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">AI Insights</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-green-500">
              <Bot className="h-5 w-5" />
              <p>Strong buy signal detected for BTC/USD</p>
            </div>
            <div className="flex items-center space-x-3 text-yellow-500">
              <Bot className="h-5 w-5" />
              <p>Market volatility is increasing</p>
            </div>
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
    </div>
  );
}