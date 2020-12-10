// ##### Subheader Component ##### //

import React from 'react'

class SubheaderComp extends React.Component {
  render() {
    return (
      <div className={`c-subheader ${this.props.bannerUrl ? "has-banner" : ""} ${this.props.isWide ? "is-wide" : ""} ${this.props.campusLabel ? "has-campus-label" : ""}`}>
        <a className="c-subheader__title" href={this.props.bannerLink}>
          <h1>{this.props.unitTitle}</h1>
        </a>
        {this.props.bannerUrl && <a className="c-subheader__banner" href={this.props.bannerLink}>
          <img src={this.props.bannerUrl} alt={this.props.unitTitle + ' banner'} />
        </a> }
        {this.props.campusLabel && <a className="c-subheader__campus" href={this.props.campusLink}>{this.props.campusLabel}
        </a> }
        <div className="c-subheader__buttons">
          <button className="o-button__3">{this.props.isDept ? "Deposit" : "Submit"}</button>
          <button className="o-button__3">Manage <span className="c-subheader__button-fragment">Submissions</span></button>
        </div>
      </div>
    )
  }
}

module.exports = SubheaderComp;
