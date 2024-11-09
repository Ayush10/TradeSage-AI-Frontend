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

export default function AddFunds() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <div className="relative">
          <span className="absolute left-3 top-2.5">$</span>
          <Input
            id="amount"
            type="number"
            placeholder="0.00"
            className="pl-7"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Payment Method</Label>
        <Select value={paymentMethod} onValueChange={setPaymentMethod}>
          <SelectTrigger>
            <SelectValue placeholder="Select payment method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bank">Bank Transfer (ACH)</SelectItem>
            <SelectItem value="wire">Wire Transfer</SelectItem>
            <SelectItem value="card">Credit/Debit Card</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full">Continue</Button>

      <div className="text-sm text-muted-foreground">
        <p>Processing Times:</p>
        <ul className="list-disc list-inside mt-2">
          <li>ACH Transfer: 3-5 business days</li>
          <li>Wire Transfer: Same day if received by 2 PM ET</li>
          <li>Card Payment: Instant</li>
        </ul>
      </div>
    </div>
  );
}