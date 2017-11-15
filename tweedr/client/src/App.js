import React, { Component } from 'react';
import AddForm from './components/AddForm';
import TweedrFeed from './components/TweedrFeed'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiDataLoaded: false,
      tweedList: null,
    }
  }

  componentDidMount () {
    fetch('/api/tweeds')
      .then(res => res.json())
      .then(res => {
        this.setState({
          tweedList: res.data.tweeds,
          apiDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TWEEDER</h1>
          <p>What Ya Thinking?</p>
        </header>
        <AddForm />
        <TweedrFeed />
      </div>
    );
  }
}

export default App;
