import React from 'react';


function EditForm (props) {
    return (
        <form onChange={(e) => props.handleEditInputChange(e)} >
          <input type="text" name="tweed" defaultValue={props.tweed.tweed} />
          <button onClick={(e) => props.handleEditSubmit(e, 'PUT', props.selectedTweed)}>Submit</button>
          <button onClick={(e) => props.handleEditSubmit(e, 'DELETE', props.selectedTweed)}>X</button>
        </form>
    )
}


export default EditForm;
