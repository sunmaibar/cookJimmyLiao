import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"
import coverImage from "../assets/images/taipei-city2.jpg"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="關於" image={coverImage} />
      <main className="page">
        <Wrapper className="about-page">
          <article>
            <h2>關於南港山系網站</h2>
            <p>
              南港山系網站主要介紹地方上的景點，山上的一些人事物紀錄，網站作者
              <a
                className="jimmyliao"
                href="https://www.facebook.com/jajalaba/"
              >
                JimmyLiao
              </a>{" "}
              是網頁程式設計師，攝影師，3D電腦動畫師，
              平日也都會上山運動，已經有在山上活動約20年，從小就在這座山中打轉。
            </p>

            <p>
              網站作者只是一般老百姓，自己學習寫程式，一點一滴把這個網站寫出來，網站不周的地方請多包涵，網站後台的程式挺複雜的，主要的目的，還是希望多介紹些有趣的景點給大家認識，希望大家會喜歡。
            </p>
            <Link to="/contact" className="btn">
              聯繫站長
            </Link>
          </article>
          <StaticImage
            src="../assets/images/taipei-vity-about.jpg"
            alt="about image"
            className="about-img"
            placeholder="blurred"
          />
        </Wrapper>
        <section className="featured-recipes">
          <h5>也許你會喜歡這些地方!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
const Wrapper = styled.section`
  .jimmyliao {
    color: var(--primary-400);
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
        area
        id
        title
        slug
        altitude
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
export default About
