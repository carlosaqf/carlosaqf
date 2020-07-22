import React from 'react'
import { useForm } from 'react-hook-form'
import{
	StyledConnect,
	ConnectHeading,
	ConnectFormContainer,
	ConnectForm,
	ConnectFormLabel,
	ConnectFormInput,
	ConnectFormMessageBox,
	ErrorMessage
} from './Connect.styled'
import { navigate } from 'gatsby'


function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')
}


const Connect = () => {

	const [state, setState] = React.useState({})

	const { register, handleSubmit, errors } = useForm({
		mode: 'onBlur',
	})

	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onSubmit = (data, e) => {
		e.target.reset()
		e.preventDefault()
		const form = e.target
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				...state,
			}),
		})
			.then(() => navigate(form.getAttribute('action')))
			.catch((error) => alert(error))
		console.log(data)
		alert(`${data.message}. Nice to meet you ${data.name.split(' ')[0]}`)
	}


	return (
		<StyledConnect id="connect">

			<ConnectHeading>Connect</ConnectHeading>

			<ConnectFormContainer>

				<ConnectForm
					name='contact'
					method='post'
					action='/'
					data-netlify='true'
					data-netlify-honeypot='bot-field'
					onSubmit={handleSubmit(onSubmit)}
				>
					<input type='hidden' name='form-name' value='contact' />
					<p hidden>
						<label>
							Don&apos;t fill this out: <input name='bot-field' />
						</label>
					</p>
					<ConnectFormLabel htmlFor='name'>Name <br/>{errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}</ConnectFormLabel>
					<ConnectFormInput
						name='name'
						type='text'
						ref={register({
							required: '*name required*',
						})}
						onChange={handleChange}
					/>

					<ConnectFormLabel htmlFor='email'>Email <br/>{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}</ConnectFormLabel>
					<ConnectFormInput
						name='email'
						type='email'
						id='email'
						ref={register({
							required: '*email required*',
						})}
						onChange={handleChange}
					/>

					<ConnectFormLabel htmlFor='message'>Message <br/>{errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}</ConnectFormLabel>
					<ConnectFormMessageBox
						name='message'
						type='textarea'
						ref={register({
							required: '*I find your lack of message, disturbing...*',
						})}
						onChange={handleChange}
					/>

					<ConnectFormInput
						type='submit'
						button
					/>

				</ConnectForm>

			</ConnectFormContainer>

		</StyledConnect>
	)
}

export default Connect


