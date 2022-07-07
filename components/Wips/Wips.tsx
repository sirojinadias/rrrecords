import React, {FunctionComponent} from 'react'
import {Wip} from '../Wip'

export const Wips: FunctionComponent = () => (
  <div className="flex flex-wrap md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
    <Wip
      title="Championne"
      cover="SIM_ILE_NENUPHAR.jpeg"
      details={`Producing a few songs for Rennes-based artist Mathilde Lejas. Amazing songwriter.`}
      link={`https://simonedopale.bandcamp.com/releases`}
    />
    <Wip
      title="Neptune in June"
      cover="BOPS_FLAG.jpg"
      details={`Producing an album for a brand new project called Neptune in June (formerly known as La Houle). If you like lo-fi pop music and distortion, stay tuned.`}
      link={`https://www.youtube.com/watch?v=yehW7DtpNec`}
    />
    <Wip
      title="Edinburgh of the Seven Seas"
      cover="BOPS_FLAG.jpg"
      details={`Producing, recording, mixing and playing some instruments on and for the upcoming Edinburgh of the Seven Seas album. He is an island and also a good friend of us.`}
      link={`https://www.youtube.com/watch?v=yehW7DtpNec`}
    />
    <Wip
      title="Tago Mago"
      cover="BOPS_FLAG.jpg"
      details={`Just finished producing Tago Mago's debut album. A one-of-a-kind Rhodes & drum duo. Recorded live at The Apiary studio, Laval (FR). One track features a guest you might have heard sing in an infamous Dutch band ;-)`}
      link={`https://www.youtube.com/watch?v=Vq1jH2EQ36A`}
    />
    <Wip
      title="Mix With The Masters #2"
      cover="BOPS_FLAG.jpg"
      details={`Just came back from a one-week seminar at the La Fabrique studio with Tchad Blake. Previous one was with Shawn Everett. Both were opportunities to learn from amazing people.`}
      link={`https://www.youtube.com/watch?v=Vq1jH2EQ36A`}
    />
    <Wip
      title="New studio set up"
      cover="BOPS_FLAG.jpg"
      details={`Just found a new home near Nantes. Sharing this studio with Hugo (Von Pariahs, Happier, ...).`}
      link={`https://www.youtube.com/watch?v=Vq1jH2EQ36A`}
    />
    <Wip
      title="Hayden Besswood"
      cover="BOPS_FLAG.jpg"
      details={`Just finished mixing Hayden Besswood's debut album. It is the solo project of Nantes-based artist Quentin Le Gorrec, collaborating with a few people from Inuït & other friends.`}
      link={`https://www.youtube.com/watch?v=Vq1jH2EQ36A`}
    />
  </div>
)
