"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { QrCode } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddCrypto() {
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const [network, setNetwork] = useState("");

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Select Cryptocurrency</Label>
        <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
          <SelectTrigger>
            <SelectValue placeholder="Select cryptocurrency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
            <SelectItem value="eth">Ethereum (ETH)</SelectItem>
            <SelectItem value="usdt">Tether (USDT)</SelectItem>
            <SelectItem value="usdc">USD Coin (USDC)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {selectedCrypto && (
        <>
          <div className="space-y-2">
            <Label>Network</Label>
            <Select value={network} onValueChange={setNetwork}>
              <SelectTrigger>
                <SelectValue placeholder="Select network" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="btc">Bitcoin Network</SelectItem>
                <SelectItem value="eth">Ethereum Network</SelectItem>
                <SelectItem value="bsc">BNB Smart Chain</SelectItem>
                <SelectItem value="polygon">Polygon Network</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {network && (
            <div className="space-y-4">
              <div className="p-6 border rounded-lg flex flex-col items-center justify-center">
                <QrCode className="h-32 w-32 mb-4" />
                <p className="text-sm text-center text-muted-foreground">
                  Scan QR code or copy address below
                </p>
              </div>

              <div className="space-y-2">
                <Label>Deposit Address</Label>
                <div className="flex gap-2">
                  <Input
                    readOnly
                    value="0x1234...5678"
                    className="font-mono"
                  />
                  <Button variant="outline">Copy</Button>
                </div>
              </div>

              <div className="text-sm text-muted-foreground space-y-2">
                <p className="font-medium">Important:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Send only {selectedCrypto.toUpperCase()} to this address</li>
                  <li>Ensure you're using the correct network</li>
                  <li>Minimum deposit: 0.001 BTC</li>
                  <li>Funds will be available after 3 network confirmations</li>
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}