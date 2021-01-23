import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const PostTemplate = ({ data: { wordpressPost } }) => (
  <Layout>
    <SEO title={wordpressPost.title} description={wordpressPost.excerpt} />
    <h1>{wordpressPost.title}</h1>
    <p>
      Written by {wordpressPost.author.name} on {wordpressPost.date}
    </p>
    <Img
      sizes={wordpressPost.acf.featured_image.localFile.childImageSharp.sizes}
      alt={wordpressPost.title}
      style={{ maxHeight: 450 }}
    />
    <div
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: wordpressPost.content }}
    />
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
      acf {
        featured_image {
          localFile {
            childImageSharp {
              sizes(maxWidth: 1200) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
