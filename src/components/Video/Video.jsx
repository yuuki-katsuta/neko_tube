import React from 'react'

const Video = (props) => {

  //props.videoがnullのときの処理
  if (!props.video) {
    return (
      // わかりやすいように青にしています。
      <div className="video col-md-8">
        動画を読み込み中でーす！！
      </div>
    );
    //returnからあとは実行されない
  }

  const videoURL = 'https://www.youtube.com/embed/' + props.video.id.videoId;

  return (
    <div className="video col-lg-8" >
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoURL}></iframe>
      </div>
      <div className="info">
        <h2>{props.video.snippet.title}</h2>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  )
}

export default Video
