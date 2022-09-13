import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
            <p>
              海拔: {altitude}m ｜ 展望: {view ? "風景宜人" : "無評估"}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
