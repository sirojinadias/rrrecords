import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import jorisPic from '@/public/joris.saidani.jpg'

export const metadata: Metadata = {
  title: 'Rates — Radio Ravioli Records',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {index: false, follow: false},
  },
}

const cf = 'var(--font-cormorant), serif'
const sm = 'var(--font-space-mono), monospace'

type RateRow = {label: string; eur: number; usd: number; prefix?: string}
type RateService = {
  service: string
  unit: string
  rows?: RateRow[]
  note?: string
  tag?: string
}

const services: RateService[] = [
  {
    service: 'Mixing',
    unit: 'per track',
    rows: [
      {label: 'Autoproduction', eur: 400, usd: 440},
      {label: 'Label', eur: 450, usd: 495},
    ],
  },
  {
    service: 'Recording',
    unit: 'per day',
    rows: [
      {label: 'Autoproduction', eur: 300, usd: 330},
      {label: 'Label', eur: 350, usd: 385},
    ],
  },
  {
    service: 'Extra musician',
    unit: 'per day',
    rows: [{label: 'Paul Dechaume', eur: 50, usd: 55, prefix: '+'}],
  },
  {
    service: 'Production',
    unit: 'per full track',
    tag: 'On estimate',
    note: 'Producing a track end to end usually takes two to three recording days plus one mix — billed at the recording and mixing rates above.',
  },
  {
    service: 'Full album',
    unit: 'recorded & mixed',
    tag: 'On request',
    note: 'Every record is its own story. Tell me about yours and we’ll shape a quote around it.',
  },
]

/* ── A single price cell — Cormorant numeral, dimmed currency mark ── */
function Price({
  value,
  currency,
  prefix,
}: {
  value: number
  currency: 'eur' | 'usd'
  prefix?: string
}) {
  return (
    <span
      className="block whitespace-nowrap text-right leading-[1.3] text-[#f3efe6] tabular-nums lining-nums"
      style={{
        fontFamily: cf,
        fontSize: 'clamp(28px, 3.4vw, 40px)',
        fontWeight: 300,
      }}
    >
      {prefix}
      {currency === 'usd' && (
        <span className="text-[#6f6a60]" style={{fontSize: '0.55em'}}>
          $
        </span>
      )}
      {value}
      {currency === 'eur' && (
        <span className="ml-1 text-[#6f6a60]" style={{fontSize: '0.55em'}}>
          €
        </span>
      )}
    </span>
  )
}

const COLS = 'grid-cols-[1fr_6.25rem_6.25rem] sm:grid-cols-[1fr_9rem_9rem]'

