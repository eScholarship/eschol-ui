// ##### PDF View Component ##### //

import React from 'react'

class PdfViewComp extends React.Component {
  render() {
    return (
      <details className="c-togglecontent" open>
        <summary>Main Content</summary>
        <div className="c-pdfview">
          <button className="c-pdfview__button-download">Download PDF to View</button>
          <button className="c-pdfview__button-view">View Larger</button>
        </div>
        <div className="c-pdfview__viewer">
          [PDF viewer to go here]
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sem ex. Vivamus sit amet eros ex. Sed iaculis lacus id massa vehicula, sit amet placerat nibh eleifend. Nam elementum dictum orci, eget elementum velit cursus non. Mauris eget placerat purus. Etiam molestie turpis tincidunt justo tempor, sit amet posuere risus congue. Vestibulum rhoncus lorem metus. Integer eleifend in orci vitae volutpat. Donec maximus, lorem commodo faucibus sodales, libero felis bibendum nunc, nec posuere urna purus ac nisi. In lacinia mattis dolor, in efficitur nulla. Nullam sollicitudin est eget luctus sodales. Nullam accumsan hendrerit mauris non pretium. Quisque sit amet vulputate est. Donec elementum purus laoreet, sagittis enim quis, aliquet nisi. Etiam eu arcu eu arcu vestibulum tempus et a elit. Cras fringilla pretium nunc, at pellentesque elit ultricies quis.
          </p>
          <p>Nulla pulvinar pulvinar mauris, eget finibus nibh sollicitudin ut. Aenean diam felis, fringilla vel arcu a, aliquet vulputate ligula. Etiam quis convallis urna. Fusce magna turpis, mollis vitae placerat nec, tristique a diam. Maecenas porta sed tortor cursus vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sit amet faucibus nisl. Praesent quis odio leo. Suspendisse id faucibus velit, ac mollis diam. Mauris vel gravida justo.
          </p>
          <p>Praesent ac accumsan turpis. Suspendisse at massa ac ex efficitur molestie vel nec massa. Vivamus viverra bibendum volutpat. Nulla facilisi. Integer a lorem dui. Aenean fermentum nec lacus in euismod. Pellentesque fermentum urna nec dolor rutrum venenatis. Duis sed quam in justo euismod lacinia a in mi. Integer congue nisi ac eros suscipit, a venenatis eros rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum justo ac urna hendrerit, in sagittis ante ultricies. Curabitur cursus quam ac sodales venenatis. Nulla malesuada justo a pulvinar iaculis. Etiam egestas porttitor ipsum et fringilla. Donec quis est id nibh ornare ultrices.
          </p>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus non justo rutrum, blandit nulla sed, ultrices metus. In hac habitasse platea dictumst. Morbi scelerisque felis sed odio ultricies pharetra. Cras dignissim nunc vel tellus aliquam accumsan. Nullam finibus sodales orci vitae congue. Etiam porttitor, mi non elementum ultricies, orci diam malesuada quam, elementum convallis dui ipsum sit amet dui. Ut sit amet diam ornare leo eleifend porta. Suspendisse ex mi, pulvinar at pellentesque quis, vulputate ut felis. Vivamus porttitor elit nulla, et volutpat orci tempor sed. Integer eu pulvinar neque. Duis vitae porta tellus. Suspendisse pharetra justo dignissim ultrices porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vulputate metus id lorem dapibus facilisis. Praesent ut imperdiet lectus, non semper massa.
          </p>
          <p>Morbi ut iaculis nisl. Donec bibendum ullamcorper lacus, quis facilisis sapien iaculis vitae. Donec eu pretium neque, a pharetra velit. Donec at neque ligula. In condimentum, nisl a feugiat commodo, neque turpis dignissim nibh, vel pharetra nibh sapien a justo. Aenean non turpis tristique, porta mauris sed, molestie nibh. Fusce eu nunc mauris. Phasellus blandit, mi in maximus blandit, nulla libero varius purus, eu vestibulum eros neque in purus. Nunc elit lacus, egestas in libero ut, laoreet aliquam tortor. Vestibulum vel arcu placerat, eleifend ipsum vel, venenatis leo. Pellentesque nec felis nisi. Donec eleifend purus quis erat tempor, sed convallis turpis mattis. Donec sit amet urna ut augue efficitur pellentesque ac vel neque. In eget augue a ligula rhoncus iaculis.
          </p>
          <p>Aenean nec nulla purus. Praesent ullamcorper nibh pellentesque ornare fermentum. Etiam sagittis, erat a semper convallis, sem erat imperdiet ex, id ultricies odio dolor vel libero. Nam ultrices dui sed malesuada tristique. Aenean consectetur laoreet pretium. Praesent quis augue ullamcorper, rhoncus massa ac, accumsan nunc. Etiam varius enim in nulla sollicitudin, varius dapibus metus iaculis. Duis cursus a dui sed pharetra. Sed sollicitudin arcu sed odio gravida, ut varius sem aliquet. Curabitur condimentum non leo at sodales. Maecenas imperdiet congue dui, sed luctus neque hendrerit ac.
          </p>
          <p>Morbi quis gravida eros, vel efficitur sem. Sed ultricies faucibus augue in euismod. Duis sagittis feugiat ex nec convallis. Donec aliquam est vel sollicitudin viverra. Aliquam porta volutpat tortor, non rutrum ante tincidunt non. Nunc tempor massa non egestas hendrerit. Morbi efficitur nulla id accumsan consectetur. Cras pharetra interdum erat at dapibus. Curabitur consequat sit amet leo semper posuere.
          </p>
          <p>Fusce ut pellentesque lorem. Maecenas tristique mi interdum tempus vehicula. Vivamus eget mi sit amet sapien lacinia aliquam ut ac massa. Mauris ac lacus feugiat, porta elit in, varius libero. Proin purus nisi, sodales nec nunc id, auctor elementum dui. Etiam eu augue non orci eleifend venenatis. Curabitur et ligula nec erat elementum tincidunt. Pellentesque vel elit augue. Donec ut porta tortor. Ut ultricies accumsan fermentum. Nullam laoreet risus id odio cursus efficitur. Ut posuere at ligula non dapibus. In id justo tincidunt, suscipit justo quis, fringilla risus. Fusce ornare massa at dui venenatis, vitae fringilla magna vestibulum. Aliquam erat volutpat. Mauris ac orci non nisl sodales rhoncus.
          </p>
          <p>Donec eget metus ac nunc bibendum suscipit. Nullam sollicitudin ex felis, at viverra ipsum placerat ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere imperdiet est vitae maximus. In dapibus, nibh a accumsan tempus, dui purus imperdiet justo, porttitor pharetra urna mi id dolor. Maecenas porttitor blandit nunc auctor pretium. Praesent vulputate mollis imperdiet. Morbi in lobortis enim.
          </p>
          <p>Quisque eget ex magna. Quisque vehicula diam arcu, elementum ultrices ligula sodales in. Sed viverra eros non ante tristique, ut porttitor ante aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas tempus urna mauris, vel scelerisque urna suscipit at. Mauris hendrerit lacus sit amet lorem scelerisque, non ornare nibh pellentesque. Nulla ac mauris ut nunc rutrum ultricies sed a tortor. Suspendisse malesuada est id aliquam finibus. Pellentesque ultrices nunc lobortis, iaculis orci quis, sagittis nisl. In eget mattis diam. Sed efficitur arcu a tristique viverra. Maecenas vitae mauris non nisi venenatis scelerisque et ac leo. Nam egestas fermentum nulla, at porta ipsum venenatis et. Morbi laoreet nunc non mi fringilla porta. Mauris eleifend eu felis sit amet fringilla. Sed finibus pretium interdum.
          </p>
        </div>
      </details>
    )
  }
}

module.exports = PdfViewComp;
