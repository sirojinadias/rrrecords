'use client'
import Image from 'next/image'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export type Band = {
  name: string
  photo: string
  photoPosition?: string
  since: string
  bio: string
  videoUrl: string
  instagram: string
  listen: string
}

const cf = 'var(--font-cormorant), serif'
const sm = 'var(--font-space-mono), monospace'

function youtubeId(url: string): string | null {
  return url.match(/[?&]v=([^&]+)/)?.[1] ?? null
}

export function DrummerCards({bands}: {bands: Band[]}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#141414]">
      {bands.map(band => {
        const videoId = youtubeId(band.videoUrl)
        return (
          <div key={band.name} className="bg-[#070707]">

            {/* Photo */}
            <div className="relative w-full overflow-hidden bg-[#111]" style={{aspectRatio: '16/9'}}>
              <Image
                src={band.photo}
                alt={band.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{objectFit: 'cover', objectPosition: band.photoPosition ?? 'center center'}}
              />
              <div
                className="absolute inset-0"
                style={{background: 'linear-gradient(to bottom, transparent 40%, #070707 100%)'}}
              />
            </div>

            {/* Name + bio */}
            <div className="px-8 -mt-8 relative">
              <p className="text-[9px] tracking-[0.2em] text-[#3a3a3a] uppercase mb-2" style={{fontFamily: sm}}>
                Since {band.since}
              </p>
              <h3 className="text-[22px] font-light italic text-[#ede8e0] mb-4 leading-[1.15]" style={{fontFamily: cf}}>
                {band.name}
              </h3>
              <p className="text-[10px] leading-relaxed text-[#555]" style={{fontFamily: sm}}>
                {band.bio}
              </p>
            </div>

            {/* YouTube embed */}
            {videoId && (
              <div className="px-8 pt-7 pb-6">
                <div className="relative w-full bg-[#0f0f0f]" style={{aspectRatio: '16/9'}}>
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={band.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            )}

            {/* Links */}
            <div className="px-8 pb-8 flex items-center gap-5 border-t border-[#111] pt-5">
              <a
                href={band.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555] hover:text-[#ede8e0] transition-colors"
                aria-label={`${band.name} on Instagram`}
              >
                <FontAwesomeIcon icon={faInstagram} className="w-[18px] h-[18px]" />
              </a>
              <div className="w-px h-3 bg-[#222]" />
              <a
                href={band.listen}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] tracking-[0.2em] uppercase text-[#333] hover:text-[#ede8e0] transition-colors no-underline"
                style={{fontFamily: sm}}
              >
                Listen →
              </a>
            </div>

          </div>
        )
      })}
    </div>
  )
}
