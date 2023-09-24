"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Ngo from "@/app/components/Ngo";

function Projects() {
	return (
		<ChakraProvider>
			<Ngo />
		</ChakraProvider>
	);
}

export default Projects;
