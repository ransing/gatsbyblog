import React from "react"
import { Link, graphql } from "gatsby"
import postList from "../components/postList.js"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostList from "../components/postList.js";

const IndexPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges 
  return (
  <Layout>
    {console.log(data)}
    <SEO title="Home" />
    <h1>Hi people</h1>
    <PostList post={posts}/>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
}


export const MY_QUERY = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    distinct(field: id)
    edges {
      node {
        frontmatter {
          author
          date
          path
          tag
          title
        }
        html
        id
      }
    }
  }
}
`


export default IndexPage
