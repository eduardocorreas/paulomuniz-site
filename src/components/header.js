import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header style={{ position: 'relative' }}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 150,
        }}
      >
        <Img fluid={data.logo.childImageSharp.fluid} />
      </div>
    </header>
  )
}
