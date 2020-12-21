// ##### Color Picker Display ##### //

import React, { useState } from 'react'
import ColorPickerComp from '../components/ColorPickerComp.jsx'

function ColorPickerDisp () {
  const [bgColor, setBgColor] = useState('#ffffff')
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    backgroundColor: bgColor,
  }

  return (
    <div>
      <ColorPickerComp bgColor={bgColor} onBackgroundColorChange={setBgColor} />
      <div style={styles}>(example of how the subheader comp background color is changed)</div>
    </div>
  )
}

module.exports = ColorPickerDisp;
