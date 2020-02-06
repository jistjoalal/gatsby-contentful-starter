const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogQuery = await graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  if (blogQuery.errors) console.error(blogQuery.errors)

  const posts = blogQuery.data.allContentfulBlog.edges
  const blogTemplate = path.resolve('./src/templates/blog.js')
  posts.forEach(post => {
    createPage({
      path: `/blog/${post.node.slug}`,
      component: blogTemplate,
      context: {
        slug: post.node.slug,
      },
    })
  })
}
