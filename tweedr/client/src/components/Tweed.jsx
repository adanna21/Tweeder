import React, { Component } from 'react';
import EditForm from './EditForm';

class Tweed extends Component {
  //to only change one item in the mapped list of tweeds one must create a state that the main app can not see
  //clickedTweed is the tweed clicked on editform mode
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      selectedTweed: {},
    }
    this.changeIsClicked = this.changeIsClicked.bind(this)
    this.cancel = this.cancel.bind(this)
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
    this.getTweedId = this.getTweedId.bind(this);
  }

  //function setstate of selected and
  //when tweed is clicked below function changes view to edit mode
  getTweedId (id) {
    const tweed = this.props.tweedData.find(tweed => {
      return tweed.id === id
    }) || {}
    console.log(tweed);
    this.setState({
      isClicked: true,
      selectedTweed: tweed,
    })
  }

  //changes edit view to regular tweed view
  cancel () {
    this.setState({
      isClicked: false,
    })
  }


  //a form inside a js map method needs to have its own handlChanges
  handleEditInputChange (e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.value);
    this.setState((prevState, props) => {
      return {
        selectedTweed: Object.assign({}, prevState.selectedTweed, {[name] : value})
      }
    })
    console.log(this.state.selectedTweed);
  }

  render () {
    return (

      <div className="tweed" key={this.props.tweed.id} >
        {this.state.isClicked ?
            <div>
              <EditForm
                getTweedId={this.props.getTweedId}
                selectedTweed={this.state.selectedTweed}
                cancel={this.cancel}
                handleEditInputChange={this.handleEditInputChange}
                handleEditSubmit={this.props.handleEditSubmit}
                tweed={this.props.tweed}
              />
              <button onClick={() => this.cancel()}>Cancel</button>
            </div>
        :
          <div className="tweed" key={this.props.tweed.id}>
            <p onClick={() => this.getTweedId(this.props.tweed.id)} >{this.props.tweed.tweed}</p>
          </div>
        }

      </div>
    )
  }

}

export default Tweed;
