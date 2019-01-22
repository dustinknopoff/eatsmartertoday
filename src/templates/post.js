import React from "react"
import { graphql } from "gatsby"
import BlogLayout from "../components/blog-layout"
import Wrap from "../components/wrap"
import SEO from "../components/seo"
import styled from "styled-components"

export default ({ data }) => {
  console.log(data.markdownRemark.frontmatter.tags)
  return (
    <BlogLayout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <Wrap
        left={
          <div>
            <Excerpt>
              <h1>{data.markdownRemark.frontmatter.title}</h1>
              <div>
                {data.markdownRemark.frontmatter.tags.map(tag => {
                  return <Tag key={tag}>{tag}</Tag>
                })}
              </div>
              <article
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                style={{ paddingRight: "4vmin" }}
              />
            </Excerpt>
          </div>
        }
      />
    </BlogLayout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`

export const Tag = styled.span`
  padding: 5px;
  margin: 5px;
  background: #dddddd;
  border-radius: 4px;

  :hover {
    box-shadow: 3px 11px 24px -6px rgba(0, 0, 0, 0.75);
  }
`

export const Excerpt = styled.div`
  background: #e5e5e5;
  margin-bottom: 3vh;
  border-radius: 4px;
  padding: 20px 0px 20px 20px;
  margin-right: 0;
  width: 90%;
  min-height: 75vh;

  :hover {
    box-shadow: 3px 11px 24px -6px rgba(0, 0, 0, 0.75);
  }
`
