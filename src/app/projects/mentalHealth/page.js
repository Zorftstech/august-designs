"use client";

import { ChakraProvider } from "@chakra-ui/react";
import MentalHealth from "../../components/MentalHealth";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "@/app/theme";

function Projects() {
	return (
		<ChakraProvider theme={theme}>
			<MentalHealth />
		</ChakraProvider>
	);
}

export default Projects;
