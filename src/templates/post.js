import React from 'react'
import { graphql } from 'gatsby'
import BlogLayout from '../components/blog-layout'
import Wrap from '../components/wrap'
import SEO from '../components/seo'

export default ({ data }) => {
  return (
    <BlogLayout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <Wrap
        left={
          <div>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <article
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              style={{ textAlign: 'right', paddingRight: '4vmin' }}
            />
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
