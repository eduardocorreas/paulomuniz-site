import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import PortfolioItem from './portfolioItem'
import PortfolioVideo from './porfolioVideo'

export default function PortfolioList() {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "portfolio" } }) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <PortfolioVideo />
      <div className="portfolioContainer-all">
        {data.images.edges.map(({ node }, i) => {
          return <PortfolioItem key={i} image={node} />
        })}
      </div>
    </>
  )
}
