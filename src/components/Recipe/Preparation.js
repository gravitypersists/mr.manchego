import React from "react"
import { Grid, Label } from "semantic-ui-react"
import { isMobile } from "react-device-detect"

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
        {isMobile &&
          <div style={{ padding: "16px 16px 0 16px" }}>
            <StepLabel colors={colors}>{i + 1}</StepLabel>
            <span style={{ fontSize: 20, marginLeft: 8, color: colors.secondary }}>
              {step.short}
            </span>
          </div>
        }
        <Grid.Column width={step.img ? 8 : 16} style={{ display: "flex" }}>
          {!isMobile && <StepLabel colors={colors}>{i + 1}</StepLabel>}
          <span
            style={{
              flex: 1,
              fontSize: 18,
              fontFamily: "Source Sans Pro",
              lineHeight: "20px",
              marginLeft: isMobile ? 0 : 10,
            }}
          >
            {step.description.split("\n").map((str, j) => (
              <div style={{ minHeight: 14 }} key={`${i}.${j}`}>{str}</div>
            ))}
          </span>
        </Grid.Column>
        {step.img && <Grid.Column>{step.img}</Grid.Column>}
      </Grid.Row>
    ))}
  </Grid>
)

Preparation.propTypes = {}

Preparation.defaultProps = {}

export default Preparation
