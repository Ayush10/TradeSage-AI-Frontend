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
  LineChart, 
  TrendingUp, 
  Globe, 
  Award,
  Users,
  Clock,
  Laptop,
  Smartphone,
  Lock,
  BookOpen,
  Lightbulb,
  Target
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze market patterns and provide real-time insights",
    color: "primary"
  },
  {
    icon: LineChart,
    title: "Advanced Charting",
    description: "Professional-grade charting tools with multiple timeframes and indicators",
    color: "purple"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and multi-layer security protocols",
    color: "blue"
  },
  {
    icon: Globe,
    title: "Global Markets",
    description: "Trade across multiple markets and asset classes worldwide",
    color: "green"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Professional Trader",
    content: "TradeSage AI has completely transformed my trading strategy. The AI insights are incredibly accurate.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Portfolio Manager",
    content: "The risk management features have helped me protect and grow my portfolio consistently.",
    avatar: "MC"
  },
  {
    name: "Emma Davis",
    role: "Crypto Investor",
    content: "Best trading platform I've used. The real-time analytics are game-changing.",
    avatar: "ED"
  }
];

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/90 to-background/80">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span>TradeSage AI</span>
          </Link>
          <div className="flex items-center ml-auto gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5 animate-gradient-x" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
              Transform Your Trading with AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of traders who use TradeSage AI to make smarter, data-driven trading decisions. Experience the power of artificial intelligence in your trading journey.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/auth/register">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500">
                  Start Trading Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Watch Demo
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features for Modern Trading
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-background to-primary/5">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-${feature.color}/10`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}-500`} />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">$2B+</div>
              <p className="text-muted-foreground">Trading Volume</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">50K+</div>
              <p className="text-muted-foreground">Active Traders</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">99.9%</div>
              <p className="text-muted-foreground">Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-primary">24/7</div>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Professional Traders
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose TradeSage AI
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Insights</h3>
              <p className="text-muted-foreground">
                AI-powered analysis and recommendations based on market patterns
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-purple-500/10">
                  <Target className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Precision Trading</h3>
              <p className="text-muted-foreground">
                Advanced tools for precise entry and exit points
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-blue-500/10">
                  <Lock className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security and encryption
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <Card className="p-12 text-center bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders who trust TradeSage AI for their trading decisions. Get started with a free account today.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-t from-background to-transparent">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-muted-foreground hover:text-primary transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/documentation" className="text-muted-foreground hover:text-primary transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="text-muted-foreground hover:text-primary transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="text-muted-foreground hover:text-primary transition-colors">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-muted-foreground">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BrainCircuit className="h-6 w-6 text-primary" />
              <span className="font-semibold">TradeSage AI</span>
            </div>
            <p>&copy; {new Date().getFullYear()} TradeSage AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}