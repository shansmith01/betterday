import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// main site style
import './index.scss'

const TemplateWrapper = ({ children, data }) => {
  let user
  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
  }
  return (
    <div className='App'>
      <Helmet title={data.site.siteMetadata.title} />
      <div className='navbar navbar-expand-sm navbar-dark'>
        <Container>
          <Link to='/' className='navbar-brand'>{data.site.siteMetadata.title}</Link>
          <ul className='nav navbar-nav'>

            <li className='nav-item'>
              <Link to='/leaders' className='nav-link' activeClassName="active">For leaders</Link>
            </li>

            <li className='nav-item'>
              <Link to='/employees' className='nav-link' activeClassName="active">For Employees</Link>
            </li>

            <li className='nav-item'>
              <Link to='/about-us' className='nav-link' activeClassName="active">About</Link>
            </li>

            <li className='nav-item'>
              <Link to='/about' className='nav-link btn btn-primary btn-small'>Book Demo</Link>
            </li>

          </ul>
        </Container>
      </div>
      <div className='pageContent'>{children()}
      
      <Container fluid className="darkbluebg py-5">
      <Container>
        <Row>
          <Col md="4" className="mb-3">
            <h2>Product</h2>
            <div><Link to='/leaders'>For Leaders</Link></div>
            <div><Link to='/employees'>For Employees</Link></div>
            <div><Link to='/demo'>Request A Demo</Link></div>
          </Col>
          <Col md="4" className="mb-3">
          <h2>Other Goodness</h2>
          <div><Link to='/about'>About us</Link></div>
          <div><Link to='/support'>Support</Link></div>
          <div><Link to='/privacy'>Privacy Policy</Link></div>
          <div><Link to='/cookies'>Cookie Policy</Link></div>
          </Col>
          <Col md="4" className="mb-3">
            <h2>Keep in Touch</h2>
            <div><Link to='contact-us'>Contact us</Link></div>
          </Col>
        </Row>
        </Container>
      </Container>
      </div>
      
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
