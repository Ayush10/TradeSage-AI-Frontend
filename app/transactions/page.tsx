"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TransactionMetrics from "@/components/transactions/transaction-metrics";
import TransactionTable from "@/components/transactions/transaction-table";
import TransactionFilters from "@/components/transactions/transaction-filters";
import { Download, Filter } from "lucide-react";

export default function TransactionsPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Transactions</h1>
          <p className="text-sm text-muted-foreground">
            View and manage your trading history
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <TransactionMetrics />

      {showFilters && <TransactionFilters />}

      <Card>
        <TransactionTable />
      </Card>
    </div>
  );
}