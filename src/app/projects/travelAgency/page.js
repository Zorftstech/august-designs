"use client";

import TravelAgency from "@/app/components/TravelAgency";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";
import { HydrationProvider } from "react-hydration-provider";

function Projects() {
	return (
		<HydrationProvider>
			<ChakraProvider theme={theme}>
				<TravelAgency />
			</ChakraProvider>
		</HydrationProvider>
	);
}

export default Projects;
