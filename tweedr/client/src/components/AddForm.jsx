import React from 'react';


function AddForm (props) {
  return (
    <div className="add-tweed">
      <form className="add-form" onChange={(e) => props.handleInputChange(e)} onSubmit={(e) => props.handlePostSubmit(e, props.tweed)}>
        <input type="text" name="tweed" value={props.tweed} placeholder="What's on your mind?" />
        <button type="submit">POST</button>
      </form>
    </div>
  )
}


export default AddForm;
