import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"
import coverImage from "../assets/images/fb-cover.jpg"
export default function Home() {
  return (
    <Layout>
      <SEO title="首頁" image={coverImage} />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/taipei-city2.jpg"
            alt="taipei city"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h2>台北四獸山全攻略</h2>
              <h5>這是一本景點書，記錄著山上的一切</h5>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
