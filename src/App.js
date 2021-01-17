import React from 'react';
import YSearch from 'youtube-api-search';
import Header from './components/Header/Header';
import Body from './components/body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onVideoClickedHandler = this.onVideoClickedHandler.bind(this);
  }

  componentDidMount() {
    YSearch({ key: YOUTUBE_API_KEY, term: '猫　睡眠' }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0],
      });
    });
  }

  onVideoClickedHandler = (video) => {
    this.setState({ selectedVideo: video });
  };

  onKeywordChangeHandler = (keyword) => {
    let newTerm = '猫' + keyword;
    if (keyword === '') {
      newTerm = '猫　睡眠';
    }
    YSearch({ key: YOUTUBE_API_KEY, term: newTerm }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0],
      });
    });
  };

  render() {
    return (
      <div className='App'>
        <Header onKeywordChanged={this.onKeywordChangeHandler} />
        <Body>
          <Video video={this.state.selectedVideo} />
          <List
            videos={this.state.videos}
            onVideoClicked={this.onVideoClickedHandler}
            selectedVideo={this.state.selectedVideo}
          />
        </Body>
      </div>
    );
  }
}

export default App;
