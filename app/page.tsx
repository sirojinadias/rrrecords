import type {Metadata} from 'next'
import Image from 'next/image'
import {Records} from '@/components/Records'
import {Contact} from '@/components/Contact'
import jorisPic from '@/public/joris.saidani.jpg'

export const metadata: Metadata = {
  title: '✟ RADIO RAVIOLI RECORDS ✟',
}

export default function Home() {
  return (
    <div className="container px-5 lg:px-20 mx-auto my-10">
      <main>
        <div>
          <Image src="/rrr.png" alt="RRR" width={200} height={200} />
        </div>
        <div className="mb-4">
          <h1>RADIO RAVIOLI RECORDS</h1>
          <h2>
            RRR is an organization run by Joris Saïdani
            (recording/mixing/production) &amp; Jodie Roszak
            (management/communication).
            <br />
            We&apos;re based in Nantes, France.
          </h2>
        </div>

        <div className="w-full lg:w-2/3 relative mb-5">
          <Image
            src={jorisPic}
            alt="Joris Saïdani"
            title="Joris Saïdani"
            placeholder="blur"
          />
          <span className="text-gray-600 text-xs">
            Photo by the awesome{' '}
            <a
              href="https://www.instagram.com/clairehuteau/"
              target="_blank"
              rel="noreferrer"
            >
              Claire Huteau
            </a>{' '}
            in Impersonal Studio, owned by the awesome Thomas Poli.
          </span>
        </div>

        <div className="p-6 bg-white md:max-w-sm">
          <h2 className="text-xl font-light text-black uppercase">
            Some of our productions
          </h2>
        </div>
        <Records />

        <div className="p-6 bg-white md:max-w-sm mt-10">
          <Contact />
        </div>
      </main>
    </div>
  )
}
