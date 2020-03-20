import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import BlogCard from "../components/BlogCard"
// import Button from "../components/Button"

const BACKGROUND_FILL = "#FAFAFA"

const BlogPage = ({ data }) => {
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <section className="bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center p-4 md:p-6 lg:px-10 lg:py-20">
          <div className="flex flex-col items-start lg:w-1/2">
            <p className="mb-2 max-w-lg lg:text-lg lg:max-w-xl uppercase font-body tracking-wide">
              The Marvel shop
            </p>
            <h1 className="mb-12 text-3xl md:text-4xl text-gray-900  font-display">
              Read our latest Marvel stories on blog page
            </h1>
          </div>
          <div className="relative lg:w-1/2 mx-auto">
            <img
              className="max-w-md"
              src={require("../assets/illustrations/adventure.svg")}
              alt="adventure"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 mb-12 md:mb-24 xl:mb-32">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="md:-mt-10 lg:-mt-16 bg-white fill-current"
        >
          <path
            fill={BACKGROUND_FILL}
            d="M0,64L60,58.7C120,53,240,43,360,69.3C480,96,600,160,720,186.7C840,213,960,203,1080,186.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="container mx-auto flex flex-col items-center p-6">
          {edges.map(({ node }) => {
            const { path, description, title, date, banner } = node.frontmatter
            return (
              <BlogCard
                key={path}
                tag={date}
                title={title}
                body={description}
                imageSrc={banner}
                path={path}
              />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            date(fromNow: true)
            banner
            description
          }
        }
      }
    }
  }
`
