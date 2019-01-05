import React from 'react'
import SEO from '../components/seo'
import BlogLayout from '../components/blog-layout'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import Wrap from '../components/wrap'

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
                <div style={{ overflowY: 'scroll' }}>
                  {data.allMarkdownRemark.edges.map(({ node }) => {
                    return (
                      <Link to={node.fields.slug} style={{ color: 'black' }}>
                        <article
                          style={{ paddingRight: '4vmin' }}
                          key={node.fields.slug}
                        >
                          <Info>
                            <span>{node.frontmatter.date}</span>
                            <h2 style={{ paddingLeft: '10px' }}>
                              {node.frontmatter.title}
                            </h2>
                          </Info>
                          <div>
                            <p>
                              {node.frontmatter.tags.split(',').map(tag => {
                                return tag
                              })}
                            </p>
                          </div>
                          <div
                            dangerouslySetInnerHTML={{ __html: node.excerpt }}
                            style={{ textAlign: 'right' }}
                          />
                        </article>
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

  > div {
    width: 50%;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`
