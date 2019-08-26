import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "body": {
      fontFamily: `Asap, sans-serif`,
      lineHeight: 1.25,
      fontSize: '18px',
      fontWeight: 400,
      background: '#fffff0'
    },
    "h1": {
      fontFamily: `'Asap', sans-serif`,
      color: '#e02222',
    },
    "h2": {
      fontFamily: `'Asap', sans-serif`,
      color: '#e02222',
      fontWeight: 400,
    },
    "h3": {
      fontFamily:`'Asap', sans-serif`,
      color: '#e02222',
      fontWeight: 700,
      marginBottom: '8px',
      fontSize: typography.scale(3/4)
    },
    "h4": {
      fontFamily: `'Asap', sans-serif`,
      color: '#e02222',
      fontWeight: 400,
      fontSize: typography.scale(3/4)
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
