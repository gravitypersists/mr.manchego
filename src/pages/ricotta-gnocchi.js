import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Recipe from "../components/Recipe"
import SEO from "../components/seo"

const colors = {
  red: "#FF5353",
  gray: "#676767",
  black: "#000000",
}

const RicottaGnocchiPage = () => {
  const hero = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ricotta-side.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout backgroundColor={colors.red} fontFamily="Oswald">
      <SEO title="Ricotta Gnocchi" />
      <Link to="/" sx={{ textDecoration: "none", color: "white" }}>
        Home
      </Link>
      <Recipe
        heroImg={<Img fluid={hero.placeholderImage.childImageSharp.fluid} />}
      />
    </Layout>
  )
}

export default RicottaGnocchiPage
