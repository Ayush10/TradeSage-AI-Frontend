"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function OptionsTrading() {
  const [optionType, setOptionType] = useState("call");
  const [contracts, setContracts] = useState("");

  return (
    <div className="grid grid-cols-[2fr,1fr] gap-6">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex gap-4">
            <Button 
              variant={optionType === "call" ? "default" : "outline"}
              onClick={() => setOptionType("call")}
              className="flex-1"
            >
              Call Options
            </Button>
            <Button 
              variant={optionType === "put" ? "default" : "outline"}
              onClick={() => setOptionType("put")}
              className="flex-1"
            >
              Put Options
            </Button>
          </div>

          <div className="space-y-2">
            <Label>Select Underlying</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose stock" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aapl">Apple (AAPL)</SelectItem>
                <SelectItem value="msft">Microsoft (MSFT)</SelectItem>
                <SelectItem value="googl">Google (GOOGL)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Expiration Date</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select expiration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1w">1 Week</SelectItem>
                <SelectItem value="2w">2 Weeks</SelectItem>
                <SelectItem value="1m">1 Month</SelectItem>
                <SelectItem value="3m">3 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Strike Price</Label>
            <Input type="number" placeholder="Enter strike price" />
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

          <div className="grid grid-cols-2 gap-4">
            <Button className="w-full bg-green-500 hover:bg-green-600">
              Buy to Open
            </Button>
            <Button className="w-full bg-red-500 hover:bg-red-600">
              Sell to Close
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
              <span className="font-medium capitalize">{optionType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Contracts</span>
              <span className="font-medium">{contracts || "0"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Premium</span>
              <span className="font-medium">$0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Cost</span>
              <span className="font-medium">$0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}