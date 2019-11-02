import React from 'react'

const CatList = props => {

  const catList = props.catPics.map(cat => {
    return <img src={cat.url} />
  })

  return (
    <div>
      {catList}
    </div>
  )

}

export default CatList
