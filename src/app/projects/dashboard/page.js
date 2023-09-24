"use client";

import Dashboard from "@/app/components/Dashboard";
import { ChakraProvider } from "@chakra-ui/react";

function Projects() {
	return (
		<ChakraProvider>
			<Dashboard />
		</ChakraProvider>
	);
}

export default Projects;
