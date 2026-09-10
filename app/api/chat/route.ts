import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Chat API" });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    return NextResponse.json({ reply: "Hello from chat API", received: body });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}