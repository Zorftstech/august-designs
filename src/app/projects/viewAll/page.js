"use client";

import ViewAll from "@/app/components/ViewAll";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";
import { HydrationProvider } from "react-hydration-provider";

function Projects() {
	return (
		<HydrationProvider>
			<ChakraProvider theme={theme}>
				<ViewAll />
			</ChakraProvider>
		</HydrationProvider>
	);
}

export default Projects;
