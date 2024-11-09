"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface CandlestickData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandlestickChartProps {
  data: CandlestickData[];
}

export function CandlestickChart({ data }: CandlestickChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis 
          dataKey="time"
          stroke="#888"
          tick={{ fill: '#888' }}
          axisLine={{ stroke: '#888' }}
        />
        <YAxis
          stroke="#888"
          tick={{ fill: '#888' }}
          axisLine={{ stroke: '#888' }}
          domain={['auto', 'auto']}
        />
        <Tooltip
          contentStyle={{
            background: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '6px'
          }}
        />
        <Bar
          dataKey="high"
          fill="transparent"
          stroke="#22c55e"
        />
        <Bar
          dataKey="low"
          fill="transparent"
          stroke="#ef4444"
        />
        <ReferenceLine y={0} stroke="#666" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CandlestickChart;