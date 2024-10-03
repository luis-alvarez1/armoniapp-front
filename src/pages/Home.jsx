import React from 'react';
import { Link } from 'react-router-dom';
import "../../scss/custom.css";
import CButton from '../components/CButton';
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
            <h1 className='text-white mt-5'>¿Deseas comenzar tu test?</h1>
            <Link to="/test"><CButton size='lg' color='terciary'>¡Vamos!</CButton></Link>
            <h4 className='text-white mt-5'>¿Quieres comunicarte con alguien?</h4>
            <h4 className='text-white'>Habla con un profesional en psicología</h4>
            <Link to="/contacts"><CButton color='terciary'>Hazlo Ahora</CButton></Link>
			</div>
		</div>
	);
};

export default Home;