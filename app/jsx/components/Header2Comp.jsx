// ##### Header2 Component ##### //

import React from 'react'
import Search2Comp from '../components/Search2Comp.jsx'
import Breakpoints from '../../js/breakpoints.json'
import MEDIA_PATH from '../../js/MediaPath.js'

class HeaderComp2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {searchActive: false}
  }
  render() {
    return (
      <header id="#top" className="c-header">
        <a className="c-header__logo2" href="">
          <picture>
            <source srcSet={MEDIA_PATH + 'logo_eschol-small-20yr.svg'} media={"(min-width: "+Breakpoints.screen3+")"}/>
            <img src={MEDIA_PATH + 'logo_eschol-mobile_20.svg'} alt="escholarship"/>
          </picture>
          <div className="c-header__logo2-tagline">
            Open Access Publications from the University of California
          </div>
        </a>  
        <div className={this.state.searchActive ? "c-header__search--active" : "c-header__search"}>
          <Search2Comp onClose = {()=>this.setState({searchActive: false})} />
        </div>
        <button className="c-header__search-open-button" aria-label="open search field" onClick = {()=> this.setState({searchActive: true})}></button>
      </header>
    )
  }
}

module.exports = HeaderComp2;
