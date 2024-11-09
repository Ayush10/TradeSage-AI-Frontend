interface AIInsightProps {
  title: string;
  description: string;
}

export default function AIInsight({ title, description }: AIInsightProps) {
  return (
    <div className="p-4 border border-border rounded-lg">
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}