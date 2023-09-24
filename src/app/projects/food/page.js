"use client";

import Food from "@/app/components/Food";
import { ChakraProvider } from "@chakra-ui/react";

function Projects() {
	return (
		<ChakraProvider>
			<Food />
		</ChakraProvider>
	);
}

export default Projects;
