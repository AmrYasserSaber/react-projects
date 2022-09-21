import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price,deleteTour}) => {
  const[readmore,setReadMore]=useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
      <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
      </div>
      <p>
        {readmore?info:`${info.substring(0, 120)}...`}
        <button onClick={()=>{return setReadMore(!readmore)}}>{readmore?"less":"readmore"}</button>
      </p>
      <button className='delete-btn' onClick={() => deleteTour(id)}>
        not interested
      </button>
      </footer>
    </article>
  )
};

export default Tour;
