/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React base styles

import colors from '../../base/colors'
import boxShadow from '../../functions/boxShadow'
import pxToRem from '../../functions/pxToRem'

const { white } = colors

const stepIcon = {
  styleOverrides: {
    root: {
      background: '#9fc9ff',
      fill: '#9fc9ff',
      stroke: '#9fc9ff',
      strokeWidth: pxToRem(10),
      width: pxToRem(13),
      height: pxToRem(13),
      borderRadius: '50%',
      zIndex: 99,
      transition: 'all 200ms linear',

      '&.Mui-active': {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1)
      },

      '&.Mui-completed': {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1)
      }
    }
  }
}

export default stepIcon
