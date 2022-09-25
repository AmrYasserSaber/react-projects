import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]=useState(0);
  const {id , name , job, image, text}=people[index];
  const ckeckindex =(index)=>{
    if (index > people.length-1){
      return(0)
    }
    if (index < 0){
      return(people.length -1)
    }
    return (index)
  }
  const random =()=>{
    let randnum = Math.floor(Math.random()*people.length)
    if (randnum == index){
      random()
    }
    else{setIndex(randnum)}
  }
  const nextperson =  () => {
    setIndex((index)=>{
      let newIndex = index + 1
      return ckeckindex(newIndex)
    }
    )
  }
  const prevPerson =()=>{
    setIndex((index)=>{
      let newIndex = index - 1
      return ckeckindex(newIndex)
    }
    )
  }
  return (
  <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={nextperson}>
        <FaChevronRight/>
      </button>
      </div>
      <button className='random-btn' onClick={random}>
        surprise me
      </button>
  </article>
    )
};

export default Review;
