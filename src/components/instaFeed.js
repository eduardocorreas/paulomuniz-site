import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function InstaFeed() {
  const data = useStaticQuery(graphql`
    query {
      posts: allInstaNode(limit: 6) {
        edges {
          node {
            id
            likes
            comments
            mediaType
            preview
            original
            timestamp
            caption
            localFile {
              childImageSharp {
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            thumbnails {
              src
              config_width
              config_height
            }
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  `)
  return (
    <div className="w-full bg-gray-900 p-10">
      <div className="section-title">
        <h1 className="title text-white">Siga-me no Instagram</h1>
        <p className="subtitle text-white">@paulok1</p>
      </div>
      <div className="flex flex-wrap mb-4">
        {data.posts.edges.map((item, i) =>
          item.node.localFile ? (
            <div key={i} className="w-1/2 p-1">
              <a
                href={'https://instagram.com/p/' + item.node.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img fluid={item.node.localFile.childImageSharp.fluid} />
              </a>
            </div>
          ) : (
            <div>Nada</div>
          )
        )}
      </div>
    </div>
  )
}
