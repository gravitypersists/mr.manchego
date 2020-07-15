import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Recipe from "../components/Recipe"
import SEO from "../components/seo"

const colors = {
  red: "#FF5353",
  gray: "#676767",
  black: "#000000",
}

const SecondPage = () => (
  <Layout backgroundColor={colors.red}>
    <SEO title="Ricotta Gnocchi" />
    <Link to="/">Home</Link>
    <Recipe />
  </Layout>
)

export default SecondPage
