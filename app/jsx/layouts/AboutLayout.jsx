// ##### About Layout ##### //

import React from 'react'
import TestMessageComp from '../components/TestMessageComp.jsx'
import Header1Comp from '../components/Header1Comp.jsx'
import NavComp from '../components/NavComp.jsx'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import BreadcrumbComp from '../components/BreadcrumbComp.jsx'
import faker from 'faker/locale/en'
import RelatedItemsComp from '../components/RelatedItemsComp.jsx'
import ModalComp from '../components/ModalComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class AboutLayout extends React.Component {
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
        <TestMessageComp />
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
        <BreadcrumbComp />
        <div className="c-columns">
          <main id="maincontent">
            <section className="o-columnbox1 c-clientmarkup">
              <header>
                <h2>About eScholarship</h2>
              </header>
              <h1>Heading Level 1 {(faker.fake("{{commerce.productName}} {{finance.accountName}}"))}</h1>
              <p>{faker.fake("{{lorem.paragraph}}") + ' '}
                <a href="">{faker.fake("{{lorem.sentence}}") + ' '}</a>
                {faker.fake("{{lorem.paragraph}}")}</p>
              <h2>Heading Level 2 {(faker.fake("{{commerce.productName}} {{company.companyName}}"))}</h2>
              <p>{faker.fake("{{lorem.paragraph}}") + ' '}
                <a href="">{faker.fake("{{lorem.sentence}}") + ' '}</a>
                {faker.fake("{{lorem.paragraph}}")}</p>
              <h3>Heading Level 3 {(faker.fake("{{finance.accountName}} {{commerce.productName}}"))}</h3>
              <p>{faker.fake("{{lorem.paragraph}}") + ' '}
                <a href="">{faker.fake("{{lorem.sentence}}") + ' '}</a>
                {faker.fake("{{lorem.paragraph}}")}</p>
              <h4>Heading Level 4 {(faker.fake("{{finance.accountName}} {{finance.accountName}} {{commerce.productName}}"))}</h4>
              <p>{faker.fake("{{lorem.paragraph}}") + ' '}
                <a href="">{faker.fake("{{lorem.sentence}}") + ' '}</a>
                {faker.fake("{{lorem.paragraph}}")}</p>
              <h4>Heading Level 4 {(faker.fake("{{finance.accountName}} {{finance.accountName}} {{commerce.productName}}"))}</h4>
              <p>{faker.fake("{{lorem.paragraph}}") + ' '}
                <a href="">{faker.fake("{{lorem.sentence}}") + ' '}</a>
                {faker.fake("{{lorem.paragraph}}")}</p>
              <ul>
                <li>Unordered list</li>
                <li>{faker.fake("{{lorem.sentence}} {{lorem.sentence}} {{lorem.sentence}}")}</li>
                <li>{faker.fake("{{lorem.sentence}} {{lorem.sentence}}")}</li>
                <li>{faker.fake("{{lorem.sentence}} {{lorem.sentence}} {{lorem.sentence}}")}</li>
              </ul>
              <img src="http://via.placeholder.com/400x100?text=Responsive+Image"/>
              <ol>
                <li>Ordered list
                </li>
                <li>{faker.fake("{{lorem.sentence}} {{lorem.sentence}} {{lorem.sentence}}")}</li>
                <li>{faker.fake("{{lorem.sentence}} {{lorem.sentence}}")}</li>
                <li>{faker.fake("{{lorem.sentence}} {{lorem.sentence}} {{lorem.sentence}}")}</li>
              </ol>
              <blockquote>Blockquote. {faker.fake("{{lorem.paragraph}}")}
              </blockquote>
              <p>Bold and italicized text. {faker.fake("{{lorem.paragraph}}")}
              </p>
              <ModalComp />
            </section>
          </main>
          <aside>
            <section className="o-columnbox1 c-sidebarnav">
              <header>
                <h2>Campus Contact</h2>
              </header>
              <p>Open Access support team:</p>
              <p><a className="o-textlink__secondary" href="mailto:OAsupport@lib.ucdavis.edu">OAsupport@lib.ucdavis.edu</a></p>
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>UC Davis Datasets</h2>
              </header>
                <p><img src="https://escholarship.org/assets/ae9113630087df93bf4da32614fddb8ca48bfbc40886118f043c278671849ece" alt="Dash logo"/></p>
                <p>Publish the data that accompanies your research in <a className="o-textlink__secondary" href="https://dash.ucdavis.edu/stash">UC Davis Dash</a>.</p>
            </section>
            <section className="o-columnbox1 c-sidebarnav">
              <header>
                <h2>Recent Articles</h2>
              </header>
              <RelatedItemsComp />
            </section>
          </aside>
        </div>
        <div className="c-toplink">
          <a href="#top">Top</a>
        </div>
        <div className="c-toplink">
          <a href="#top">Top</a>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = AboutLayout;
