// ##### Series Item Withdrawn Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import SubheaderComp from '../components/SubheaderComp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import ShareComp from '../components/ShareComp.jsx'
import AuthorListComp from '../components/AuthorListComp.jsx'
import JumpComp from '../components/JumpComp.jsx'
import RelatedItemsComp from '../components/RelatedItemsComp.jsx'
import FooterComp from '../components/FooterComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'

class SeriesItemWithdrawnLayout extends React.Component {
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <SubheaderComp unitTitle={'Bay Area International Group'} isDept={true} isWide={false} />
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
                <div className="o-itemunavailable__withdrawn">
                  <p className="o-itemunavailable__lede">This item has been withdrawn and is <strong>no longer available</strong>.</p>
                </div>
              </div>
            </div>
          </main>
          <aside>
            <JumpComp />
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

module.exports = SeriesItemWithdrawnLayout;
