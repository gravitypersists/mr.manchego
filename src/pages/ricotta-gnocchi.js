import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { assoc, lensProp, over } from "ramda"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Recipe from "../components/Recipe"
import gif2 from "../images/consistency.gif"
import vid1 from "../images/ricotta-spread.mp4"
import vid3 from "../images/ricotta-form.mp4"

const colors = {
  background: "#fffbf7",
  primary: "#ffa500",
  primaryMuted: "#ffe9b8",
  secondary: "#888888",
  black: "#000000",
}

const recipeJSON = {
  ingredients: [
    {
      display: "12 oz. ricotta",
      tip: "make sure your Ricotta does not contain gums or stabilizers",
    },
    {
      display: "1 oz. parmesan",
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
    {
      display: "sauce to serve (such as tomato basil or butter sage)",
    },
  ],
  instructions: [
    {
      short: "Drain Ricotta",
      description:
        "Extract excess moisture from ricotta. Spread ricotta over paper towels.",
      caution: "Be careful not to get pieces of paper towel in the ricotta.",
      img: (
        <video style={{ width: "min(321px, 100%)" }} autoPlay muted loop>
          <source src={vid1} type="video/mp4" />
        </video>
      ),
    },
    {
      short: "Mix Ingredients",
      description:
        "Mix ricotta, parmesan, flour, egg and egg yolk to even consistency with a spatula. Do not overmix. If needed, add flour.",
      img: <img style={{ width: "min(321px, 100%)" }} src={gif2} />,
    },
    {
      short: "Form Gnocchi",
      description:
        "With heavily floured surfaces, form the mix into gnocchi.\n\ni. Divide into equal sizes.\nii. Roll into logs\niii. Cut logs into gnocchi\niv. Sprinkle gnocchi with flour",
      img: (
        <video style={{ width: "min(321px, 100%)" }} autoPlay muted loop>
          <source src={vid3} type="video/mp4" />
        </video>
      ),
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
      hero: file(relativePath: { eq: "overhead.png" }) {
        ...fullPaneImage
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
    <Layout backgroundColor={colors.background} fontFamily="Crimson Text">
      <SEO title="Ricotta Gnocchi" />
      <Recipe
        title="Ricotta Gnocchi"
        model={model}
        colors={colors}
        heroImg={<Img fluid={query.hero.childImageSharp.fluid} />}
      />
    </Layout>
  )
}

export default RicottaGnocchiPage
