// ##### Browse Departments Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import SubheaderComp from '../components/SubheaderComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import ToggleListComp from '../components/ToggleListComp.jsx'
import FooterComp from '../components/FooterComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'
import faker from 'faker/locale/en'

class BrowseDepartmentsLayout extends React.Component {
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
  widthChange = ()=> {
    this.setState({isOpen: this.mq.matches})
  }
  render() {
    return (
      <div>
      <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <SubheaderComp unitTitle={'Western Journal of Emergency Medicine'} bannerUrl={MEDIA_PATH + 'temp_journal-banner.png'} isWide={true}/>
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
        <nav className="c-breadcrumb">
          <ul>
            <li><a href="">eScholarship</a></li>
            <li><a href="">UC Berkeley</a></li>
            <li><a className="c-breadcrumb-link--active" href="">Academic Units</a></li>
          </ul>
        </nav>
        <div className="c-columns">
          <main id="maincontent" tabIndex="-1">
            <section className="o-columnbox1">
              <header>
                <h2>Academic Units</h2>
              </header>
              <div className="o-well-colored">
                {faker.fake("{{lorem.paragraph}}") + ' '}
                <a href="">{faker.fake("{{lorem.sentence}}") + ' '}</a>
                {faker.fake("{{lorem.paragraph}}")}</div>
              <ToggleListComp />
            </section>
          </main>
          <aside>
            <section className="o-columnbox1">
              <header>
                <h2>Featured Journals</h2>
              </header>
              <a href="" className="o-journal1">
                <figure>
                  <img src="http://via.placeholder.com/300x300?text=Image" alt="sample journal"/>
                  <figcaption>Chicana-Latina Law Review</figcaption>
                </figure>
              </a>
              <a href="" className="o-journal1">
                <figure>
                  <img src="http://via.placeholder.com/300x300?text=Image" alt="sample journal"/>
                  <figcaption>Chicana-Latina Law Review</figcaption>
                </figure>
              </a>
              <a href="" className="o-journal1">
                <figure>
                  <img src="http://via.placeholder.com/300x300?text=Image" alt="sample journal"/>
                  <figcaption>Chicana-Latina Law Review</figcaption>
                </figure>
              </a>
            </section>
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

module.exports = BrowseDepartmentsLayout;
