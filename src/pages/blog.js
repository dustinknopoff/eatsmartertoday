import React from "react"
import SEO from "../components/seo"
import BlogLayout from "../components/blog-layout"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import Wrap from "../components/wrap"
import { Tag } from "../templates/post"
import _ from "lodash"

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
                <Left>
                  {data.allMarkdownRemark.edges.map(({ node }) => {
                    return (
                      <Excerpt
                        style={{ paddingRight: "4vmin" }}
                        key={node.fields.slug}
                      >
                        <Link
                          to={node.fields.slug}
                          style={{ color: "black" }}
                          key={node.fields.slug}
                        >
                          <Info>
                            <h2 style={{ paddingLeft: "10px" }}>
                              {node.frontmatter.title}
                            </h2>
                          </Info>
                        </Link>
                        <div>
                          <p>
                            {node.frontmatter.tags.map(tag => {
                              return (
                                <Tag
                                  as={Link}
                                  to={`/blog/tags/${_.kebabCase(tag)}`}
                                  key={tag}
                                >
                                  {tag}
                                </Tag>
                              )
                            })}
                          </p>
                        </div>
                        <Link
                          to={node.fields.slug}
                          style={{ color: "black" }}
                          key={node.fields.slug}
                        >
                          <div
                            dangerouslySetInnerHTML={{ __html: node.excerpt }}
                          />
                        </Link>
                      </Excerpt>
                    )
                  })}
                </Left>
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
    allMarkdownRemark(
      filter: { fields: { sourceInstanceName: { eq: "blog" } } }
    ) {
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

  > div {
    width: 50%;
  }

  @media only screen and (max-width: 937px) {
    > div {
      width: 100%;
    }
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

  @media only screen and (max-width: 937px) {
    width: 100%;
  }
`

export const Left = styled.div`
  overflow-y: scroll;
  height: 85vh;

  @media only screen and (max-width: 937px) {
    height: 100%;
  }
`
