import React from 'react'
import { Container } from 'reactstrap'
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
      <div className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <Container>
          <Link to='/' className='navbar-brand'>{data.site.siteMetadata.title}</Link>
          <ul className='nav navbar-nav'>

            {user && (
              <li className='nav-item'>
                <a href='/admin' className='nav-link'>Admin</a>
              </li>
            )}

            <li className='nav-item'>
              <Link to='/about' className='nav-link'>Features</Link>
            </li>

            <li className='nav-item'>
              <Link to='/about' className='nav-link'>About</Link>
            </li>

            <li className='nav-item'>
              <Link to='/about' className='nav-link'>Blog</Link>
            </li>

            <li className='nav-item'>
              <Link to='/about' className='nav-link btn btn-primary btn-small'>Book Demo</Link>
            </li>

          </ul>
        </Container>
      </div>
      <div className='pageContent'>{children()}
      
      <div className='footer'>A footer here</div>
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
