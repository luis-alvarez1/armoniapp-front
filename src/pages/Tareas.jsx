import React from 'react'
import "../../scss/custom.css";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Test = () => {
  return (
    <div className='dotted vh-100 vw-100 d-flex text-center justify-content-center'>
      <div className='container bg-primary test-bg w-75 text-white custom-bg rounded border border-secondary mt-4 overflow-hidden'>
        <header className='bg-terciary w-100 px-2 pt-2'>
                <nav className='d-flex w-100 justify-content-between mt-2'>
                  <Link to="/home">Inicio</Link>
                  <Link to="/tasks">Tareas</Link>
                  <Link to="/profile">Perfil</Link>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Cerrar sesión</Dropdown.Item>
                      <Dropdown.Item href="/profile/edit">Editar Perfil</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              </nav>
        </header>
        <h1 className='my-3'>Tareas</h1>
        <div className=' bg-blue rounded p-2 h-50'>
          <Link to="/test">
          <div className='bg-terciary d-flex justify-content-center rounded mx-auto mt-3 h-25 w-100'>
                <h2 className='align-self-center'>Realiza un test</h2>
          </div></Link>
          <div className='bg-terciary d-flex justify-content-center rounded mx-auto mt-3 h-25 w-100'>
                <h2 className='align-self-center' >Realiza ejercicios de respiración</h2>          
          </div>
          <div className='bg-terciary d-flex justify-content-center rounded mx-auto mt-3 h-25 w-100'>
                <h2 className='align-self-center' >Desconectate de tu dispositivo un rato</h2>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test