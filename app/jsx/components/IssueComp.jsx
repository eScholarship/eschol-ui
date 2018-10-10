// ##### Issue Component ##### //

import React from 'react'
import LazyImageComp from '../components/LazyImageComp.jsx'
import faker from 'faker/locale/en'
import $ from 'jquery'

class IssueComp extends React.Component {

  openAndAdjust = event => {
    $(this.caption).trigger('destroy')
    $(this.caption).removeClass("c-issue__caption-truncate")
    if (this.descr) {
      $(this.descr).height($(this.descr)[0].offsetHeight + $(this.caption)[0].offsetHeight - 40)
    }
  }

  handleMissingThumbnail = event => {
    $(this.title).css( "left", "0" )
  }

  componentDidMount() {
    $(this.caption).dotdotdot({
       watch: 'window',
       after: '.c-issue__caption-truncate-more',
       callback: () => $(this.caption).find(".c-issue__caption-truncate-more").click(this.openAndAdjust)
    });
    setTimeout(() => $(this.caption).trigger('update'), 0) // removes 'more' link upon page load if less than truncation threshold
    if (!(this.thumbnail)) {
      this.handleMissingThumbnail()
    }
  }

  render() {
    return (
      <div className="c-issue">
        <h3 className="c-issue_title" ref={e => this.title = e}>Focus Issue: {(faker.fake("{{commerce.productName}} {{commerce.productName}} {{commerce.productName}}"))}</h3>
        <figure className="c-issue__thumbnail" ref={e => this.thumbnail = e}>
          <LazyImageComp
            src="https://escholarship.org/images/homecover_fb.png"
            alt="journal cover" />
          <figcaption className="c-issue__caption-truncate" ref={e => this.caption = e}>
            <div><i>Cover Caption:</i> The cover image is from {faker.fake("{{lorem.paragraph}} {{lorem.paragraph}} {{lorem.paragraph}}")} <button className="c-issue__caption-truncate-more">More</button></div>
          </figcaption>
        </figure>
        <div className="c-issue__description" ref={e => this.descr = e}>
          <p>{faker.fake("{{lorem.paragraph}}")}</p>
          <p>{faker.fake("{{lorem.paragraph}}")}</p>
          <p>{faker.fake("{{lorem.paragraph}}")}</p>
          <p>{faker.fake("{{lorem.paragraph}}")}</p>
          <p>{faker.fake("{{lorem.paragraph}} {{lorem.paragraph}}")}</p>
        </div>
      </div>
    )
  }
}

module.exports = IssueComp;
