import React from 'react'

function Home() {
  return (
    <div className="backgroundMain">
        <div className='homeDiv'>
          <img src='https://pic.rutubelist.ru/video/ec/0c/ec0c12ae7b425bd4055f9f0e16f3498e.jpg'></img>    
        </div>
        <div className='homeDiv'>
          <a className='HeaderButton' href='https://github.com/DmitriyGorbulko/Portfolio'>Ссылка на GitHub</a>
        </div>
        <div className='homeDiv'>
          <ul className='homeUl'>
            Навыки
            <li className='homeLi'>Принципы SOLID</li>
            <li className='homeLi'>Архитектура Onion</li>
            <li className='homeLi'>Работа с различными реляционными БД</li>
            <li className='homeLi'>Архитектура Onion</li>
            <li className='homeLi'>Стремление к изучению новых навыков</li>
          </ul>
        </div>
    </div>
    
  )
}

export default Home

