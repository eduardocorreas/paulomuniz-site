import React from 'react'

import Layout from '../components/layout'
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Hero />
    <About />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
