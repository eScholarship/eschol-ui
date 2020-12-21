// ##### Element Color Picker Component ##### //

import React from 'react'

function ElementColorComp (props) {
  function handleChange(e) {
    props.onElementColorChange(e.target.value)
  }

  return (
    <fieldset className="c-elementcolorpicker" onChange={handleChange}>
      <legend>Subheader Element Color</legend>
      <input id="elementcolorpicker-gray" type="radio" name="elementcolorpicker" value="darkgray" defaultChecked={props.isDefault === 'darkgray' ? true : false} />
      <label htmlFor="elementcolorpicker-gray">Dark Gray</label>
      <input id="elementcolorpicker-black" type="radio" name="elementcolorpicker" value="black" defaultChecked={props.isDefault === 'black' ? true : false} />
      <label htmlFor="elementcolorpicker-black">Black</label>
      <input id="elementcolorpicker-white" type="radio" name="elementcolorpicker" value="white" defaultChecked={props.isDefault === 'white' ? true : false} />
      <label htmlFor="elementcolorpicker-white">White</label>
    </fieldset>
  )
}

module.exports = ElementColorComp;
