// ##### Journal Item PDF Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import SubheaderComp from '../components/SubheaderComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'
import NavBarComp from '../components/NavBarComp.jsx'
import ItemActionsComp from '../components/ItemActionsComp.jsx'
import AuthorListComp from '../components/AuthorListComp.jsx'
import PubInfoComp from '../components/PubInfoComp.jsx'
import PdfViewComp from '../components/PdfViewComp.jsx'
import JumpComp from '../components/JumpComp.jsx'
import RelatedItemsComp from '../components/RelatedItemsComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class JournalItemPdfLayout extends React.Component {
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <SubheaderComp unitTitle={'Berkeley Papers in Formal Linguistics'} isWide={false} />
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
        <div className="c-columns--sticky-sidebar">
          <main id="maincontent" tabIndex="-1">
            <ItemActionsComp />
            <h1 className="o-heading1a">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</h1>
            <AuthorListComp />
            <PubInfoComp />
            <div className="c-tabs">
              <div className="c-tabs__tabs">
                <button className="c-tabs__button--active">Main Content</button>
              </div>
              <div className="c-tabs__content">
                <details className="c-togglecontent" open>
                  <summary>Abstract</summary>
                  <p>Eum nihil quidem nisi sapiente vel obcaecati esse vero placeat! Dicta fugiat quam, nemo accusamus cum, non voluptas sit eveniet. Voluptates odio consectetur eum dicta vel at rerum accusamus inventore officiis, voluptate deleniti et reiciendis aliquam illo eaque laborum neque excepturi pariatur unde obcaecati molestiae dolores voluptas non earum minima.</p>
                  <div className="c-well">
                    Many UC-authored scholarly publications are freely available on this site because of the UC Academic Senate’s Open Access Policy. <a href="">Let us know how this access is important for you</a>.
                  </div>
                </details>
                <PdfViewComp />
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

module.exports = JournalItemPdfLayout;
