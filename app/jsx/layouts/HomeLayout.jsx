// ##### Home Layout ##### //

import React from 'react'
import Header1Comp from '../components/Header1Comp.jsx'
import NavComp from '../components/NavComp.jsx'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import HeroComp from '../components/HeroComp.jsx'
import TeaserComp from '../components/TeaserComp.jsx'
import HomeSection1Comp from '../components/HomeSection1Comp.jsx'
import HomeSection2Comp from '../components/HomeSection2Comp.jsx'
import HomeSection3Comp from '../components/HomeSection3Comp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class HomeLayout extends React.Component {
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
        <HeroComp />
        <TeaserComp />
        <main id="maincontent" tabIndex="-1">
          <section className="c-homesection">
            <header>
              <h2>Why Open Access with eScholarship?</h2>
            </header>
            <HomeSection1Comp />
          </section>
          <section className="c-homesection">
            <header>
              <h2>eScholarship is also an open access publishing platform</h2>
            </header>
            <HomeSection3Comp />
          </section>
          <section className="c-homesection">
            <header>
              <h2>eScholarship is the institutional repository for the UC system</h2>
            </header>
            <HomeSection2Comp />
          </section>
        </main>
        <div className="c-toplink">
          <a href="#top">Top</a>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = HomeLayout;
