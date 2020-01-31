/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
// import { StaticQuery, graphql } from 'gatsby'
import Navbar from '../components/Navbar/index'
import Footer from './Footer'
import "./layout.css"

const Layout = ({ children }) => (
      <>
        <Navbar />
        <div
          style={{
            margin: `0 auto`,
            overflow: `hidden`,
            padding: `0`,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
