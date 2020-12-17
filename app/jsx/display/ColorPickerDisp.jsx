// ##### Breadcrumb Display ##### //

import React, { useState } from 'react'
import ColorPickerComp from '../components/ColorPickerComp.jsx'

function ColorPickerDisp () {
  const [color, setColor] = useState('#ffffff')
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    backgroundColor: color,
  }

  return (
    <div>
      <ColorPickerComp color={color} onColorChange={setColor} />
      <div style={styles}>(example of how the subheader comp background color is changed)</div>
    </div>
  )
}

module.exports = ColorPickerDisp;
