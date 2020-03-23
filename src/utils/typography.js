import Typography from "typography"
import funstonTheme from "typography-theme-funston"

const typography = new Typography(funstonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

typography.overrideThemeStyles = ({ rhythm }, options) => ({
  "a:active, a:hover": {
    color: "#e02222",
  },
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
