import React, {FunctionComponent} from 'react'
import {Record} from '../Record'
import {allRecords} from '@/data/records'

export const Records: FunctionComponent = () => (
  <div className="flex flex-wrap gap-4 my-4">
    {' '}
    {allRecords.map(r => (
      <Record
        key={`${r.artist}-${r.title}`}
        title={r.title}
        artist={r.artist}
        cover={r.cover}
        details={r.details}
        link={r.link}
        tags={r.tags}
      />
    ))}
  </div>
)
