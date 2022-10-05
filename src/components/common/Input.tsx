import React from 'react';
import styled from 'styled-components';

type InputProps = {
	id?: string;
	placeholder: string;
	padding?: string;
	type?: string;
	border?: string;
	value?: string;
	required?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
	id,
	placeholder,
	padding,
	type,
	border,
	value,
	required,
	onChange,
}: InputProps) => {
	return (
		<InputForm
			id={id}
			type={type ? type : 'text'}
			onChange={onChange}
			placeholder={placeholder}
			padding={padding}
			border={border}
			value={value}
			autoComplete='on'
			required={required ? required : true}
		/>
	);
};
export default Input;

const InputForm = styled.input<InputProps>`
	padding: ${(props) => (props.padding ? props.padding : '20px')};
	border: ${(props) => (props.border ? props.border : '2px solid black')};
	&:focus {
		outline: 0;
	}
`;
