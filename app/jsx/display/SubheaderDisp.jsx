// ##### Subheader Display ##### //

import React from 'react'
import SubheaderComp from '../components/SubheaderComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'

class SubheaderDisp extends React.Component {
  render() {
    return (
      <div>
        <h2>Journal Subheader Using Wide Banner</h2>
        <SubheaderComp unitTitle={'Western Journal of Emergency Medicine'} bannerUrl={MEDIA_PATH + 'temp_journal-banner.png'} isWide={true} />
        <h2>Journal Subheader Using Narrow Banner</h2>
        <SubheaderComp unitTitle={'Berkeley Undergraduate Journal of Classics'} bannerUrl={'https://escholarship.org/assets/c6efb9a478093370f05eb67c08b132b74570d848571548c3a320c213183ff1dd'} isWide={false} />
        <h2>Journal Subheader With No Banner</h2>
        <SubheaderComp unitTitle={'Berkeley Papers in Formal Linguistics'} isWide={false} />
        <h2>Department Subheader Using Wide Banner</h2>
        <SubheaderComp unitTitle={'Archaeological Research Facility'} isDept={true} bannerUrl={'https://escholarship.org/assets/f5bae7cdd66fe7d61508583785f181d93795ad7170e3fa573537ef06d51f4eb2'} isWide={true} />
        <h2>Department Subheader Using Narrow Banner</h2>
        <SubheaderComp unitTitle={'Information Center for the Environment'} isDept={true} bannerUrl={'https://escholarship.org/assets/ebadc9294e27ce4df7a7391de182d062a094d4a0ff94c8fd7ca8b212fcd85541'} isWide={false} />
        <h2>Department Subheader With No Banner</h2>
        <SubheaderComp unitTitle={'Bay Area International Group'} isDept={true} isWide={false} />
      </div>
    )
  }
}

module.exports = SubheaderDisp;
