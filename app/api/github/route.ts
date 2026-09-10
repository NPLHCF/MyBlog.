import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/NPLHCF", {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch" }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json({
      login: data.login,
      avatar_url: data.avatar_url,
      html_url: data.html_url,
      bio: data.bio,
      public_repos: data.public_repos,
      followers: data.followers,
    });
  } catch (e) {
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}