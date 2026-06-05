export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#ECE9E1]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <div className="text-lg font-semibold">
          MetaAvatarGrid
        </div>

        <nav className="hidden gap-10 text-sm text-zinc-600 md:flex">
          <a href="#architecture">Architecture</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#connectivity">Connectivity</a>
          <a href="#ecosystem">Ecosystem</a>
        </nav>

        <button className="rounded-md border border-zinc-300 px-4 py-2 text-sm">
          Contact
        </button>
      </div>
    </header>
  );
}
