import React from 'react'
import Img from 'gatsby-image'

export default function PortfolioItem(node) {
  return (
    <div className="w-full sm:w-1/4">
      <Img fluid={node.image.childImageSharp.fluid} />
    </div>
  )
}
