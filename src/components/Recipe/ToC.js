import React from "react"
import { List } from "semantic-ui-react"

const commonStyle = {
  fontSize: 22,
  lineHeight: "22px",
}

const titleStyle = ({ secondary }) => ({
  textTransform: "uppercase",
  fontWeight: "bold",
  color: secondary,
})

const ToC = ({ model, colors }) => (
  <List selection size="massive">
    <List.Item style={titleStyle(colors)}>Ingredients</List.Item>
    <List.Item style={titleStyle(colors)}>Recipe</List.Item>
    {model.instructions.map((step, i) => (
      <List.Item key={step.short}>
        <span style={{ color: colors.primary }}>{`${i + 1} `}</span>
        <span>{step.short}</span>
      </List.Item>
    ))}
  </List>
)

ToC.propTypes = {}

ToC.defaultProps = {}

export default ToC
