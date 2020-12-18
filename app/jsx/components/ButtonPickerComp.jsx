// ##### Button Picker Component ##### //

import React from 'react'

function ButtonPickerComp (props) {
  function handleChange(e) {
    props.onButtonChange(e.target.value)
  }

  return (
    <fieldset className="c-buttonpicker" onChange={handleChange}>
      <legend>Subheader Button Color</legend>
      <input id="buttonpicker-gray" type="radio" name="buttonpicker" value="darkgray" defaultChecked={props.isDefault === 'darkgray' ? true : false} />
      <label htmlFor="buttonpicker-gray">Dark Gray</label>
      <input id="buttonpicker-black" type="radio" name="buttonpicker" value="black" defaultChecked={props.isDefault === 'black' ? true : false} />
      <label htmlFor="buttonpicker-black">Black</label>
      <input id="buttonpicker-white" type="radio" name="buttonpicker" value="white" defaultChecked={props.isDefault === 'white' ? true : false} />
      <label htmlFor="buttonpicker-white">White</label>
    </fieldset>
  )
}

module.exports = ButtonPickerComp;
