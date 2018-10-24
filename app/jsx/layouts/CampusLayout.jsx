// ##### Campus Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import CampusSearchComp from '../components/CampusSearchComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import CampusHeroComp from '../components/CampusHeroComp.jsx'
import StatCarouselComp from '../components/StatCarouselComp.jsx'
import UnitCarouselComp from '../components/UnitCarouselComp.jsx'
import JournalCarouselComp from '../components/JournalCarouselComp.jsx'
import SocialFeedComp from '../components/SocialFeedComp.jsx'
import FooterComp from '../components/FooterComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'

class CampusLayout extends React.Component {
  constructor(props){
    super(props)
    this.state = {submenuActive: null}
  }
  componentWillMount() {
    if (matchMedia) {
      this.mq = matchMedia("(min-width:"+Breakpoints.screen3+")")
      this.mq.addListener(this.widthChange)
      this.widthChange()
    }
  }
  widthChange = () => {
    this.setState({isOpen: this.mq.matches})
  }
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <div className="c-subheader">
          <div className="o-customselector--campus">
            <h1 className="o-customselector__heading">
              <a href="">UC Office of the President</a>
            </h1>
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
          <a className="c-subheader__banner--wide" href="">
            <h1>Western Journal of Emergency Medicine</h1>
            <img src={MEDIA_PATH + 'temp_journal-banner.png'} alt="Western Journal of Emergency Medicine"/>
          </a>
          <div className="c-subheader__sidebar">
            <button className="o-button__3">Deposit</button>
            <button className="o-button__3">Manage <span className="c-subheader__button-fragment">Submissions</span></button>
          </div>
        </div>
        <div className="c-navbar">
          <nav className="c-nav">
            <details open={this.state.isOpen ? "open" : ""} className="c-nav__main">
              <summary className="c-nav__main-button"><span>Menu</span>
              </summary>
              <ul className={this.state.submenuActive ? "c-nav__main-items--submenu-active" : "c-nav__main-items"}>
                <li><a href="" className="c-nav__item--active">Open Access Policies</a></li>
                <li><a href="">Journals</a></li>
                <li><a href="">Academic Units</a></li>
              </ul>
            </details>
          </nav>
        </div>
        <CampusHeroComp />
        <StatCarouselComp />
        <div className="c-columns">
          <main id="maincontent">
            <CampusSearchComp />
            <div className="c-campuscarouselframe">
              <h2 className="c-campuscarouselframe__heading"><a href="">Center for Medieval and Renaissance Studies</a></h2>
              <div className="c-campuscarouselframe__carousel">
                <UnitCarouselComp />
              </div>
              <div className="c-campuscarouselframe__stats">
                <div className="o-stat--item">
                  <a href="">1,000</a>Items
                </div>
                <div className="o-stat--view">
                  <b>100,000</b>Views
                </div>
              </div>
            </div>
            <div className="c-campuscarouselframe">
              <h2 className="c-campuscarouselframe__heading"><a href="">Center for Medieval and Renaissance Studies</a></h2>
              <div className="c-campuscarouselframe__carousel">
                <JournalCarouselComp />
              </div>
              <div className="c-campuscarouselframe__stats">
                <div className="o-stat--item">
                  <a href="">1,000</a>Items
                </div>
                <div className="o-stat--view">
                  <b>100,000</b>Views
                </div>
              </div>
            </div>
          </main>
          <aside>
            <section className="o-columnbox1">
              <header>
                <h2>Campus Contact</h2>
              </header>
              <p><a className="o-textlink__secondary" href="">Rachael Samberg</a>
                <br/>Scholarly Communication Officer,
                <br/>University of California, Berkeley
                <br/>212/218 Doe Library
                <br/>UC Berkeley
                <br/>Berkeley, CA 94720-6000
                <br/>(510) 664-9815
              </p>
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>UC Berkeley Datasets</h2>
              </header>
              [content to go here]
            </section>
            <SocialFeedComp />
          </aside>
        </div>
        <div className="c-toplink">
          <a href="#top">Top</a>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = CampusLayout;
