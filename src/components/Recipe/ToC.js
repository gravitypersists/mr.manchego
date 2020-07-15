import React from "react"
import { List } from "semantic-ui-react"

const commonStyle = {
  fontSize: 22,
  lineHeight: "22px",
}

const titleStyle = ({ secondary }) => ({
  ...commonStyle,
  textTransform: "uppercase",
  fontWeight: "bold",
  color: secondary,
})

const itemStyle = commonStyle

const ToC = ({ model, colors }) => (
  <List selection>
    <List.Item style={titleStyle(colors)}>Ingredients</List.Item>
    <List.Item style={titleStyle(colors)}>Recipe</List.Item>
    {model.recipe.map((step, i) => (
      <List.Item style={itemStyle}>
        <span style={{ color: colors.primary }}>{`${i + 1} `}</span>
        <span>{step.short}</span>
      </List.Item>
    ))}
  </List>
)

ToC.propTypes = {}

ToC.defaultProps = {}

export default ToC
