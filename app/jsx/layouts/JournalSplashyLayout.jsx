// ##### Journal Splashy Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import SubheaderComp from '../components/SubheaderComp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import BreadcrumbComp from '../components/BreadcrumbComp.jsx'
import MarqueeComp from '../components/MarqueeComp.jsx'
import ItemActionsComp from '../components/ItemActionsComp.jsx'
import CustomSelectorObj from '../objects/CustomSelectorObj.jsx'
import IssueComp from '../components/IssueComp.jsx'
import PubComp from '../components/PubComp.jsx'
import JournalInfoComp from '../components/JournalInfoComp.jsx'
import RelatedItemsComp from '../components/RelatedItemsComp.jsx'
import FooterComp from '../components/FooterComp.jsx'
import $ from 'jquery'
import MEDIA_PATH from '../../js/MediaPath.js'

// Load dotdotdot in browser but not server:
if (!(typeof document === "undefined")) {
  const dotdotdot = require('jquery.dotdotdot')
}

class JournalSplashyLayout extends React.Component {
  componentDidMount() {
    $('.c-pub__heading, .c-pub__abstract').dotdotdot({watch: 'window'
    });
  }
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <SubheaderComp bannerLink={'https://escholarship.org/uc/uciem_westjem'} unitTitle={'Western Journal of Emergency Medicine'} bannerUrl={MEDIA_PATH + 'temp_journal-banner.png'} isWide={true}/>
        <NavBarComp />
        <BreadcrumbComp />
        <MarqueeComp />
        <div className="c-columns">
          <main id="maincontent" tabIndex="-1">
            <section className="o-columnbox1">
              <ItemActionsComp />
              <CustomSelectorObj />
              <IssueComp />
              <h3 className="o-heading1a">Introduction</h3>
              <div className="o-dividecontent2x--ruled">
                <div className="c-pub">
                  <h4 className="c-pub__heading"><a href="">Italy in the Mediterranean Today: A New Critical Topography</a></h4>
                  <div className="c-authorlist">
                    <ul className="c-authorlist__list">
                      <li><a href="">Fogu, Claudio</a></li>
                      <li><a href="">Re, Lucia</a></li>
                      <li><a href="" className="c-authorlist__list-more-link">et al.</a></li>
                    </ul>
                  </div>
                  <div className="c-pub__abstract"><div className="c-clientmarkup"><p>Editors' Introduction to Volume 1, Issue 1.</p></div></div>
                </div>
              </div>
              <h3 className="o-heading1a">A Critical Map of Italy in the Mediterranean - Defining the terms</h3>
              <div className="o-dividecontent2x--ruled">
                <PubComp />
                <img src="http://placehold.it/300x150?text=Image" alt="" />
                <PubComp />
                <img src="http://placehold.it/300x150?text=Image" alt="" />
                <PubComp />
              </div>
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
                <h2>A sample CMS-generated section</h2>
              </header>
              <div className="c-clientmarkup">
                <p>Beginning <strong>January 1, 2019</strong>, with Volume 36,&nbsp;<em>PaleoBios </em>will publish articles under the <strong>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International&nbsp;</strong><strong>(CC-BY-NC-SA)&nbsp;</strong>license.&nbsp;</p>
                <p><img src="https://escholarship.org/assets/f5e110fc62408e6fddd7c1bd8c19cc6c85a148b7b91ee51c9584b0754c73892d" alt="CC_license" /></p>
                <p>More information about the terms of use and distribution of article content under this agreement can be found at:&nbsp;</p>
                <p><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"> https://creativecommons.org/licenses/by-nc-sa/4.0/<br/></a>
                    <br/>
                </p>
              </div>
            </section>
            <section className="o-columnbox1">
              <header>
                  <h2>A sample CMS-generated section</h2></header>
              <div className="c-clientmarkup">
                <p></p>
                <p>Receive new article announcements for&nbsp;<em>PaleoBios&nbsp;</em>&nbsp;by following the&nbsp;<strong>University of California Museum of Paleontology </strong>on<strong> Facebook</strong>&nbsp;&nbsp;</p>
                <p><img src="https://picsum.photos/350/137/?random" alt="UCMP_FB" /></p>
                <br />
                <p><a href="https://www.facebook.com/ucmuseumofpaleontology/">https://www.facebook.com/ucmuseumofpaleontology/</a></p>
                <hr />
              </div>
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>Featured Articles</h2>
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

module.exports = JournalSplashyLayout;
