import React from 'react';
import Tweed from './Tweed'

function TweedrFeed (props) {
  return (
    <section>
      <Tweed
        apiDataLoaded={props.apiDataLoaded}
        tweedList={props.tweedList}
        tweedClicked={props.tweedClicked}
        />
    </section>
  )
}


export default TweedrFeed;
