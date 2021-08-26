// see https://github.com/gatsbyjs/gatsby/issues/8479#issuecomment-576067799
import config from "../../gatsby-config"
const { pathPrefix } = config

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
const isDevelopment = activeEnv === "development"


const getPrefixedPath = url => {
  return isDevelopment ? url : pathPrefix + url
}

// fluidImageDef is an internal gatsby data structure. This is prone to break.
// This replaces urls with proper prefixes to account for a bug that gatsby has
// regarding gh-pages deployment (see issue linked above).
const hackPrefixedPath = fluidImageDef => {
  const newSrcSet = fluidImageDef.srcSet.split(" ").map(x => (
    x.match("/static") ? getPrefixedPath(x) : x
  )).join(" ")
  const newFluidImageDef = {
    ...fluidImageDef,
    srcSet: newSrcSet,
    src: getPrefixedPath(fluidImageDef.src)
  }
  return newFluidImageDef
}

export default hackPrefixedPath
