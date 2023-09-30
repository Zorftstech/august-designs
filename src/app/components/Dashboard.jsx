"use client";

import Image from "next/image";
import section1 from "../assets/dashboard/section1.png";

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

const Dashboard = () => {
	return (
		<Box
			m={"8rem 0"}
			ml={{ md: "3.5rem", base: "auto" }}
			mr={{ base: "auto", md: "0" }}>
			<Box>
<<<<<<< HEAD
				<Image src={section1} alt="EventsNg Dashboard" />
=======
				<Image src={section1} />
>>>>>>> 008e8a76e9f767f739c93d768c9dfb3839952bab
			</Box>
		</Box>
	);
};

export default Dashboard;
