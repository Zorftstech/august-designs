"use client";

import LandingPage from "@/app/components/LandingPage";
import { ChakraProvider } from "@chakra-ui/react";

function Projects() {
	return (
		<ChakraProvider>
			<LandingPage />
		</ChakraProvider>
	);
}

export default Projects;
