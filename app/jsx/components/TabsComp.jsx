// ##### Tabs Component ##### //

import React from 'react'
import TabMainComp from '../components/TabMainComp.jsx'
import TabSupplementalComp from '../components/TabSupplementalComp.jsx'
import TabMetricsComp from '../components/TabMetricsComp.jsx'
import TabAuthorComp from '../components/TabAuthorComp.jsx'
import TabCommentsComp from '../components/TabCommentsComp.jsx'
import TabMetaComp from '../components/TabMetaComp.jsx'
import $ from 'jquery'

class TabsComp extends React.Component {
  constructor(props){
    super(props)
    this.state = {currentTab: 1, moreTabs: false}
  }
  tabFocus(tabNumber) {
    // For keyboard users, jump to heading within the tab.
    setTimeout(() => $(".c-tabcontent__main-heading").focus(), 0)
    this.setState({currentTab: tabNumber})
  }
  render() {
    return (
      <div className="c-tabs">
        <div className={this.state.moreTabs ? "c-tabs__tabs--show-all" : "c-tabs__tabs"}>
          {/* programmatically remove 'c-tabs__button-more' button below if there is only 1 tab */}
          <button className="c-tabs__button-more" onClick = {() => this.setState({moreTabs: !this.state.moreTabs})} aria-label="Show all tabs">...</button>
          <button className={this.state.currentTab === 1 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {() => this.tabFocus(1)}>Main Content</button>
          <button className={this.state.currentTab === 2 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {() => this.tabFocus(2)}>Supplemental material</button>
          <button className={this.state.currentTab === 3 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {() => this.tabFocus(3)}>Metrics</button>
          <button className={this.state.currentTab === 4 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {() => this.tabFocus(4)}>Author & Article Info</button>
          <button className={this.state.currentTab === 5 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {() => this.tabFocus(5)}>Comments (2)</button>
          <button className={this.state.currentTab === 6 ? "c-tabs__button--active" : "c-tabs__button"} onClick = {() => this.tabFocus(6)}>Meta</button>
        </div>
        <div className="c-tabs__content">
          {this.state.currentTab === 1 ? <TabMainComp /> : null}
          {this.state.currentTab === 2 ? <TabSupplementalComp /> : null}
          {this.state.currentTab === 3 ? <TabMetricsComp /> : null}
          {this.state.currentTab === 4 ? <TabAuthorComp /> : null}
          {this.state.currentTab === 5 ? <TabCommentsComp /> : null}
          {this.state.currentTab === 6 ? <TabMetaComp /> : null}
        </div>
      </div>
    )
  }
}

module.exports = TabsComp;
