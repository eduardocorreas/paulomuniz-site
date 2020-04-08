import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import PortfolioItem from './portfolioItem'
import PortfolioVideo from './porfolioVideo'

export default function PortfolioList() {
  const data = useStaticQuery(graphql`
    query {
      modelo: allFile(
        filter: { relativeDirectory: { eq: "portfolio/modelo" } }
      ) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      comida: allFile(
        filter: { relativeDirectory: { eq: "portfolio/comida" } }
      ) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              fluid(maxWidth: 1080) {
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
      <div>
        <p className="subtitle">Fotografia Modelo</p>
        <div className="portfolioContainer-all flex flex-wrap justify-center">
          {data.modelo.edges.map(({ node }, i) => {
            return <PortfolioItem key={i} image={node} />
          })}
        </div>
      </div>
      <div className="mt-10 mb-10">
        <p className="subtitle">Filmagem (Clique para assistir)</p>
        <PortfolioVideo />
      </div>
      <div>
        <p className="subtitle">Fotografias</p>
        <div className="portfolioContainer-all flex flex-wrap justify-center">
          {data.comida.edges.map(({ node }, i) => {
            return <PortfolioItem key={i} image={node} />
          })}
        </div>
      </div>
    </>
  )
}
