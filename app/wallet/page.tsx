"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddFunds from "@/components/wallet/add-funds";
import AddCrypto from "@/components/wallet/add-crypto";
import WalletBalance from "@/components/wallet/wallet-balance";

export default function WalletPage() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Wallet</h1>
        <p className="text-sm text-muted-foreground">
          Manage your funds and cryptocurrencies
        </p>
      </div>

      <div className="grid grid-cols-[2fr,1fr] gap-6">
        <div className="space-y-6">
          <WalletBalance />
          
          <Card className="p-6">
            <Tabs defaultValue="fiat" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="fiat">Add Funds</TabsTrigger>
                <TabsTrigger value="crypto">Add Crypto</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fiat">
                <AddFunds />
              </TabsContent>
              
              <TabsContent value="crypto">
                <AddCrypto />
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-medium mb-4">Recent Transactions</h2>
            <div className="space-y-4">
              {/* Add recent transactions list here */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}