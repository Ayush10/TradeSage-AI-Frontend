"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Transaction {
  id: string;
  asset: string;
  type: "buy" | "sell";
  amount: string;
  price: string;
  total: string;
  status: "completed" | "pending" | "failed";
  date: string;
  currentValue: string;
  profitLoss: string;
  profitLossPercentage: string;
}

interface TransactionDetailsProps {
  transaction: Transaction;
  onClose: () => void;
}

export default function TransactionDetails({
  transaction,
  onClose,
}: TransactionDetailsProps) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Transaction Details</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh]">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Transaction ID</span>
              <span className="font-medium">{transaction.id}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Asset</span>
              <span className="font-medium">{transaction.asset}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Type</span>
              <Badge
                variant="outline"
                className={
                  transaction.type === "buy" ? "text-green-500" : "text-red-500"
                }
              >
                {transaction.type.toUpperCase()}
              </Badge>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Amount</span>
              <span className="font-medium">{transaction.amount}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Price</span>
              <span className="font-medium">{transaction.price}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="font-medium">{transaction.total}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge
                variant="outline"
                className={
                  transaction.status === "completed"
                    ? "text-green-500"
                    : transaction.status === "pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                }
              >
                {transaction.status}
              </Badge>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Date</span>
              <span className="font-medium">
                {new Date(transaction.date).toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Current Value</span>
              <span className="font-medium">{transaction.currentValue}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Profit/Loss</span>
              <span
                className={`font-medium ${
                  transaction.profitLoss.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {transaction.profitLoss} ({transaction.profitLossPercentage})
              </span>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}