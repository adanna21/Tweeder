import React from 'react';
import EditForm from './EditForm';

function Tweed (props) {
  if (props.apiDataLoaded) {
    return (
      <div className="tweed" >
        {props.tweedList.map(tweed => {
          return (
            <form>
              <input type="text" value={tweed.tweed} />
              <button type="submit"></button>
            </form>

          )
        })}
      </div>
    )
  }else if(props.tweedClicked) {
    return (
      <EditForm />
    )
  }else {
    return (
      <p>loading...</p>
    )
  }

}


export default Tweed;
