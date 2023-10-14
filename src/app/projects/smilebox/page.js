"use client";

import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";
import { HydrationProvider } from "react-hydration-provider";
import SmileBox from "@/app/components/SmileBox";

function Projects() {
	return (
		<HydrationProvider>
			<ChakraProvider theme={theme}>
				<SmileBox />
			</ChakraProvider>
		</HydrationProvider>
	);
}

export default Projects;
