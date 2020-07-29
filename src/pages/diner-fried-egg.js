import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { assoc, lensProp, over } from "ramda"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Recipe from "../components/Recipe"
import gif2 from "../images/consistency.gif"

const colors = {
  primary: "#5368FF",
  secondary: "#676767",
  black: "#000000",
}

const recipeJSON = {
  ingredients: [{ display: "1 egg" }],
  instructions: [
    {
      short: "Crack Egg",
      description: "Crack egg into bowl. Fetch any shell that gets in.",
      img: <img src={gif2} />,
    },
    {
      short: "Melt Fat",
      description: "Over medium heat, melt fat (butter, olive oil) in a pan.",
      img: <img src={gif2} />,
    },
    {
      short: "Fry Egg",
      description: "Dump egg into the pan and fry until desired doneness.",
      img: <img src={gif2} />,
    },
    {
      short: "Flip Egg",
      description: "Flip the egg, and fry until desired doneness.",
      img: <img src={gif2} />,
    },
    {
      short: "Season Egg",
      description: "Add salt, pepper, any spices.",
      img: <img src={gif2} />,
    },
  ],
}

const DinerFriedEggPage = () => {
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
      footer: file(relativePath: { eq: "ricotta-side.jpg" }) {
        ...fullPaneImage
      }
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
    <Layout backgroundColor={colors.primary} fontFamily="Oswald">
      <SEO title="Diner Style Fried Egg" />
      <Link to="/">Home</Link>
      <Recipe
        title="Diner Style Fried Egg"
        model={model}
        colors={colors}
        heroImg={<Img fluid={query.hero.childImageSharp.fluid} />}
        footerImg={<Img fluid={query.footer.childImageSharp.fluid} />}
      />
    </Layout>
  )
}

export default DinerFriedEggPage
