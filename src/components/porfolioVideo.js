import React, { useState } from 'react'
import YoutubeIframe from './youtubeIframe'

export default function PortfolioVideo() {
  const [videos] = useState([
    'knrVchajv1M',
    'pWvNMgVCyXA',
    'fU0Dt9MYVy0',
    'WK_owg4qNLI',
  ])

  const params = 'fs=1&modestbranding=1&egm=1&rel=0'

  return (
    <div className="portfolioContainer-all flex flex-wrap ">
      {videos.map(id => {
        return (
          <div className="w-full mb-3 sm:w-1/4">
            <YoutubeIframe id={id} params={params} />
          </div>
        )
      })}
    </div>
  )
}
