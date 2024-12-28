import colors from '../../base/colors'
import typography from '../../base/typography'

const { white, primary ,text} = colors
const { size } = typography

const inputLabel = {
  styleOverrides: {
    root: {
      fontSize: size.xs,
      // color: primary.main,
      lineHeight: 0.9,

      '&.Mui-focused': {
        color: text.focus
      },

      '&.MuiInputLabel-shrink': {
        lineHeight: 1.5,
        fontSize: size.md,

        '~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend': {
          fontSize: '0.85em'
        }
      }
    },

    sizeSmall: {
      fontSize: size.xs,
      lineHeight: 1.625,

      '&.MuiInputLabel-shrink': {
        lineHeight: 1.6,
        fontSize: size.sm,

        '~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend': {
          fontSize: '0.72em'
        }
      }
    }
  }
}
export default inputLabel
