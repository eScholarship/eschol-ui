// ##### Subheader Controls Component ##### //

import React, { useState } from 'react'
import BackgroundColorPickerComp from '../components/BackgroundColorPickerComp.jsx'
import ElementColorPickerComp from '../components/ElementColorPickerComp.jsx'
import SubheaderComp from '../components/SubheaderComp.jsx'

function SubheaderControlsComp () {
  const [bgColor, setBgColor] = useState('#ffffff')
  const [elColor, setElColor] = useState('darkgray')

  return (
    <div className="c-subheadercontrols">
      <h1>Subheader Color Controls</h1>
      <BackgroundColorPickerComp textLabel="Subheader Background Color" backgroundColor={bgColor} onBackgroundColorChange={setBgColor} />
      <ElementColorPickerComp fieldsetLabel="Subheader Element Color" onElementColorChange={setElColor} isDefault={elColor} />
      <h2>Sample Banner</h2>
      <SubheaderComp backgroundColor={bgColor} elementColor={elColor} bannerLink={'https://escholarship.org/uc/bling_formal_linguistics'} unitTitle={'Lorem Ipsum Consectetur Adipisicing Elit'} isWide={false} campusLabel={'UC Berkeley'} campusLink={'https://escholarship.org/uc/ucb'} />
    </div>
  )
}

module.exports = SubheaderControlsComp;
