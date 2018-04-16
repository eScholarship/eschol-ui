// ##### Well Objects ##### //

import React from 'react'
import faker from 'faker/locale/en'

class WellObj extends React.Component {
  render() {
    return (
      <div>

        <h1>Colored Well</h1>

        <div className="o-well-colored">
          {faker.fake("{{lorem.paragraph}}") + ' '}
          <a href="">{faker.fake("{{lorem.sentence}}") + ' '}</a>
          {faker.fake("{{lorem.paragraph}}")}
        </div>

        <h1>Large Well (no color)</h1>

        <div className="o-well-large">
          {faker.fake("{{lorem.paragraph}}") + ' '}
          <a href="">{faker.fake("{{lorem.sentence}}") + ' '}</a>
          {faker.fake("{{lorem.paragraph}}")}
        </div>

      </div>
    )
  }
}

module.exports = WellObj;
