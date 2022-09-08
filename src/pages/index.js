import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"
export default function Home() {
  return (
    <Layout>
      <SEO
        title="首頁"
        description="料理不翻車，地方媽媽私藏料理食譜，簡單製作"
        image={"/main-cover.jpg"}
      />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>料理不翻車</h1>
              <h4>地方媽媽私藏料理食譜，輕鬆製作好菜上桌</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
