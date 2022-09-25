import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const question = (question)=>{
    return(
      <SingleQuestion key={question.id}{...question} />
    );
  }
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {data.map(question)}
        </section>
      </div>
    </main>
  );
}

export default App;
