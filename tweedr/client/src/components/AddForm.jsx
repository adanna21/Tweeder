import React from 'react';


function AddForm (props) {
  return (
    <form onChange={(e) => props.handleInputChange(e)} onSubmit={(e) => props.handlePostSubmit(e, props.selectedTweed)}>
      <input type="text" name="tweed" defaultValue={''} />
      <button type="submit">POST</button>
    </form>
  )
}


export default AddForm;
