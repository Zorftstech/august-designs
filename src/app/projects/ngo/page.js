"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Ngo from "@/app/components/Ngo";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";
import { HydrationProvider } from "react-hydration-provider";

function Projects() {
	return (
		<HydrationProvider>
			<ChakraProvider theme={theme}>
				<Ngo />
			</ChakraProvider>
		</HydrationProvider>
	);
}

export default Projects;
