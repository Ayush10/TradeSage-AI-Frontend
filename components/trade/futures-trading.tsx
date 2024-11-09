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

export default function FuturesTrading() {
  const [orderType, setOrderType] = useState("market");
  const [contracts, setContracts] = useState("");

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
            <Label>Select Future Contract</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose contract" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">E-mini S&P 500 (ES)</SelectItem>
                <SelectItem value="nq">E-mini NASDAQ 100 (NQ)</SelectItem>
                <SelectItem value="cl">Crude Oil (CL)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Expiration Month</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select expiration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mar24">March 2024</SelectItem>
                <SelectItem value="jun24">June 2024</SelectItem>
                <SelectItem value="sep24">September 2024</SelectItem>
                <SelectItem value="dec24">December 2024</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Number of Contracts</Label>
            <Input 
              type="number" 
              placeholder="0"
              value={contracts}
              onChange={(e) => setContracts(e.target.value)}
            />
          </div>

          {orderType === "limit" && (
            <div className="space-y-2">
              <Label>Limit Price</Label>
              <Input type="number" placeholder="Enter price" />
            </div>
          )}

          <div className="space-y-2">
            <Label>Leverage</Label>
            <Slider defaultValue={[1]} min={1} max={20} step={1} />
            <div className="text-sm text-muted-foreground">
              Current leverage: 1x
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button className="w-full bg-green-500 hover:bg-green-600">
              Long
            </Button>
            <Button className="w-full bg-red-500 hover:bg-red-600">
              Short
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
              <span className="text-muted-foreground">Contracts</span>
              <span className="font-medium">{contracts || "0"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Initial Margin</span>
              <span className="font-medium">$0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Maintenance Margin</span>
              <span className="font-medium">$0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}