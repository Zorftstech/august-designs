"use client";

import Image from "next/image";
import section1 from "../assets/food/section1.png";

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

const Food = () => {
	return (
		<Box
			m={"8rem 0"}
			ml={{ md: "3.5rem", base: "auto" }}
			mr={{ base: "auto", md: "0" }}>
			<Box>
				<Image src={section1} />
			</Box>
		</Box>
	);
};

export default Food;
