"use client";

import Image from "next/image";
import LocationIcon from "../assets/locationImg.png";

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
	grid,
} from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box bgColor={"#ff8762"} pb={{ base: "2rem", md: "0" }}>
			<Box
				display={"flex"}
				flexDir={{ base: "column", md: "row" }}
				justifyContent={"space-between"}
				m={"0 4rem"}>
				<Heading
					color="#ffff"
					fontSize="32px"
					mt={"3rem"}
					display={{ base: "none", md: "block" }}>
					AIA
				</Heading>
				<Box display="flex" flexDir={"column"}>
					<Link
						href="/about"
						display={{ base: "none", md: "block" }}
						color={"#fff"}
						mt={"3rem"}
						mb={"3rem"}
						_hover={{ color: "#7f7e7e" }}>
						<a>About Me</a>
					</Link>
					<Link
						href="/projects/viewAll"
						display={{ base: "none", md: "block" }}
						color={"#fff"}
						mb={"3rem"}
						_hover={{ color: "#7f7e7e" }}>
						<a>My Works</a>
					</Link>
				</Box>
				<Box
					display={"flex"}
					flexDir={"column"}
					m={{ base: "0 auto", md: "0 0" }}>
					<Link
						href="http://www.linkedin.com/in/ijeomaambrose"
						color={"#fff"}
						mt={"3rem"}
						mb={{ base: "1.5rem", md: "3rem" }}
						_hover={{ color: "#7f7e7e" }}>
						<a>LinkedIn</a>
					</Link>
					<Link
						href="https://instagram.com/ijeoma_amb?igshid=ZGUzMzM3NWJiOQ=="
						color={"#fff"}
						mb={{ base: "1.5rem", md: "3rem" }}
						_hover={{ color: "#7f7e7e" }}>
						<a>Instgram</a>
					</Link>
					<Link
						href="https://twitter.com/ijeoma_Amb?t=OxHLcZZL6VFGMj-_BaKVag&s=09"
						color={"#fff"}
						mb={{ base: "1.5rem", md: "3rem" }}
						_hover={{ color: "#7f7e7e" }}>
						<a>Twitter</a>
					</Link>
				</Box>
				<Box
					display={"flex"}
					alignItems={"center"}
					mr={"2rem"}
					mb={"2rem"}
					m={{ base: "0 auto", md: "0 0" }}>
					<Box mr={".5rem"}>
						<Image src={LocationIcon} alt="Location icon" />
					</Box>
					<Text color={"#ffff"}>Global, Remote</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;
