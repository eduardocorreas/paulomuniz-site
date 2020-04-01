import React, { useState } from 'react'
import YoutubeIframe from './youtubeIframe'

export default function PortfolioVideo() {
  const [videos] = useState([
    'knrVchajv1M',
    'pWvNMgVCyXA',
    'fU0Dt9MYVy0',
    'WK_owg4qNLI',
    'FBcw7xwKM4k',
  ])

  const params = 'fs=1&modestbranding=1&egm=1&rel=0'

  return (
    <div className="portfolioContainer-all">
      {videos.map(id => {
        return (
          <div className="portfolioContainer">
            <YoutubeIframe id={id} params={params} />
          </div>
        )
      })}
    </div>
  )
}
