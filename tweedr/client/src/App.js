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
    }
  }

  componentDidMount () {
    fetch('/api/tweeds')
      .then(res => res.json())
      .then(res => {
        this.setState({
          tweedData: res.data.tweeds,
          apiDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }

  renderEditForm () {
    this.setState({
      tweedClicked: true,
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
          apiDataLoaded={this.state.apiDataLoaded}
          />
        <TweedrFeed
          apiDataLoaded={this.state.apiDataLoaded}
          tweedData={this.state.tweedData}
          tweedClicked={this.state.tweedClicked}
          />
      </div>
    );
  }
}

export default App;
