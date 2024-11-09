"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TransactionDetails from "./transaction-details";

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

const transactions: Transaction[] = [
  {
    id: "TX123456",
    asset: "Bitcoin (BTC)",
    type: "buy",
    amount: "0.25 BTC",
    price: "$45,000",
    total: "$11,250",
    status: "completed",
    date: "2024-03-20 14:30:00",
    currentValue: "$11,875",
    profitLoss: "+$625",
    profitLossPercentage: "+5.56%",
  },
  {
    id: "TX123457",
    asset: "Ethereum (ETH)",
    type: "sell",
    amount: "2.5 ETH",
    price: "$3,200",
    total: "$8,000",
    status: "completed",
    date: "2024-03-19 10:15:00",
    currentValue: "$7,800",
    profitLoss: "-$200",
    profitLossPercentage: "-2.50%",
  },
  // Add more mock transactions as needed
];

export default function TransactionTable() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(
    null
  );

  return (
    <div>
      <div className="relative overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Asset</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Current Value</TableHead>
              <TableHead>Profit/Loss</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow
                key={transaction.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => setSelectedTransaction(transaction)}
              >
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{transaction.asset}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      transaction.type === "buy"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {transaction.type.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.price}</TableCell>
                <TableCell>{transaction.total}</TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell>{new Date(transaction.date).toLocaleString()}</TableCell>
                <TableCell>{transaction.currentValue}</TableCell>
                <TableCell
                  className={
                    transaction.profitLoss.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {transaction.profitLoss}
                  <span className="text-xs ml-1">
                    ({transaction.profitLossPercentage})
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between p-4">
        <div className="text-sm text-muted-foreground">
          Showing 1-10 of 100 transactions
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {selectedTransaction && (
        <TransactionDetails
          transaction={selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
        />
      )}
    </div>
  );
}