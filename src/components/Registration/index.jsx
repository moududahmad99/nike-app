import React, { useState } from 'react'
import './Style.css'
import { Checkbox } from '@mui/material'
import countries from 'countries-list';
import { Link } from 'react-router-dom';


const Registration = () => {

	const [checked, setChecked] = React.useState(false);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};


	const [selectedOption, setSelectedOption] = useState('');

	const handleChangeTwo = (event) => {
		setSelectedOption(event.target.value);
	};


	const countryOptions = Object.entries(countries.countries).map(([countryCode, country]) => ({
		value: countryCode,
		label: country.name,
	}));

	return (
		<React.Fragment>
			<div id="registration-wrapper">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-5 text-center">
							<div className="registration-inner">
								<picture>
									<img src="./assets/navbar-middle-nike-logo.png" alt="" />
								</picture>
								<h3>Become a Nike Member</h3>
								<p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
								<input type="email" placeholder='Email Adress' />
								<input type="password" placeholder='Password' />
								<input type="text" placeholder='First Name' />
								<input type="text" placeholder='Last Name' />
								<input type="text" placeholder='Date Of Birth' />
								<h6>Get a Nike Member Reward every year on your Birthday.</h6>
								<div className="select-field">
									<select value={selectedOption} onChange={handleChangeTwo} className="registration-input2">
										{countryOptions.map((option) => (
											<option key={option.value} value={option.value}>
												{option.label}
											</option>
										))}
									</select>
								</div>
								<div className='registration-chekbox'>
									<Checkbox
										checked={checked}
										onChange={handleChange}
									/>
									<p>Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
								</div>
								<h4 className='registration-privacyPolicy'>By creating an account, you agree to Nike's <span>Privacy Policy</span> and <span>Terms of Use</span>.</h4>
								<div className='registration-button'>
									<a href="##" type='submit'>Registration</a>
								</div>
								<div className="registration-button--signIn">
									<p>Have an Account?<Link to="/sign-in">Sign In</Link></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Registration