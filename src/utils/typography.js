import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "body": {
      fontFamily: `Roboto, sans`,
      lineHeight: 1.25
    },
    "h1": {
      fontFamily: 'Roboto, sans',
      color: '#e02222',
    },
    "h2": {
      fontFamily: 'Roboto, sans',
      color: '#e02222',
      fontWeight: 400,
    },
    "h3": {
      fontFamily: 'Roboto, sans',
      color: '#e02222',
      fontWeight: 400,
      marginBottom: '8px'
    },
    "h4": {
      fontFamily: 'Roboto, sans',
      color: '#e02222',
      fontWeight: 400,
    }
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
