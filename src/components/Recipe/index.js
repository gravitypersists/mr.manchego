import React from "react"
import PropTypes from "prop-types"
import { Grid } from "semantic-ui-react"

const Recipe = ({ heroImg }) => (
  <Grid columns={8}>
    <Grid.Row>
      <Grid.Column width={2}>Ricotta Gnocchi</Grid.Column>
      <Grid.Column width={6}>{heroImg}</Grid.Column>
    </Grid.Row>
  </Grid>
)

Recipe.propTypes = {}

Recipe.defaultProps = {}

export default Recipe
