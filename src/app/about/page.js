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
<<<<<<< HEAD
import { HydrationProvider } from "react-hydration-provider";

function About() {
	return (
		<HydrationProvider>
			<ChakraProvider theme={theme}>
				<Little />
				<MyValues />
				<MyGoals />
				<MyTime />
				<ContactMe />
			</ChakraProvider>
		</HydrationProvider>
=======

function About() {
	return (
		<ChakraProvider theme={theme}>
			<Little />
			<MyValues />
			<MyGoals />
			<MyTime />
			<ContactMe />
		</ChakraProvider>
>>>>>>> 008e8a76e9f767f739c93d768c9dfb3839952bab
	);
}

export default About;
