import { NextResponse } from "next/server";

// This is a mock AI response function
// Replace with actual AI integration (e.g., OpenAI API)
async function getAIResponse(message: string): Promise<string> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const responses = [
    "Based on current market trends, I recommend diversifying your portfolio with both large-cap and emerging cryptocurrencies.",
    "The technical analysis shows a potential breakout pattern. Consider setting stop-loss orders at key support levels.",
    "Market sentiment indicators suggest increased volatility. It might be wise to reduce leverage in current positions.",
    "Looking at the historical data, similar patterns have led to significant price movements within 48 hours.",
  ];

  return responses[Math.floor(Math.random() * responses.length)];
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    const response = await getAIResponse(message);

    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}