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


const Connect = () => {

	const { register, handleSubmit, errors } = useForm()
	const onSubmit = data => console.log(data)

	// console.log(watch('example')) watch input value by passing name

	return (
		<StyledConnect id="connect">

			<ConnectHeading>Connect</ConnectHeading>

			<ConnectFormContainer>

				<ConnectForm onSubmit={handleSubmit(onSubmit)}>

					<ConnectFormLabel htmlFor='name'>Name {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}</ConnectFormLabel>
					<ConnectFormInput
						name='name'
						type='text'
						ref={register({
							required: '*name required*',
						})}
					/>

					<ConnectFormLabel htmlFor='email'>Email {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}</ConnectFormLabel>
					<ConnectFormInput
						name='email'
						type='email'
						id='email'
						ref={register({
							required: '*email required*',
						})}
					/>

					<ConnectFormLabel htmlFor='message'>Message</ConnectFormLabel>
					<ConnectFormMessageBox
						name='message'
						type='textarea'
						ref={register({
							required: 'No message defeats the whole purpose of this form, no?',
						})}
					/>
					{errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}

					<ConnectFormInput
						type='submit'
					/>

				</ConnectForm>

			</ConnectFormContainer>

		</StyledConnect>
	)
}

export default Connect


