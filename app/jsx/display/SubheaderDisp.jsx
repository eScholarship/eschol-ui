// ##### Subheader Display ##### //

import React from 'react'
import SubheaderComp from '../components/SubheaderComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'

class SubheaderDisp extends React.Component {
  render() {
    return (
      <div>
        <h2>Ideal banner dimensions are 9.19 x 1 and no higher than 87 pixels. Otherwise, image gets stretched or becomes too narrow (in most browsers).</h2>
        <h1>Banner = 675 x 75 pixels</h1>
        <SubheaderComp banner={MEDIA_PATH + 'temp_journal-banner.png'} />
        <h1>Banner = 600 x 200 pixels (stretched horizontally)</h1>
        <img src="https://via.placeholder.com/600x200?text=UC+San+Diego+(600x200)"/>
        <SubheaderComp banner="https://via.placeholder.com/600x200?text=UC+San+Diego+(600x200)" />
        <h1>Banner = 1100 x 87 pixels (too narrow)</h1>
        <img src="https://via.placeholder.com/1100x87?text=UC+San+Diego+(1100x87)"/>
        <SubheaderComp banner="https://via.placeholder.com/1100x87?text=UC+San+Diego+(1100x87)" />
      </div>
    )
  }
}

module.exports = SubheaderDisp;
