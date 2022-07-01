import React, {FunctionComponent, ReactNode} from 'react'
//import Image from 'next/image'

type WipProps = {
  title: string
  cover?: string
  details: string
  link: string
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
    className={`bg-gray-900 text-white duration-200 hover:bg-white hover:text-black ${
      btn ? 'px-3 py-2 border-2' : ''
    } border-black`}
  >
    {component.children}
  </a>
)

export const Wip: FunctionComponent<WipProps> = ({
  title,
  cover,
  details,
  link,
}) => {
  return (
    <div className="flex flex-col content-start gap-4 overflow-hidden w-full md:w-80 lg:w-160 text-white border-2 border-gray-800 min-w-min">
      <div className="w-full"></div>
      {cover && null}
      <div className="px-3">
        <span className="font-medium mr-1 text-white">
          <span className="font-extralight uppercase text-xl">{title}</span>
        </span>
        <br />
        <span className="text-sm text-gray-300 font-thin">{details}</span>
      </div>
      <div className=" font-thin uppercase px-3 pb-4 mt-auto">
        {link == 'oooops' && (
          <Link href={link} btn={true}>
            More infos
          </Link>
        )}
      </div>
    </div>
  )
}
