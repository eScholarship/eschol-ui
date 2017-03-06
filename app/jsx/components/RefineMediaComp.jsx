// ##### Refine Media Component ##### //

import React from 'react'

class RefineMediaComp extends React.Component {
  render() {
    return (
      <div className="c-refinemedia">
        <div className="o-input__droplist2">
          <label htmlFor="o-input__droplist-label2">Refine media type by:</label>
          <select name="" id="o-input__droplist-label2">
            <option value="">All</option>
            <option value="">Documents</option>
            <option value="">Images</option>
            <option value="">Videos</option>
            <option value="">Others</option>
          </select>
        </div>
        <div className="c-download">
          <button className="c-download__button">Download All Files</button>
          <details className="c-download__formats">
            <summary aria-label="formats"></summary>
            <ul className="c-download__single-menu">
              <li><a href="">Image</a></li>
              <li><a href="">Audio</a></li>
              <li><a href="">Video</a></li>
              <li><a href="">Zip</a></li>
              <li><a href="">File</a></li>
            </ul>
          </details>
        </div>
      </div>
    )
  }
}

module.exports = RefineMediaComp;
