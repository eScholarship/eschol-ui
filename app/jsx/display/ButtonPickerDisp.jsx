// ##### Button Picker Display ##### //

import React, { useState } from 'react'
import ButtonPickerComp from '../components/ButtonPickerComp.jsx'

function ButtonPickerDisp () {
  const [button, setButton] = useState('darkgray')

  return (
    <div>
      <ButtonPickerComp onButtonChange={setButton} isDefault={button} />
      <div>Checkbox value is "{button}"</div>
    </div>
  )
}

module.exports = ButtonPickerDisp;
