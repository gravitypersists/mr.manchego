import React from "react"
import { Grid, Label } from "semantic-ui-react"

const StepLabel = ({ children, colors }) => (
  <Label
    size="large"
    style={{
      backgroundColor: colors.primaryMuted,
      color: colors.secondary,
    }}
  >
    {children}
  </Label>
)

const Preparation = ({ model, colors }) => (
  <Grid stackable columns={2}>
    {model.instructions.map((step, i) => (
      <Grid.Row key={step.short}>
        <Grid.Column width={step.img ? 8 : 16} style={{ display: "flex" }}>
          <StepLabel colors={colors}>{i + 1}</StepLabel>
          <span
            style={{
              flex: 1,
              fontSize: 18,
              fontFamily: "Source Sans Pro",
              lineHeight: "20px",
              marginLeft: 10,
            }}
          >
            {step.description.split("\n").map((str, j) => (
              <div style={{ minHeight: 14 }} key={`${i}.${j}`}>{str}</div>
            ))}
          </span>
        </Grid.Column>
        <Grid.Column>{step.img}</Grid.Column>
      </Grid.Row>
    ))}
  </Grid>
)

Preparation.propTypes = {}

Preparation.defaultProps = {}

export default Preparation
