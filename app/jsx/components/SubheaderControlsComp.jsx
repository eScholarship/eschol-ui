// ##### Subheader Controls Component ##### //

import React, { useState } from 'react'
import BackgroundColorPickerComp from '../components/BackgroundColorPickerComp.jsx'
import ElementColorPickerComp from '../components/ElementColorPickerComp.jsx'
import CheckContrastComp from '../components/CheckContrastComp.jsx'
import SubheaderComp from '../components/SubheaderComp.jsx'

function SubheaderControlsComp () {
  const [bgColor, setBgColor] = useState('#ffffff')
  const [elColor, setElColor] = useState('black')
  const bgColorToCheck = bgColor.replace('#', '')
  const elColorToCheck = elColor === 'black' ? '000000' : 'ffffff'

  return (
    <div className="c-subheadercontrols">
      <h1>Subheader Color Controls</h1>
      <BackgroundColorPickerComp textLabel="Subheader Background Color" backgroundColor={bgColor} onBackgroundColorChange={setBgColor} />
      <ElementColorPickerComp fieldsetLabel="Subheader Element Color" onElementColorChange={setElColor} isDefault={elColor} />
      <CheckContrastComp checkForeground={elColorToCheck} checkBackground={bgColorToCheck} />
      <h2>Sample Banner</h2>
      <SubheaderComp backgroundColor={bgColor} elementColor={elColor} bannerLink={'https://escholarship.org/uc/bling_formal_linguistics'} unitTitle={'Lorem Ipsum Consectetur Adipisicing Elit'} isWide={false} campusLabel={'UC Berkeley'} campusLink={'https://escholarship.org/uc/ucb'} />
    </div>
  )
}

module.exports = SubheaderControlsComp;
