// write your CatList component here
import React from 'react';

const CatList = props => {
const catlist = props.catPics.map(cat => <img src={cat.url} />)
return (
  <div>
    {catlist}
  </div>
);

};

export default CatList;
