import { NextResponse } from "next/server";

const cloudMusicIds = ["1809646618", "3361076230", "1859390262"];

export async function GET() {
  return NextResponse.json({ ids: cloudMusicIds });
}