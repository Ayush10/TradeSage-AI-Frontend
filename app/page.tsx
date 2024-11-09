"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  BrainCircuit, 
  BarChart2, 
  Shield, 
  Zap, 
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Globe,
  Clock,
  Users,
  Award,
  LineChart,
  Laptop,
  Smartphone,
  TabletSmartphone
} from "lucide-react";
import { useState, useEffect } from "react";

// Mock trading data
const tradingPairs = [
  { pair: "BTC/USD", price: "62,734.21", change: "+2.5%", positive: true },
  { pair: "ETH/USD", price: "3,284.15", change: "-0.8%", positive: false },
  { pair: "SOL/USD", price: "128.45", change: "+4.2%", positive: true },
  { pair: "AAPL", price: "172.45", change: "+1.2%", positive: true },
  { pair: "TSLA", price: "245.67", change: "-2.3%", positive: false }
];

export default function LandingPage() {
  const [currentPrice, setCurrentPrice] = useState(62734.21);
  
  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrice(prev => {
        const change = (Math.random() - 0.5) * 100;
        return Math.round((prev + change) * 100) / 100;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/90 to-background/80">
      {/* Live Trading Ticker */}
      <div className="bg-primary/5 border-b border-primary/10 overflow-hidden py-2">
        <div className="container animate-marquee whitespace-nowrap">
          <div className="flex gap-8">
            {tradingPairs.map((pair, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="font-medium">{pair.pair}</span>
                <span>${pair.price}</span>
                <span className={pair.positive ? "text-green-500" : "text-red-500"}>
                  {pair.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center gap-2 font-semibold">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span>TradeSage AI</span>
          </div>
          <div className="flex items-center ml-auto gap-4">
            <Link href="/marketing">
              <Button variant="ghost">Learn More</Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16 relative">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 animate-gradient-x -z-10" />
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="p-3 rounded-full bg-primary/10 animate-pulse">
              <BrainCircuit className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
            TradeSage AI
          </h1>
          <p className="text-3xl font-medium mb-6">
            The Future of Intelligent Trading
          </p>
          <p className="text-xl text-muted-foreground mb-8">
            Advanced analytics, AI-powered insights, and real-time market data for smarter trading decisions
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="text-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500">
                Start Trading Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/marketing">
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Live Price Card */}
        <Card className="max-w-md mx-auto mb-16 p-6 bg-gradient-to-br from-background to-primary/5 border-primary/20">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary/10">
                <LineChart className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">BTC/USD Live</h3>
            </div>
            <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
              Live
            </span>
          </div>
          <div className="text-3xl font-bold mb-2">
            ${currentPrice.toLocaleString()}
          </div>
          <div className="flex items-center gap-2 text-green-500">
            <TrendingUp className="h-4 w-4" />
            <span>+2.5%</span>
            <span className="text-sm text-muted-foreground">24h</span>
          </div>
        </Card>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-background to-primary/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <BrainCircuit className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
            </div>
            <p className="text-muted-foreground">
              Advanced machine learning algorithms analyze market patterns and provide real-time trading recommendations
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-background to-purple-500/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-purple-500/10">
                <BarChart2 className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold">Advanced Analytics</h3>
            </div>
            <p className="text-muted-foreground">
              Comprehensive technical analysis tools and real-time market data visualization
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-background to-blue-500/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-500/10">
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold">Secure Trading</h3>
            </div>
            <p className="text-muted-foreground">
              Enterprise-grade security with advanced risk management and portfolio protection
            </p>
          </Card>
        </div>

        {/* Statistics Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">Trusted by Traders Worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-transparent">
              <div className="text-4xl font-bold text-primary mb-2">$2B+</div>
              <div className="text-sm text-muted-foreground">Trading Volume</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/5 to-transparent">
              <div className="text-4xl font-bold text-purple-500 mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Active Traders</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/5 to-transparent">
              <div className="text-4xl font-bold text-blue-500 mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-green-500/5 to-transparent">
              <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Trade Anywhere, Anytime</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Laptop className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Platform</h3>
              <p className="text-muted-foreground">
                Advanced trading features through our web interface
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-purple-500/10">
                  <Smartphone className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
              <p className="text-muted-foreground">
                Trade on the go with our mobile applications
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-blue-500/10">
                  <TabletSmartphone className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">API Access</h3>
              <p className="text-muted-foreground">
                Build custom trading solutions with our API
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of traders who trust TradeSage AI for their trading decisions
            </p>
            <Link href="/auth/register">
              <Button size="lg" className="text-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500">
                Create Free Account
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-20 bg-gradient-to-t from-background to-transparent">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-6 w-6 text-primary" />
              <span className="font-semibold">TradeSage AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} TradeSage AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}