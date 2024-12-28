import { backIn } from 'framer-motion'
import boxShadows from '../base/boxShadows'

const { md } = boxShadows

const paper = {
  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minWidth: 0,
      wordWrap: 'break-word',
      backgroundColor: '#1E212B',
      backgroundClip: 'border-box',
      boxShadow: md,
      padding: '0',
      overflow: 'visible'
    }
  }
}

export default paper