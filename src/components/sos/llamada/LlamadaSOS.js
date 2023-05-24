import { NavLink } from "react-router-dom";

import './LlamadaSOS.css';

function Juegos() {
  return (
    <div className='full relative question'>
      <div className='px'>
        <br/><br/>
        <h2 className='txt-center'>¿Quieres llamar <br/> a la policía?</h2>
      </div>
      <div className='answers'>
        <NavLink className="txt-center clr-white answer inl flex-center left" to='/'>
          <b className='h1  relative'>NO</b>
        </NavLink>
        <NavLink className="txt-center clr-white answer inl flex-center right" to='ayuda-en-camino'>
          <b className='h1  relative'>SÍ</b>
        </NavLink>
      </div>
    </div>
  );
}

export default Juegos;
