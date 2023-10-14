"use client";

import Image from "next/image";
import section1 from "../assets/fashion/section1.png";
import section2 from "../assets/fashion/section2.png";
import section3 from "../assets/fashion/section3.png";

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

const Fashion = () => {
	return (
		<Box
			m={"12rem 0"}
			ml={{ md: "3.5rem", base: "auto" }}
			mr={{ base: "auto", md: "0" }}>
			<Box>
				<Image src={section1} alt="section-1" />
			</Box>
			<Box>
				<Image src={section2} alt="section-2" />
			</Box>
			<Box>
				<Image src={section3} alt="section-2" />
			</Box>
		</Box>
	);
};

export default Fashion;
