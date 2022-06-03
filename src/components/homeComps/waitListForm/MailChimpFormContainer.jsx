import React, { useState, useEffect } from 'react';
import './mcFormStyles.css';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import StyledButton from '../../button/Button';
import { Input } from '@mui/material';
import WaitListForm from '../waitListForm/WaitListForm';

const CustomForm = ({ status, message, onValidated }) => {
	const [open, setOpen] = useState(false);
	const [display, setDisplay] = useState('none');

	useEffect(() => {
		open ? setDisplay('inline-flex') : setDisplay('none');
	}, [open]);

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [country, setCountry] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		email &&
			name &&
			country &&
			email.indexOf('@') > -1 &&
			onValidated({
				EMAIL: email,
				MERGE6: name,
				MERGE7: country,
			});
	};

	useEffect(() => {
		if (status === 'success') clearFields();
		if (open && status === 'success') clearFields();
	}, [status, open]);

	const clearFields = () => {
		setName('');
		setCountry('');
		setEmail('');
	};

	return (
		<>
			<div className='openFormButton'>
				<StyledButton onClick={() => setOpen(!open)}>
					Register Interest
				</StyledButton>
			</div>
			<form
				style={{ display: display }}
				className='mc__form'
				onSubmit={(e) => handleSubmit(e)}
			>
				<h3 className='mc__title'>
					{status === 'success'
						? 'Success!'
						: 'Join our email list for future updates.'}
				</h3>

				{status === 'sending' && (
					<div className='mc__alert mc__alert--sending'>sending...</div>
				)}
				{status === 'error' && (
					<div
						className='mc__alert mc__alert--error'
						dangerouslySetInnerHTML={{ __html: message }}
					/>
				)}
				{status === 'success' && (
					<div
						className='mc__alert mc__alert--success'
						dangerouslySetInnerHTML={{ __html: message }}
					/>
				)}

				{status !== 'success' ? (
					<div className='mc__field-container'>
						<input
							label='Name'
							onChange={setName}
							type='text'
							value={name}
							placeholder='John'
							isRequired
						/>

						<input
							label='Country'
							onChangE={setCountry}
							type='text'
							value={country}
							placeholder='Northern Ireland'
							isRequired
						/>

						<input
							label='Email'
							onChange={setEmail}
							type='email'
							value={email}
							placeholder='your@email.com'
							isRequired
						/>
					</div>
				) : null}

				{/*Close button appears if form was successfully sent*/}
				{status === 'success' ? (
					<button
						handleClick={() => setOpen(false)}
						label='close'
						size='big'
						customClass='g__justify-self-center'
					/>
				) : (
					<Input
						label='subscribe'
						type='submit'
						formValues={[email, name, country]}
					/>
				)}
			</form>
		</>
	);
};

const MailchimpFormContainer = (props) => {
	const postUrl = `https://gmail.us14.list-manage.com/subscribe/post?u=157593b97dd878ae654d09473&id=21bc8a79fa`;
	return (
		<div className='mc__form-container'>
			<MailchimpSubscribe
				url={postUrl}
				render={({ subscribe, status, message }) => (
					<WaitListForm
						status={status}
						message={message}
						onValidated={(formData) => subscribe(formData)}
					/>
				)}
			/>
		</div>
	);
};

export default MailchimpFormContainer;
