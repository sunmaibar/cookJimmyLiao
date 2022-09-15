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
              <h2>台北四獸山南港山系全攻略</h2>
              <h5>
                位於台北信義區的南港山系，也包含了四座以虎豹獅象合稱四獸山，面積廣闊有著許多休閒步道與世界知名景點，也有著許多自然生態，交通便捷是都市人愛前去散步的地方。
              </h5>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
