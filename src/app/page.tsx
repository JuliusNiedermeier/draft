import { draftMode } from "next/headers";

export default function Home() {
  const isDraftMode = draftMode().isEnabled;
  console.log(`Draft mode is ${isDraftMode ? "enabled" : "disabled"}`);

  return (
    <main className="min-h-screen grid place-items-center p-24">
      <div className="grid text-center">
        <span>{Date.now()}</span>
        <span>
          {isDraftMode ? "Draft mode enabled" : "Draft mode disabled"}
        </span>
        <a href={`/api/draft-mode/${isDraftMode ? "disable" : "enable"}`}>
          {isDraftMode ? "Disable" : "Enable"}
        </a>
      </div>
    </main>
  );
}
