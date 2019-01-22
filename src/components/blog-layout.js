import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BlogLayout = ({ children }) => (
  <Back>
    {children}
    <Footer>
      <Linker as={Link} to="/">
        Home
      </Linker>
    </Footer>
  </Back>
)

export default BlogLayout

export const Back = styled.div`
  background: #eee;
  min-height: 100vh;
  width: 100vw;
  margin-top: 25vh;
  color: black;
`

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 6vmin;
`

export const Linker = styled.a`
  font-weight: 900;
  color: black;
`
