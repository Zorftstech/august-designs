"use client";

import RealEstate from "@/app/components/RealEstate";
import { ChakraProvider } from "@chakra-ui/react";

function Projects() {
	return (
		<ChakraProvider>
			<RealEstate />
		</ChakraProvider>
	);
}

export default Projects;