export default function RatesPage() {
  return (
    <main className="grain bg-[#070707] text-[#ede8e0] min-h-screen overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] lg:min-h-[88vh] overflow-hidden">
        {/* Desktop — photo clipped to the right */}
        <div
          className="absolute top-0 right-0 bottom-0 z-0 hidden lg:block overflow-hidden"
          style={{left: '53%'}}
        >
          <Image
            src={jorisPic}
            alt="Joris Saïdani"
            fill
            sizes="47vw"
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'grayscale(0.22) contrast(1.07) brightness(0.94)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #070707 0%, transparent 34%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, #070707 2%, transparent 26%)',
            }}
          />
        </div>

        {/* Mobile — full-bleed photo */}
        <div className="absolute inset-0 z-0 lg:hidden overflow-hidden">
          <Image
            src={jorisPic}
            alt="Joris Saïdani"
            fill
            sizes="100vw"
            priority
            style={{
              objectFit: 'cover',
              objectPosition: '28% top',
              filter: 'grayscale(0.22) contrast(1.07) brightness(0.9)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, #070707 44%, rgba(7,7,7,0.5) 70%, rgba(7,7,7,0.1) 100%)',
            }}
          />
        </div>

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-7 lg:px-16 pt-8">
          <Link
            href="/"
            style={{fontFamily: sm}}
            className="group flex items-center gap-2.5 text-[9px] tracking-[0.28em] uppercase text-[#6a6a6a] no-underline hover:text-[#ede8e0] transition-colors"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-0.5 transition-transform"
            >
              <path d="M8 2L4 6l4 4" />
            </svg>
            Radio Ravioli Records
          </Link>
          <span
            style={{fontFamily: sm}}
            className="text-[9px] tracking-[0.3em] uppercase text-[#3a3a3a]"
          >
            MMXXVI
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[calc(90vh-4rem)] lg:min-h-[calc(88vh-4rem)] flex-col justify-end px-7 pb-16 lg:px-16 lg:pb-20 lg:w-[60%]">
          <p
            className="anim-fade-in mb-7 text-[10px] tracking-[0.32em] uppercase text-[#6f6f6f]"
            style={{fontFamily: sm}}
          >
            Studio Rate &nbsp;&nbsp;·&nbsp;&nbsp;Nantes, France
          </p>

          <h1 className="m-0 mb-6" style={{lineHeight: 0.84}}>
            <span
              className="anim-slide-up-0 block text-[#6b665c] italic font-light"
              style={{
                fontFamily: cf,
                fontSize: 'clamp(38px, 6vw, 88px)',
                letterSpacing: '-0.01em',
              }}
            >
              Rates
            </span>
            <span
              className="anim-slide-up-1 block italic font-light text-[#f3efe6] tracking-[-0.025em]"
              style={{fontFamily: cf, fontSize: 'clamp(58px, 9.5vw, 132px)'}}
            >
              Joris Saïdani
            </span>
          </h1>

          <p
            className="anim-fade-in-2 text-[10px] tracking-[0.22em] uppercase text-[#7d7d7d]"
            style={{fontFamily: sm}}
          >
            Recording&nbsp;&nbsp;·&nbsp;&nbsp;Mixing&nbsp;&nbsp;·&nbsp;&nbsp;Production
          </p>
        </div>

        {/* Scroll cue */}
        <div className="anim-fade-in-3 absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
          <span
            className="text-[8px] tracking-[0.3em] uppercase text-[#5a5a5a]"
            style={{fontFamily: sm}}
          >
            Rates below
          </span>
          <div className="relative h-8 w-px overflow-hidden bg-[#333]">
            <div
              className="absolute left-0 top-0 h-3 w-full bg-[#9a948a]"
              style={{animation: 'scroll-dot 1.6s ease-in-out 1.4s infinite'}}
            />
          </div>
        </div>
      </section>

      {/* ── RATE TABLE ───────────────────────────────────────── */}
      <section className="border-t border-[#141414] px-7 py-20 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-3xl">
          {/* Ledger */}
          <div className="border border-[#1f1f1f]">
            {/* Currency header */}
            <div
              className={`grid ${COLS} bg-[#0c0c0c] border-b border-[#1f1f1f]`}
            >
              <div className="px-5 py-4 sm:px-7">
                <span
                  className="text-[9px] tracking-[0.3em] uppercase text-[#4a4a4a]"
                  style={{fontFamily: sm}}
                >
                  Service
                </span>
              </div>
              <div className="border-l border-[#1f1f1f] px-5 py-4 text-right sm:px-7">
                <span
                  className="text-[9px] tracking-[0.28em] uppercase text-[#8a8478]"
                  style={{fontFamily: sm}}
                >
                  Euro €
                </span>
              </div>
              <div className="border-l border-[#1f1f1f] px-5 py-4 text-right sm:px-7">
                <span
                  className="text-[9px] tracking-[0.28em] uppercase text-[#8a8478]"
                  style={{fontFamily: sm}}
                >
                  USD $
                </span>
              </div>
            </div>

            {/* Service groups */}
            {services.map((svc, si) => (
              <div key={svc.service}>
                {/* Service name row */}
                <div
                  className={`grid ${COLS} ${
                    si > 0 ? 'border-t border-[#1f1f1f]' : ''
                  }`}
                >
                  <div className="flex items-baseline gap-3 px-5 pt-8 pb-4 sm:px-7">
                    <h3
                      className="m-0 italic font-normal text-[#f3efe6]"
                      style={{
                        fontFamily: cf,
                        fontSize: 'clamp(30px, 3.6vw, 44px)',
                        lineHeight: 1,
                      }}
                    >
                      {svc.service}
                    </h3>
                    <span
                      className="text-[9px] tracking-[0.18em] uppercase text-[#5e5e5e] whitespace-nowrap"
                      style={{fontFamily: sm}}
                    >
                      {svc.unit}
                    </span>
                  </div>
                  <div className="border-l border-[#161616]" />
                  <div className="border-l border-[#161616]" />
                </div>

                {/* Detail — priced rows, or an info-only note */}
                {svc.note ? (
                  <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 border-t border-[#141414] px-5 py-7 sm:px-7">
                    <p
                      className="max-w-md italic text-[#9a948a]"
                      style={{
                        fontFamily: cf,
                        fontSize: 'clamp(17px, 2vw, 23px)',
                        lineHeight: 1.42,
                      }}
                    >
                      {svc.note}
                    </p>
                    {svc.tag && (
                      <span
                        className="shrink-0 border border-[#2c2c2c] px-3 py-1.5 text-[9px] tracking-[0.26em] uppercase text-[#8a8478]"
                        style={{fontFamily: sm}}
                      >
                        {svc.tag}
                      </span>
                    )}
                  </div>
                ) : (
                  svc.rows?.map((row) => (
                    <div
                      key={row.label}
                      className={`group grid ${COLS} border-t border-[#141414] transition-colors hover:bg-[#0e0e0e]`}
                    >
                      <div className="flex items-center px-5 py-6 sm:px-7">
                        <span
                          className="h-1 w-1 shrink-0 bg-[#39352c] mr-3 transition-colors group-hover:bg-[#8a8478]"
                          aria-hidden
                        />
                        <span
                          className="text-[11px] tracking-[0.12em] uppercase text-[#8c867a]"
                          style={{fontFamily: sm}}
                        >
                          {row.label}
                        </span>
                      </div>
                      <div className="flex items-center justify-end border-l border-[#161616] px-5 py-6 sm:px-7">
                        <Price
                          value={row.eur}
                          currency="eur"
                          prefix={row.prefix}
                        />
                      </div>
                      <div className="flex items-center justify-end border-l border-[#161616] px-5 py-6 sm:px-7">
                        <Price
                          value={row.usd}
                          currency="usd"
                          prefix={row.prefix}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>

          {/* Notes */}
          <ul
            className="mt-7 space-y-2 text-[10px] leading-relaxed tracking-[0.05em] text-[#555]"
            style={{fontFamily: sm}}
          >
            <li>— Mixing billed per track. Recording billed per studio day.</li>
            <li>
              — Production &amp; full albums are quoted per project — get in
              touch.
            </li>
            <li>
              — Extra musicians (e.g. Paul Dechaume) added at +50&nbsp;€ each.
            </li>
            <li>
              — USD figures indicative, based on 1&nbsp;€&nbsp;=&nbsp;$1.10.
              Rates subject to change.
            </li>
          </ul>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#141414] px-7 py-10 lg:px-16">
        <p
          className="text-[11px] tracking-[0.08em] text-[#555]"
          style={{fontFamily: sm}}
        >
          Book a session —{' '}
          <a
            href="mailto:contact@rrrecords.space"
            className="text-[#ede8e0] no-underline transition-colors hover:text-[#8a8478]"
          >
            contact@rrrecords.space
          </a>
        </p>
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[9px] tracking-[0.2em] uppercase text-[#333] no-underline transition-colors hover:text-[#ede8e0]"
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
