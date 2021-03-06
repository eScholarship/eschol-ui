// ##### Subheader Component ##### //

import React from 'react'

function SubheaderComp (props) {
  const stateStyles = `
    c-subheader
    ${props.bannerUrl ? "has-banner" : ""}
    ${props.isWide ? "is-wide" : ""}
    ${props.campusLabel ? "has-campus-label" : ""}
    is-${props.elementColor ? props.elementColor : "black"}
  `

  return (
    <div className={stateStyles} style={{backgroundColor: props.backgroundColor}}>
      <a className="c-subheader__title" href={props.bannerLink}>
        <h1>{props.unitTitle}</h1>
      </a>
      {props.bannerUrl && <a className="c-subheader__banner" href={props.bannerLink}>
        <img src={props.bannerUrl} alt={props.unitTitle + ' banner'} />
      </a> }
      {props.campusLabel && <a className="c-subheader__campus" href={props.campusLink}>{props.campusLabel}
      </a> }
      <div className="c-subheader__buttons">
        <button type="button">{props.isDept ? "Deposit" : "Submit"}</button>
        <button type="button">Manage <span className="c-subheader__button-fragment">Submissions</span></button>
      </div>
    </div>
  )
}

module.exports = SubheaderComp;
