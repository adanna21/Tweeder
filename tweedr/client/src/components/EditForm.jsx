import React from 'react';


function EditForm (props) {
    return (
        <form onChange={(e) => props.handleEditInputChange(e)} >
          <input type="text" name="tweed" defaultValue={props.tweed.tweed} /><br/>
          <button className="submit" onClick={(e) => props.handleEditSubmit(e, 'PUT', props.selectedTweed)}>Submit</button>
          <button className="delete" onClick={(e) => props.handleEditSubmit(e, 'DELETE', props.selectedTweed)}>Delete</button>
        </form>
    )
}


export default EditForm;
