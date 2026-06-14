import { NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

const file = join(process.cwd(), "data", "config.json");

export async function GET() {
  const data = JSON.parse(await readFile(file, "utf-8"));
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const { mint } = await req.json();
  const data = { mint: mint || "" };
  await writeFile(file, JSON.stringify(data));
  return NextResponse.json(data);
}
