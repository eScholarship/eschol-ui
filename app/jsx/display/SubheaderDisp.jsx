// ##### Subheader Display ##### //

import React from 'react'
import SubheaderComp from '../components/SubheaderComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'

class SubheaderDisp extends React.Component {
  render() {
    return (
      <div>
        <h2>Journal Subheader Using Wide Banner</h2>
        <SubheaderComp bannerLink={'https://escholarship.org/uc/uciem_westjem'} unitTitle={'Western Journal of Emergency Medicine'} bannerUrl={MEDIA_PATH + 'temp_journal-banner.png'} isWide={true} />
        <h2>Journal Subheader Using Wide Banner With Campus Label</h2>
        <SubheaderComp bannerLink={'https://escholarship.org/uc/uciem_westjem'} unitTitle={'Western Journal of Emergency Medicine'} bannerUrl={MEDIA_PATH + 'temp_journal-banner.png'} isWide={true} campusLabel={'UC Irvine'} campusLink={'https://escholarship.org/uc/uci'} />
        <h2>Journal Subheader Using Small Logo + Typeset Title</h2>
        <SubheaderComp bannerLink={'https://escholarship.org/uc/ucbclassics_bujc'} unitTitle={'Berkeley Undergraduate Journal of Classics'} bannerUrl={'https://escholarship.org/assets/c6efb9a478093370f05eb67c08b132b74570d848571548c3a320c213183ff1dd'} isWide={false} />
        <h2>Journal Subheader Using Small Logo + Typeset Title With Campus Label</h2>
        <SubheaderComp bannerLink={'https://escholarship.org/uc/ucbclassics_bujc'} unitTitle={'Berkeley Undergraduate Journal of Classics'} bannerUrl={'https://escholarship.org/assets/c6efb9a478093370f05eb67c08b132b74570d848571548c3a320c213183ff1dd'} isWide={false} campusLabel={'UC Berkeley'} campusLink={'https://escholarship.org/uc/ucb'} />
        <h2>Journal Subheader Using Typeset Title Only</h2>
        <SubheaderComp bannerLink={'https://escholarship.org/uc/bling_formal_linguistics'} unitTitle={'Berkeley Papers in Formal Linguistics'} isWide={false} />
        <h2>Journal Subheader Using Typeset Title Only With Campus Label</h2>
        <SubheaderComp bannerLink={'https://escholarship.org/uc/bling_formal_linguistics'} unitTitle={'Berkeley Papers in Formal Linguistics'} isWide={false} campusLabel={'UC Berkeley'} campusLink={'https://escholarship.org/uc/ucb'} />
        <h2>Department Subheader Using Wide Banner</h2>
        <SubheaderComp bannerLink={'https://escholarship.org/uc/arf'} unitTitle={'Archaeological Research Facility'} isDept={true} bannerUrl={'https://escholarship.org/assets/f5bae7cdd66fe7d61508583785f181d93795ad7170e3fa573537ef06d51f4eb2'} isWide={true} />
        <h2>Department Subheader Using Wide Banner With Campus Label</h2>
        <SubheaderComp bannerLink={'https://escholarship.org/uc/arf'} unitTitle={'Archaeological Research Facility'} isDept={true} bannerUrl={'https://escholarship.org/assets/f5bae7cdd66fe7d61508583785f181d93795ad7170e3fa573537ef06d51f4eb2'} isWide={true}  campusLabel={'UC Berkeley'} campusLink={'https://escholarship.org/uc/ucb'} />
        <h2>Department Subheader Using Small Logo + Typeset Title</h2>
        <SubheaderComp bannerLink={'https://escholarship.org/uc/jmie_ice'} unitTitle={'Information Center for the Environment'} isDept={true} bannerUrl={'https://escholarship.org/assets/ebadc9294e27ce4df7a7391de182d062a094d4a0ff94c8fd7ca8b212fcd85541'} isWide={false} />
        <h2>Department Subheader Using Small Logo + Typeset Title With Campus Label</h2>
        <SubheaderComp bannerLink={'https://escholarship.org/uc/jmie_ice'} unitTitle={'Information Center for the Environment'} isDept={true} bannerUrl={'https://escholarship.org/assets/ebadc9294e27ce4df7a7391de182d062a094d4a0ff94c8fd7ca8b212fcd85541'} isWide={false} campusLabel={'UC Davis'} campusLink={'https://escholarship.org/uc/ucd'} />
        <h2>Department Subheader Using Typeset Title Only</h2>
        <SubheaderComp bannerLink={'https://escholarship.org/uc/big'} unitTitle={'Bay Area International Group'} isDept={true} isWide={false} />
        <h2>Department Subheader Using Typeset Title Only With Campus Label</h2>
        <SubheaderComp bannerLink={'https://escholarship.org/uc/big'} unitTitle={'Bay Area International Group'} isDept={true} isWide={false} campusLabel={'UC Berkeley'} campusLink={'https://escholarship.org/uc/ucb'} />
      </div>
    )
  }
}

module.exports = SubheaderDisp;
