import './markdown.less'

import { graphql } from 'gatsby'
import React from 'react'

import BackWard from './backward'
import NavigationBar from './navigation-bar'

class MarkdownRemark {
  html!: string
  frontmatter!: {
    path: string
    //title: string
  }
}

interface MarkDownProps {
  data: { markdownRemark: MarkdownRemark }
}

// this prop will be injected by the GraphQL query below.
export default function Template({ data }: MarkDownProps) {
  const html = data.markdownRemark.html
  //const title = data.markdownRemark.frontmatter.title
  const path = data.markdownRemark.frontmatter.path
  return (
    <div>
      <div className="md-div">
        <BackWard path={path} />
        <NavigationBar paths={path.substring(1)} />
        <div className="md-main" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
      }
    }
  }
`
