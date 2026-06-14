import { NextResponse } from "next/server";
import { getStore } from "@netlify/blobs";

function store() {
  return getStore({ name: "config", consistency: "strong" });
}

export async function GET() {
  try {
    const mint = await (await store()).get("mint") || "";
    return NextResponse.json({ mint });
  } catch {
    return NextResponse.json({ mint: "" });
  }
}

export async function POST(req: Request) {
  const { mint } = await req.json();
  await (await store()).set("mint", mint || "");
  return NextResponse.json({ mint: mint || "" });
}
