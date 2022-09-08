import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"
const recipes = () => {
  return (
    <Layout>
      <SEO title="各式食譜" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default recipes
