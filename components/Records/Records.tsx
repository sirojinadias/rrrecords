import React, {FunctionComponent} from 'react'
import {Record} from '../Record'
import {orderedRecords} from '@/data/records'

export const Records: FunctionComponent = () => (
  <div className="flex flex-wrap gap-4 my-4">
    {' '}
    {orderedRecords.map(r => (
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
