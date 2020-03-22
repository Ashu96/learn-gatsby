/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./Header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="min-h-screen">{children}</main>
      <footer className="bg-brand-secondary">
        <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-center px-6 py-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center mb-2 md:mb-0">
            <Link
              to="/"
              className="mb-2 md:mb-0 flex items-baseline text-3xl text-brand-blue font-heading tracking-wide"
            >
              Travel Shop
            </Link>
            <div className="md:ml-4 font-body">
              <span className="mr-4">All rights reserved</span>
              <span className="">Copyright © {new Date().getFullYear()}</span>
            </div>
          </div>
          <div className="font-body">
            <p className="">
              Made with love by{" "}
              <a className="text-brand-blue" href="https://iamashutosh.now.sh">
                Ashutosh
              </a>
            </p>
            <p className="text-xs text-brand-primary">
              Lottie animation by:{" "}
              <a href="https://lottiefiles.com/user/3313">LK Jing</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
