import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../scss/custom.css";
import CInput from "../components/CInput";
import CButton from "../components/CButton";

const SignUp = () => {
	const [formData, setFormData] = useState({
		name: "",
		lastName: "",
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
		<div className='dotted vh-100 vw-100 d-flex text-center justify-content-center'>
			<div className='container bg-primary h-75 w-50 custom-bg rounded border border-secondary mt-5'>
				<form onSubmit={handleSubmit}>
					<h1 className='mt-3 text-center'>Registro</h1>
					<h5 className='mx-5 mt-4 mb-1'>Nombre</h5>
					<CInput 
						type='text' 
						required
            size='sm'
						name="name" 
						onChange={handleChange} 
						value={formData.name} 
						className='mx-5' 
						placeholder='Nombre' 
					/>
					<h5 className='mx-5 mt-2 mb-1'>Apellido</h5>
					<CInput 
						type='text' 
						required
            size='sm'
						name="lastName" 
						onChange={handleChange} 
						value={formData.lastName} 
						className='mx-5' 
						placeholder='Apellido' 
					/>
					<h5 className='mx-5 mt-2 mb-1'>Correo electrónico</h5>
					<CInput 
						type='email' 
						required
            size='sm'
						name="email" 
						onChange={handleChange} 
						value={formData.email} 
						className='mx-5' 
						placeholder='Correo electrónico' 
					/>
					<h5 className='mx-5 mt-2 mb-1'>Contraseña</h5>
					<CInput 
						type='password' 
						required
            size='sm'
						name="password" 
						onChange={handleChange} 
						value={formData.password} 
						className='mx-5' 
						placeholder='Contraseña' 
					/>
					<Link to="/home"><CButton color='secondary' type="submit" className='text-white mt-3 font-weight-bold'>Registrarse</CButton></Link><br/>
					<Link className='font-weight-bold' to='/login'>¿Ya tienes una cuenta? Inicia Sesión</Link>
				</form>
			</div>
		</div>
	);
};

export default SignUp;