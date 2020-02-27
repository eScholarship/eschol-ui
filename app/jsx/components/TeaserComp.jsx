// ##### Teaser Component ##### //

import React from 'react'

class TeaserComp extends React.Component {
  render() {
    return (
      <div className="c-teaser">
        <section>
          <header>
            <h2>eScholarship Publishing</h2>
          </header>
          <p>OA publishing for journals, monographs, conference proceedings and more.
          </p>
          <a href="#publishing">Learn more</a>
        </section>
        <section>
          <header>
            <h2>eScholarship Repository</h2>
          </header>
          <p>OA repository services for UC researchers to share their scholarly output.
          </p>
          <a href="#repository">Learn more</a>
        </section>
      </div>
    )
  }
}

module.exports = TeaserComp;
