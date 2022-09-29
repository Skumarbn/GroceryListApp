import React from 'react'
import { useState } from 'react';

const Content = () => {

    const[name,setName]=useState('SK');

    const handleNameChanges = () => {
        const names = ['Satish','Kiran', 'Vijay'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }

      const handleClick = () =>{
        alert("Get Started clicked!");
      }
      const handleClickName = (name) =>{
        alert(name, 'was clicked');
      }

  return (
    <main>
         <p>
          Hello {name}!
        </p>
        <button class="btn btn-primary" onClick={handleNameChanges} > change name </button>

        <button class="btn btn-primary" onClick={() => handleClickName('SK')} > Get Started </button>
    </main>
  )
}

export default Content