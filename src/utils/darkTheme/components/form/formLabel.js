import colors from '../../base/colors'
import typography from '../../base/typography'

const { secondary, text, grey } = colors
const { fontWeightLighter } = typography

const formLabel = {
  styleOverrides: {
    root: {
      color: text.primary,
      textTransform: 'capitalize'
    }
  }
}
export default formLabel
