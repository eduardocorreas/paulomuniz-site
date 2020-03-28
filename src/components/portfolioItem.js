import React from 'react'
import Img from 'gatsby-image'

export default function PortfolioItem(node) {
  return (
    <div className="portfolioContainer">
      <Img fluid={node.image.childImageSharp.fluid} />
    </div>
  )
}
