import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function InstaFeed() {
  const data = useStaticQuery(graphql`
    query {
      posts: allInstaNode(limit: 10) {
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
    <div className="w-full bg-gray-900 p-10 sm:p-20">
      <div className="section-title mb-5">
        <h1 className="title text-white">Siga-me no Instagram</h1>
        <p className="subtitle text-white">
          <a
            href="https://instagram.com/paulok1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @paulok1
          </a>
        </p>
      </div>
      <div className="flex flex-wrap ml-1 mr-1 mb-4 sm:pl-32 sm:pr-32 sm:pt-10 sm:pb-0 justify-center">
        {data.posts.edges.map((item, i) =>
          item.node.localFile ? (
            <div key={i} className="w-32 p-1 sm:w-40 sm:p-3">
              <a
                href={'https://instagram.com/p/' + item.node.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img fluid={item.node.localFile.childImageSharp.fluid} />
              </a>
            </div>
          ) : (
            <div className="text-white text-center">
              Não foi possível retornar as publicações
            </div>
          )
        )}
      </div>
    </div>
  )
}
