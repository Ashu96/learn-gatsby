import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"

export default function blogPost({ data }) {
  const { markdownRemark, file } = data
  const { html, frontmatter } = markdownRemark
  const { childImageSharp } = file

  return (
    <Layout>
      <div className="bg-brand-primary">
        <div className="container mx-auto p-4 lg:px-40 lg:py-10 text-gray-900">
          <h1 className="mb-2 text-2xl lg:text-4xl text-brand-secondary font-heading">
            {frontmatter.title}
          </h1>
          <h2 className="mb-8 text-lg text-brand-secondary font-display">
            {frontmatter.date}
          </h2>
          <Img fluid={childImageSharp.fluid} />
          <p className="mb-20 font-body text-brand-secondary">
            {frontmatter.imageCredit}
          </p>
          <div
            className="font-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!, $imageRelativePath: String!) {
    # First query
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        imageCredit
      }
    }
    # Second query
    file(relativePath: { eq: $imageRelativePath }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
