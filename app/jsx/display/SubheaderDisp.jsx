// ##### Subheader Display ##### //

import React from 'react'
import SubheaderComp from '../components/SubheaderComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'

class SubheaderDisp extends React.Component {
  render() {
    return (
      <div>
        <h3>For wide setting, Ideal banner dimensions are 9.19 x 1 and no higher than 87 pixels. Otherwise, image gets stretched or becomes too narrow (in most browsers).</h3>
        <hr />
        <h2>Wide Setting: Logo image contains the full, legible title of your site. Banner = 675 x 75 pixels</h2>
        <SubheaderComp banner={MEDIA_PATH + 'temp_journal-banner.png'} wide={true} />
        <h2>Narrow Setting and Banner = 600 x 200 pixels</h2>
        <SubheaderComp banner={"https://picsum.photos/600/200/?image=951"} wide={false} />
        <h2>Wide Setting and Banner = 600 x 200 pixels (stretched horizontally)</h2>
        <img src="https://via.placeholder.com/600x200?text=UC+San+Diego+(600x200)"/>
        <SubheaderComp banner="https://via.placeholder.com/600x200?text=UC+San+Diego+(600x200)" wide={true} />
        <h2>Wide Setting and Banner = 1100 x 87 pixels (too narrow)</h2>
        <img src="https://via.placeholder.com/1100x87?text=UC+San+Diego+(1100x87)"/>
        <SubheaderComp banner="https://via.placeholder.com/1100x87?text=UC+San+Diego+(1100x87)" wide={true} />
      </div>
    )
  }
}

module.exports = SubheaderDisp;
