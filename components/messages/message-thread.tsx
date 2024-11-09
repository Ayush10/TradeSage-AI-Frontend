"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface Message {
  id: number;
  content: string;
  timestamp: string;
  sender: "user" | "support";
}

interface Conversation {
  id: number;
  name: string;
  avatar: string;
}

interface MessageThreadProps {
  conversation: Conversation;
}

const mockMessages: Message[] = [
  {
    id: 1,
    content: "Hello! How can I help you today?",
    timestamp: "10:30 AM",
    sender: "support",
  },
  {
    id: 2,
    content: "I have a question about my recent trade.",
    timestamp: "10:31 AM",
    sender: "user",
  },
  {
    id: 3,
    content: "Of course! Please provide me with the trade details.",
    timestamp: "10:32 AM",
    sender: "support",
  },
];

export default function MessageThread({ conversation }: MessageThreadProps) {
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: messages.length + 1,
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "user",
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="h-[calc(100vh-14rem)] flex flex-col">
      <div className="flex items-center gap-3 p-4 border-b">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
          {conversation.avatar}
        </div>
        <h3 className="font-medium">{conversation.name}</h3>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p>{message.content}</p>
                <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t flex gap-2">
        <Input
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}