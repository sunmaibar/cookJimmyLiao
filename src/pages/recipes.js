import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"
import coverImage from "../assets/images/taipei-city2.jpg"
import RecipesList from "../components/RecipesList"

import { graphql, useStaticQuery } from "gatsby"

const recipes = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="南港山景點" image={coverImage} />
      <main className="page">
        <RecipesList recipes={recipes} />
      </main>
    </Layout>
  )
}
export const query = graphql`
  query {
    allContentfulRecipe(sort: { order: ASC, fields: title }) {
      nodes {
        view
        id
        altitude
        title
        slug
        content {
          tags
        }
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default recipes
