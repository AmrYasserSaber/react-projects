import React, { useState,useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [category,setCategory]=useState('all')
  const newItems= items.filter((item) => item.category=== category)
  useEffect(() => {
    const newItems= items.filter((item) => item.category=== category)
  }, [category]);
  return(
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories items={menuItems} setCategory={setCategory} />
        <Menu items={menuItems} newItems={newItems} category={category}/>
      </section>
    </main>
  )
}

export default App;