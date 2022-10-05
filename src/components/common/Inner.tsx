import styled from 'styled-components';
import { devices } from '../../css/config';

type InnerProps = {
	children: React.ReactNode;
	display?: string;
	justifyContent?: string;
	alignItems?: string;
	padding?: string;
	blogDetailPadding?: string;
	gap?: string;
};

const Inner = ({
	children,
	display,
	justifyContent,
	alignItems,
	padding,
	blogDetailPadding,
	gap
}: InnerProps) => {
	return (
		<InnerWrapper
			display={display}
			justifyContent={justifyContent}
			alignItems={alignItems}
			padding={padding}
			blogDetailPadding={blogDetailPadding}
			gap={gap}
		>
			{children}
		</InnerWrapper>
	);
};

export default Inner;

const InnerWrapper = styled.div<InnerProps>`
	width: 100vw;
	max-width: 1200px;
	margin: 0 auto;
	padding: ${(props) => (props.padding ? props.padding : '0px')};
	display: ${(props) => (props.display ? props.display : 'block')};
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : 'center'};
	align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
	gap: ${(props) => (props.gap ? props.gap : '0')};

	@media ${devices.mobileL} {
		display: block;
		padding: ${(props) => (props.blogDetailPadding ? props.blogDetailPadding : '20px')};
	}
`;
