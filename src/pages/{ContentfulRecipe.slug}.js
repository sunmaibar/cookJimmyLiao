import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsShift, BsPinMap, BsBinoculars } from "react-icons/bs"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from "../components/SEO"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import { BLOCKS } from "@contentful/rich-text-types"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"

const RecipeTemplate = ({ data }) => {
  const {
    title,
    content,
    altitude,
    view,
    area,
    bio: { raw },
    images,
    createdAt,
  } = data.contentfulRecipe
  const { tags, instructions, ingredients, tools = [] } = content

  const Text = ({ children }) => <p>{children}</p>
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
    renderText: text =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
  }
  const richText = JSON.parse(raw)
  // const options = {
  //   renderMark: {
  //     [MARKS.BOLD]: text => <p>{text}</p>,
  //   },
  //   renderNode: {
  //     [INLINES.HYPERLINK]: (node, children) => {
  //       const { uri } = node.data
  //       return (
  //         <a href={uri} className="underline">
  //           {children}
  //         </a>
  //       )
  //     },
  //     [BLOCKS.HEADING_2]: (node, children) => {
  //       return <h2>{children}</h2>
  //     },
  //   },
  // }

  return (
    <Layout>
      <SEO
        title={title}
        // description={richText}
        image={`https:${images[0].file.url}`}
      />
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
              </div>
              {/* <p>{description}</p> */}
              {/* <p>{documentToReactComponents(raw)}</p> */}
              <p>{documentToReactComponents(richText, options)}</p>
              <h5 classNmae="created-at">post at {createdAt}</h5>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsShift />
                  <h5>海拔</h5>
                  <p>{altitude} m</p>
                </article>
                <article>
                  <BsBinoculars />
                  <h5>展望</h5>
                  <p>{view ? "風景宜人" : "無評估"} </p>
                </article>
                <article>
                  <BsPinMap />
                  <h5>區域</h5>
                  <p>{area} </p>
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
            {images.length > 1
              ? images.slice(1).map((img, idx) => {
                  const pathToImage = getImage(img)
                  return (
                    <GatsbyImage
                      className="rest-single-image"
                      key={idx}
                      image={pathToImage}
                    />
                  )
                })
              : null}
          </section>
          {/* rest of the content */}
          <section className="recipe-content">
            <article>
              <h4>探險指引</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>指引 {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>注意事項</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
              <div className="have">
                <h4>附近可能有</h4>
                {tools.map((tool, index) => {
                  const { title, link } = tool
                  return link ? (
                    <Link key={index} to={link}>
                      {" "}
                      <p className="bg" key={index}>
                        {title}
                      </p>
                    </Link>
                  ) : (
                    <p key={index}>{title}</p>
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
  .have p.bg {
    font-size: 1.2rem;
    background-color: var(--primary-100);
    border-radius: 0.3rem;
    text-align: center;
    color: var(--white);
  }
  .have p {
    font-size: 1.2rem;
    text-align: center;
  }
  .recipe-info {
    h5 {
      font-size: 0.8rem;
      color: var(--primary-100);
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
      view
      altitude
      area
      content {
        ingredients
        instructions
        tags
        tools {
          link
          title
        }
      }
      createdAt(formatString: "MMMM Do, YYYY")
      bio {
        raw
      }

      slug
      images {
        file {
          url
        }
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`

export default RecipeTemplate
