"use client";

import { ChakraProvider } from "@chakra-ui/react";

import Little from "../components/Little";
import ContactMe from "../components/ContactMe";
import MyValues from "../components/MyValues";
import MyGoals from "../components/MyGoals";
import MyTime from "../components/MyTime";

function About() {
	return (
		<ChakraProvider>
			<Little />
			<MyValues />
			<MyGoals />
			<MyTime />
			<ContactMe />
		</ChakraProvider>
	);
}

export default About;
