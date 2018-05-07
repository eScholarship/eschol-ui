// ##### Footer Component ##### //

import React from 'react'
import LazyImageComp from '../components/LazyImageComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'

class FooterComp extends React.Component {
  render() {
    return (
      <footer className="c-footer">
        <nav className="c-footer__nav">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About eScholarship</a></li>
            <li><a href="">Campus Sites</a></li>
            <li><a href="">UC Open Access Policy</a></li>
            <li><a href="">eScholarship Publishing</a></li>
            <li><a href="">Accessibility Policy</a></li>
            <li><a href="">Privacy Statement</a></li>
            <li><a href="">Policies</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href=""><strong>Admin Login</strong></a></li>
            <li><a href=""><strong>Help</strong></a></li>
          </ul>
        </nav>
        <div className="c-footer__logo">
          <a href="">
            <LazyImageComp
              src={MEDIA_PATH + 'logo_footer-eschol.svg'}
              alt="eScholarship, University of California" />
          </a>
        </div>
        <div className="c-footer__icons">
          <a href="">
            <LazyImageComp
              src={MEDIA_PATH + 'logo_facebook-circle-white.svg'}
              alt="Facebook" />
          </a>
          <a href="">
            <LazyImageComp
              src={MEDIA_PATH + 'logo_twitter-circle-white.svg'}
              alt="Twitter" />
          </a>
        </div>
        <div className="c-footer__copyright">
          Powered by the <a href="http://www.cdlib.org">California Digital Library</a>.<br/>
          Copyright &copy; 2018<br/>
          The Regents of the University of California.
        </div>
      </footer>
    )
  }
}

module.exports = FooterComp;
