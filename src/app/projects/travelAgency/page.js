"use client";

import TravelAgency from "@/app/components/TravelAgency";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";

function Projects() {
	return (
		<ChakraProvider theme={theme}>
			<TravelAgency />
		</ChakraProvider>
	);
}

export default Projects;
