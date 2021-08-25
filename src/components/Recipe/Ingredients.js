import React from "react"
import { List } from "semantic-ui-react"

const tipNoteStyle = ({ primary }) => ({
  fontStyle: "italic",
  color: primary,
})

const tipStyle = ({ secondary }) => ({
  fontStyle: "italic",
  color: secondary,
})

const Ingredients = ({ model, colors }) => (
  <List
    size="massive"
    style={{ margin: "16px 0 24px 0", fontSize: 18, lineHeight: 20, fontFamily: "Source Sans Pro" }}
  >
    {model.ingredients.map(ingredient => (
      <List.Item key={ingredient.display}>{ingredient.display}</List.Item>
    ))}
  </List>
)

Ingredients.propTypes = {}

Ingredients.defaultProps = {}

export default Ingredients
