"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, ArrowUpRight, ArrowDownLeft } from "lucide-react";

export default function WalletBalance() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Wallet className="h-8 w-8" />
          <div>
            <h2 className="text-2xl font-semibold">$247,892.89</h2>
            <p className="text-sm text-muted-foreground">Total Balance</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button>
            <ArrowDownLeft className="mr-2 h-4 w-4" />
            Deposit
          </Button>
          <Button variant="outline">
            <ArrowUpRight className="mr-2 h-4 w-4" />
            Withdraw
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-muted">
          <p className="text-sm text-muted-foreground">Available Balance</p>
          <p className="text-lg font-medium">$125,456.78</p>
        </div>
        <div className="p-4 rounded-lg bg-muted">
          <p className="text-sm text-muted-foreground">In Orders</p>
          <p className="text-lg font-medium">$52,123.45</p>
        </div>
        <div className="p-4 rounded-lg bg-muted">
          <p className="text-sm text-muted-foreground">Crypto Value</p>
          <p className="text-lg font-medium">$70,312.66</p>
        </div>
      </div>
    </Card>
  );
}