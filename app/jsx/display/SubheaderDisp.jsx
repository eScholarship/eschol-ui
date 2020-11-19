// ##### Subheader Display ##### //

import React from 'react'
import SubheaderComp from '../components/SubheaderComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'

class SubheaderDisp extends React.Component {
  render() {
    return (
      <div>
        <h2>Subheader Using Wide Banner</h2>
        <SubheaderComp unitTitle={'Western Journal of Emergency Medicine'} banner={MEDIA_PATH + 'temp_journal-banner.png'} wide={true} />
        <h2>Subheader Using Narrow Banner</h2>
        <SubheaderComp unitTitle={'Information Center for the Environment'} banner={'https://escholarship.org/assets/ebadc9294e27ce4df7a7391de182d062a094d4a0ff94c8fd7ca8b212fcd85541'} wide={false} />
      </div>
    )
  }
}

module.exports = SubheaderDisp;
