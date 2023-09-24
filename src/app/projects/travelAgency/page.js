"use client";

import TravelAgency from "@/app/components/TravelAgency";
import { ChakraProvider } from "@chakra-ui/react";

function Projects() {
	return (
		<ChakraProvider>
			<TravelAgency />
		</ChakraProvider>
	);
}

export default Projects;
