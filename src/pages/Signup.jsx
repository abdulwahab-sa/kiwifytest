import React, { useState } from 'react';
import kiwifyLogo from './../assets/kiwifyLogo.png';

const Signup = () => {
	// Initial state of Form

	const [formData, setFormData] = useState({
		email: '',
		repeatemail: '',
		password: '',
	});

	// Initial state of Checkbox element

	const [isChecked, setIsChecked] = useState(false);

	// Initial state of errors used for form validation

	const [errors, setErrors] = useState({
		email: '',
		repeatemail: '',
		password: '',
		checked: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
		setErrors({ ...errors, [event.target.name]: '' });
	};

	const handleCheckbox = () => {
		setIsChecked((prev) => !prev);
		setErrors({ ...errors, checked: '' });
	};

	// Validate function to verify input before submitting form

	const validateForm = () => {
		let newErrors = {};
		if (!formData.email) {
			newErrors.email = 'Esse campo é obrigatório';
		}
		if (!formData.repeatemail) {
			newErrors.repeatemail = ' Esse campo é obrigatório';
		}
		if (formData.repeatemail != formData.email) {
			newErrors.repeatemail = ' Os dois e-mails devem ser iguais.';
		}
		if (!formData.password) {
			newErrors.password = 'Esse campo é obrigatório';
		}
		if (!isChecked) {
			newErrors.checked = 'Esse campo é obrigatório';
		}
		setErrors(newErrors);
		return Object.values(newErrors).every((error) => error === '');
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		if (validateForm()) {
			// API CALL
		} else {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="h-full w-full">
			<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div>
					<div className="sm:mx-auto sm:w-full sm:max-w-md">
						<img src={kiwifyLogo} alt="Workflow" className="mx-auto h-12 w-auto" />{' '}
						<h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Criar nova conta</h2>{' '}
						<p className="mt-2 text-center text-base leading-5 text-gray-600">
							Ou
							<a
								href="/signup?redirect"
								className="ml-1 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
							>
								entrar na sua conta existente
							</a>
						</p>
					</div>{' '}
					<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
						<form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" onSubmit={handleSubmit}>
							<div>
								<label htmlFor="email" className="block text-sm font-medium leading-5 mb-1 text-gray-700">
									E-mail
								</label>{' '}
								<div>
									{' '}
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${
											errors.email ? 'border-red-400' : ''
										} w-full`}
									/>{' '}
								</div>{' '}
								{errors && <div className="text-xs text-red-500">{errors.email}</div>}
							</div>{' '}
							<div className="mt-6">
								<label htmlFor="email" className="block text-sm font-medium leading-5 mb-1 text-gray-700">
									Repetir e-mail
								</label>{' '}
								<div>
									{' '}
									<input
										type="email"
										name="repeatemail"
										value={formData.repeatemail}
										onChange={handleChange}
										className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${
											errors.repeatemail ? 'border-red-400' : ''
										} w-full`}
									/>{' '}
								</div>{' '}
								{errors && <div className="text-xs text-red-500">{errors.repeatemail}</div>}
							</div>
							<div className="mt-6">
								<label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
									Senha
								</label>{' '}
								<div>
									{' '}
									<input
										type="password"
										name="password"
										value={formData.password}
										onChange={handleChange}
										className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${
											errors.password ? 'border-red-400' : 'border-gray-300'
										} w-full`}
									/>{' '}
								</div>
								{errors && <div className="text-xs text-red-500">{errors.password}</div>}
							</div>{' '}
							<div className="mt-2 flex items-center justify-end">
								<div className="text-sm leading-5">
									<a
										href="/ResetPassword"
										className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
									>
										Esqueceu a senha?
									</a>
								</div>
							</div>{' '}
							<div className="mt-6">
								<label className="relative flex items-start mt-2">
									<div className="flex items-center h-5">
										<input
											type="checkbox"
											name="checkbox"
											checked={isChecked}
											onChange={handleCheckbox}
											className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
										/>
									</div>
									<div className="ml-2 text-sm leading-5">
										<span className="font-medium text-gray-700">
											Eu li e aceito os{' '}
											<a href="https://kiwify.com.br/termos-de-uso" target="_blank" className="underline">
												{' '}
												termos de uso
											</a>
											,{' '}
											<a href="https://kiwify.com.br/licenca-de-uso-software" target="_blank" className="underline">
												{' '}
												termos de licença de uso de software
											</a>
											,{' '}
											<a href="https://kiwify.com.br/politica-de-conteudo" target="_blank" className="underline">
												{' '}
												política de conteúdo
											</a>{' '}
											da Kiwify{' '}
										</span>
									</div>
								</label>
							</div>
							{errors && <div className="text-xs text-red-500">{errors.checked}</div>}
							<div className="mt-6">
								<span className="block w-full rounded-md shadow-sm">
									<button
										type="submit"
										className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
										disabled={isSubmitting}
									>
										{' '}
										Criar conta
									</button>
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
