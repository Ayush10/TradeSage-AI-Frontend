"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, 
  Bot,
  User,
  RefreshCw,
  Copy,
  CheckCheck
} from "lucide-react";
import { toast } from "sonner";
import MessageInput from "@/components/chat/message-input";
import MessageAttachment from "@/components/chat/message-attachment";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  attachments?: File[];
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Hello! I'm SageAI, your intelligent trading assistant. I can help you with:\n\n• Market analysis and trends\n• Trading strategies\n• Risk management\n• Portfolio optimization\n• Technical analysis\n\nHow can I assist you today?",
    timestamp: new Date(),
  },
];

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (content: string, attachments: File[]) => {
    if ((!content && attachments.length === 0) || loading) return;

    const userMessage: Message = { 
      role: "user", 
      content,
      timestamp: new Date(),
      attachments
    };
    
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const aiResponses = [
        "Based on current market analysis, I recommend diversifying your portfolio with a mix of large-cap cryptocurrencies and emerging altcoins. The market is showing signs of increased volatility.",
        "Looking at the technical indicators, we're seeing a potential breakout pattern forming in BTC/USD. Consider setting stop-loss orders at key support levels around $58,000.",
        "The RSI indicator is showing overbought conditions in several major altcoins. It might be wise to take some profits and maintain higher cash reserves for potential dips.",
        "I've analyzed your trading patterns, and I notice you tend to exit positions too early during uptrends. Consider using trailing stop losses to maximize your gains.",
        "Market sentiment indicators are currently neutral with a slight bullish bias. Historical data suggests similar patterns have led to significant price movements within 48-72 hours."
      ];

      const aiMessage: Message = {
        role: "assistant",
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      toast.error("Failed to get response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (index: number, content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
    toast.success("Message copied to clipboard");
  };

  const handleReset = () => {
    setMessages(initialMessages);
    toast.success("Conversation reset");
  };

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <Card className="h-[calc(100vh-2rem)] flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6" />
            <h1 className="text-2xl font-semibold">SageAI Chat</h1>
          </div>
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleReset}
            title="Reset conversation"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex gap-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                
                <div className="flex flex-col gap-1 max-w-[80%]">
                  <div
                    className={`relative group rounded-lg p-4 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.content && (
                      <div className="whitespace-pre-wrap mb-2">{message.content}</div>
                    )}
                    {message.attachments?.map((file, index) => (
                      <MessageAttachment key={index} file={file} />
                    ))}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleCopy(i, message.content)}
                    >
                      {copied === i ? (
                        <CheckCheck className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>

                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        <MessageInput onSend={handleSend} loading={loading} />
      </Card>
    </div>
  );
}