"use client";

import ViewAll from "@/app/components/ViewAll";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";

function Projects() {
	return (
		<ChakraProvider theme={theme}>
			<ViewAll />
		</ChakraProvider>
	);
}

export default Projects;
