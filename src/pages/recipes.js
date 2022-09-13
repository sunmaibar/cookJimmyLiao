import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"
import coverImage from "../assets/images/taipei-city2.jpg"

const recipes = () => {
  return (
    <Layout>
      <SEO title="南港山景點" image={coverImage} />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default recipes
