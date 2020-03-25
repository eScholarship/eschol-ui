// ##### Journal Information Component ##### //

import React from 'react'
import MEDIA_PATH from '../../js/MediaPath.js'

class JournalInfoComp extends React.Component {
  render() {
    return (
      <div className="c-journalinfo">
        <img src={MEDIA_PATH + 'temp_journalinfo.png'} alt="DOAJ"/>
        <img src={MEDIA_PATH + 'cc-by-large.svg'} alt="creative commons attribution 4.0 international public license"/>
        <ul>
          <li><b>e-ISSN-</b> 0160-2764</li>
          <li><b>e-ISSN-</b> 0160-2765</li>
        </ul>
        <p><a href=''>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ</a>
        </p>
      </div>
    )
  }
}

module.exports = JournalInfoComp;
