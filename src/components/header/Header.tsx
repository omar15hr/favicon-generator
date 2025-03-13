import { DownloadButtons } from "./ActionButtons";

export function Header() {
  return (
    <header className="p-2 bg-[#18181B] border-1 border-b border-zinc-800 text-white w-screen z-20 gap-3 flex lg:grid grid-cols-3 items-center justify-between">
      <div>
        <h1 className="font-bold tracking-wide text-xl flex items-center gap-1.5">Favicon Generator</h1>
      </div>
      <DownloadButtons />
    </header>
  )
}