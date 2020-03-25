const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const {createPage} = actions
  const results = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              description
              path
              title
              imagePath {
                relativePath
              }
            }
          }
        }
      }
    }
  `)
  if (results.errors) {
    console.error(results.errors)
  }

  results.data.allMarkdownRemark.edges.forEach(edge => {
    const { node } = edge
    const { frontmatter } = node
  
    createPage({
      path: frontmatter.path,
      component: path.resolve('src/templates/blog-post.js'),
      context: {
        imageRelativePath: frontmatter.imagePath.relativePath
      }
    })
  })
}
