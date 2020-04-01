import React from 'react'

export default function YoutubeIframe({ id, params }) {
  return (
    <iframe
      className="w-full"
      src={'https://www.youtube.com/embed/' + id + '?' + params}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      onAbort
      key={id}
      title={id}
    ></iframe>
  )
}
