// ##### Social Feed Component ##### //

import React from 'react'
// https://github.com/andrewsuzuki/react-twitter-widgets
import { Timeline, Mention } from 'react-twitter-widgets'

class SocialFeedComp extends React.Component {

  render() {
    return (
      <section className="o-columnbox1">
        <header>
          <h2>Follow Us On Twitter</h2>
        </header>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'ucla'
          }}
          options={{
            username: 'ucla',
            height: '700'
          }}
          // onLoad={() => console.log('Timeline is loaded!') }
        />
        {/* <Mention
           userName="amardesich"
           options={{
             text: 'TESTING',
             size: 'large'
           }}
           // onLoad={() => console.log('Mention is loaded!') }
         />  */}
      </section>
    )
  }
}

module.exports = SocialFeedComp;
