import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 12px;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}

	body {
		font-size: 1rem;
		font-family: ${(props) => props.theme.font}, sans-serif;
		color: ${(props) => props.theme.black};
		background-color: ${(props) => props.theme.primaryColor};
		line-height: 1.8;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	input, textarea {
		font-family: ${(props) => props.theme.font}, sans-serif;
		font-size: 1rem;
	}

	input:focus, textarea:focus, button:focus, video:focus {
			outline: none;
	}

	button {
		font-family: 'Fira Sans', sans-serif;
		font-size: 1rem;
		cursor: pointer;
	}

	textarea {
		resize: none;
	}

    @media screen and (max-width: 530px) {
		body {
			font-size: 0.95rem;
		}

		button {
			font-size: 0.9rem;
	  }
	}
`;

export default GlobalStyle;