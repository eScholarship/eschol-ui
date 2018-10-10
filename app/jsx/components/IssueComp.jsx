// ##### Issue Component ##### //

import React from 'react'
import LazyImageComp from '../components/LazyImageComp.jsx'
import faker from 'faker/locale/en'
import $ from 'jquery'

class IssueComp extends React.Component {

  openAndAdjust = event => {
    $(this.element).trigger('destroy')
    $(this.element).removeClass("c-issue__caption-truncate")
    let descr_h = ($(".c-issue__description")[0].offsetHeight)
    let caption_h = ($(this.element)[0].offsetHeight)
    $(".c-issue__description").height(descr_h + caption_h - 40)
  }

  componentDidMount() {
    $(this.element).dotdotdot({
       watch: 'window',
       after: '.c-issue__caption-truncate-more',
       callback: () => $(this.element).find(".c-issue__caption-truncate-more").click(this.openAndAdjust)
    });
    setTimeout(() => $(this.element).trigger('update'), 0) // removes 'more' link upon page load if less than truncation threshold
  }

  render() {
    return (
      <div className="c-issue">
        <h3>Focus Issue: {(faker.fake("{{commerce.productName}} {{commerce.productName}} {{commerce.productName}}"))}</h3>
        <figure className="c-issue__thumbnail">
          <LazyImageComp
            src="https://escholarship.org/images/homecover_fb.png"
            alt="journal cover" />
          <figcaption className="c-issue__caption-truncate" ref={e => this.element = e}>
            <div><i>Cover Caption:</i> The cover image is from {faker.fake("{{lorem.paragraph}} {{lorem.paragraph}} {{lorem.paragraph}}")} <button className="c-issue__caption-truncate-more">More</button></div>
          </figcaption>
        </figure>
        <div className="c-issue__description">
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
