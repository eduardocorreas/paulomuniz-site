import React from 'react'
import Img from 'gatsby-image'

export default function PortfolioItem(node) {
  return (
    <div className="w-full sm:w-1/4 mb-2  ml-1 mr-1">
      <Img fluid={node.image.childImageSharp.fluid} />
    </div>
  )
}
