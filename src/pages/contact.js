import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"
import coverImage from "../assets/images/taipei-city2.jpg"

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="聯繫站長" image={image} />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>想要與站長聯繫?</h3>
            <p>
              如有需求想要與站長聯繫，這裡可以留下些資訊送出，但是這裡比較會收到垃圾訊息，所以很容易略過。
            </p>
            <p>
              聯繫站長最快的方式，可以至FB{" "}
              <a href="https://www.facebook.com/jajalaba">JimmyLiao</a>
              私訊我比較妥當，如需回覆請留下正確Email
            </p>
          </article>
          <article>
            <form
              action="https://formspree.io/f/mwkzvqnq"
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">你的大名</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">電子郵件</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">留下訊息</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                送出
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>也許你會喜歡這些地方!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { fields: author }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        area
        id
        altitude
        title
        slug
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact
