// write your CatList component here
import React from 'react';

function CatList(props) {

  const cats = props.catPics.map((cat, i) => {
    return <img key={i} src={cat.url} />
  })

  return <div>{cats}</div>
}

export default CatList;