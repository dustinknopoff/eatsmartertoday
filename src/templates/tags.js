import React from "react"
import SEO from "../components/seo"
import BlogLayout from "../components/blog-layout"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Wrap from "../components/wrap"
import { Tag } from "./post"
import _ from "lodash"
import { Left } from "../pages/blog"

class Blog extends React.Component {
  render() {
    const data = this.props.data
    const tag = this.props.pageContext.tag
    return (
      <BlogLayout>
        <SEO title={`blog - ${tag}`} />
        <Wrap
          tag={tag}
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
                      <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    </Link>
                  </Excerpt>
                )
              })}
            </Left>
          }
        />
      </BlogLayout>
    )
  }
}

export default Blog

export const TagQuery = graphql`
  query TagQuery($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, kind: { eq: "blog" } } }
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
  height: 85vh;

  > div {
    width: 50%;
  }

  @media only screen and (max-width: 937px) {
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
