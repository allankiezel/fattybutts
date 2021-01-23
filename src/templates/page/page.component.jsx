import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout.js"
import SEO from "../../components/seo"

const PageTemplate = ({ data: { wordpressPage } }) => {
  return (
    <Layout>
      <SEO title={wordpressPage.title} description={wordpressPage.excerpt} />
      <h1>{wordpressPage.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: wordpressPage.content }} />
    </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    }
  }
`
