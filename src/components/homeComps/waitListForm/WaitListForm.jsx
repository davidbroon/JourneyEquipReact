import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './waitListForm.style.css';
import StyledButton from '../../button/Button';

const WaitListForm = ({ status, message, onValidated }) => {
	const [open, setOpen] = useState(false);
	const [display, setDisplay] = useState('none');

	useEffect(() => {
		open ? setDisplay('inline-flex') : setDisplay('none');
	}, [open]);

	const {
		values,
		handleSubmit,
		submitCount,
		getFieldProps,
		setValues,
		touched,
		errors,
		setFieldValue,
	} = useFormik({
		initialValues: {
			name: '',
			email: '',
			country: '',
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
			country: Yup.string().required('Required'),
		}),
		onSubmit(values) {
			// We added a `username` value for the user which is everything before @ in their email address.
			setValues({
				...values,
				username: `@${values.email.split('@')[0]}`,
			});
			onValidated({
				EMAIL: values.email,
				MERGE6: values.name,
				MERGE7: values.country,
			});
		},
	});

	useEffect(() => {
		if (values.email === 'flaggedemail@mail.com') {
			// It could be a string or any other type
			setFieldValue('isEmailFlagged', { flagged: true, reason: 'test' });
		}
	}, [values.email, setFieldValue]);

	return (
		<>
			<div className='openFormButton'>
				<StyledButton onClick={() => setOpen(!open)}>
					Register Interest
				</StyledButton>
			</div>
			<div className='formWrapper' style={{ display: display }}>
				<form className='baseForm' onSubmit={handleSubmit} noValidate>
					{/* Form Header
					<header className='baseFormHeader'>
						<h1 className='baseFormHeading'>Register Interest</h1>
					</header> */}
					{/* Form main content */}

					<div className='formRow col-1'>
						<div className='formFieldWrap'>
							<label className='formFieldLabel' htmlFor='name'>
								{/* What's Your Name */}
								<span className='errorMessage'>
									{touched['name'] && errors['name']}
								</span>
							</label>

							<div className='formFieldWrapInner'>
								<input
									type='string'
									id='name'
									className='name formField'
									{...getFieldProps('name')}
									placeholder="What's Your Name"
								/>
							</div>
							{/* <span className='countryCue'>Minimum length is 8 characters</span> */}
						</div>
					</div>
					<div className='formRow col-1'>
						<div className='formFieldWrap'>
							<label className='formFieldLabel' htmlFor='email'>
								{/* Email address */}
								<span className='errorMessage'>
									{touched['email'] && errors['email']}
								</span>
							</label>

							<div className='formFieldWrapInner'>
								<input
									type='email'
									id='email'
									className='email formField'
									{...getFieldProps('email')}
									placeholder='Email address'
								/>
							</div>
						</div>
					</div>
					<div className='formFieldWrap'>
						<label className='formFieldLabel' htmlFor='country'>
							{/* What Country Are You From */}
							<span className='errorMessage'>
								{touched['country'] && errors['country']}
							</span>
						</label>

						<div className='formFieldWrapInner'>
							<input
								type='string'
								id='country'
								className='country formField'
								{...getFieldProps('country')}
								placeholder='What Country Are You From'
							/>
						</div>
						{/* <span className='countryCue'>Minimum length is 8 characters</span> */}
					</div>
					<div className='formRow col-1'>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
			{/* <div className='console'>
				<header className='baseFormHeader'>
					<p className='baseFormHeading'>Form Submission Output</p>
					{submitCount > 0 && <pre>{JSON.stringify(values, null, 2)}</pre>}
				</header>
			</div>
			<div className='console'>
				<header className='baseFormHeader'>
					<p className='baseFormHeading'>Errors</p>
					{<pre>{JSON.stringify(errors, null, 2)}</pre>}
				</header>
			</div> */}
		</>
	);
};

export default WaitListForm;
