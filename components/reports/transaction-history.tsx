"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TransactionHistoryProps {
  timeframe: string;
}

const transactions = [
  {
    id: 1,
    asset: "Bitcoin",
    type: "Buy",
    amount: "0.25 BTC",
    price: "$45,000",
    value: "$11,250",
    date: "2024-03-20",
    status: "Completed",
  },
  {
    id: 2,
    asset: "Ethereum",
    type: "Sell",
    amount: "2.5 ETH",
    price: "$3,200",
    value: "$8,000",
    date: "2024-03-19",
    status: "Completed",
  },
];

export default function TransactionHistory({ timeframe }: TransactionHistoryProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-6">Transaction History</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell>{tx.asset}</TableCell>
              <TableCell>{tx.type}</TableCell>
              <TableCell>{tx.amount}</TableCell>
              <TableCell>{tx.price}</TableCell>
              <TableCell>{tx.value}</TableCell>
              <TableCell>{tx.date}</TableCell>
              <TableCell>{tx.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}