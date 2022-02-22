import React, {FunctionComponent} from 'react'
import {Record} from '../Record'

export const Records: FunctionComponent = () => (
  <div className="flex flex-wrap md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
    <Record
      title="Sounds of Parade"
      artist="Bops"
      cover="BOPS_SOUNDS_OF_PARADE.jpg"
      details={`Production, record & mix (with Baï). Recorded at The Apiary, Laval (FR), La Chambre Jaune, Chateaubourg (FR) & lounges. Mixed at Studio 123, Romillé (FR).`}
      link={`https://modulor.lnk.to/SoundsOfParade`}
      tags={`#radioraviolirecords #bops #soundsofparade`}
    />
    <Record
      title="R.A.V.A.C.H.O.L"
      artist="Bops"
      cover="BOPS_RAVACHOL.jpg"
      details={`Production, record & mix (with Baï). Recorded at The Apiary, Laval (FR), La Chambre Jaune, Chateaubourg (FR) & lounges. Mixed at Studio 123, Romillé (FR).`}
      link={`https://www.youtube.com/watch?v=VhqiaaFPnRs`}
      tags={`#radioraviolirecords #bops #ravachol`}
    />
    <Record
      title="Écailles synthétiques"
      artist="Simone d'Opale"
      cover="SIM_ECAILLES.jpg"
      details={`Production, record & mix. Recorded & mixed at Trempolino, Nantes (FR).`}
      link={`https://www.youtube.com/watch?v=MnI-GQpM1ro`}
      tags={`#radioraviolirecords #simonedopale #ecaillessynthetiques`}
    />
    <Record
      title="Bouncer (Live Session)"
      artist="Bops"
      cover="BOPS_BOUNCER_LIVE.png"
      details={`Mixed at Trempolino, Nantes (FR).`}
      link={`https://www.youtube.com/watch?v=MCJ7n_AjeLs`}
      tags={`#radioraviolirecords #bops #bouncer`}
    />
    <Record
      title="Novomax Live"
      artist="Simone d'Opale"
      cover="SIM_NOVOMAX.png"
      details={`Mixed at Trempolino, Nantes (FR).`}
      link={`https://www.youtube.com/watch?v=TiFJdhToplE`}
      tags={`#radioraviolirecords #simonedopale #novomax`}
    />
    <Record
      title="Ferrailleur Live"
      artist="Birds in Row"
      cover="BIR_FERRAILLEUR.png"
      details={`Mixed at Trempolino, Nantes (FR).`}
      link={`https://www.youtube.com/watch?v=my5V6Xf6-pM`}
      tags={`#radioraviolirecords #birdsinrow #ferrailleur`}
    />
    <Record
      title="Bouncer"
      artist="Bops"
      cover="BOPS_BOUNCER.jpg"
      details={`Production, record & mix (with Baï). Recorded at The Apiary, Laval (FR), La Chambre Jaune, Chateaubourg (FR) & lounges. Mixed at Studio 123, Romillé (FR).`}
      link={`https://bops.bandcamp.com/track/bouncer`}
      tags={`#radioraviolirecords #bops #bouncer`}
    />
    <Record
      title="A Loop in the Eye of God"
      artist="White Night Ghosts"
      cover="WNG_LOOP.jpg"
      details={`Mix & production`}
      link={`https://whitenightghosts.bandcamp.com/album/a-loop-in-the-eye-of-god`}
      tags={`#radioraviolirecords #whitenightghosts #aloopintheeyeofgod #cranesrecords`}
    />
    <Record
      title="Fragmented Ghost Memory"
      artist="White Night Ghosts"
      cover="WNG_FGM.jpg"
      details={`Mix & production`}
      link={`https://whitenightghosts.bandcamp.com/album/fragmented-ghost-memory`}
      tags={`#radioraviolirecords #whitenightghosts #fragmentedghostmemory #cranesrecords`}
    />
    <Record
      title="Songs for Marge"
      artist="Fragments"
      cover="FRA_SFM.jpg"
      details={`Record & mix. Recorded at Le Novomax, Kemper (FR). Mixed at Trempolino, Nantes (FR)`}
      link={`https://frgmnts.bandcamp.com/album/songs-for-marge`}
      tags={`#radioraviolirecords #fargo #fragments #ambiant #electronica #recording #mixing #novomax #coenbrothers`}
    />
    <Record
      title="Exorcism Party"
      artist="White Night Ghosts"
      cover="WNG_EXORCISM.jpg"
      details={`Full analog mix & production`}
      link={`https://whitenightghosts.bandcamp.com/album/exorcism-party`}
      tags={`#radioraviolirecords #whitenightghosts #exorcismparty #cranesrecords`}
    />
    <Record
      title="Massifs"
      artist="Fragments"
      cover="FRA_MASSIFS.jpg"
      details={`Record, mix & digital master. Recorded at The Apiary, Laval (FR)`}
      link={`https://frgmnts.bandcamp.com/track/massifs`}
      tags={`#radioraviolirecords #fragments #massifs`}
    />
    <Record
      title="Joy"
      artist="White Night Ghosts"
      cover="WNG_JOY.jpg"
      details={`Mix & production`}
      link={`http://whitenightghosts.bandcamp.com/album/joy`}
      tags={`#radioraviolirecords #whitenightghosts #joy #cranesrecords #largebinocularrecords`}
    />
  </div>
)
