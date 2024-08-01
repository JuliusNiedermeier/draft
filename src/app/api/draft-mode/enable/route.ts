import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  draftMode().enable();
  console.log("Draft mode has been enabled");
  return NextResponse.redirect(new URL("/", request.url));
}
