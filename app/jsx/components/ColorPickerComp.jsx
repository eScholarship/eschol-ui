// ##### Color Picker Component ##### //

import React from 'react'

function ColorPickerComp (props) {
  function handleChange(e) {
    props.onColorChange(e.target.value)
  }

  return (
    <div className="c-colorpicker">
      <label htmlFor="subheader-colorpicker">Choose Subheader Background Color:</label>
      <input id="subheader-colorpicker" type="color" value={props.color} onChange={handleChange} />
    </div>
  )
}

module.exports = ColorPickerComp;
