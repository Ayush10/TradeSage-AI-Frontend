"use client";

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface LineChartProps {
  data: Array<{
    time: string;
    value: number;
  }>;
  strokeColor?: string;
}

export function LineChart({ data, strokeColor = "hsl(var(--primary))" }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis 
          dataKey="time"
          stroke="#888"
          tick={{ fill: '#888' }}
          axisLine={{ stroke: '#888' }}
          tickFormatter={(time) => new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        />
        <YAxis
          stroke="#888"
          tick={{ fill: '#888' }}
          axisLine={{ stroke: '#888' }}
          domain={['auto', 'auto']}
          tickFormatter={(value) => `$${value.toLocaleString()}`}
        />
        <Tooltip
          contentStyle={{
            background: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '6px'
          }}
          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
          labelFormatter={(label) => new Date(label).toLocaleString()}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={strokeColor}
          strokeWidth={2}
          dot={false}
          animationDuration={300}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}

export default LineChart;