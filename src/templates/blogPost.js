import React from 'react'; 
import Layout from "../components/layout"

const BlogPostTemplate = ({data}) => {
    const {html: __html} = data.markdownRemark;
    const {title, author, date, tag} = data.markdownRemark.frontmatter
return(
    <Layout>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <h4>{author}</h4>
        <p>{tag}</p>
        <div
            dangerouslySetInnerHTML={{ __html}}
        />
    </Layout>
)
}

export const POST_BY_PATH = graphql`
query POST_BY_PATH($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      path
      title
      author
      date
      tag
    }
  }
}
`

export default BlogPostTemplate;