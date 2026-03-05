import Image from 'next/image'
import Link from 'next/link'
import jorisPic from '@/public/joris.saidani.jpg'
import {AudioPlayer, type Track} from '@/components/AudioPlayer'
import {DrummerCards, type Band} from '@/components/DrummerCards'
import {allRecords} from '@/data/records'

const cf = 'var(--font-cormorant), serif'
const sm = 'var(--font-space-mono), monospace'

const featureTracks: Track[] = [
  {
    title: 'You Call This A Glitch? (RoboCop Alternative OST)',
    artist: 'Fragments',
    cover: 'FRAG_DELTA.jpg',
    src: 'FRAG_GLITCH.m4a',
    role: 'Co-Production & Mixing',
    genre: 'Soundtrack / 80s /  Electronic',
  },
  {
    title: 'Heavy Blow',
    artist: 'Neptune in June',
    cover: 'NIJ_WE_TOOK.jpg',
    src: 'NIJ_HB.m4a',
    role: 'Production, Recording, Drums, Bass, Arrangements, Mixing',
    genre: 'Indie Pop / Lo-fi',
  },
  {
    title: 'Safest Car',
    artist: 'Tickles',
    cover: 'TICKLES_SPP.jpg',
    src: 'TICKLES_SAFESTCAR.m4a',
    role: 'Co-Production & Mixing',
    genre: 'Indie Rock / Post-punk',
  },
  {
    title: 'Dead Meat',
    artist: 'Pain Magazine',
    cover: 'PM_VG_ALBUM.jpg',
    src: 'PM_DM.m4a',
    role: 'Production, Recording & Mixing',
    genre: 'Industrial / Electronic / Post-hardcore',
  },
  {
    title: 'Violent God',
    artist: 'Pain Magazine',
    cover: 'PM_VG_ALBUM.jpg',
    src: 'PM_VG.m4a',
    role: 'Production, Recording & Mixing',
    genre: 'Industrial / Electronic / Post-hardcore',
  },
  {
    title: 'You & I in the Gap',
    artist: 'Birds in Row & Coilguns',
    cover: 'BIRGUNS.png',
    src: 'BIRGUNS_GAP.m4a',
    role: 'Co-Production & Mixing',
    genre: 'Post-hardcore',
  },
  {
    title: 'Hurricanes',
    artist: 'Mad Foxes',
    cover: 'MF_INNER_BATTLES.jpg',
    src: 'MF_HURRICANES.m4a',
    role: 'Co-Production, Mix',
    genre: 'Indie Rock',
  },
  {
    title: 'Cold Water Swim',
    artist: 'Mad Foxes',
    cover: 'MF_INNER_BATTLES.jpg',
    src: 'MF_COLD.m4a',
    role: 'Co-Production, Mix',
    genre: 'Indie Rock',
  },
  {
    title: 'I Am Not The Body',
    artist: 'Tickles',
    cover: 'TICKLES_SPP.jpg',
    src: 'TICKLES_IAM_NOT_THE_BODY.m4a',
    role: 'Co-Production & Mixing',
    genre: 'Indie Rock / Post-punk',
  },
  {
    title: 'Upcoming Release Track',
    artist: '???',
    cover: 'NOT_RELEASED_YET.png',
    src: 'CHAMP_JMM.m4a',
    role: 'Production, Recording, Drums, Mix',
    genre: 'Cold Wave / Pop',
  },
  {
    title: 'Tapis Blanc',
    artist: "Simone d'Opale",
    cover: 'SIM_TAPIS.png',
    src: 'SIMONE_TAPIS.m4a',
    role: 'Co-Production, Drums & Mix',
    genre: 'Indie Pop',
  },
  {
    title: 'Sea Lion (edit)',
    artist: 'Neptune in June',
    cover: 'NIJ_OF.jpg',
    src: 'NIJ_SEALION.m4a',
    role: 'Production, Recording, Drums & Mix',
    genre: 'Indie Pop / Lo-fi',
  },
  {
    title: 'Soft Boy',
    artist: 'Iris2000',
    cover: 'IRIS_SOFT_BOY.png',
    src: 'IRIS_SOFT_BOY.m4a',
    role: 'Production, Recording, Mix',
    genre: 'Pop',
  },
  {
    title: 'Spin Out',
    artist: 'Hayden Besswood',
    cover: 'HB_SPIN.jpg',
    src: 'HB_SPIN_OUT.m4a',
    role: 'Mix',
    genre: 'Indie Pop',
  },
  {
    title: 'New Music',
    artist: 'Totorro',
    cover: 'TTRR_SFSG.jpg',
    src: 'TTRR_NEW_MUSIC.m4a',
    role: 'Production, Recording, Mix',
    genre: 'Math-Rock / Instrumental',
  },
  {
    title: 'Childhood Ghost (edit)',
    artist: 'Edinburgh of the Seven Seas',
    cover: 'EDIN_CHILDGHOST.jpg',
    src: 'EDIN_CANDLES.m4a',
    role: 'Production, Recording, Drums, Arrangements & Mix',
    genre: 'Indie Rock / Lo-Fi',
  },
  {
    title: "Don't Touch Me Man (RoboCop Alternative OST)",
    artist: 'Fragments',
    cover: 'FRAG_DELTA.jpg',
    src: 'FRAG_DONT_TOUCH_CUT.m4a',
    role: 'Co-Production & Mixing',
    genre: 'Soundtrack / 80s /  Electronic',
  },
  {
    title: 'Lychen',
    artist: 'Louisahhh & La Fraicheurs',
    cover: 'LOUISAHHH_LYCHEN.png',
    src: 'L+LF_LYCHEN.m4a',
    role: 'Co-Production, Mix',
    genre: 'Industrial',
  },
]

