"use client";

import { Card } from "@/components/ui/card";
import ActivityChart from "@/components/dashboard/activity-chart";
import AssetsList from "@/components/dashboard/assets-list";
import TransactionList from "@/components/dashboard/transaction-list";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-[2fr,1fr] gap-6">
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">My Activity</h3>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Portfolio Value</p>
                <p className="text-2xl font-semibold">$247,892.89</p>
              </div>
            </div>
            <ActivityChart />
          </Card>
          <TransactionList />
        </div>
        <AssetsList />
      </div>
    </div>
  );
}