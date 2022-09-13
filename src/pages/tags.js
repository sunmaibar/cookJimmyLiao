import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import SEO from "../components/SEO"
import coverImage from "../assets/images/taipei-city2.jpg"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <SEO title="景點分類" image={coverImage} />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            // const slug = slugify(text, { lower: true })

            return (
              <Link className="tag" key={index} to={`/tags/${text}`}>
                <h5>{text}</h5>
                <p>{value} 個點</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
