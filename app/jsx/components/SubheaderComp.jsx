// ##### Subheader Component ##### //

import React from 'react'

class SubheaderComp extends React.Component {
  render() {
    return (
      <div className="c-subheader">
        <div className="o-customselector--campus">
          <div className="o-customselector__heading">
            <a href="">UC Office of the President</a>
          </div>
          <details className="o-customselector__selector">
            <summary aria-label="Select a different item"></summary>
            <div className="o-customselector__menu">
              <div className="o-customselector__sub-heading" id="o-customselector__sub-heading">eScholarship at &hellip;</div>
              <ul className="o-customselector__items">
                <li><a href="">UC Berkeley</a></li>
                <li><a href="">UC Davis</a></li>
                <li><a href="">UC Irvine</a></li>
                <li><a href="">UCLA</a></li>
                <li><a href="">UC Merced</a></li>
                <li><a href="">UC Riverside</a></li>
                <li><a href="">UC San Diego</a></li>
                <li><a href="">UC San Francisco</a></li>
                <li><a href="">UC Santa Barbara</a></li>
                <li><a href="">UC Santa Cruz</a></li>
                <li><a href="">UC Office of the President</a></li>
                <li><a href="">UC Press</a></li>
              </ul>
            </div>
          </details>
        </div>
        <a className={this.props.wide ? "c-subheader__banner--wide" : "c-subheader__banner--narrow"} href="">
          <h1>{this.props.unitTitle}</h1>
          <img src={this.props.banner} alt={this.props.unitTitle} />
        </a>
        <div className="c-subheader__sidebar">
          <button className="o-button__3">Submit</button>
          <button className="o-button__3">Manage <span className="c-subheader__button-fragment">Submissions</span></button>
        </div>
      </div>
    )
  }
}

module.exports = SubheaderComp;
