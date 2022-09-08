import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from "../components/SEO"
const RecipeTemplate = ({ data }) => {
  const {
    title,
    author,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    images,
  } = data.contentfulRecipe
  const { tags, instructions, ingredients, tools } = content
  return (
    <Layout>
      <SEO title={title} description={description} image={images[0]} />
      <Wrapper className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={getImage(images[0])}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <div className="recipe-title">
                <h2>{title}</h2>
                <p>作者：{author}</p>
              </div>

              <p>{description}</p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>備菜</h5>
                  <p>{prepTime} 分鐘.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>烹煮</h5>
                  <p>{cookTime} 分鐘.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>份量</h5>
                  <p>{servings} 人份</p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                分類 ：
                {tags.map((tag, index) => {
                  return (
                    <Link to={`/tags/${tag}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          {/* rest of images */}
          <section className="recipe-content rest-images">
            {images.slice(1).map((img, idx) => {
              const pathToImage = getImage(img)
              return (
                <GatsbyImage
                  className="rest-single-image"
                  key={idx}
                  image={pathToImage}
                />
              )
            })}
          </section>
          {/* rest of the content */}
          <section className="recipe-content">
            <article>
              <h4>烹調指引</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>步驟 {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>食材準備</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>所需器材</h4>
                {tools.map((tool, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {tool}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  .recipe-title {
    display: flex;
    align-items: center;
    p {
      margin-bottom: 0.3rem;
      margin-left: 1rem;
    }
  }
  .rest-images {
    display: grid;
    gap: 1rem 1rem;

    @media (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .rest-single-image {
      height: 400px;
      object-fit: cover;
      border-radius: 0.5rem;

      @media (min-width: 800px) {
        height: 300px;
      }
    }
  }
`

export const query = graphql`
  query getSingleRecipe($slug: String) {
    contentfulRecipe(slug: { eq: $slug }) {
      id
      author
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      slug
      images {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
