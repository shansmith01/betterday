import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'   
import Footer from '../layouts/footer'

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
      
      <Footer />

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
