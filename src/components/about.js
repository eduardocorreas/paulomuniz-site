import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="bg-gray-900 text-white p-5 sm:p-20">
      <div className="section-title">
        <h1 className="title">Sobre mim</h1>
      </div>
      <Img
        fluid={data.profile.childImageSharp.fluid}
        className="rounded-full w-2/4 sm:w-32 sm:p-20 mx-auto mb-10"
      />
      <p className="text-center text-xl sm:pl-10 sm:pr-10 pb-10">
        Trabalho há 6 anos com publicidade e produção de conteúdo e só tem três
        coisas que posso afirmar: <br /> não trabalho com mídia social; Luz é
        tudo que precisamos; e resumir meu trabalho em palavras é uma coisa
        quase impossível de se fazer. <br />
        Então da uma olha aí.
      </p>
    </div>
  )
}
