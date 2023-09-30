"use client";

import { ChakraProvider } from "@chakra-ui/react";
import MentalHealth from "../../components/MentalHealth";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";
import { HydrationProvider } from "react-hydration-provider";

function Projects() {
	return (
		<HydrationProvider>
			<ChakraProvider theme={theme}>
				<MentalHealth />
			</ChakraProvider>
		</HydrationProvider>
	);
}

export default Projects;
