// ##### Check Color Contrast Display ##### //

import React from 'react'
import CheckContrastComp from '../components/CheckContrastComp.jsx'

function CheckContrastDisp () {
  return (
    <div>
      <p>Example of color combination that passes accessibility:</p>
      <CheckContrastComp checkForeground="000000" checkBackground="ffffff" />
      <p>Example of color combination that fails accessibility:</p>
      <CheckContrastComp checkForeground="ff614a" checkBackground="6395ff" />
    </div>
  )
}

module.exports = CheckContrastDisp;
