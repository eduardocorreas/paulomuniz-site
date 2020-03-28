/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      {/*<Header siteTitle={data.site.siteMetadata.title} /> */}
      <div>
        <main>{children}</main>
        <footer className="text-center pt-3 pb-3 text-white bg-gray-900">
          Paulo Muniz © {new Date().getFullYear()}
          <br />
          <span className="text-sm text-gray-700">
            Desenvolvido por
            {` `}
            <a href="https://www.flatcodesm.com">Flatcode</a>
          </span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
