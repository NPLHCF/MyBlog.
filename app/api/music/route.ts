import { NextResponse } from "next/server";
import { siteConfig } from "../../../siteConfig";

const API_BASE = "https://music-api.gdstudio.xyz/api.php";

async function safeJson(res) {
  try {
    const text = await res.text();
    try { return JSON.parse(text); } catch { return text; }
  } catch { return null; }
}

async function fetchSongDetail(id) {
  try {
    const [urlRes, picRes, lrcRes] = await Promise.all([
      fetch(`${API_BASE}?types=url&source=netease&id=${id}`, { headers: { "User-Agent": "Mozilla/5.0" } }),
      fetch(`${API_BASE}?types=pic&source=netease&id=${id}&size=300`, { headers: { "User-Agent": "Mozilla/5.0" } }),
      fetch(`${API_BASE}?types=lyric&source=netease&id=${id}`, { headers: { "User-Agent": "Mozilla/5.0" } })
        .catch(async () => {
          return await fetch(`https://music.163.com/api/song/lyric?os=pc&id=${id}&lv=-1&kv=-1&tv=-1`, { headers: { "User-Agent": "Mozilla/5.0" } });
        }),
    ]);

    const urlData = await safeJson(urlRes);
    const picData = await safeJson(picRes);
    const lrcData = await safeJson(lrcRes);

    return {
      url: typeof urlData === "object" ? urlData?.url : "",
      pic: typeof picData === "object" ? picData?.url : "",
      lrc: typeof lrcData === "object" ? lrcData?.lyric : "",
    };
  } catch {
    return { url: "", pic: "", lrc: "" };
  }
}

async function fetchSongMetaFromId(id) {
  try {
    const res = await fetch(`https://music.163.com/api/song/detail/?ids=[${id}]&csrf_token=`, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return { name: "未知歌曲", artist: "未知歌手" };
    const data = await res.json();
    const song = data?.songs?.[0];
    if (!song) return { name: "未知歌曲", artist: "未知歌手" };
    return { name: song.name || "未知歌曲", artist: song.artists?.[0]?.name || "未知歌手" };
  } catch {
    return { name: "未知歌曲", artist: "未知歌手" };
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const idsParam = searchParams.get("ids");
  const ids = idsParam ? idsParam.split(",").filter(Boolean) : siteConfig.cloudMusicIds || [];

  try {
    const songs = await Promise.all(ids.map(async (id) => {
      const [detail, meta] = await Promise.all([
        fetchSongDetail(id),
        fetchSongMetaFromId(id),
      ]);
      const customCover = siteConfig.musicCovers?.[id];
      return {
        id,
        name: meta.name,
        artist: meta.artist,
        cover: customCover || detail.pic,
        url: detail.url,
        lrc: detail.lrc,
        pic: detail.pic,
        customCover: !!customCover,
      };
    }));

    const validSongs = songs.filter((s) => s.url);
    return NextResponse.json(validSongs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch music", details: String(error) }, { status: 500 });
  }
}
