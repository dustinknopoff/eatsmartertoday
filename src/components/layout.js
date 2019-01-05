import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import './layout.css'
import styled from 'styled-components'
import Obfuscate from 'react-obfuscate'
import { Mail } from 'react-feather'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => (
      <div>
        {children}
        <footer>
          <Title as={Link} to="/">
            <h1>{data.site.siteMetadata.title}</h1>
            <h3>With {data.site.siteMetadata.author}</h3>
          </Title>
          <Blog as={Link} to="blog">
            <span>Life</span>
          </Blog>
          <EML as={Obfuscate} email="eatsmartertoday@gmail.com" name="email">
            <Mail />
          </EML>
        </footer>
      </div>
    )}
  />
)

export default Layout

export const Wrapper = styled.div`
  width: 100vh;
  height: 100vw;
  background: url('https://res.cloudinary.com/dknopoff/image/upload/e_blur:2000/v1530884985/portfolio/jonathan-gallegos-726027-unsplash.jpg')
    no-repeat center center fixed;
  color: white;
`

export const Title = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  margin: 5vw;
  margin-bottom: 0;
`

export const Blog = styled.div`
  position: fixed;
  right: 0;
  margin: 5vw;
  bottom: 0;
  font-weight: 700;
`

export const EML = styled.a`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 5vh;
`
