// ##### Author List Component ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'
import faker from 'faker/locale/en'

class AuthorListComp extends React.Component {
  componentDidMount() {
    $('.c-authorlist__list').dotdotdot({watch:'window', after:'.c-authorlist__list-more-link', ellipsis:' ', wrap:'children'});
    setTimeout(()=> $('.c-authorlist__list').trigger('update'), 0)
  }
  render() {
    return (
      <div className="c-authorlist">
        <ul className="c-authorlist__list">
          <li className="c-authorlist__begin"><span className="c-authorlist__heading">Author(s):</span> <a href="">{faker.fake("{{name.lastName}}, {{name.firstName}}")}</a></li>
          <li><a href="">{faker.fake("{{name.lastName}}, {{name.firstName}}")}</a></li>
          <li><a href="">{faker.fake("{{name.lastName}}, {{name.firstName}}")}</a></li>
          <li><a href="">{faker.fake("{{name.lastName}}, {{name.firstName}}")}</a></li>
          <li><a href="">{faker.fake("{{name.lastName}}, {{name.firstName}}")}</a></li>
          <li className="c-authorlist__end"><a href="">{faker.fake("{{name.lastName}}, {{name.firstName}}")}</a></li>
          <li className="c-authorlist__begin"><span className="c-authorlist__heading">Editor(s):</span> <a href="">{faker.fake("{{name.lastName}}, {{name.firstName}}")}</a></li>
          <li><a href="">{faker.fake("{{name.lastName}}, {{name.firstName}}")}</a></li>
          <li><a href="">{faker.fake("{{name.lastName}}, {{name.firstName}}")}</a></li>
          <li className="c-authorlist__end"><a href="">{faker.fake("{{name.lastName}}, {{name.firstName}}")}</a></li>
          <li className="c-authorlist__begin"><span className="c-authorlist__heading">Advisor(s):</span> <a href="">{faker.fake("{{name.lastName}}, {{name.firstName}}")}</a></li>
          <li><a href="">{faker.fake("{{name.lastName}}, {{name.firstName}}")}</a></li>
          <li><a href="">{faker.fake("{{name.lastName}}, {{name.firstName}}")}</a></li>
          <li><a href="" className="c-authorlist__list-more-link">et al.</a></li>
        </ul>
      </div>
    )
  }
}

module.exports = AuthorListComp;
