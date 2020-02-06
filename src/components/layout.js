import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

import '../scss/main.scss'
import '@fortawesome/fontawesome-free/js/all'

class Layout extends React.Component {
  render() {
    const { pageTitle, children, description } = this.props
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
    return (
      <>
        <Helmet title={title}>
          <html lang="en" />
          <meta name="robots" content="all" />
          <meta name="Description" content={description} />
        </Helmet>
        <Header siteTitle={siteTitle} />
        <main className="container mb-4">{children}</main>
        <Footer siteTitle={siteTitle} />
      </>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
