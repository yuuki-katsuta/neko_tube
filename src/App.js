import React from 'react';
import './App.css';
import YSearch from 'youtube-api-search';
import Header from './components/Header/Header'
import Body from './components/body/Body'
import List from './components/Video/List/List'
import Video from './components/Video/Video'

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
    }
  }

  // componentDidMountでAPIリクエストを行う
  componentDidMount() {
    YSearch({ key: YOUTUBE_API_KEY, term: '猫　睡眠' }, (data) => {
      this.setState({ videos: data });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body>
          <Video video={this.state.videos[0]} />
          <List videos={this.state.videos} />
        </Body>
      </div>
    );
  }
}

export default App;
