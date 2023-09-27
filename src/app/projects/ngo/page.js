"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Ngo from "@/app/components/Ngo";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";

function Projects() {
	return (
		<ChakraProvider theme={theme}>
			<Ngo />
		</ChakraProvider>
	);
}

export default Projects;
