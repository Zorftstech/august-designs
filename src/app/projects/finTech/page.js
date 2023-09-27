"use client";

import { ChakraProvider } from "@chakra-ui/react";
import FinTech from "@/app/components/FinTech";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";

function Projects() {
	return (
		<ChakraProvider theme={theme}>
			<FinTech />
		</ChakraProvider>
	);
}

export default Projects;
