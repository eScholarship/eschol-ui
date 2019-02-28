// ##### Divide Content Objects ##### //

import React from 'react'
import PubComp from '../components/PubComp.jsx'
import faker from 'faker/locale/en'

class DivideContentObj extends React.Component {
  render() {
    return (
      <div>
        <h1>Divide Content into 2 Balanced Columns</h1>
        <div className="o-dividecontent2x">
          <img src="http://placehold.it/250x150?text=Image" alt="" />
          <p>{faker.fake("{{lorem.paragraphs}}")}</p>
          <p>{faker.fake("{{lorem.paragraphs}}")}</p>
          <p>{faker.fake("{{lorem.paragraphs}}")}</p>
        </div>
        <h1>Divide Content into 2 Balanced Columns with Rule - Short</h1>
        <div className="o-dividecontent2x--ruled">
          <div className="c-pub">
            <h4 className="c-pub__heading"><a href="">Italy in the Mediterranean Today: A New Critical Topography</a></h4>
            <div className="c-authorlist">
              <ul className="c-authorlist__list">
                <li><a href="">Fogu, Claudio</a></li>
                <li><a href="">Re, Lucia</a></li>
                <li><a href="" className="c-authorlist__list-more-link">et al.</a></li>
              </ul>
            </div>
            <div className="c-pub__abstract"><div className="c-clientmarkup"><p>Editors' Introduction to Volume 1, Issue 1.</p></div></div>
          </div>
        </div>
        <h1>Divide Content into 2 Balanced Columns with Rule - Lengthy</h1>
        <div className="o-dividecontent2x--ruled">
          <PubComp />
          <img src="http://placehold.it/350x150?text=Image" alt="" />
          <PubComp />
          <img src="http://placehold.it/300x150?text=Image" alt="" />
          <PubComp />
        </div>
      </div>
    )
  }
}

module.exports = DivideContentObj;
