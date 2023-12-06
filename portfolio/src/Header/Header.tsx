import React from 'react'
import { Link } from 'react-router-dom';

// function Header() {
//   return (
    
//     <header>
//         <a href="/">Резюме  </a>
//         <a href="/form">Оставить заявку  </a>
//     </header>
//   )
// }


const pages = ['Резюме', 'Оставить заявку'];

function Header() {


  return (
    <header className='HeaderDiv'>
      <a className='HeaderButton' href="/">Резюме   </a>
      <a className='HeaderButton' href="/form">Оставить заявку  </a>
    </header>
  );
}
export default Header;