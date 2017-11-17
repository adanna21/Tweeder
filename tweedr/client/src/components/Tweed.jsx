import React, { Component } from 'react';
import EditForm from './EditForm';

class Tweed extends Component {
  //to only change one item in the mapped list of tweeds one must create a state that the main app can not see
  //clickedTweed is the tweed clicked on editform mode
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      onSuccess: false,
      selectedTweed: {},
    }
    // this.changeIsClicked = this.changeIsClicked.bind(this)
    this.cancel = this.cancel.bind(this)
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
    // this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.getTweedId = this.getTweedId.bind(this);
  }

  //function sets state of selected and
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
    console.log(this.props.tweed.id);
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

  // //creates a put or delete request based on method in argument
  // handleEditSubmit(e, method, tweed) {
  //   // e.preventDefault();
  //   console.log(tweed.id);
  //     fetch(`/api/tweeds/${tweed.id}`, {
  //       method: method,
  //       headers: {
  //         'Accept': 'application/json, text/plain, */*',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(tweed)
  //     })
  //     .then(res => res)
  //     .then(json => {
  //       console.log(json)
  //     })
  //     this.setState({
  //       onSuccess: true,
  //     })
  // }


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
            <div className="tweed" key={this.props.tweed.id} >
              <h3>
                {this.props.tweed.tweed}
                <i className="fa fa-pencil" onClick={() => this.getTweedId(this.props.tweed.id)}></i>
              </h3>
              <p>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                {new Date(this.props.tweed.tweed_time * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </p>
            </div>
          }
        </div>


    )
  }

}

export default Tweed;
