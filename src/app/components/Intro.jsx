"use client";

import Image from "next/image";
import AugustImg from "../assets/AugustImg.png";
import {
	Heading,
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
} from "@chakra-ui/react";

const Intro = () => {
	return (
		<Container maxWidth="100%" mt={"6rem"}>
			<Box
				maxW="fit-content"
				display={"flex"}
				flexDir={{ base: "column-reverse", md: "row", sm: "column-reverse" }}>
				<Box mt={"13em"} ml={"3rem"} display={{ base: "none", md: "block" }}>
					<Flex flexDir="column">
						<Heading fontSize="40px">
							Hello, I am
							<span style={{ color: "#ff8762" }}>
								{" "}
								Ambrose Ijeoma <br />
								Augustina,
							</span>{" "}
							a product <br />
							designer (ui/ux).
						</Heading>
						<Text color="#7f7e7e" mt={"1rem"} mb={"1rem"}>
							A versatile and strategic problem solver who combines <br />{" "}
							creativity with a deep understanding of user needs and <br />{" "}
							business objectives.
						</Text>
						<Link
							href="mailto:Augustdesigns18@gmail.com"
							color="#ffff"
							backgroundColor="#ff8762"
							padding={"1rem 3rem"}
							borderRadius="30px"
							maxW="fit-content"
							_hover={{
								border: "solid 1px #ff8762",
								bgColor: "transparent",
								color: "#ff8762",
							}}>
							<a>Get in touch</a>
						</Link>
					</Flex>
				</Box>
				<Box mt={"3rem"} display={{ base: "block", md: "none" }}>
					<Flex flexDir="column">
						<Heading fontSize="24px" textAlign={"center"}>
							Hello, I am
							<span style={{ color: "#ff8762" }}>
								{" "}
								Ambrose <br /> Ijeoma Augustina,
							</span>{" "}
							a <br /> product designer.
						</Heading>
						<Text
							color="#7f7e7e"
							mt={"1rem"}
							mb={"1rem"}
							fontSize={"14.1px"}
							textAlign={"center"}>
							A versatile and strategic problem <br /> solver who combines
							creativity <br />
							with a deep understanding of user <br /> needs and business
							objectives.
						</Text>
						<Link
							href="mailto:"
							color="#ffff"
							backgroundColor="#ff8762"
							padding={".7rem 1rem"}
							m={"0 auto"}
							mt={"1rem"}
							borderRadius="30px"
							maxW="fit-content"
							_hover={{
								border: "solid 1px #ff8762",
								bgColor: "transparent",
								color: "#ff8762",
							}}>
							Get in touch
						</Link>
					</Flex>
				</Box>
				<Box
					display={{ base: "block", md: "none" }}
					width={"80%"}
					m={"0 auto"}
					mt={"4rem"}>
					<Image
						src={AugustImg}
						alt="Image of Ambrose Ijeoma Augustina,"
						width={"100%"}
					/>
				</Box>
				<Box ml={"9rem"} display={{ base: "none", md: "block" }}>
					<Image
						src={AugustImg}
						alt="Image of Ambrose Ijeoma Augustina,"
						width={"100%"}
					/>
				</Box>
			</Box>
		</Container>
	);
};

export default Intro;
