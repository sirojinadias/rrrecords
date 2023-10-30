import React, {FunctionComponent} from 'react'
import {Wip} from '../Wip'

export const Wips: FunctionComponent = () => (
  <div className="flex flex-wrap md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
    <Wip
      title="Mad Foxes"
      details={`Just finished mixing Mad Foxes' upcoming album: Inner Battles.`}
    />
    <Wip
      title="IRIS2000"
      details={`Producing a few songs for Rennes-based artist IRIS2000.`}
    />
    <Wip
      title="Championne"
      details={`Producing a few songs for Rennes-based artist Mathilde Lejas. Amazing songwriter.`}
    />
    <Wip
      title="Wonderboy"
      details={`Just mixed some new song for the Rennes-based artist Wonderboy.`}
    />
    <Wip
      title="Neptune in June"
      details={`Produced an album for a brand new project called Neptune in June (formerly known as La Houle). If you like lo-fi pop music and distortion, stay tuned.`}
    />
    <Wip
      title="Edinburgh of the Seven Seas"
      details={`Producing, recording, mixing and playing some instruments on and for the Edinburgh of the Seven Seas debut album. He is a gem and also a good friend of ours.`}
    />
    <Wip
      title="Mix With The Masters #2"
      details={`Just got back from a one-week seminar at La Fabrique studio with Tchad Blake. Also went to their previous one was with Shawn Everett. They were such great opportunities to learn from amazing people.`}
    />
    <Wip
      title="New studio set up"
      details={`Just got our hands on a new home around Nantes. Sharing the studio with Hugo from Von Pariahs, Happier, ...`}
    />
  </div>
)
