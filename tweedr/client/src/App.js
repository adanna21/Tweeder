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
      selectedTweed: {},
    }
    this.renderEditForm = this.renderEditForm.bind(this);
    // this.getTweedId = this.getTweedId.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
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

  // // sets the object contained selected tweed
  // getTweedId (id) {
  //   const tweed = this.state.tweedData.find(tweed => {
  //     return tweed.id === id
  //   }) || {}
  //   console.log(tweed);
  //   this.setState({
  //     selectedTweed: tweed,
  //   })
  // }

  //handles change on main tweed post
  handleInputChange (e) {
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

  handlePostSubmit(e, tweed) {
    e.preventDefault();
    fetch('/api/tweeds', {
      method: 'POST',
      headers: {
        // 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tweed)
    })
    .then(res => res)
    .then(json => {
      console.log(json)
      this.getTweedId(tweed.id)
    })
  }

  handleSubmit(e, method, tweed) {
    e.preventDefault();
    // const pathId = tweed.id ? `/${tweed.id}` : ''
    console.log(tweed.id);
      fetch(`/api/tweeds/${tweed.id}`, {
        method: method === 'PUT' ? 'PUT' : 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tweed)
      })
      .then(res => res)
      .then(json => {
        console.log(json)
        this.getTweedId(tweed.id)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TWEEDER</h1>
          <p>What Ya Thinking?</p>
        </header>
        <AddForm
          handleInputChange={this.handleInputChange}
          handlePostSubmit={this.handlePostSubmit}
          selectedTweed={this.state.selectedTweed}
          />
        <TweedrFeed
          apiDataLoaded={this.state.apiDataLoaded}
          selectedTweed={this.state.selectedTweed}
          tweedData={this.state.tweedData}
          tweedClicked={this.state.tweedClicked}
          getTweedId={this.getTweedId}
          renderEditForm={this.renderEditForm}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          />
      </div>
    );
  }
}

export default App;
