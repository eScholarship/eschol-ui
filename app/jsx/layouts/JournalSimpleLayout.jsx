// ##### Journal Simple Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import IssueComp from '../components/IssueComp.jsx'
import MediaListComp from '../components/MediaListComp.jsx'
import PubPreviewComp from '../components/PubPreviewComp.jsx'
import PubComp from '../components/PubComp.jsx'
import JournalInfoComp from '../components/JournalInfoComp.jsx'
import RelatedItemsComp from '../components/RelatedItemsComp.jsx'
import FooterComp from '../components/FooterComp.jsx'
import faker from 'faker/locale/en'
import $ from 'jquery'

// Load dotdotdot in browser but not server:
if (!(typeof document === "undefined")) {
  const dotdotdot = require('jquery.dotdotdot')
}

class JournalSimpleLayout extends React.Component {

  componentDidMount() {    
    $(this.element).dotdotdot({
      watch: 'window',
      after: '.o-columnbox__truncate-more',
      callback: ()=> $(this.element).find(".o-columnbox__truncate-more").click(this.destroydotdotdot)
    });
    setTimeout(()=> $(this.element).trigger('update'), 0) // removes 'more' link upon page load if less than truncation threshold
  }
  destroydotdotdot = event => {
    $(this.element).trigger('destroy')
    $(this.element).removeClass("o-columnbox__truncate1")
  }

  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <div className="c-subheader">
          <div className="o-customselector--campus">
            <div className="o-customselector__heading">
              <a href="">UC Berkeley</a>
            </div>
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
          <a className="c-subheader__banner--narrow" href="">
            <h1>Room One Thousand</h1>
            <img src="http://pub-jschol-stg.escholarship.org/assets/cc6500b061f865f6dd015fefc1100ea989a5442b2e65f11e48d83c7d69a98610" alt="logo for Room One Thousand"/>
          </a>
          <div className="c-subheader__sidebar">
            <button className="o-button__3">Submit</button>
            <button className="o-button__3">Manage <span className="c-subheader__button-fragment">Submissions</span></button>
          </div>
        </div>
        <NavBarComp />
        <nav className="c-breadcrumb">
          <ul>
            <li><a href="">eScholarship</a></li>
            <li><a href="">Campus Name</a></li>
            <li><a href="">Journal Name</a></li>
            <li><a className="c-breadcrumb-link--active" href="">Volume ##, Issue ##</a></li>
          </ul>
        </nav>
        <section className="o-columnbox2">
          <header>
            <h2>About</h2>
          </header>
          <div className="o-columnbox__truncate1" ref={element => this.element = element}>
            <p>A Journal of Italian Studies {faker.fake("{{lorem.paragraph}}")}</p>
            <p>{faker.fake("{{lorem.paragraph}} {{lorem.paragraph}}")} <button className="o-columnbox__truncate-more">More</button>
            </p>
          </div>
        </section>
        <div className="c-columns">
          <main id="maincontent" tabIndex="-1">
            <section className="o-columnbox1">
              <div className="c-itemactions">
                <a href="" className="c-itemactions__link-buy">Buy Issue</a>
                <div className="o-download">
                  <a href="" className="o-download__button" download>Download Issue</a>
                  <details className="o-download__formats">
                    <summary aria-label="formats"></summary>
                    <ul className="o-download__nested-menu">
                      <li className="o-download__nested-list1">
                        Main
                        <ul>
                          <li><a href="">PDF</a></li>
                          <li><a href="">ePub</a></li>
                          <li><a href="">HTML</a></li>
                        </ul>
                      </li>
                      <li className="o-download__nested-list2">
                        Citation
                        <ul>
                          <li><a href="">RIS</a></li>
                          <li><a href="">BibText</a></li>
                          <li><a href="">EndNote</a></li>
                          <li><a href="">RefWorks</a></li>
                        </ul>
                      </li>
                      <li className="o-download__nested-list3">
                        Supplemental Material
                        <ul>
                          <li><a href="">Image</a></li>
                          <li><a href="">Audio</a></li>
                          <li><a href="">Video</a></li>
                          <li><a href="">Zip</a></li>
                          <li><a href="">File</a></li>
                        </ul>
                      </li>
                    </ul>
                  </details>
                </div>
                <details className="c-share">
                  <summary><span>Share Issue</span></summary>
                  <div className="c-share__list">
                    <a className="c-share__email" href="">Email</a>
                    <a className="c-share__facebook" href="">Facebook</a>
                    <a className="c-share__twitter" href="">Twitter</a>
                  </div>
                </details>
              </div>
              <div className="o-customselector">
                <h2 className="o-customselector__heading">Volume 6, Issue 2, 2016</h2>
                <details className="o-customselector__selector">
                  <summary aria-label="Select a different item"></summary>
                  <div className="o-customselector__menu">
                    <ul className="o-customselector__items">
                      <li><a href="">Volume 6, Issue 1, 2016</a></li>
                      <li><a href="">Volume 5, Issue 2, 2015</a></li>
                      <li><a href="">Volume 5, Issue 1, 2015</a></li>
                      <li><a href="">Volume 4, Issue 2, 2014</a></li>
                      <li><a href="">Volume 4, Issue 1, 2014</a></li>
                      <li><a href="">Volume 3, Issue 2, 2013</a></li>
                      <li><a href="">Volume 3, Issue 1, 2013</a></li>
                      <li><a href="">Volume 2, Issue 2, 2012</a></li>
                      <li><a href="">Volume 2, Issue 1, 2012</a></li>
                      <li><a href="">Volume 1, Issue 2, 2011</a></li>
                      <li><a href="">Volume 1, Issue 1, 2011</a></li>
                    </ul>
                  </div>
                </details>
              </div>
              <IssueComp />
              <h3 className="o-heading3">Front Matter</h3>
              <PubPreviewComp />
              <PubPreviewComp />
              <PubPreviewComp />
              <h3 className="o-heading3">Articles</h3>
              <PubPreviewComp />
              <PubPreviewComp />
              <PubPreviewComp />
              <h3 className="o-heading3">Book Reviews</h3>
              <PubComp />
              <PubComp />
              <PubComp />
            </section>
          </main>
          <aside>
            <section className="o-columnbox1">
              <header>
                <h2>Journal Information</h2>
              </header>
              <JournalInfoComp />
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>Featured Articles</h2>
              </header>
              <RelatedItemsComp />
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>Follow us on Twitter</h2>
              </header>
              [content to go here]
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

module.exports = JournalSimpleLayout;
