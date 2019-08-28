// ##### Jump Component ##### //

import React from 'react'
import Breakpoints from '../../js/breakpoints.json'

class JumpComp extends React.Component {

  componentWillMount() {
    if (matchMedia) {
      this.mq = matchMedia("(min-width:"+Breakpoints.screen2+")")
      this.mq.addListener(this.widthChange)
      this.widthChange()
    }
  }

  widthChange = ()=> {
    this.setState({show: this.mq.matches})
  }

  render() {
    return (
      <section className="o-columnbox1" hidden={!this.state.show}>
        <header>
          <h2>Jump To</h2>
        </header>
        <div className="c-jump">
          <a id="c-jump__label" href="">Article</a>
          <ul className="c-jump__tree" aria-labelledby="c-jump__label">
            <li><a href="">Introduction</a></li>
            <li><a href="">Chapter 1. sdkfjh kajhdf lkasjhd flkjsahdf klh</a></li>
            <li><a href="">Chapter 2. skdjfhkl sdajh iwur iouhkasj</a></li>
            <li><a href="">Chapter 3. oiu123iu saoihaosiduyfoi wueyr ksa</a></li>
            <li><a href="">Chapter 4. opi9u iuh 2 39812 skljnkajs iuh23opi 4kjhsfalkhj</a></li>
            <li><a href="">Chapter 5. iusiou h1iuskdhjka pu aiudfh iwaher liuhs</a></li>
            <li><a href="">Chapter 6. skjh iuiuwq er ishdf</a></li>
            <li><a href="">Chapter 7. kjshiu 32ihu i fsalkjdfh</a></li>
            <li><a href="">Conclusion</a></li>
            <li><a href="">Appendix A. skdayfip ualihfsadjfh</a></li>
            <li><a href="">Appendix B. LKjfhdg kadsklfjh asdihfihu</a></li>
            <li><a href="">References</a></li>
            <li><a href="">Author Response</a></li>
          </ul>
          <ul className="c-jump__siblings">
            <li><a href="">Supplemental Material</a></li>
            <li><a href="">Metrics</a></li>
            <li><a href="">Author & Article Info</a></li>
            <li><a href="">Comments</a></li>
          </ul>
        </div>
      </section>
    )
  }
}

module.exports = JumpComp;
