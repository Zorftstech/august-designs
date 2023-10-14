"use client";

import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";
import { HydrationProvider } from "react-hydration-provider";
import Zynta from "@/app/components/Zynta";

function Projects() {
	return (
		<HydrationProvider>
			<ChakraProvider theme={theme}>
				<Zynta />
			</ChakraProvider>
		</HydrationProvider>
	);
}

export default Projects;
