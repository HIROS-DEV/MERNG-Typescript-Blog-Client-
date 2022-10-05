import { gql } from '@apollo/client';

export const ALL_BLOGS = gql`
	query {
		allBlogs {
			id
			title
			author {
				username
				email
				password
				confirmPassword
				id
			}
			createdAt
			image
			description
		}
	}
`;

export const FIND_BLOG = gql`
	query findBlog($findBlogId: ID!) {
		findBlog(id: $findBlogId) {
			id
			title
			createdAt
			image
			description
			author {
				id
			}
		}
	}
`;

export const CREATE_BLOG = gql`
	mutation AddBlog($title: String!, $image: String!, $description: String!) {
		addBlog(title: $title, image: $image, description: $description) {
			title
			image
			description
		}
	}
`;

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			value
		}
	}
`;

export const REGISTER = gql`
	mutation createUser(
		$username: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		createUser(
			username: $username
			email: $email
			password: $password
			confirmPassword: $confirmPassword
		) {
			username
			email
		}
	}
`;

export const EDIT_BLOG = gql`
	mutation editBlog(
		$title: String!
		$image: String!
		$description: String!
		$editBlogId: ID!
	) {
		editBlog(
			title: $title
			image: $image
			description: $description
			id: $editBlogId
		) {
			id
			title
			createdAt
			image
			description
		}
	}
`;

export const DELETE_BLOG = gql`
	mutation deleteBlog($deleteBlogId: ID!) {
		deleteBlog(id: $deleteBlogId) {
			id
			title
			createdAt
			image
			description
		}
	}
`;
