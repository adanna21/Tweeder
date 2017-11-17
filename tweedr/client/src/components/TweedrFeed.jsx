import React from 'react';
import Tweed from './Tweed'

function TweedrFeed (props) {
      if (props.apiDataLoaded) {
        return (
          <section>

            <div className="tweed-container">
              <h2>Tweedr Feed</h2>
              {props.tweedData.map(tweed => {
                return (
                  <Tweed
                    key={tweed.id}
                    tweed={tweed}
                    apiDataLoaded={props.apiDataLoaded}
                    selectedTweed={props.selectedTweed}
                    tweedData={props.tweedData}
                    tweedClicked={props.tweedClicked}
                    getTweedId={props.getTweedId}
                    renderEditForm={props.renderEditForm}
                    handleInputChange={props.handleInputChange}
                    handleSubmit={props.handleSubmit}
                    handleEditSubmit={props.handleEditSubmit}
                    />
                )
              })}
            </div>
          </section>
        )
    }else {
        return (
          <section>
            <p>loading...</p>
          </section>
        )
      }
}


export default TweedrFeed;
