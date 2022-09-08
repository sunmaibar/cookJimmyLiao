import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, images, prepTime, cookTime, slug } = recipe
        const pathImage = getImage(images[0])
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage image={pathImage} className="recipe-img" alt={title} />
            <h5>{title}</h5>
            <p>
              備料: {prepTime}分鐘 ｜ 烹煮: {cookTime}分鐘
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
