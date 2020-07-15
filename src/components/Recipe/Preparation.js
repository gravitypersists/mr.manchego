import React from "react"
import { Grid } from "semantic-ui-react"

const Preparation = ({ model, colors }) => (
  <Grid columns={2}>
    {model.instructions.map((step, i) => (
      <Grid.Row>
        <Grid.Column>{step.description}</Grid.Column>
      </Grid.Row>
    ))}
  </Grid>
)

Preparation.propTypes = {}

Preparation.defaultProps = {}

export default Preparation
