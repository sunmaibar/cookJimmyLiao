import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="關於" />
      <main className="page">
        <Wrapper className="about-page">
          <article>
            <h2>關於這個網站</h2>
            <p>
              這個網站提供了很多種食譜，可以協助您在家輕鬆的製作料理，只要自己準備好相關的器材與食材，就能參考食譜製作，自己動手樂趣多。
            </p>

            <p>
              網站設計是由
              <a
                className="jimmyliao"
                href="https://www.facebook.com/jajalaba/"
              >
                JimmyLiao
              </a>
              設計製作，靈感來源是在網路上經常看到有信義區區友分享著自己做的料理，與其分享給大家食用，不如也教大家如何自己做。
            </p>
            <Link to="/contact" className="btn">
              聯繫站長
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="about image"
            className="about-img"
            placeholder="blurred"
          />
        </Wrapper>
        <section className="featured-recipes">
          <h5>看看這些怎麼做的!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
const Wrapper = styled.section`
  .jimmyliao {
    color: var(--primary-600);
    padding: 0 0.4rem;
  }
`
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
export default About
