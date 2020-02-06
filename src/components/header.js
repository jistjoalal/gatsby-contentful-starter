import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import get from 'lodash/get'

import Navbar from 'react-bootstrap/Navbar'

import Navi from './navi'

class Header extends React.Component {
  render() {
    const { siteTitle } = this.props
    const banner = get(this, 'props.data.banner.childImageSharp.fluid')
    const logo = '/media/logo.gif'
    return (
      <BackgroundImage alt="banner" fluid={banner} preserveStackingContext>
        <Navbar
          as="header"
          expand="lg"
          className="semi-transparent"
          style={{
            minHeight: '5rem',
            padding: '1.4rem',
          }}
        >
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{
                  width: '200px',
                  marginTop: '.5rem',
                  marginBottom: '-.75rem',
                  marginLeft: '1rem',
                }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar" className="mb-2">
            <Navi siteTitle={siteTitle} />
          </Navbar.Collapse>
        </Navbar>
        <div
          className="more-transparent"
          style={{ height: '1rem', marginBottom: '1rem' }}
        />
      </BackgroundImage>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        banner: file(relativePath: { eq: "space.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)
