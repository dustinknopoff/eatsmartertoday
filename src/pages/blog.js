import React from "react"
import SEO from "../components/seo"
import BlogLayout from "../components/blog-layout"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import Wrap from "../components/wrap"
import { Tag } from "../templates/post"

function Blog() {
  return (
    <StaticQuery
      query={PageQuery}
      render={data => {
        return (
          <BlogLayout>
            <SEO title="blog" />
            <Wrap
              left={
                <div style={{ overflowY: "scroll" }}>
                  {data.allMarkdownRemark.edges.map(({ node }) => {
                    return (
                      <Link
                        to={node.fields.slug}
                        style={{ color: "black" }}
                        key={node.fields.slug}
                      >
                        <Excerpt
                          style={{ paddingRight: "4vmin" }}
                          key={node.fields.slug}
                        >
                          <Info>
                            <h2 style={{ paddingLeft: "10px" }}>
                              {node.frontmatter.title}
                            </h2>
                          </Info>
                          <div>
                            <p>
                              {node.frontmatter.tags.map(tag => {
                                return <Tag key={tag}>{tag}</Tag>
                              })}
                            </p>
                          </div>
                          <div
                            dangerouslySetInnerHTML={{ __html: node.excerpt }}
                          />
                        </Excerpt>
                      </Link>
                    )
                  })}
                </div>
              }
            />
          </BlogLayout>
        )
      }}
    />
  )
}

export default Blog

const PageQuery = graphql`
  query PageQuery {
    allMarkdownRemark(filter: { frontmatter: { kind: { eq: "blog" } } }) {
      edges {
        node {
          frontmatter {
            title
            tags
            date
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3vmin;
  padding-top: 6vmin;
  overflow-y: scroll;
  height: 85vh;

  > div {
    width: 50%;
  }

  @media only screen and (max-width: 425px) {
    > div {
      width: 100%;
    }
    height: 100%;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

export const Excerpt = styled.div`
  background: #e5e5e5;
  margin-bottom: 3vh;
  border-radius: 4px;
  padding: 20px 0px 20px 20px;
  margin-right: 0;
  width: 85%;

  :hover {
    box-shadow: 3px 11px 24px -6px rgba(0, 0, 0, 0.75);
  }
`
