// ##### Marquee Component ##### //

import React from 'react'
import $ from 'jquery'
import Flickity from 'flickity-imagesloaded'
import MEDIA_PATH from '../../js/MediaPath.js'
import faker from 'faker/locale/en'

// Load dotdotdot in browser but not server:
if (!(typeof document === "undefined")) {
  const dotdotdot = require('jquery.dotdotdot')
}

class CarouselComp extends React.Component {
  componentDidMount () {
    // Dotdotdot 1 for carousel:
    $('.c-marquee__carousel-cell').dotdotdot({
      watch: 'window',
    });

    // Dotdotdot 2 with truncation for sidebar:
    $(this.element).dotdotdot({
      watch: 'window',
      after: '.c-marquee__sidebar-more',
      callback: () => $(this.element).find(".c-marquee__sidebar-more").click(this.destroydotdotdot)
    });
    setTimeout(() => $(this.element).trigger('update'), 0) // removes 'more' link upon page load if less than truncation threshold

    // Flickity:
    var carousel = $('.c-marquee__carousel')[0];
    var options = {
      cellAlign: 'left',
      contain: true,
      initialIndex: 0,
      imagesLoaded: true
    }
    this.flkty = new Flickity(carousel, options);
  }
  destroydotdotdot = event => {
    $(this.element).trigger('destroy')
    $(this.element).removeClass("c-marquee__sidebar-truncate")
  }
  componentWillUnmount() {
    if (this.flkty) {
      this.flkty.destroy();
    }
  }
  render() {
    return (
      <div className="c-marquee">
        <div className="c-marquee__carousel">
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('"+ MEDIA_PATH + 'hero-ucb.jpg'+"')"}}>
            <div className="c-clientmarkup c-clientmarkup__dark-bg">
              <div><div>
                <h1>Use of machine learning to classify extant apes!</h1>
                <p>{faker.fake("{{lorem.sentence}}") + '  '}
                  <a href="">{faker.fake("{{lorem.sentence}}") + '  '}</a>
                  <ul>
                    <li><a href="">{faker.fake("{{lorem.sentence}}") + '  '}</a></li>
                    <li>{faker.fake("{{lorem.sentence}} {{lorem.sentence}}")}</li>
                  </ul>
                </p>
                <br/>
              </div></div>
            </div>
          </div>
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('https://picsum.photos/900/296/?image=1025&gravity=east')"}}>
            <h1>Carousel Cell Title 2</h1>
            <p><em>Monson et al. apply machine learning using dental morphology to classify extant apes and shed light on the chimpanzee-human last common ancestor</em>
            <br/></p>
          </div>
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('https://picsum.photos/842/338/?random&gravity=east')"}}>
            <h1>Carousel Cell Title 3</h1>
            <div className="c-clientmarkup"><div><div><p></p><p><em>An excellent update of the vertebrate fauna and chronostratigraphy of the Miocene type Mascall Formation, John Day Basin, Oregon, USA by Kaitlin Clare Maguire, Joshua Samuels, and Mark Schmitz</em></p><p></p></div></div></div>
          </div>
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('https://picsum.photos/900/363/?random&gravity=east')"}}>
            <h1>Carousel Cell Title 4</h1>
            <p>{faker.fake("{{lorem.paragraph}}")}</p>
          </div>
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('https://picsum.photos/900/364/?random&gravity=east')"}}>
            <h1>Carousel Cell Title 5</h1>
            <div className="c-clientmarkup"><div><div><p></p><p><em>An excellent update of the vertebrate fauna and chronostratigraphy of the Miocene type Mascall Formation, John Day Basin, Oregon, USA by Kaitlin Clare Maguire, Joshua Samuels, and Mark Schmitz</em></p><p><em>&nbsp;&nbsp;</em></p></div></div></div>
          </div>
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('https://picsum.photos/900/365/?random&gravity=east')"}}>
            <h1>Carousel Cell Title 6</h1>
            <p>{faker.fake("{{lorem.paragraph}}")}</p>
          </div>
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('https://picsum.photos/900/366/?random&gravity=east')"}}>
            <h1>Carousel Cell Title 7</h1>
            <p>{faker.fake("{{lorem.paragraphs}}")}</p>
          </div>
          <div className="c-marquee__carousel-cell" style={{backgroundImage: "url('https://picsum.photos/900/367/?random&gravity=east')"}}>
            <h1>Carousel Cell Title 8</h1>
            <p>{faker.fake("{{lorem.paragraph}}")}</p>
          </div>
        </div>
        <aside className="c-marquee__sidebar">
          <section className="o-columnbox2">
            <header>
              <h2>About</h2>
            </header>
            <div className="c-marquee__sidebar-truncate" ref={element => this.element = element}>
              <p>{faker.fake("{{lorem.paragraph}}")}</p>
              <p>{faker.fake("{{lorem.paragraph}}")} <button className="c-marquee__sidebar-more">More</button>
              </p>
            </div>
          </section>
        </aside>
      </div>
    )
  }
}

module.exports = CarouselComp;
