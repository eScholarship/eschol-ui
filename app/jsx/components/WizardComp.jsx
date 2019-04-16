// ##### Deposit Wizard Component ##### //

import React from 'react'
import WizardCampusComp from './WizardCampusComp.jsx'
import WizardLinkComp from './WizardLinkComp.jsx'
import WizardRoleComp from './WizardRoleComp.jsx'
import WizardSeriesComp from './WizardSeriesComp.jsx'
import WizardTypeComp from './WizardTypeComp.jsx'
import WizardUnitComp from './WizardUnitComp.jsx'
import ReactModal from 'react-modal'

class WizModal extends React.Component {
  render = () =>
    <ReactModal closeTimeoutMS={1000} isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose}
                className="c-wizard__modal"
                portalClassName="c-wiz-modal__portal"
                overlayClassName="c-modal__overlay">
      <div className="c-wizard">
        {this.props.children}
      </div>
    </ReactModal>
}

class WizardComp extends React.Component {

  constructor(props){
    super(props)
    this.state = {wizardStep: 1, wizardDir: 'fwd', showModal: true}
  }

  goForward = (step) =>{
    setTimeout(()=>this.tabFocus(), 0)
    this.setState({wizardStep: step, wizardDir: 'fwd', prevStep: this.state.wizardStep})
  }

  goBackward = ()=>{
    setTimeout(()=>this.tabFocus(), 0)
    if (this.state.prevStep)
      this.setState({wizardStep: this.state.prevStep, wizardDir: 'bkw', prevStep: null})
    else
      this.setState({wizardStep: this.state.wizardStep - 1, wizardDir: 'bkw', prevStep: null})
  }

  tabFocus = ()=> {
    document.querySelector('.c-wizard__current-fwd h1, .c-wizard__current-bkw h1').focus()
  }

  handleOpenModal = ()=> {
    this.setState({ wizardStep: 1, wizardDir: 'fwd', showModal: true });
  }

  handleCloseModal = ()=> {
    this.setState({ showModal: false });
  }                 

  render() {
    return (
      <div className="c-modal">
        <WizModal isOpen={this.state.showModal && this.state.wizardStep === 1} onRequestClose={this.handleCloseModal}>
          <div className={this.state.wizardStep === 1 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`} aria-hidden={this.state.wizardStep === 1 ? null : true}>
            <WizardRoleComp goForward = {this.goForward} closeModal={this.handleCloseModal} />
          </div>
        </WizModal>
        <WizModal isOpen={this.state.showModal && this.state.wizardStep === 2} onRequestClose={this.handleCloseModal}>
          <div className={this.state.wizardStep === 2 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`} aria-hidden={this.state.wizardStep === 2 ? null : true}>
            <WizardCampusComp goForward = {this.goForward} goBackward = {this.goBackward} closeModal={this.handleCloseModal} />
          </div>
        </WizModal>
        <WizModal isOpen={this.state.showModal && this.state.wizardStep === 3} onRequestClose={this.handleCloseModal}>
          <div className={this.state.wizardStep === 3 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`} aria-hidden={this.state.wizardStep === 3 ? null : true}>
            <WizardTypeComp goForward = {this.goForward} goBackward = {this.goBackward} closeModal={this.handleCloseModal} />
          </div>
        </WizModal>
        <WizModal isOpen={this.state.showModal && this.state.wizardStep === 4} onRequestClose={this.handleCloseModal}>
          <div className={this.state.wizardStep === 4 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`} aria-hidden={this.state.wizardStep === 4 ? null : true}>
            <WizardUnitComp goForward = {this.goForward} goBackward = {this.goBackward} closeModal={this.handleCloseModal} />
          </div>
        </WizModal>
        <WizModal isOpen={this.state.showModal && this.state.wizardStep === 5} onRequestClose={this.handleCloseModal}>
          <div className={this.state.wizardStep === 5 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`} aria-hidden={this.state.wizardStep === 5 ? null : true}>
            <WizardSeriesComp goForward = {this.goForward} goBackward = {this.goBackward} closeModal={this.handleCloseModal} />
          </div>
        </WizModal>
        <WizModal isOpen={this.state.showModal && this.state.wizardStep === 6} onRequestClose={this.handleCloseModal}>
          <div className={this.state.wizardStep === 6 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`} aria-hidden={this.state.wizardStep === 6 ? null : true}>
            <WizardLinkComp goBackward = {this.goBackward} closeModal={this.handleCloseModal} />
          </div>
        </WizModal>
      </div>
    )
  }
}

module.exports = WizardComp;
