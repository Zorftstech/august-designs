"use client";

import { ChakraProvider } from "@chakra-ui/react";
import FinTech from "@/app/components/FinTech";

function Projects() {
	return (
		<ChakraProvider>
			<FinTech />
		</ChakraProvider>
	);
}

export default Projects;
