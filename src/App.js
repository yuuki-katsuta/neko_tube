import React from 'react';
import './App.css';
import YSearch from 'youtube-api-search';
import Header from './components/Header/Header'

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bideos: [],
    }
  }

  // componentDidMountでAPIリクエストを行う
  componentDidMount() {
    YSearch({ key: YOUTUBE_API_KEY, term: '猫　きゅうり' }, (data) => {
      this.setState({ videos: data });
    });
  }
  componentDidUpdate() {
    console.log(this.state.videos)
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
