import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ECE9E1] text-black">
      <Navbar />

      {/* HERO */}

      <section className="mx-auto max-w-7xl px-8 pb-40 pt-32">
        <div className="mb-8 text-sm uppercase tracking-[0.4em] text-orange-500">
          Distributed Networking Infrastructure
        </div>

        <h1 className="max-w-6xl text-6xl font-semibold leading-none md:text-[88px]">
          Connect Spatial
          <br />
          Experiences Everywhere
        </h1>

        <p className="mt-10 max-w-4xl text-2xl leading-relaxed text-zinc-600">
          The connectivity layer powering immersive worlds, avatars,
          real-time collaboration, live events, and persistent digital
          ecosystems.
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-500">
          MetaAvatarGrid enables synchronization across users, environments,
          devices, AI systems, and cloud infrastructure.
        </p>

        <div className="mt-14 flex flex-wrap gap-4">
          <button className="rounded-md bg-orange-500 px-6 py-3 font-medium text-black">
            Explore Platform
          </button>

          <button className="rounded-md border border-zinc-300 px-6 py-3 font-medium">
            Technology Overview
          </button>
        </div>

        <div className="mt-24 border-t border-zinc-300 pt-10">
          <div className="grid gap-8 md:grid-cols-4">

            <div>
              <div className="text-4xl font-semibold">
                Real-Time
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                Synchronization Layer
              </div>
            </div>

            <div>
              <div className="text-4xl font-semibold">
                Multi-User
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                Shared Experiences
              </div>
            </div>

            <div>
              <div className="text-4xl font-semibold">
                Persistent
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                Digital Presence
              </div>
            </div>

            <div>
              <div className="text-4xl font-semibold">
                Distributed
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                Global Connectivity
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VISION */}

      <section className="border-t border-zinc-300">
        <div className="mx-auto max-w-6xl px-8 py-32">
          <h2 className="max-w-4xl text-5xl font-semibold leading-tight">
            Real-Time Connectivity For Immersive Computing
          </h2>

          <p className="mt-10 max-w-4xl text-xl leading-relaxed text-zinc-600">
            MetaAvatarGrid serves as the distributed networking layer of the
            Meta Avatar ecosystem, enabling synchronized interactions,
            persistent presence, collaborative environments, and scalable
            immersive experiences.
          </p>
        </div>
      </section>

      {/* ECOSYSTEM */}

      <section className="border-t border-zinc-300">
        <div className="mx-auto max-w-7xl px-8 py-28 text-center">
          <h2 className="mb-8 text-5xl font-semibold">
            Ecosystem Connectivity
          </h2>

          <p className="mx-auto mb-20 max-w-3xl text-lg text-zinc-500">
            MetaAvatarGrid serves as the synchronization layer connecting
            runtime systems, cloud infrastructure, immersive experiences,
            and digital identities across the ecosystem.
          </p>

          <div className="mb-6">
            <div className="inline-block rounded-lg border border-zinc-300 px-8 py-4 text-2xl font-medium">
              MetaAvatarOS
            </div>
          </div>

          <div className="mb-6 text-zinc-400">│</div>

          <div className="grid items-center gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-300 bg-white/40 px-8 py-6">
              <div className="text-xl font-medium">
                MetaAvatarCloud
              </div>

              <div className="mt-3 text-sm text-zinc-500">
                Cloud Infrastructure
              </div>
            </div>

            <div className="rounded-3xl border-2 border-orange-400 bg-white/70 px-12 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="text-4xl font-semibold text-orange-500">
                MetaAvatarGrid
              </div>

              <div className="mt-4 text-zinc-600">
                The Connectivity Layer Of The Meta Avatar Ecosystem
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-300 bg-white/40 px-8 py-6">
              <div className="text-xl font-medium">
                MetaAvatarEngine
              </div>

              <div className="mt-3 text-sm text-zinc-500">
                Runtime & XR Framework
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid grid-cols-2 gap-4 text-sm text-zinc-500 md:grid-cols-3">
              <div>AI Systems</div>
              <div>Avatar Networks</div>
              <div>XR Experiences</div>
              <div>Digital Worlds</div>
              <div>Live Events</div>
              <div>Cloud Services</div>
            </div>
          </div>

          <div className="my-6 text-zinc-400">│</div>

          <div>
            <div className="inline-block rounded-lg border border-zinc-300 px-8 py-4 text-2xl font-medium">
              Screensplayer
            </div>

            <div className="mt-3 text-zinc-500">
              Immersive Entertainment Experiences
            </div>
          </div>
        </div>
      </section>

      {/* NETWORK EFFECTS */}

      <section className="border-t border-zinc-300">
        <div className="mx-auto max-w-7xl px-8 py-40">

          <div className="max-w-5xl">
            <div className="mb-6 text-sm uppercase tracking-[0.3em] text-orange-500">
              Distributed Infrastructure
            </div>

            <h2 className="text-6xl font-semibold leading-tight md:text-7xl">
              Synchronize.
              <br />
              Connect.
              <br />
              Scale.
            </h2>

            <p className="mt-12 max-w-3xl text-xl leading-relaxed text-zinc-600">
              MetaAvatarGrid enables persistent connectivity across
              virtual environments, intelligent systems, cloud platforms,
              avatar networks, immersive productions, and large-scale
              digital experiences.
            </p>
          </div>

        </div>
      </section>

      <section className="border-t border-zinc-300">
        <div className="mx-auto max-w-7xl px-8 py-40">

          <h2 className="max-w-5xl text-6xl font-semibold leading-tight md:text-7xl">
            The Network Layer
            <br />
            For The Spatial Internet.
          </h2>

          <p className="mt-10 max-w-3xl text-xl text-zinc-600">
            MetaAvatarGrid connects immersive experiences, digital identities,
            intelligent systems, and persistent worlds through a unified
            synchronization framework.
          </p>

        </div>
      </section>


      {/* FOOTER */}

      <footer className="border-t border-zinc-300">
        <div className="mx-auto max-w-7xl px-8 py-24">

          <div className="grid gap-12 md:grid-cols-4">

            <div>
              <div className="text-xl font-semibold">
                MetaAvatarGrid
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Distributed networking and synchronization infrastructure
                powering immersive experiences, digital identities, and
                persistent virtual ecosystems.
              </p>
            </div>

            <div>
              <div className="mb-4 font-medium">Platform</div>

              <div className="space-y-2 text-zinc-500">
                <div>Architecture</div>
                <div>Connectivity</div>
                <div>Synchronization</div>
              </div>
            </div>

            <div>
              <div className="mb-4 font-medium">Ecosystem</div>

              <div className="space-y-2 text-zinc-500">
                <div>MetaAvatarOS</div>
                <div>MetaAvatarCloud</div>
                <div>MetaAvatarEngine</div>
              </div>
            </div>

            <div>
              <div className="mb-4 font-medium">Screensplayer</div>

              <div className="space-y-2 text-zinc-500">
                <div>Immersive Entertainment</div>
                <div>Digital Experiences</div>
                <div>Spatial Computing</div>
              </div>
            </div>

          </div>

          <div className="mt-16 border-t border-zinc-300 pt-8 text-sm text-zinc-500">
            © 2026 Meta Avatar Lab. All rights reserved.
          </div>

        </div>
      </footer>


    </main>
  );
}

      