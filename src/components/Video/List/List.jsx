import React from 'react'
import Item from '../Item/Item'

const List = (props) => {
  return (
    <ul className="col-lg-4 list-group">
      {props.videos.map((video, index) => (
        (() => {
          if (props.selectedVideo !== video) {
            //現在表示中のvideoと同じではないなら
            return (
              <Item
                video={video}
                key={index}
                onVideoClicked={props.onVideoClicked}
              />
            );
          }
        })()
      ))}
    </ul>
  )
}

export default List
