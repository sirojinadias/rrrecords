import React, {FunctionComponent} from 'react'
import {Wip} from '../Wip'

export const Wips: FunctionComponent = () => (
  <div className="flex flex-wrap md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
    <Wip
      title="Mad Foxes"
      details={`About to mix upcoming Mad Foxes album !`}
    />
    <Wip
      title="Elise Bourn"
      details={`About to mix some songs on upcoming Nantes-based talented folk artist Elise Bourn !`}
    />
    <Wip
      title="Championne"
      details={`Producing a few songs for Rennes-based artist Mathilde Lejas. Amazing songwriter.`}
    />
    <Wip
      title="Neptune in June"
      details={`Producing an album for a brand new project called Neptune in June (formerly known as La Houle). If you like lo-fi pop music and distortion, stay tuned.`}
    />
    <Wip
      title="Wonderboy"
      details={`About to mix some new songs of the Rennes-based artist Wonderboy.`}
    />
    <Wip
      title="Edinburgh of the Seven Seas"
      details={`Producing, recording, mixing and playing some instruments on and for the upcoming Edinburgh of the Seven Seas album. He is an island and also a good friend of us.`}
    />
    <Wip
      title="Mix With The Masters #2"
      details={`Just came back from a one-week seminar at the La Fabrique studio with Tchad Blake. Previous one was with Shawn Everett. Both were opportunities to learn from amazing people.`}
    />
    <Wip
      title="New studio set up"
      details={`Just found a new home near Nantes. Sharing this studio with Hugo from Von Pariahs, Happier, ...`}
    />
  </div>
)
