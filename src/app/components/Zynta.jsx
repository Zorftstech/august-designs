"use client";

import Image from "next/image";
import section1 from "../assets/zynta/section1.png";
import section2 from "../assets/zynta/section2.png";
import section3 from "../assets/zynta/section3.png";

import {
	Heading,
	Card,
	Link,
	Box,
	Flex,
	Avatar,
	HStack,
	Text,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	Container,
	Center,
} from "@chakra-ui/react";

const Zynta = () => {
	return (
		<Box
			m={"12rem 0"}
			ml={{ md: "3.5rem", base: "auto" }}
			mr={{ base: "auto", md: "0" }}>
			<Box>
				<Image src={section1} alt="section-1" />
			</Box>
			<Box m={"1rem 0"}>
				<Image src={section2} alt="section-2" />
			</Box>
			<Box>
				<Image src={section3} alt="section-3" />
			</Box>
		</Box>
	);
};

export default Zynta;
