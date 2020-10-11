import React from 'react'
import Item from '../Item/Item'

const List = (props) => {
  console.log(props.videos)
  return (
    <ul className="col-lg-4 list-group">
      {props.videos.map((video, index) => (
        <Item video={video} key={index} />
      ))}
    </ul>
  )
}

export default List
