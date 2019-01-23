import React from "react"
import styled, { css } from "styled-components"
import { StaticQuery, graphql } from "gatsby"

class Centerfold extends React.Component {
  state = {
    index: 0,
  }

  handleClick = e => {
    this.setState({ index: e })
  }

  render() {
    return (
      <StaticQuery
        query={PageQuery}
        render={data => {
          return (
            <Wrapper>
              <LBT>
                {data.allMarkdownRemark.edges.map(({ node }) => {
                  if (node.frontmatter.index === this.state.index) {
                    return (
                      <Button
                        onClick={() => this.handleClick(node.frontmatter.index)}
                        key={node.frontmatter.index}
                        name={`services-${node.frontmatter.title}`}
                        curr
                      >
                        {node.frontmatter.title}
                      </Button>
                    )
                  } else {
                    return (
                      <Button
                        onClick={() => this.handleClick(node.frontmatter.index)}
                        key={node.frontmatter.index}
                        name={`faq/${node.frontmatter.title}`}
                      >
                        {node.frontmatter.title}
                      </Button>
                    )
                  }
                })}
              </LBT>
              <Info
                dangerouslySetInnerHTML={{
                  __html:
                    data.allMarkdownRemark.edges[this.state.index].node.html,
                }}
              />
            </Wrapper>
          )
        }}
      />
    )
  }
}

export default Centerfold

const PageQuery = graphql`
  query OptionsQuery {
    allMarkdownRemark(filter: { frontmatter: { kind: { eq: "home" } } }) {
      edges {
        node {
          frontmatter {
            title
            index
          }
          html
        }
      }
    }
  }
`

export const Button = styled.button`
  background: transparent; /* Green */
  border: none;
  color: #efefef;
  text-decoration: none;
  font-size: 2vw;
  text-align: left;
  padding: 5px 20px 5px 20px;
  margin: 0;
  ${props =>
    props.curr &&
    css`
      background: rgba(255, 255, 255, 0.1);
    `};

  @media only screen and (max-width: 425px) {
    font-size: 5vw;
  }
`

export const LBT = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media only screen and (max-width: 425px) {
    flex-direction: row;
    width: 80vw;
    flex-wrap: wrap-reverse;
  }
`

export const Info = styled.p`
  background: rgba(255, 255, 255, 0.1);
  min-width: 30vw;
  min-height: 20vh;
  padding: 10px;
  margin: 0;
  color: #efefef;

  @media only screen and (max-width: 425px) {
    font-size: 6vw;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 425px) {
    flex-direction: column;
    width: 80vw;
  }
`
