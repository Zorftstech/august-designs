"use client";
import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import CaseStudies from "../components/CaseStudies";
import UiDesigns from "../components/UIDesigns";
import DesignProcess from "../components/DesignProcess";
import MySkills from "../components/MySkills";
import MyTools from "../components/MyTools";
import LiveWebsites from "../components/LiveWebsites";
import People from "../components/People";
import ContactMe from "../components/ContactMe";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "../theme";
import { HydrationProvider } from "react-hydration-provider";
import IntroMobile from "../components/IntroMobile";

function Home() {
	return (
		<HydrationProvider>
			<ChakraProvider theme={theme}>
				<IntroMobile />
				<CaseStudies />
				<UiDesigns />
				<DesignProcess />
				<MySkills />
				<MyTools />
				<LiveWebsites />
				<People />
				<ContactMe />
			</ChakraProvider>
		</HydrationProvider>
	);
}

export default Home;
