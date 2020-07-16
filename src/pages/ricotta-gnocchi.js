import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { assoc, lensProp, over } from "ramda"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Recipe from "../components/Recipe"
import gif2 from "../images/consistency.gif"

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
  instructions: [
    {
      short: "Drain Ricotta",
      description: "Drain the ricotta by spreading it over some paper towels.",
      caution: "Be careful not to get pieces of paper towel in the ricotta.",
    },
    {
      short: "Mix Ingredients",
      description:
        "Mix ricotta, parmesan, flour, egg and egg yolk to even consistency with a spatula. Do not overmix. If needed, add flour.",
      img: <img src={gif2} />,
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
  // Gatsby does not allow dynamic queries at runtime. Which means that if I want
  // to extract a generic Recipe component that uses images, I need to build the
  // queries for that image and feed those into the component. This is not ideal.
  const query = useStaticQuery(graphql`
    fragment itemImage on File {
      childImageSharp {
        fluid(maxWidth: 642) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fragment fullPaneImage on File {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      hero: file(relativePath: { eq: "ricotta-side.jpg" }) {
        ...fullPaneImage
      }
      footer: file(relativePath: { eq: "overhead.png" }) {
        ...fullPaneImage
      }
      imageStep0: file(relativePath: { eq: "blot.jpg" }) {
        ...itemImage
      }
      imageStep2: file(relativePath: { eq: "dry.jpg" }) {
        ...itemImage
      }
    }
  `)
  // map images for each step in JSON for recipe
  const addImages = instructions =>
    instructions.map((step, i) => {
      const queryImage = query[`imageStep${i}`]
      return queryImage
        ? assoc("img", <Img fluid={queryImage.childImageSharp.fluid} />, step)
        : step
    })
  const model = over(lensProp("instructions"), addImages, recipeJSON)
  return (
    <Layout backgroundColor={colors.primary} fontFamily="Oswald">
      <SEO title="Ricotta Gnocchi" />
      <Link to="/">Home</Link>
      <Recipe
        title="Ricotta Gnocchi"
        model={model}
        colors={colors}
        heroImg={<Img fluid={query.hero.childImageSharp.fluid} />}
        footerImg={<Img fluid={query.footer.childImageSharp.fluid} />}
      />
    </Layout>
  )
}

export default RicottaGnocchiPage
