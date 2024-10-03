import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../scss/custom.css";
import CInput from "../components/CInput";
import CButton from "../components/CButton";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const jsonData = JSON.stringify(formData);
		console.log(jsonData);
	};

	return (
		<div className='dotted bg-dark vh-100 vw-100 d-flex text-center justify-content-center'>
			<div className='container bg-primary h-75 w-50 rounded border border-secondary mt-5'>
				<form onSubmit={handleSubmit}>
					<h1 className='mt-5 text-center'>Inicio de Sesión</h1>
					<h4 className='mx-5 mt-4 mb-3'>Correo electrónico</h4>
					<CInput 
						type='email' 
						required
						name="email" 
						onChange={handleChange} 
						value={formData.email} 
						className='mx-5' 
						placeholder='Correo electrónico' 
					/>
					<h4 className='mx-5 mt-3 mb-3'>Contraseña</h4>
					<CInput 
						type='password' 
						name="password"
						required
						onChange={handleChange} 
						value={formData.password} 
						className='mx-5' 
						placeholder='Contraseña' 
					/>
					<Link to="/home"><CButton color='secondary' type="submit" className='text-white mt-3 font-weight-bold'>Iniciar Sesión</CButton></Link><br/>
					<Link className='font-weight-bold' to='/'>¿No tienes una cuenta? Registrate</Link>
				</form>
			</div>
		</div>
	);
};

export default Login;