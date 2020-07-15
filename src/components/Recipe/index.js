import React from "react"
import PropTypes from "prop-types"
import { Grid, Segment } from "semantic-ui-react"
import ToC from "./Toc"

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
        <Segment fluid>
          <ToC model={model} colors={colors} />
        </Segment>
      </Grid.Column>
      <Grid.Column width={12}>
        <Segment fluid>Ingredients</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

Recipe.propTypes = {}

Recipe.defaultProps = {}

export default Recipe
