import React from "react"
import PropTypes from "prop-types"
import { Grid, Segment } from "semantic-ui-react"
import ToC from "./Toc"
import Ingredients from "./Ingredients"
import Preparation from "./Preparation"

const titleStyle = ({ secondary }) => ({
  fontSize: 30,
  lineHeight: "30px",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: secondary,
})

const Recipe = ({ title, heroImg, model, colors }) => (
  <Grid columns={8}>
    <Grid.Row>
      <Grid.Column width={4} verticalAlign="bottom">
        <span
          style={{
            fontSize: 60,
            lineHeight: "60px",
            color: "white",
          }}
        >
          {title}
        </span>
      </Grid.Column>
      <Grid.Column width={12}>{heroImg}</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={4}>
        <Segment>
          <ToC model={model} colors={colors} />
        </Segment>
      </Grid.Column>
      <Grid.Column width={12}>
        <Segment>
          <div style={titleStyle(colors)}>Ingredients</div>
          <Ingredients model={model} colors={colors} />
          <div style={titleStyle(colors)}>Preparation</div>
          <div style={{ margin: "1em 0" }}>
            <Preparation model={model} colors={colors} />
          </div>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

Recipe.propTypes = {}

Recipe.defaultProps = {}

export default Recipe
