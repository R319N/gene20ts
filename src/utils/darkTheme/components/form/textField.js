import colors from '../../base/colors'

const { borderColor } = colors

const textField = {
  styleOverrides: {
    root: {
      borderColor: borderColor,
      '&.textFieldBright': {
      }
    }
  }
}
export default textField
