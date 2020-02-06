import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import get from 'lodash/get'

import Navi from './navi'

class Footer extends React.Component {
  render() {
    const { siteTitle } = this.props
    const banner = get(this, 'props.data.file.childImageSharp.fluid')
    return (
      <BackgroundImage alt="banner" fluid={banner} preserveStackingContext>
        <div className="more-transparent" style={{ height: '1rem' }} />
        <footer className="semi-transparent">
          <div className="container p-3">
            <Navi
              siteTitle={siteTitle}
              style={{
                display: 'flex',
                justifyContent: 'center',
                maxHeight: '8rem',
              }}
            />
            <hr />
            <p className="d-flex justify-content-center p-3 m-0">
              Copyright © {new Date().getFullYear()} -&nbsp;
              <Link to="/">{siteTitle}</Link>
            </p>
          </div>
        </footer>
      </BackgroundImage>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "space.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} {...props} />}
  />
)
