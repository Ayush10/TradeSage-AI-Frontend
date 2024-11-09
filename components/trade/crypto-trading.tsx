"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CryptoTrading() {
  const [orderType, setOrderType] = useState("market");
  const [amount, setAmount] = useState("");

  return (
    <div className="grid grid-cols-[2fr,1fr] gap-6">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex gap-4">
            <Button 
              variant={orderType === "market" ? "default" : "outline"}
              onClick={() => setOrderType("market")}
              className="flex-1"
            >
              Market
            </Button>
            <Button 
              variant={orderType === "limit" ? "default" : "outline"}
              onClick={() => setOrderType("limit")}
              className="flex-1"
            >
              Limit
            </Button>
          </div>

          <div className="space-y-2">
            <Label>Select Asset</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose cryptocurrency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                <SelectItem value="sol">Solana (SOL)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Amount</Label>
            <Input 
              type="number" 
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {orderType === "limit" && (
            <div className="space-y-2">
              <Label>Limit Price</Label>
              <Input type="number" placeholder="Enter price" />
            </div>
          )}

          <div className="space-y-2">
            <Label>Risk Level</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
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
      </div>

      <div className="space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Type</span>
              <span className="font-medium capitalize">{orderType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-medium">{amount || "0.00"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Estimated Total</span>
              <span className="font-medium">$0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}