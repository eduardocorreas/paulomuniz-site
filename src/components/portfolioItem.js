import React from 'react'
import Img from 'gatsby-image'

export default function PortfolioItem(node) {
  console.log(node)
  return (
    <div className="w-full sm:w-1/4 mb-1">
      <Img fluid={node.image.childImageSharp.fluid} />
    </div>
  )
}
