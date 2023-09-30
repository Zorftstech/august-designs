"use client";

import RealEstate from "@/app/components/RealEstate";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";
<<<<<<< HEAD
import { HydrationProvider } from "react-hydration-provider";

function Projects() {
	return (
		<HydrationProvider>
			<ChakraProvider theme={theme}>
				<RealEstate />
			</ChakraProvider>
		</HydrationProvider>
=======

function Projects() {
	return (
		<ChakraProvider theme={theme}>
			<RealEstate />
		</ChakraProvider>
>>>>>>> 008e8a76e9f767f739c93d768c9dfb3839952bab
	);
}

export default Projects;
