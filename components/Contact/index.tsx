import React, {FunctionComponent} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
export const Contact: FunctionComponent = () => (
  <div>
    <div className="text-xl font-medium text-black uppercase">Contact</div>
    <p className="text-gray-500">
      Joris Saïdani
      <br />
      contact at rrrecords.space
    </p>
    <div className="mt-2 flex gap-2">
      <a
        href="https://www.instagram.com/radioraviolirecords"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="text-black w-5" />
      </a>
      <a
        href="https://www.facebook.com/joris.saidani"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className="text-black w-5" />
      </a>
    </div>
  </div>
)
