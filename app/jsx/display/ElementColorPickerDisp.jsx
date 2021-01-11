// ##### Element Color Picker Display ##### //

import React, { useState } from 'react'
import ElementColorPickerComp from '../components/ElementColorPickerComp.jsx'

function ElementColorPickerDisp () {
  const [elColor, setElColor] = useState('black')

  return (
    <div>
      <ElementColorPickerComp fieldsetLabel="Element Color" onElementColorChange={setElColor} isDefault={elColor} />
      <div>Checkbox value is "{elColor}"</div>
    </div>
  )
}

module.exports = ElementColorPickerDisp;