const allCovers = allRecords

const drummerBands: Band[] = [
  {
    name: 'Birds in Row',
    photo: '/birdsinrow.jpg',
    photoPosition: 'center center',
    since: '2009',
    bio: "Post-hardcore trio from Laval, France. A cornerstone of the European hardcore scene — raw, uncompromising, emotionally brutal. Three albums on Deathwish Inc. and Cult of Luna's Red Creek. Stages include Roadburn, ArcTanGent, Dour.",
    videoUrl: 'https://www.youtube.com/watch?v=cPQ_iCwCuT0',
    instagram: 'https://www.instagram.com/birdsinrow/?hl=fr',
    listen: 'https://birdsinrow.bandcamp.com/',
  },
  {
    name: 'Pain Magazine',
    photo: '/painmagazine.jpg',
    since: '2024',
    bio: 'A collision between Birds in Row and Franco-American techno duo Maelstrom & Louisahhh. Industrial drums, power-pop hooks, electronic fog. Debut album Violent God out 2025 on Humus Records.',
    videoUrl: 'https://www.youtube.com/watch?v=rfO-WxfNh9g',
    instagram: 'https://www.instagram.com/painmagazineband/?hl=fr',
    listen: 'https://painmagazine.bandcamp.com/',
  },
]

function SectionHeader({num, label}: {num: string; label: string}) {
  return (
    <div className="flex items-center gap-5 mb-12">
      <span
        className="text-[52px] font-light italic text-[#2a2a2a] w-11 text-right shrink-0 leading-none"
        style={{fontFamily: cf}}
      >
        {num}
      </span>
      <div className="w-px h-8 bg-[#222] shrink-0" />
      <span
        className="text-[10px] tracking-[0.3em] uppercase text-[#666]"
        style={{fontFamily: sm}}
      >
        {label}
      </span>
    </div>
  )
}

