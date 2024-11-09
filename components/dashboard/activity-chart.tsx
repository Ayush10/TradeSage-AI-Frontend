"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LineChart } from "@/components/charts/line-chart";
import { CandlestickChart } from "@/components/charts/candlestick-chart";
import { cn } from "@/lib/utils";

const timeframes = ["Live", "1D", "1W", "1M", "3M", "6M", "YTD", "1Y", "5Y", "All"];

const calculatePortfolioValue = (data: any[]) => {
  if (!data.length) return 0;
  return data[data.length - 1].value;
};

const calculateProfitLoss = (data: any[]) => {
  if (data.length < 2) return 0;
  const firstValue = data[0].value;
  const lastValue = data[data.length - 1].value;
  return ((lastValue - firstValue) / firstValue) * 100;
};

const generateMockData = (timeframe: string) => {
  const now = Date.now();
  const points = timeframe === "Live" ? 20 : 50;
  const interval = timeframe === "Live" ? 3600000 : 86400000;
  const baseValue = 247892.89;
  const volatility = timeframe === "Live" ? 0.001 : 0.005;

  let currentValue = baseValue;
  const lineData = Array(points).fill(0).map((_, i) => {
    currentValue = currentValue * (1 + (Math.random() - 0.5) * volatility);
    return {
      time: new Date(now - (points - i) * interval).toISOString(),
      value: currentValue
    };
  });

  const candlestickData = Array(points).fill(0).map((_, i) => {
    const open = currentValue * (1 + (Math.random() - 0.5) * volatility);
    const close = currentValue * (1 + (Math.random() - 0.5) * volatility);
    const high = Math.max(open, close) * (1 + Math.random() * volatility);
    const low = Math.min(open, close) * (1 - Math.random() * volatility);
    
    return {
      time: new Date(now - (points - i) * interval).toISOString(),
      open,
      high,
      low,
      close
    };
  });

  return { line: lineData, candlestick: candlestickData };
};

export default function ActivityChart() {
  const [chartType, setChartType] = useState<"line" | "candlestick">("line");
  const [selectedTimeframe, setSelectedTimeframe] = useState("1D");
  const [data, setData] = useState(generateMockData(selectedTimeframe));
  const [portfolioValue, setPortfolioValue] = useState(calculatePortfolioValue(data.line));
  const [profitLoss, setProfitLoss] = useState(calculateProfitLoss(data.line));

  useEffect(() => {
    const newData = generateMockData(selectedTimeframe);
    setData(newData);
    setPortfolioValue(calculatePortfolioValue(newData.line));
    setProfitLoss(calculateProfitLoss(newData.line));
    
    if (selectedTimeframe === "Live") {
      const interval = setInterval(() => {
        setData(prev => {
          const lastLineValue = prev.line[prev.line.length - 1].value;
          const newValue = lastLineValue * (1 + (Math.random() - 0.5) * 0.002);
          
          const newLineData = [...prev.line.slice(1), {
            time: new Date().toISOString(),
            value: newValue
          }];
          
          const lastCandlestick = prev.candlestick[prev.candlestick.length - 1];
          const newCandlestick = {
            time: new Date().toISOString(),
            open: lastCandlestick.close,
            high: Math.max(lastCandlestick.close, newValue) * 1.001,
            low: Math.min(lastCandlestick.close, newValue) * 0.999,
            close: newValue
          };
          
          const newCandlestickData = [...prev.candlestick.slice(1), newCandlestick];
          
          const newData = { line: newLineData, candlestick: newCandlestickData };
          setPortfolioValue(calculatePortfolioValue(newLineData));
          setProfitLoss(calculateProfitLoss(newLineData));
          
          return newData;
        });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [selectedTimeframe]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant={chartType === "line" ? "default" : "outline"}
            onClick={() => setChartType("line")}
            size="sm"
          >
            Line
          </Button>
          <Button
            variant={chartType === "candlestick" ? "default" : "outline"}
            onClick={() => setChartType("candlestick")}
            size="sm"
          >
            Candlestick
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className={cn(
            "text-sm font-medium",
            profitLoss >= 0 ? "text-green-500" : "text-red-500"
          )}>
            {profitLoss >= 0 ? "+" : ""}{profitLoss.toFixed(2)}%
          </span>
          <span className="text-2xl font-bold">
            ${portfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>

      <div className="h-[300px] w-full">
        {chartType === "line" ? (
          <LineChart 
            data={data.line} 
            strokeColor={profitLoss >= 0 ? "var(--chart-green)" : "var(--chart-red)"}
          />
        ) : (
          <CandlestickChart data={data.candlestick} />
        )}
      </div>

      <div className="flex gap-2 overflow-x-auto py-2">
        {timeframes.map((tf) => (
          <Button
            key={tf}
            variant={selectedTimeframe === tf ? "default" : "outline"}
            onClick={() => setSelectedTimeframe(tf)}
            size="sm"
          >
            {tf}
          </Button>
        ))}
      </div>
    </div>
  );
}