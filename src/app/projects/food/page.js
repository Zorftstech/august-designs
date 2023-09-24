"use client";

import Food from "@/app/components/Food";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";

function Projects() {
	return (
		<ChakraProvider theme={theme}>
			<Food />
		</ChakraProvider>
	);
}

export default Projects;
