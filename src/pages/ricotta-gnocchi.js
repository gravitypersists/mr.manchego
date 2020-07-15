import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Recipe from "../components/Recipe"

const colors = {
  primary: "#FF5353",
  secondary: "#676767",
  black: "#000000",
}

const recipeJSON = {
  ingredients: [
    {
      display: "12 oz. Ricotta",
      tip: "make sure your Ricotta does not contain gums or stabilizers",
    },
    {
      display: "1 oz. Parmesan",
    },
    {
      display: "1 whole egg",
    },
    {
      display: "1 egg yolk",
    },
    {
      display: "3.5 oz. flour",
    },
  ],
  recipe: [
    {
      short: "Drain Ricotta",
      description: "Drain the ricotta by spreading it over some paper towels.",
      caution: "Be careful not to get pieces of paper towel in the ricotta.",
    },
    {
      short: "Mix Ingredients",
      description:
        "Mix ricotta, parmesan, flour, egg and egg yolk to even consistency by hand. Do not overmix. If needed, add flour.",
    },
    {
      short: "Form Gnocchi",
      description:
        "With heavily floured surfaces, form the mix into gnocchi.\n\ni. Divide into four equal sizes.\nii. Roll into logs\niii. Cut logs into gnocchi\niv. Sprinkle gnocchi with flour.",
    },
    {
      short: "Blanch Gnocchi",
      description:
        "Blanch the gnocchi, they will rise to the surface when done. Transfer to ice bath to prevent overcooking. Drain, removing any leftover ice.",
    },
    {
      short: "Combine Sauce",
      description: "Mix gnocchi with sauce and serve.",
    },
  ],
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
    <Layout backgroundColor={colors.primary} fontFamily="Oswald">
      <SEO title="Ricotta Gnocchi" />
      <Link to="/" sx={{ textDecoration: "none", color: "white" }}>
        Home
      </Link>
      <Recipe
        title="Ricotta Gnocchi"
        model={recipeJSON}
        colors={colors}
        heroImg={<Img fluid={hero.placeholderImage.childImageSharp.fluid} />}
      />
    </Layout>
  )
}

export default RicottaGnocchiPage
