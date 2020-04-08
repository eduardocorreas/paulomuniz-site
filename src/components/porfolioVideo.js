import React, { useState } from 'react'
import Img from 'gatsby-image'
import YoutubeIframe from './youtubeIframe'

import { useStaticQuery, graphql } from 'gatsby'

import { Dialog, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

export default function PortfolioVideo() {
  //https://reacttraining.com/reach-ui/dialog/

  const [showDialog, setShowDialog] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState('')
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  const params = 'fs=1&modestbranding=1&egm=1&rel=0'

  const data = useStaticQuery(graphql`
    query {
      thumbs: allFile(
        filter: { relativeDirectory: { eq: "portfolio/thumbs" } }
      ) {
        edges {
          node {
            id
            name
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

  function showModal(name) {
    setSelectedVideo(name)
    open()
  }

  return (
    <>
      <div className="portfolioContainer-all flex flex-wrap ">
        {data.thumbs.edges.map(({ node }, i) => {
          return (
            <div className="w-full sm:w-1/3 mb-3">
              <a onClick={() => showModal(node.name)}>
                <Img fluid={node.childImageSharp.fluid} />
              </a>

              <Dialog
                style={{
                  color: 'red',
                  width: '100vw',
                  marginLeft: 5,
                  marginRight: 5,
                }}
                isOpen={showDialog}
                onDismiss={close}
              >
                <YoutubeIframe id={selectedVideo} params={params} />
                <button onClick={close}>Fechar</button>{' '}
              </Dialog>
            </div>
          )
        })}
      </div>
    </>
  )
}
