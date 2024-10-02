import React from 'react';
import { Link } from 'react-router-dom';
import "../../scss/custom.css";
import Dropdown from 'react-bootstrap/Dropdown';

const Home = () => {

	return (
		<div className='dotted bg-dark vh-100 vw-100 d-flex text-center justify-content-center'>
			<div className='container bg-primary test-bg rounded border border-secondary mt-5'>
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
                <h2 className='mt-5 text-white'>Usa estas lineas para hablar sobre tu salud mental con un profesional</h2>
                <img src="../src/assets/Linea-amiga.png" alt="Llama a la linea amiga 444 44 48" />
                <img src="../src/assets/123.png" alt="o llama a la linea de emergencia 123" />
                <h2 className='text-white'>Y activa un codigo dorado en cualquiera de estas lineas para urgencias</h2>
                <img className='mb-5' src="../src/assets/cd.png" alt="Activa un Codigo Dorado de Salud Mental en Cualquiera de estas" />
			</div>
		</div>
	);
};

export default Home;