const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const aboutPage = path.resolve(`./src/templates/about-page.js`)
  const speakingPage = path.resolve(`./src/templates/speaking-page.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                type
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const about = result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type === 'blog')
 
  about.forEach((post, index) => {
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug
      },
    })
  })

  // Create about page
  const speaking = result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type === 'about')
  speaking.forEach((post, index) => {
    createPage({
      path: post.node.fields.slug,
      component: aboutPage,
      context: {
        slug: post.node.fields.slug
      },
    })
  })

  // Create about page
  const posts = result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.type === 'speaking')
  posts.forEach((post, index) => {
    createPage({
      path: post.node.fields.slug,
      component: speakingPage,
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
