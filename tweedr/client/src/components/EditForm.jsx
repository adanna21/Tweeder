import React from 'react';


function EditForm (props) {
    return (
        <form onChange={(e) => props.handleEditInputChange(e)} >
          <input type="text" name="tweed" defaultValue={props.tweed.tweed} />
          <button onClick={(e) => props.handleSubmit(e, 'PUT', props.tweed.id)}>Submit</button>
          <button onClick={(e) => props.handleSubmit(e, 'DELETE', props.selectedTweed.id)}>X</button>
        </form>
    )
}


export default EditForm;
