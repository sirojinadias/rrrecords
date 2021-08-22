import React, {FunctionComponent} from 'react'
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
    className={`bg-black text-white ${btn ? 'px-3 py-2' : null}`}
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
    <div className="grid grid-row-3 items-start gap-4 overflow-hidden w-full bg-white mr-3 min-w-min">
      <div className="w-full">
        <Link href={link}>
          <Image
            className="w-full bg-cover"
            src={`/records/` + cover}
            layout="responsive"
            width="300"
            height="300"
            alt={`${title} by ${artist}`}
          />
        </Link>
      </div>
      <div className="px-3 justify-self-start">
        <span className="font-medium mr-1 text-black">
          <span className="font-bold  text-xl uppercase">{title}</span>{' '}
          <span className="text-md">by {artist}</span>
        </span>
        <br />
        <span className="text-sm text-gray-800 font-medium">{details}</span>
        <br />
        <span className="text-sm text-gray-400 font-medium">{tags}</span>
        <br />
      </div>
      <div className="text-black font-bold uppercase self-end px-3 pb-4">
        <Link href={link} btn={true}>
          Listen
        </Link>
      </div>
    </div>
  )
}