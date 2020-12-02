// ##### Series Item URL Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import SubheaderComp from '../components/SubheaderComp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import ShareComp from '../components/ShareComp.jsx'
import AuthorListComp from '../components/AuthorListComp.jsx'
import PubInfoComp from '../components/PubInfoComp.jsx'
import ViewExternalComp from '../components/ViewExternalComp.jsx'
import RelatedItemsComp from '../components/RelatedItemsComp.jsx'
import FooterComp from '../components/FooterComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'
import faker from 'faker/locale/en'

class SeriesItemUrlLayout extends React.Component {
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <SubheaderComp unitTitle={'Information Center for the Environment'} isDept={true} bannerUrl={'https://escholarship.org/assets/ebadc9294e27ce4df7a7391de182d062a094d4a0ff94c8fd7ca8b212fcd85541'} isWide={false} />
        <NavBarComp />
        <nav className="c-breadcrumb">
          <ul>
            <li><a href="">eScholarship</a></li>
            <li><a href="">Campus Name</a></li>
            <li><a href="">Unit Name</a></li>
            <li><a href="">Series Name</a></li>
            <li><a className="c-breadcrumb-link--active" href="">From the New Heights</a></li>
          </ul>
        </nav>
        <div className="c-columns">
          <main id="maincontent" tabIndex="-1">
            <div className="c-tabs">
              <div className="c-tabs__tabs">
                <button className="c-tabs__button--active">Main Content</button>
              </div>
              <div className="c-tabs__content">
                <div className="c-itemactions">
                  <div className="o-alert1" role="alert">
                    This item is <strong>not available</strong> for download from eScholarship
                  </div>
                  <ShareComp />
                </div>
                <h2 className="c-tabcontent__main-heading">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</h2>
                <AuthorListComp />
                <PubInfoComp />
                <details className="c-togglecontent" open>
                  <summary>Abstract</summary>
                  <p>{faker.fake("{{lorem.paragraph}}")}</p>
                  <ViewExternalComp />
                </details>
              </div>
            </div>
          </main>
          <aside>
            <section className="o-columnbox1">
              <header>
                <h2>Related Items</h2>
              </header>
              <RelatedItemsComp />
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

module.exports = SeriesItemUrlLayout;
