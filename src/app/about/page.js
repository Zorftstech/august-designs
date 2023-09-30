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
	);
}

export default About;
