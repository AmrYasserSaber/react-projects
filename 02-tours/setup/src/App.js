import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading]=useState(true)
  const[tours,setTours]=useState([])

  const fetchTours= async () =>{
    try {
      setLoading(true);
      const response= await fetch(url)
      const tours=await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const deleteTour =(id)=>{
    const newTours=tours.filter((tour)=>tour.id!==id)
    setTours(newTours)
  }

  useEffect(()=>{
    fetchTours()
  },[])


  if (loading){
    return(
      <main>
      <Loading />
      </main>
    )
  }
  if (tours.length===0){
    return(      
    <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn' onClick={() => fetchTours()}>
          refresh
        </button>
      </div>
    </main>)
  }
  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  )
}

export default App
