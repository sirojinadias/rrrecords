'use client'
import {useState, useRef, useEffect, useCallback} from 'react'
import Image from 'next/image'

export type Track = {
  title: string
  artist: string
  cover: string
  src: string
  role: string
  genre: string
}

function fmt(s: number): string {
  if (!s || isNaN(s)) return '0:00'
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
}

export function AudioPlayer({tracks}: {tracks: Track[]}) {
  const [idx, setIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [total, setTotal] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const railRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef(false)

  const track = tracks[idx]
  const cf = 'var(--font-cormorant), serif'
  const sm = 'var(--font-space-mono), monospace'

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const onTime = () => {
      setElapsed(a.currentTime)
      if (a.duration) setProgress((a.currentTime / a.duration) * 100)
    }
    const onDur = () => setTotal(a.duration || 0)
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onEnd = () => {
      autoplayRef.current = true
      setIdx((i) => (i + 1) % tracks.length)
      setProgress(0)
      setElapsed(0)
    }
    a.addEventListener('timeupdate', onTime)
    a.addEventListener('durationchange', onDur)
    a.addEventListener('play', onPlay)
    a.addEventListener('pause', onPause)
    a.addEventListener('ended', onEnd)
    return () => {
      a.removeEventListener('timeupdate', onTime)
      a.removeEventListener('durationchange', onDur)
      a.removeEventListener('play', onPlay)
      a.removeEventListener('pause', onPause)
      a.removeEventListener('ended', onEnd)
    }
  }, [tracks.length])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.load()
    if (autoplayRef.current && tracks[idx].src) {
      autoplayRef.current = false
      a.play().catch(() => setIsPlaying(false))
    }
  }, [idx, tracks])

  const togglePlay = useCallback(() => {
    const a = audioRef.current
    if (!a || !tracks[idx].src) return
    isPlaying ? a.pause() : a.play().catch(() => setIsPlaying(false))
  }, [isPlaying, idx, tracks])

  const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current
    const r = railRef.current
    if (!a || !r || !a.duration) return
    a.currentTime =
      ((e.clientX - r.getBoundingClientRect().left) / r.offsetWidth) *
      a.duration
  }, [])

  const goTo = useCallback(
    (i: number, forcePlay = false) => {
      autoplayRef.current = forcePlay || isPlaying
      setIdx(i)
      setProgress(0)
      setElapsed(0)
      setTotal(0)
    },
    [isPlaying]
  )

  return (
    <div className="border border-[#181818] bg-[#0c0c0c] mb-9">
      <audio
        ref={audioRef}
        src={'/audio/' + track.src || undefined}
        preload="metadata"
      />

      {/* Now playing */}
      <div
        className="grid max-sm:grid-cols-1"
        style={{gridTemplateColumns: '160px 1fr'}}
      >
        <div
          className="relative bg-[#111] overflow-hidden shrink-0 max-sm:w-full"
          style={{width: 160, height: 160}}
        >
          <Image
            src={`/records/${track.cover}`}
            alt={track.title}
            fill
            sizes="160px"
            style={{objectFit: 'cover'}}
          />
        </div>
        <div className="p-6 flex flex-col justify-between gap-4">
          <div>
            <div
              className="text-[9px] tracking-[0.2em] uppercase text-[#ede8e0] mb-3"
              style={{fontFamily: sm}}
            >
              {track.role}
            </div>
            <div
              className="text-[22px] font-light italic text-[#888] leading-[1.15] mb-1"
              style={{fontFamily: cf}}
            >
              {track.title}
            </div>
            <div
              className="text-[9px] tracking-[0.14em] uppercase text-[#3a3a3a]"
              style={{fontFamily: sm}}
            >
              {track.artist}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => goTo((idx - 1 + tracks.length) % tracks.length)}
              className="text-[#555] hover:text-[#ede8e0] transition-colors cursor-pointer bg-transparent border-0 p-1 leading-none"
              aria-label="Previous"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="currentColor"
              >
                <path d="M2 2h2v10H2V2zm9.5 5L5 2v10l6.5-5z" />
              </svg>
            </button>
            <button
              onClick={togglePlay}
              disabled={!track.src}
              className="w-10 h-10 border border-[#2a2a2a] bg-transparent flex items-center justify-center text-[#ede8e0] cursor-pointer hover:bg-[#ede8e0] hover:text-[#070707] hover:border-[#ede8e0] transition-all disabled:opacity-25 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:text-[#ede8e0] disabled:hover:border-[#2a2a2a]"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="currentColor"
                >
                  <rect x="1" y="1" width="3.5" height="11" />
                  <rect x="7.5" y="1" width="3.5" height="11" />
                </svg>
              ) : (
                <svg
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="currentColor"
                >
                  <path d="M1 1l9 5.5-9 5.5V1z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => goTo((idx + 1) % tracks.length)}
              className="text-[#555] hover:text-[#ede8e0] transition-colors cursor-pointer bg-transparent border-0 p-1 leading-none"
              aria-label="Next"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="currentColor"
              >
                <path d="M10 2h2v10h-2V2zM2.5 7L9 2v10L2.5 7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="border-t border-[#141414] px-5 py-3 flex items-center gap-3.5">
        <span
          className="text-[9px] text-[#444] min-w-[30px]"
          style={{fontFamily: sm}}
        >
          {fmt(elapsed)}
        </span>
        <div
          ref={railRef}
          className="flex-1 h-px bg-[#1e1e1e] relative cursor-pointer py-2 -my-2"
          onClick={seek}
        >
          <div
            className="h-px bg-[#ede8e0] relative after:content-[''] after:absolute after:right-[-3px] after:top-1/2 after:-translate-y-1/2 after:w-[5px] after:h-[5px] after:rounded-full after:bg-[#ede8e0]"
            style={{width: `${progress}%`}}
          />
        </div>
        <span
          className="text-[9px] text-[#444] min-w-[30px] text-right"
          style={{fontFamily: sm}}
        >
          {fmt(total)}
        </span>
      </div>

      {/* Track list */}
      <div className="border-t border-[#141414]">
        {/* Header */}
        <div className="grid items-center gap-x-8 px-5 py-2 border-b border-[#1a1a1a] grid-cols-[28px_36px_1fr] sm:grid-cols-[28px_36px_2fr_1fr] md:grid-cols-[28px_36px_2fr_1fr_2fr]">
          <span className="text-[8px] text-[#252525] text-right" style={{fontFamily: sm}}>#</span>
          <span />
          <span className="text-[8px] tracking-[0.22em] uppercase text-[#252525]" style={{fontFamily: sm}}>Title</span>
          <span className="text-[8px] tracking-[0.22em] uppercase text-[#252525] hidden sm:block" style={{fontFamily: sm}}>Genre</span>
          <span className="text-[8px] tracking-[0.22em] uppercase text-[#252525] hidden md:block" style={{fontFamily: sm}}>Role</span>
        </div>

        {tracks.map((t, i) => (
          <div
            key={i}
            onClick={() => goTo(i, true)}
            className={`grid items-start gap-x-8 px-5 py-3 border-b border-[#0f0f0f] cursor-pointer transition-all last:border-0 grid-cols-[28px_36px_1fr] sm:grid-cols-[28px_36px_2fr_1fr] md:grid-cols-[28px_36px_2fr_1fr_2fr] ${
              i === idx
                ? 'bg-[rgba(255,255,255,0.035)] border-l-[2px] border-l-[#ede8e0] pl-[18px]'
                : 'hover:bg-[rgba(255,255,255,0.018)] border-l-[2px] border-l-transparent'
            }`}
          >
            <span className="text-[9px] text-[#333] text-right pt-px" style={{fontFamily: sm}}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="w-9 h-9 relative bg-[#111] overflow-hidden shrink-0">
              <Image src={`/records/${t.cover}`} alt={t.title} fill sizes="36px" style={{objectFit: 'cover'}} />
            </div>
            <div className="min-w-0">
              <div className={`text-[10px] leading-snug ${i === idx ? 'text-[#ede8e0]' : 'text-[#888]'}`} style={{fontFamily: sm}}>
                {t.title}
              </div>
              <div className="text-[9px] text-[#3a3a3a] mt-0.5 leading-snug" style={{fontFamily: sm}}>
                {t.artist}
              </div>
              <div className="sm:hidden mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5">
                <span className="text-[8px] tracking-[0.1em] uppercase text-[#444]" style={{fontFamily: sm}}>{t.genre}</span>
                <span className="text-[8px] text-[#ede8e0]" style={{fontFamily: sm}}>{t.role}</span>
              </div>
            </div>
            <div className="hidden sm:block min-w-0">
              <span className="text-[9px] tracking-[0.08em] uppercase text-[#4a4a4a] leading-snug" style={{fontFamily: sm}}>
                {t.genre}
              </span>
            </div>
            <div className="hidden md:block min-w-0">
              <span className={`text-[9px] leading-snug ${i === idx ? 'text-[#ede8e0]' : 'text-[#666]'}`} style={{fontFamily: sm}}>
                {t.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
