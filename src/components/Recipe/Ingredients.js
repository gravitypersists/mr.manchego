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
  <List size="massive">
    {model.ingredients.map(ingredient => (
      <List.Item>{ingredient.display}</List.Item>
    ))}
  </List>
)

Ingredients.propTypes = {}

Ingredients.defaultProps = {}

export default Ingredients
