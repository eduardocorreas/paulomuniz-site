import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

export default function SocialIcons() {
  return (
    <div className="flex pl-20 pr-20 justify-center">
      <a
        href="https://instagram.com/paulok1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-white w-5 mx-auto  mr-5 ml-5"
        />
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=5591984051541"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-white w-5 mx-auto mr-5 ml-5"
        />
      </a>

      <a
        href="mailto:contato@paulomuniz.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-white w-5 mx-auto   mr-5 ml-5"
        />
      </a>
    </div>
  )
}