export default function Joris() {
  return (
    <main className="grain bg-[#070707] text-[#ede8e0] min-h-screen overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Desktop photo — clipped to right side so the face is visible */}
        <div
          className="absolute top-0 right-0 bottom-0 z-0 hidden lg:block overflow-hidden"
          style={{left: '50%'}}
        >
          <Image
            src={jorisPic}
            alt="Joris Saïdani"
            fill
            sizes="50vw"
            style={{objectFit: 'cover', objectPosition: 'center top'}}
            priority
          />
          {/* Blend left edge into the dark background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #070707 0%, transparent 28%)',
            }}
          />
        </div>

        {/* Mobile photo — full bleed */}
        <div className="absolute inset-0 z-0 lg:hidden overflow-hidden">
          <Image
            src={jorisPic}
            alt="Joris Saïdani"
            fill
            sizes="100vw"
            style={{objectFit: 'cover', objectPosition: '25% top'}}
            priority
          />
          {/* Mobile: bottom-up fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, #070707 48%, rgba(7,7,7,0.55) 70%, rgba(7,7,7,0.15) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-end px-7 pb-14 lg:px-16 lg:pb-16 lg:w-[58%]">
          <p
            className="anim-fade-in text-[10px] tracking-[0.25em] text-[#444] uppercase mb-9"
            style={{fontFamily: sm}}
          >
            Nantes, France
          </p>
          <h1 className="m-0 mb-8" style={{lineHeight: 0.86}}>
            <span
              className="anim-slide-up-0 block italic font-light text-[#ede8e0] tracking-[-0.025em]"
              style={{fontFamily: cf, fontSize: 'clamp(68px, 11.5vw, 152px)'}}
            >
              Joris
            </span>
            <span
              className="anim-slide-up-1 block italic font-light text-[#ede8e0] tracking-[-0.025em]"
              style={{fontFamily: cf, fontSize: 'clamp(68px, 11.5vw, 152px)'}}
            >
              Saïdani
            </span>
          </h1>
          <p
            className="anim-fade-in-2 text-[10px] tracking-[0.2em] text-[#666] uppercase"
            style={{fontFamily: sm}}
          >
            Producer&nbsp;&nbsp;·&nbsp;&nbsp;Audio
            Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Drummer
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="anim-fade-in-3 absolute bottom-24 lg:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span
            className="text-[8px] tracking-[0.3em] uppercase text-[#666]"
            style={{fontFamily: sm}}
          >
            Scroll
          </span>
          <div className="w-px h-8 bg-[#444] relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-3 bg-[#aaa]"
              style={{animation: 'scroll-dot 1.6s ease-in-out 1.4s infinite'}}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION I: PRODUCER / MIXER ──────────────────────── */}
      <section className="border-t border-[#141414] px-7 py-20 lg:px-16">
        <SectionHeader num="I" label="Producer · Audio Engineer · Mixer" />
        <AudioPlayer tracks={featureTracks} />
        <p
          className="text-[9px] tracking-[0.2em] text-[#2a2a2a] uppercase mb-3"
          style={{fontFamily: sm}}
        >
          Selected productions
        </p>
        <div className="no-scrollbar flex gap-1.5 overflow-x-auto pb-1">
          {allCovers.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 relative bg-[#111] overflow-hidden opacity-50 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-200"
              style={{width: 68, height: 68, display: 'block'}}
              title={`${item.title} — ${item.artist}`}
            >
              <Image
                src={`/records/${item.cover}`}
                alt={item.title}
                fill
                sizes="68px"
                style={{objectFit: 'cover'}}
              />
            </a>
          ))}
        </div>
      </section>

      {/* ── SECTION II: DRUMMER ──────────────────────────────── */}
      <section className="border-t border-[#141414] px-7 py-20 lg:px-16">
        <SectionHeader num="II" label="Drummer" />
        <DrummerCards bands={drummerBands} />
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-[#141414] px-7 py-10 lg:px-16 flex flex-wrap justify-between items-center gap-4">
        <p
          className="text-[11px] tracking-[0.08em] text-[#555]"
          style={{fontFamily: sm}}
        >
          <a
            href="mailto:contact@rrrecords.space"
            className="text-[#ede8e0] no-underline hover:text-[#666] transition-colors"
          >
            contact@rrrecords.space
          </a>
        </p>
        <Link
          href="/"
          className="text-[9px] tracking-[0.2em] uppercase text-[#333] no-underline flex items-center gap-2.5 hover:text-[#ede8e0] transition-colors"
          style={{fontFamily: sm}}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 2L4 6l4 4" />
          </svg>
          Radio Ravioli Records
        </Link>
      </footer>
    </main>
  )
}
