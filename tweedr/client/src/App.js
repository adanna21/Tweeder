import React, { Component } from 'react';
import AddForm from './components/AddForm';
import TweedrFeed from './components/TweedrFeed'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiDataLoaded: false,
      tweedData: null,
      tweedClicked: false,
      tweed: '',
      onSuccess: false,
    }
    this.renderEditForm = this.renderEditForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidMount () {
    fetch('/api/tweeds')
      .then(res => res.json())
      .then(res => {
        console.log(res.data.tweeds);
        this.setState({
          tweedData: res.data.tweeds,
          apiDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }

  //switches regular tweed to edit view
  renderEditForm () {
    console.log(this.state.tweedClicked);
    this.setState({
      tweedClicked: true,
    })
  }

  //handles change on main tweed post
  handleInputChange (e) {
    // const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.value);
    this.setState((prevState, props) => {
      return {
        tweed: value
      }
    })
  }

  handlePostSubmit(e, tweed) {
    e.preventDefault();
    fetch('/api/tweeds', {
      method: 'POST',
      headers: {
        // 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({tweed: tweed})
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      this.setState((prevState, props) => {
        return {
          tweedData: prevState.tweedData.concat(json.data.tweed),
          tweed: ''
        }
      })
    })
  }

  //creates a put or delete request based on method in argument
  handleEditSubmit(e, method, tweed) {
    // e.preventDefault();
    console.log(tweed.id);
      fetch(`/api/tweeds/${tweed.id}`, {
        method: method,
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tweed)
      })
      .then(res => res)
      .then(json => {
        console.log(json)
      })
      this.setState({
        onSuccess: true,
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> <i className="fa fa-commenting fa-flip-horizontal" aria-hidden="true"></i>TWEEDR</h1>
        </header>
        <AddForm
          handleInputChange={this.handleInputChange}
          handlePostSubmit={this.handlePostSubmit}
          tweed={this.state.tweed}
          />
        <TweedrFeed
          apiDataLoaded={this.state.apiDataLoaded}
          selectedTweed={this.state.selectedTweed}
          tweedData={this.state.tweedData}
          tweedClicked={this.state.tweedClicked}
          renderEditForm={this.renderEditForm}
          handleInputChange={this.handleInputChange}
          handleEditSubmit={this.handleEditSubmit}
          />
      </div>
    );
  }
}

export default App;
