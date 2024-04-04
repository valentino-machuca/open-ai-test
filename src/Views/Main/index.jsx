import React from 'react';
import s from './styles.module.scss';

//Componentes
import Chat from '../../Components/Chat';

//Assets
import background from '../../Assets/neon_bubbles.jpg';

const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <p style={{fontWeight: 200}}>open-ai</p>
        <p style={{fontWeight: 500}}>test</p>
      </div>
      <Chat/>
      <img src={background} alt="background" className={s.background}/>
    </div>
  )
}

export default Main;