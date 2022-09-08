import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
        coverImage
        siteUrl
      }
    }
  }
`

const SEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(query)
  const { siteUrl, coverImage } = site.siteMetadata

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || `${siteUrl}${coverImage}`

  return (
    <Helmet
      htmlAttributes={{ lang: "zh-TW" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `image`, content: metaImage },
      ]}
    ></Helmet>
  )
}

export default SEO
