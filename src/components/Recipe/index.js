import React, { useRef } from "react"
import PropTypes from "prop-types"
import { Grid, Segment, Ref, Rail, Sticky } from "semantic-ui-react"
import ToC from "./Toc"
import Ingredients from "./Ingredients"
import Preparation from "./Preparation"

const titleStyle = ({ secondary }) => ({
  fontSize: 16,
  lineHeight: "16px",
  textTransform: "uppercase",
  fontWeight: "bold",
  color: secondary,
})

const Recipe = ({ title, heroImg, footerImg, model, colors }) => {
  const contextRef = useRef()
  return (
    <Grid stackable columns={8}>
      <Grid.Row>
        <Grid.Column width={4} verticalAlign="bottom">
          <span
            style={{
              fontSize: "min(6vw, 60px)",
              lineHeight: "min(6vw, 60px)",
              display: "block",
              marginTop: 15,
              color: colors.primary,
            }}
          >
            {title}
          </span>
        </Grid.Column>
        <Grid.Column width={12}>{heroImg}</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={12}>
          <Ref innerRef={contextRef}>
            <Rail
              attached
              position="left"
              style={{ width: 250, right: "calc(100% - 20px)", zIndex: 0 }}
            >
              <Sticky context={contextRef} offset={20}>
                <Segment
                  style={{
                    margin: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "none",
                  }}
                >
                  <ToC model={model} colors={colors} />
                </Segment>
              </Sticky>
            </Rail>
          </Ref>
          <Segment style={{ marginTop: 0 }}>
            <div style={titleStyle(colors)}>Ingredients</div>
            <Ingredients model={model} colors={colors} />
            <div style={titleStyle(colors)}>Preparation</div>
            <div style={{ margin: "16px 0" }}>
              <Preparation model={model} colors={colors} />
            </div>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Recipe.propTypes = {}

Recipe.defaultProps = {}

export default Recipe
