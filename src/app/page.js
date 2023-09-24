"use client";
import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import Intro from "./components/Intro";
import CaseStudies from "./components/CaseStudies";
import UiDesigns from "./components/UIDesigns";
import DesignProcess from "./components/DesignProcess";
import MySkills from "./components/MySkills";
import MyTools from "./components/MyTools";
import LiveWebsites from "./components/LiveWebsites";
import People from "./components/People";
import ContactMe from "./components/ContactMe";

function Home() {
	return (
		<ChakraProvider>
			<Intro />
			<CaseStudies />
			<UiDesigns />
			<DesignProcess />
			<MySkills />
			<MyTools />
			<LiveWebsites />
			<People />
			<ContactMe />
		</ChakraProvider>
	);
}

export default Home;
