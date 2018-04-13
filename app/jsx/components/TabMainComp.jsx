// ##### Tab Main Content Component ##### //

import React from 'react'
import ToggleContentComp from '../components/ToggleContentComp.jsx'
import faker from 'faker/locale/en'

class TabMainComp extends React.Component {
  render() {
    return (
      <div className="c-tabcontent">
        <details className="c-togglecontent" open>
          <summary>Abstract</summary>
          <p>{faker.fake("{{lorem.paragraphs}}")}</p>
          <div className="o-well-colored">{faker.fake("{{lorem.paragraphs}}")}</div>
        </details>
        <ToggleContentComp heading="Main Content" />
      </div>
    )
  }
}

module.exports = TabMainComp;
