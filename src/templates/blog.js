import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'

import Layout from '../components/layout'

export default class Blog extends React.Component {
  render() {
    const post = get(this, 'props.data.contentfulBlog')
    return (
      <Layout pageTitle={post.title}>
        <h1>{post.title}</h1>
        <hr />
        <Img fluid={post.heroImage.fluid} />
        <hr />
        {post.body && (
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        )}
      </Layout>
    )
  }
}

export const Query = graphql`
  query BlogQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
