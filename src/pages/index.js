import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout style={{ width: 600 }}>
    <SEO title="Home" />
    <h3>Greetings,</h3>
    <p>Welcome to a project exploring the UX of online recipes. I find that I often learn best how to cook by watching a video. That format cannot be beat, but it's not amenable for when you're in the kitchen, as it's not easy to scrub around a video bar while your hands are covered in flour. For that reason, I wondered what it would be like to put animated gifs into the recipe to convey the steps. Also, I find with online recipes, I'm constantly skipping back and forth between the ingredients and the steps. So to address that, I want to explore ways that the ingredients can be displayed along side the steps contextually.</p>
    <p>So that's what this project is, rethinking the recipe for use in kitchens first. Here are links to some of those recipes:</p>
    <p>
      <Link to="/ricotta-gnocchi/">Ricotta Gnocchi</Link>
    </p>
    <p>
      <Link to="/diner-fried-egg/">Diner Fried Egg</Link>
    </p>
    <p>I hope you enjoy some of the ideas presented here!</p>
    <p>- Mr. Manchego</p>
  </Layout>
)

export default IndexPage
