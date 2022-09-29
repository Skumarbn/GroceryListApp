import React from 'react'

const Header = ({title}) => {

    const HeaderStyle = {
            backgroundColor : 'lightblue', color: '#fff'
        };
    
  return (
    <header style={HeaderStyle}>
      <h1>{title}</h1>

    </header>


  )
}

export default Header