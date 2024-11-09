import { NextResponse } from "next/server";
import { validateToken } from "@/lib/auth";

export async function GET(request: Request) {
  try {
    const token = request.headers.get("Authorization")?.split(" ")[1];
    
    if (!token) {
      return NextResponse.json({ message: "No token provided" }, { status: 401 });
    }

    const user = await validateToken(token);
    
    if (!user) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { message: "Token verification failed" },
      { status: 401 }
    );
  }
}