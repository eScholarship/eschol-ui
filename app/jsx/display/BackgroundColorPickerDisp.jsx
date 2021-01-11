// ##### Background Color Picker Display ##### //

import React, { useState } from 'react'
import BackgroundColorPickerComp from '../components/BackgroundColorPickerComp.jsx'

function BackgroundColorPickerDisp () {
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
      <BackgroundColorPickerComp textLabel="Background Color" bgColor={bgColor} onBackgroundColorChange={setBgColor} />
      <div style={styles}>(example of how the background color is changed)</div>
    </div>
  )
}

module.exports = BackgroundColorPickerDisp;
