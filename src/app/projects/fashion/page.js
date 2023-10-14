"use client";

import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";
import { HydrationProvider } from "react-hydration-provider";
import Fashion from "@/app/components/Fashion";

function Projects() {
	return (
		<HydrationProvider>
			<ChakraProvider theme={theme}>
				<Fashion />
			</ChakraProvider>
		</HydrationProvider>
	);
}

export default Projects;
