import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Records} from '../components/Records'
import {Contact} from '../components/Contact'
import jorisPic from '../public/joris.saidani.jpg'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>✟ RADIO RAVIOLI RECORDS ✟</title>
      </Head>

      <main>
        <div>
          <Image src="/rrr.png" alt="RRR" width={120} height={120} />
        </div>
        <div className="mb-4">
          <h1>RADIO RAVIOLI RECORDS</h1>
          <h2>
            RRR is an organization run by Joris Saïdani (record/mix/production)
            &amp; Jodie Roszak (management/communication).
          </h2>
        </div>

        <div className="w-full lg:w-1/2 relative mb-5">
          <Image
            src={jorisPic}
            alt="Joris Saïdani"
            title="Joris Saïdani"
            placeholder="blur"
          ></Image>
          <span className="text-gray-600 text-xs">
            Photo by awesome{' '}
            <a
              href="https://www.instagram.com/huteauclaire/?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Claire Huteau
            </a>{' '}
            in Impersonal Studio, owned by awesome Thomas Poli.
          </span>
        </div>

        <div className="p-6 bg-white md:max-w-sm">
          <h2 className="text-xl font-medium text-black uppercase">
            Some of our work
          </h2>
        </div>
        <Records />

        <div className="p-6 bg-white md:max-w-sm mt-10">
          <Contact />
        </div>
      </main>
    </>
  )
}

export default Home
