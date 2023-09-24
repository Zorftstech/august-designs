"use client";

import Dashboard from "@/app/components/Dashboard";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";

function Projects() {
	return (
		<ChakraProvider theme={theme}>
			<Dashboard />
		</ChakraProvider>
	);
}

export default Projects;
