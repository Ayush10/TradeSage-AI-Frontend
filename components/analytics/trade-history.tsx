interface Trade {
  date: string;
  pair: string;
  type: string;
  amount: string;
  price: string;
  profit: string;
}

interface TradeHistoryProps {
  trades: Trade[];
}

export default function TradeHistory({ trades }: TradeHistoryProps) {
  return (
    <div className="space-y-4">
      {trades.map((trade, i) => (
        <div key={i} className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <p className="font-medium">{trade.pair}</p>
            <p className="text-sm text-muted-foreground">{trade.date}</p>
          </div>
          <div className="text-right">
            <p className={trade.profit.startsWith("+") ? "text-green-500" : "text-red-500"}>
              {trade.profit}
            </p>
            <p className="text-sm text-muted-foreground">${trade.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}