export const breakpoints = {
  xs: 320,
  s: 414,
  m: 768,
  l: 1024,
  xl: 1280,
  xxl: 1440,
  max: 1680,
}

const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`

const customMediaQueryHeight = (maxHeight: number) =>
  `@media (max-height: ${maxHeight}px)`

const customMediaQueryPixelRatio = (pixelRatio: number) =>
  `@media screen and (-webkit-min-device-pixel-ratio: ${pixelRatio})`

const media = {
  custom: customMediaQuery,
  customHeight: customMediaQueryHeight,
  customPixelRatio: customMediaQueryPixelRatio,

  xs: customMediaQuery(breakpoints.xs),
  s: customMediaQuery(breakpoints.s),
  m: customMediaQuery(breakpoints.m),
  l: customMediaQuery(breakpoints.l),
  xl: customMediaQuery(breakpoints.xl),
  xxl: customMediaQuery(breakpoints.xxl),
  max: customMediaQuery(breakpoints.max),
}

export default media
