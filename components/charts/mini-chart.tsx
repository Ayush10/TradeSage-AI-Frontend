"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";

interface MiniChartProps {
  data: { value: number }[];
  trend: number;
}

export default function MiniChart({ data, trend }: MiniChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={trend >= 0 ? "#22c55e" : "#ef4444"}
          strokeWidth={1.5}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}