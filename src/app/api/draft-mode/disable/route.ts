import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  draftMode().disable();
  console.log("Draft mode has been disabled");
  return NextResponse.redirect(new URL("/", request.url));
}
