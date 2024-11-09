"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Transaction {
  asset: string;
  type: string;
  amount: string;
  totalPaid: string;
  status: string;
  value: string;
  date: string;
  currentValue: string;
}

const transactions: Transaction[] = [
  {
    asset: "BTC/USD",
    type: "Buy",
    amount: "0.0234",
    totalPaid: "$1,456.23",
    status: "Completed",
    value: "$247.89",
    date: "2024-03-20",
    currentValue: "$1,489.45",
  },
  {
    asset: "ETH/USD",
    type: "Sell",
    amount: "1.5",
    totalPaid: "$3,567.89",
    status: "Completed",
    value: "-$123.45",
    date: "2024-03-19",
    currentValue: "$3,444.44",
  },
  {
    asset: "SOL/USD",
    type: "Buy",
    amount: "12.5",
    totalPaid: "$2,345.67",
    status: "Completed",
    value: "$345.67",
    date: "2024-03-18",
    currentValue: "$2,691.34",
  },
];

export default function TransactionList() {
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Transactions</h3>
        <Button 
          variant="ghost" 
          className="text-sm"
          onClick={() => router.push("/transactions")}
        >
          More Transactions →
        </Button>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-muted-foreground border-b">
              <th className="text-left pb-3">Crypto/Stock</th>
              <th className="text-left pb-3">Amount</th>
              <th className="text-left pb-3">Total Paid</th>
              <th className="text-left pb-3">Status</th>
              <th className="text-left pb-3">Value</th>
              <th className="text-left pb-3">Date</th>
              <th className="text-right pb-3">Current Value</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i} className="border-b last:border-0">
                <td className="py-3">{tx.asset}</td>
                <td className="py-3">{tx.amount}</td>
                <td className="py-3">{tx.totalPaid}</td>
                <td className="py-3">
                  <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs">
                    {tx.status}
                  </span>
                </td>
                <td className={`py-3 ${tx.value.startsWith("-") ? "text-red-500" : "text-green-500"}`}>
                  {tx.value}
                </td>
                <td className="py-3">{tx.date}</td>
                <td className="py-3 text-right">{tx.currentValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}