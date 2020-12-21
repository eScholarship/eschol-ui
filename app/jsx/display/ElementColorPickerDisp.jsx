// ##### Element Color Picker Display ##### //

import React, { useState } from 'react'
import ElementColorPickerComp from '../components/ElementColorPickerComp.jsx'

function ElementColorPickerDisp () {
  const [elColor, setElColor] = useState('darkgray')

  return (
    <div>
      <ElementColorPickerComp onElementColorChange={setElColor} isDefault={elColor} />
      <div>Checkbox value is "{elColor}"</div>
    </div>
  )
}

module.exports = ElementColorPickerDisp;
