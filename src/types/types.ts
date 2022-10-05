type UserTypes = {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	blogs: [];
	id: string;
};

export type BlogsProps = {
	id: string;
	title: string;
	author: UserTypes;
	image: string;
	description: string;
	createdAt: string;
};

export type SetErrorProps = {
	setError: React.Dispatch<React.SetStateAction<string>> | Function;
};

export type TokenType = {
	iat: string;
	id: string;
	username: string;
};