import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'

export default class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlog.edges')
    return (
      <Layout pageTitle="Blog">
        <h1>Blog Posts</h1>
        {posts.map(({ node }) => (
          <Link key={node.slug} to={`/blog/${node.slug}`}>
            {node.title}
          </Link>
        ))}
      </Layout>
    )
  }
}

export const BlogQuery = graphql`
  {
    allContentfulBlog {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
