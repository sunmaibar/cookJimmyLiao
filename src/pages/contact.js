import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="聯繫站長" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>想要與站長聯繫?</h3>
            <p>
              美食人人愛，若能在家親自動手做給親愛的家人，那種幸福感與成就感是無法言喻。
            </p>
            <p>
              網站上的食譜資訊，皆由地方上的賢慧媽媽提供，再由版主親自拍照整理文字資料，上傳到網站上彙整。
            </p>
            <p>想要與網站版主聯繫發送訊息，請詳細填寫資訊給我，感謝。</p>
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
          <h5>看看這些怎麼做的!</h5>
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
        cookTime
        id
        prepTime
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
