// ##### Search Layout ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'
import Header2Comp from '../components/Header2Comp.jsx'
import NavComp from '../components/NavComp.jsx'
import NavSubComp from '../components/NavSubComp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import ExportComp from '../components/ExportComp.jsx'
import FilterComp from '../components/FilterComp.jsx'
import InfoPagesComp from '../components/InfoPagesComp.jsx'
import RefineComp from '../components/RefineComp.jsx'
import SortPaginationComp from '../components/SortPaginationComp.jsx'
import ScholWorksComp from '../components/ScholWorksComp.jsx'
import ReactModal from 'react-modal'
import FooterComp from '../components/FooterComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'

class SearchLayout extends React.Component {
  constructor(props){
    super(props)
    this.state = {submenuActive: null, showModal: false}
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentWillMount() {
    if (matchMedia) {
      this.mq = matchMedia("(min-width:"+Breakpoints.screen3+")")
      this.mq.addListener(this.widthChange)
      this.widthChange()
    }
  }
  componentDidMount() {
    $('.c-scholworks__heading, .c-authorlist__list, .c-scholworks__abstract').dotdotdot({watch:'window'});
  }
  widthChange = ()=> {
    this.setState({isOpen: this.mq.matches})
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
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
        <ExportComp />
        <div className="c-columns">
          <aside>
            <FilterComp />
            <RefineComp />
          </aside>
          <main id="maincontent" tabIndex="-1">
            <section className="o-columnbox1">
              <header>
                <h2>Informational Pages (12 results)</h2>
              </header>
              <InfoPagesComp />
            </section>
            <section className="o-columnbox1">
              <header>
                <h2>Scholarly Works (12,023 results)</h2>
              </header>
              <SortPaginationComp />
              <ScholWorksComp type="article" />
              <ScholWorksComp type="book" />
              <ScholWorksComp type="thesis" />
              <ScholWorksComp type="multimedia" />
            </section>
          </main>
        </div>
        <div className="c-toplink">
          <a href="#top">Top</a>
        </div>
        <FooterComp />

        {/* Start Facet Modal */}
        <div className="c-modal">
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="onRequestClose Example"
             onRequestClose={this.handleCloseModal}
             className="c-modal--open"
             overlayClassName="c-modal__overlay"
          >
            <div className="modal__header">
              <h2>Refine By Department</h2>
            </div>
            <div className="modal__content">
              <ul className="c-checkbox">
                {/* 'id' and 'htmlFor' values must contain a unique number per each pair below for accessibility */}
                <li>
                  <input id="c-checkbox__modal1" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal1" className="c-checkbox__label">Agricultural History Center (##)</label>
                </li>
                <li>
                  <input id="c-checkbox__modal2" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal2" className="c-checkbox__label">Agriculture and Natural Resources Research and Extension Centers (##)</label>
                  <ul>
                    <li>
                      <input id="c-checkbox__modal3" type="checkbox" className="c-checkbox__input"/>
                      <label htmlFor="c-checkbox__modal3" className="c-checkbox__label">Hopland Research and Extension Center (##)</label>
                    </li>
                    <li>
                      <input id="c-checkbox__modal4" type="checkbox" className="c-checkbox__input"/>
                      <label htmlFor="c-checkbox__modal4" className="c-checkbox__label">Sierra Foothill Research and Extension Center (##)</label>
                    </li>
                  </ul>
                </li>
                <li>
                  <input id="c-checkbox__modal6" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal6" className="c-checkbox__label">American Cultures Center</label>
                </li>
                <li>
                  <input id="c-checkbox__modal7" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal7" className="c-checkbox__label">American Cultures and Global Contexts Center</label>
                </li>
                <li>
                  <input id="c-checkbox__modal8" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal8" className="c-checkbox__label">Bay Area International Group</label>
                </li>
                <li>
                  <input id="c-checkbox__modal9" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal9" className="c-checkbox__label">Berkeley Food Institute</label>
                </li>
                <li>
                  <input id="c-checkbox__modal10" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal10" className="c-checkbox__label">Berkeley Graduate School of Journalism</label>
                </li>
                <li>
                  <input id="c-checkbox__modal11" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal11" className="c-checkbox__label">Berkeley Natural History Museum</label>
                  <ul>
                    <li>
                      <input id="c-checkbox__modal12" type="checkbox" className="c-checkbox__input"/>
                      <label htmlFor="c-checkbox__modal12" className="c-checkbox__label">UCB Moorea Class: Biology and Geomorphology of Tropical Islands</label>
                    </li>
                  </ul>
                </li>
                <li>
                  <input id="c-checkbox__modal13" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal13" className="c-checkbox__label">Berkeley Program in Law and Economics</label>
                </li>
                <li>
                  <input id="c-checkbox__modal14" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal14" className="c-checkbox__label">Berkeley Program on Housing and Urban Policy</label>
                </li>
                <li>
                  <input id="c-checkbox__modal15" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal15" className="c-checkbox__label">Berkeley Roundtable on the International Economy</label>
                </li>
                <li>
                  <input id="c-checkbox__modal16" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal16" className="c-checkbox__label">Biostatistics</label>
                </li>
                <li>
                  <input id="c-checkbox__modal17" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal17" className="c-checkbox__label">Bixby Center for Global Reproductive Health</label>
                </li>
                <li>
                  <input id="c-checkbox__modal18" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal18" className="c-checkbox__label">Bixby Center for Population, Health & Sustainability</label>
                </li>
                <li>
                  <input id="c-checkbox__modal19" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal19" className="c-checkbox__label">Boalt Hall</label>
                </li>
                <li>
                  <input id="c-checkbox__modal20" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal20" className="c-checkbox__label">Bourns College of Engineering</label>
                </li>
                <li>
                  <input id="c-checkbox__modal21" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal21" className="c-checkbox__label">Center for Environmental Research and Technology</label>
                </li>
                <li>
                  <input id="c-checkbox__modal22" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal22" className="c-checkbox__label">California Academic Partnership Program</label>
                </li>
                <li>
                  <input id="c-checkbox__modal23" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal23" className="c-checkbox__label">California Center for Population Research</label>
                </li>
                <li>
                  <input id="c-checkbox__modal24" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal24" className="c-checkbox__label">California Community College Collaborative (C4)</label>
                </li>
                <li>
                  <input id="c-checkbox__modal25" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal25" className="c-checkbox__label">California Digital Library</label>
                </li>
                <li>
                  <input id="c-checkbox__modal26" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal26" className="c-checkbox__label">California Health Benefits Review Program</label>
                </li>
                <li>
                  <input id="c-checkbox__modal27" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal27" className="c-checkbox__label">California Policy Research Center</label>
                </li>
                <li>
                  <input id="c-checkbox__modal28" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal28" className="c-checkbox__label">California Sea Grant College Program</label>
                </li>
                <li>
                  <input id="c-checkbox__modal29" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal29" className="c-checkbox__label">California Social Work Education Center</label>
                </li>
                <li>
                  <input id="c-checkbox__modal30" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal30" className="c-checkbox__label">Center for African Studies</label>
                </li>
                <li>
                  <input id="c-checkbox__modal31" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal31" className="c-checkbox__label">Center for Agroecology and Sustainable Food Systems</label>
                </li>
                <li>
                  <input id="c-checkbox__modal32" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal32" className="c-checkbox__label">Center for Bioinformatics and Molecular Biostatistics</label>
                </li>
                <li>
                  <input id="c-checkbox__modal33" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal33" className="c-checkbox__label">Center for Black Studies Research</label>
                </li>
                <li>
                  <input id="c-checkbox__modal34" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal34" className="c-checkbox__label">Center for Comparative Immigration Studies</label>
                </li>
                <li>
                  <input id="c-checkbox__modal35" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal35" className="c-checkbox__label">Center for Complex and Nonlinear Science</label>
                </li>
                <li>
                  <input id="c-checkbox__modal36" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal36" className="c-checkbox__label">Center for Conservation Biology</label>
                </li>
                <li>
                  <input id="c-checkbox__modal37" type="checkbox" className="c-checkbox__input"/>
                  <label htmlFor="c-checkbox__modal37" className="c-checkbox__label">Center for Control, Dynamical Systems, and Computation</label>
                </li>
              </ul>
            </div>
            <div className="c-modal__footer">
              <button className="c-modal__button-close">Clear</button>
              <button className="o-button__7" onClick={this.handleCloseModal}>Cancel</button>
              <button className="o-button__3">Select</button>
            </div>
          </ReactModal>
        </div>
        {/* End Facet Modal */}
      </div>
    )
  }
}

module.exports = SearchLayout;
