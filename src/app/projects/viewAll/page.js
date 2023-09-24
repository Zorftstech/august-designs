"use client";

import ViewAll from "@/app/components/ViewAll";
import { ChakraProvider } from "@chakra-ui/react";

function Projects() {
	return (
		<ChakraProvider>
			<ViewAll />
		</ChakraProvider>
	);
}

export default Projects;
