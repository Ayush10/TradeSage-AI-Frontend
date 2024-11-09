"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import NotificationList from "@/components/notifications/notification-list";
import { Bell, Shield, UserCircle, LineChart, BrainCircuit } from "lucide-react";

const notifications = {
  system: [
    {
      id: 1,
      title: "System Maintenance",
      message: "Scheduled maintenance in 2 hours. Trading will not be affected.",
      timestamp: "2024-03-21T10:00:00Z",
      read: false,
    },
    {
      id: 2,
      title: "Security Update",
      message: "New security features have been added to your account.",
      timestamp: "2024-03-21T08:30:00Z",
      read: true,
    },
  ],
  account: [
    {
      id: 3,
      title: "Login Attempt",
      message: "New login detected from United States.",
      timestamp: "2024-03-21T09:15:00Z",
      read: false,
    },
    {
      id: 4,
      title: "KYC Verified",
      message: "Your identity verification is complete.",
      timestamp: "2024-03-20T15:45:00Z",
      read: true,
    },
  ],
  trade: [
    {
      id: 5,
      title: "Order Executed",
      message: "BTC/USD buy order executed at $63,450",
      timestamp: "2024-03-21T09:45:00Z",
      read: false,
    },
    {
      id: 6,
      title: "Stop Loss Triggered",
      message: "ETH/USD stop loss triggered at $3,250",
      timestamp: "2024-03-21T07:30:00Z",
      read: true,
    },
  ],
  ai: [
    {
      id: 7,
      title: "AI Market Analysis",
      message: "Bullish pattern detected for BTC/USD",
      timestamp: "2024-03-21T10:15:00Z",
      read: false,
    },
    {
      id: 8,
      title: "Portfolio Recommendation",
      message: "Consider rebalancing your portfolio",
      timestamp: "2024-03-21T06:00:00Z",
      read: true,
    },
  ],
};

const categories = [
  { id: "all", label: "All", icon: Bell },
  { id: "system", label: "System", icon: Shield },
  { id: "account", label: "Account", icon: UserCircle },
  { id: "trade", label: "Trade", icon: LineChart },
  { id: "ai", label: "Sage AI", icon: BrainCircuit },
];

export default function NotificationsPage() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Notifications</h1>
        <p className="text-sm text-muted-foreground">
          Stay updated with important alerts and information
        </p>
      </div>

      <Card className="p-6">
        <Tabs defaultValue="all" className="h-[calc(100vh-12rem)]">
          <TabsList className="grid grid-cols-5 mb-6">
            {categories.map(({ id, label, icon: Icon }) => (
              <TabsTrigger key={id} value={id} className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          <ScrollArea className="h-[calc(100%-4rem)]">
            <TabsContent value="all">
              <NotificationList
                notifications={Object.values(notifications).flat()}
              />
            </TabsContent>

            {Object.entries(notifications).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <NotificationList notifications={items} />
              </TabsContent>
            ))}
          </ScrollArea>
        </Tabs>
      </Card>
    </div>
  );
}