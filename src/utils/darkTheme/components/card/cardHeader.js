import colors from '../../base/colors'
import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'

// Material Dashboard 2 React Helper Functions
const { primary, secondary, info , text} = colors
const { fontWeightLighter, fontWeightBold } = typography

const cardHeader = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      padding: `${pxToRem(8)} ${pxToRem(24)} ${pxToRem(24)}`,
      fontVariant: 'all-small-caps'
    },
    title: {
      color: 'white',
      fontWeight: fontWeightBold,
      fontSize: '1.2em'
    },
    subheader: {
      color: secondary.light,
      fontWeight: fontWeightLighter,
      fontSize: '1em'
    }
  }
}

export default cardHeader
