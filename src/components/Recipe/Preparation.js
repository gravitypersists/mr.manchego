import React from "react"
import { Grid, Label } from "semantic-ui-react"

const StepLabel = ({ children, colors }) => (
  <Label
    size="large"
    style={{
      backgroundColor: colors.primary,
      color: "white",
    }}
  >
    {children}
  </Label>
)

const Preparation = ({ model, colors }) => (
  <Grid stackable columns={2}>
    {model.instructions.map((step, i) => (
      <Grid.Row>
        <Grid.Column style={{ display: "flex" }}>
          <StepLabel colors={colors}>{i}</StepLabel>
          <span
            style={{
              flex: 1,
              fontSize: 22,
              lineHeight: "24px",
              marginLeft: 10,
            }}
            basic
            size="huge"
          >
            {step.description}
          </span>
        </Grid.Column>
      </Grid.Row>
    ))}
  </Grid>
)

Preparation.propTypes = {}

Preparation.defaultProps = {}

export default Preparation
