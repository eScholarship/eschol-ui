// ##### Subheader Component ##### //

import React from 'react'

class SubheaderComp extends React.Component {
  render() {
    return (
      <div className="c-subheader">
        <a className={this.props.isWide ? "c-subheader__banner--wide" : "c-subheader__banner--narrow"} href="">
          <h1>{this.props.unitTitle}</h1>
          {this.props.bannerUrl && <img src={this.props.bannerUrl} alt={this.props.unitTitle + ' banner'} /> }
        </a>
        <div className="c-subheader__sidebar">
          <button className="o-button__3">{this.props.isDept ? "Deposit" : "Submit"}</button>
          <button className="o-button__3">Manage <span className="c-subheader__button-fragment">Submissions</span></button>
        </div>
      </div>
    )
  }
}

module.exports = SubheaderComp;
