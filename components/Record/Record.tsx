import React, {FunctionComponent, ReactNode} from 'react'
import Image from 'next/image'

type RecordProps = {
  title: string
  artist: string
  cover: string
  details: string
  link: string
  tags: string
}

type LinkProps = {
  href: string
  btn?: boolean
  children?: ReactNode
}

const Link: FunctionComponent<LinkProps> = ({
  href,
  btn = false,
  ...component
}) => (
  <a
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    className={`bg-black text-white duration-200 hover:bg-white hover:text-black ${
      btn ? 'px-3 py-2 border-2' : ''
    } border-black`}
  >
    {component.children}
  </a>
)

export const Record: FunctionComponent<RecordProps> = ({
  title,
  artist,
  cover,
  details,
  link,
  tags,
}) => {
  return (
    <div className="flex flex-col content-start overflow-hidden flex-grow basis-1/3 lg:basis-1/4 xl:basis-1/5 max-w-80 bg-white min-w-min">
      <div className="w-full">
        <Link href={link}>
          <Image
            className="w-full bg-cover"
            src={`/records/` + cover}
            //layout="responsive"
            width="300"
            height="300"
            alt={`${title} by ${artist}`}
          />
        </Link>
      </div>
      <div className="p-4">
        <span className="font-medium mr-1 text-black">
          <span className="font-extralight uppercase text-xl">{title}</span>{' '}
          <br />
          <span className="font-semibold text-md">{artist}</span>
        </span>
        <br />
        <span className="text-sm text-gray-800 font-thin">{details}</span>
        <br />
        <span className="text-sm text-gray-400 font-medium">{tags}</span>
        <br />
      </div>
      <div className="text-black font-thin uppercase px-3 pb-4 mt-auto">
        <Link href={link} btn={true}>
          Listen
        </Link>
      </div>
    </div>
  )
}
