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
      //クリックされた動画の情報を管理
      selectedVideo: null
    }
  }

  // componentDidMountでAPIリクエストを行う
  componentDidMount() {
    YSearch({ key: YOUTUBE_API_KEY, term: '猫　睡眠' }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  //動画リスト中のItem componentがクリックされたら、その動画情報を取得して、selectedVideosの値を更新する
  onVideoClickedHandler = (video) => {
    this.setState({ selectedVideo: video })
  }

  //検索バーに文字を打ち込むと、発火するイベント
  onKeywordChangeHandler = (keyword) => {
    let newTerm = '猫' + keyword
    if (keyword === '') {
      newTerm = '猫　睡眠'
    }
    //文字を打ち込むと、データを取ってくるようにする
    YSearch({ key: YOUTUBE_API_KEY, term: newTerm }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    })
  }

  render() {
    return (
      <div className="App">
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
//selectedVideo={this.state.selectedVideo}で現在再生中の動画の情報を渡した

export default App;
