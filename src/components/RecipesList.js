import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, view, images, altitude, slug } = recipe
        const pathImage = getImage(images[0])
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage image={pathImage} className="recipe-img" alt={title} />
            <h5>{title}</h5>
            <Wrapper>
              海拔: {altitude}m ｜ 展望:{" "}
              {view ? <span className="goodview">風景宜人</span> : "無"}
            </Wrapper>
          </Link>
        )
      })}
    </div>
  )
}
const Wrapper = styled.p`
  .goodview {
    color: var(--primary-100);
  }
`

export default RecipesList
