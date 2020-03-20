/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              imagePath {
                relativePath
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(
      "exports.createPages -> node.frontmatter.imagePath.relativePath",
      node.frontmatter.imagePath.relativePath
    )
    createPage({
      path: `blogs${node.frontmatter.path}`,
      component: path.resolve(`src/templates/post.js`),
      context: {
        slug: node.frontmatter.path,
        imagePath: node.frontmatter.imagePath.relativePath,
      },
    })
  })
}
