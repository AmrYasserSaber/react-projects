import React from 'react';

const Categories = ({items,setCategory}) => {
  const catagories=["all"]
  {items.map((item)=>{
    if(!catagories.includes(item.category)){
      catagories.push(item.category)
    }
  })}
  return (
    <div className="btn-container">
      {catagories.map((category)=>{
        return(
          <button 
          type="button"
          className="filter-btn"
          id={category}
          onClick={() =>{
            setCategory(category)
          }}
          >
            {category}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;
