// ##### Browse Campuses Layout ##### //

import React from 'react'
import Header1Comp from '../components/Header1Comp.jsx'
import NavComp from '../components/NavComp.jsx'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import DescriptionListComp from '../components/DescriptionListComp.jsx'
import FooterComp from '../components/FooterComp.jsx'
import faker from 'faker/locale/en'

class BrowseCampusesLayout extends React.Component {
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
        <Header1Comp />
        <div className="c-navbar">
          <nav className="c-nav">
            <details open={this.state.isOpen ? "open" : ""} className="c-nav__main">
              <summary className="c-nav__main-button"><span>Menu</span>
              </summary>
              <ul className={this.state.submenuActive ? "c-nav__main-items--submenu-active" : "c-nav__main-items"}>
                <li>
                  <NavSubComp name="About" open={this.state.submenuActive == 1} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 1 : null})}>
                    <ul>
                      <li><a href="">About Us</a></li>
                      <li><a href="">Aims &amp; Scope</a></li>
                      <li><a href="">Editorial Board</a></li>
                    </ul>
                  </NavSubComp>
                </li>
                <li>
                  <NavSubComp name="Campus Sites" open={this.state.submenuActive == 2} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 2 : null})}>
                    <ul>
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
                  </NavSubComp>
                </li>
                <li>
                  <NavSubComp name="UC Open Access" open={this.state.submenuActive == 3} onSubmenuChanged={(flag)=> this.setState({submenuActive:flag ? 3 : null})}>
                    <ul>
                      <li><a href="">To Be Determined 1</a></li>
                      <li><a href="">To Be Determined 2</a></li>
                      <li><a href="">To Be Determined 3</a></li>
                    </ul>
                  </NavSubComp>
                </li>
                <li><a href="">eScholarship Publishing</a></li>
              </ul>
            </details>
          </nav>
        </div>
        <nav className="c-breadcrumb">
          <ul>
            <li><a href="">eScholarship</a></li>
            <li><a className="c-breadcrumb-link--active" href="">Journals</a></li>
          </ul>
        </nav>
        <div className="c-columns">
          <main id="maincontent">
            <section className="o-columnbox1">
              <header>
                <h2>Campuses</h2>
              </header>
              <div className="o-well-colored">
                {faker.fake("{{lorem.paragraph}}") + ' '}
               <a href="">{faker.fake("{{lorem.sentence}}") + ' '}</a>
               {faker.fake("{{lorem.paragraph}}")}</div>
              <DescriptionListComp />
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

module.exports = BrowseCampusesLayout;
