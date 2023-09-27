"use client";

import { ChakraProvider } from "@chakra-ui/react";

import Little from "../components/Little";
import ContactMe from "../components/ContactMe";
import MyValues from "../components/MyValues";
import MyGoals from "../components/MyGoals";
import MyTime from "../components/MyTime";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "../theme";

function About() {
	return (
		<ChakraProvider theme={theme}>
			<Little />
			<MyValues />
			<MyGoals />
			<MyTime />
			<ContactMe />
		</ChakraProvider>
	);
}

export default About;
