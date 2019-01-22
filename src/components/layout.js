import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import "./layout.css"
import styled from "styled-components"
import Obfuscate from "react-obfuscate"
import { Mail } from "react-feather"

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
        <Header>
          <Link to="/">
            <h1>{data.site.siteMetadata.title}</h1>
            <h3>With {data.site.siteMetadata.author}</h3>
          </Link>
          <EML as={Obfuscate} email="eatsmartertoday@gmail.com" name="email">
            <Mail />
          </EML>
        </Header>
        {children}
        <Blog as={Link} to="blog">
          <span>Life</span>
        </Blog>
      </div>
    )}
  />
)

export default Layout

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Blog = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 5vw;
  font-weight: 700;
`

export const EML = styled.a`
  transform: translateX(-50%);
`
