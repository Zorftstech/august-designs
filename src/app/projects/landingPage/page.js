"use client";

import LandingPage from "@/app/components/LandingPage";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";
import { HydrationProvider } from "react-hydration-provider";

function Projects() {
	return (
		<HydrationProvider>
			<ChakraProvider theme={theme}>
				<LandingPage />
			</ChakraProvider>
		</HydrationProvider>
	);
}

export default Projects;
