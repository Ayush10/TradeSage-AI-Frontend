"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import MessageList from "@/components/messages/message-list";
import MessageThread from "@/components/messages/message-thread";
import { Search } from "lucide-react";
import { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "System Support",
    lastMessage: "Your ticket has been resolved.",
    timestamp: "10:30 AM",
    unread: 2,
    avatar: "🛡️",
  },
  {
    id: 2,
    name: "Trade Support",
    lastMessage: "Here's the information about your recent trade.",
    timestamp: "9:45 AM",
    unread: 0,
    avatar: "💱",
  },
  {
    id: 3,
    name: "Account Manager",
    lastMessage: "Your account verification is complete.",
    timestamp: "Yesterday",
    unread: 1,
    avatar: "👤",
  },
  {
    id: 4,
    name: "Sage AI Assistant",
    lastMessage: "I've analyzed your portfolio performance.",
    timestamp: "Yesterday",
    unread: 0,
    avatar: "🤖",
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Messages</h1>
        <p className="text-sm text-muted-foreground">
          Communicate with support and receive important updates
        </p>
      </div>

      <div className="grid grid-cols-[350px,1fr] gap-6">
        <Card className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search messages..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <ScrollArea className="h-[calc(100vh-14rem)]">
            <MessageList
              conversations={conversations.filter(conv =>
                conv.name.toLowerCase().includes(searchQuery.toLowerCase())
              )}
              selectedId={selectedConversation}
              onSelect={setSelectedConversation}
            />
          </ScrollArea>
        </Card>

        <Card className="p-4">
          {selectedConversation ? (
            <MessageThread
              conversation={conversations.find(c => c.id === selectedConversation)!}
            />
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              Select a conversation to start messaging
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}