import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city") || "北京";

  return NextResponse.json({
    city,
    temperature: 22,
    description: "晴",
    icon: "sunny",
  });
}