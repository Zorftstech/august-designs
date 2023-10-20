"use client";

import Image from "next/image";
import AugustImg from "../assets/AugustImg.png";
import AugustImgs from "../assets/augustImgs.png";
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
import Notification from "./Notification";

const Intro = () => {
	return (
		<Box>
			<Box mt={"10rem"} mb={"30rem"} display={{ base: "block", md: "none" }}>
				<Notification />
			</Box>
			<Box display={{ md: "block", base: "none" }}>
				<Box
					maxWidth="100%"
					display={"Flex"}
					justifyContent={"center"}
					mt={{ md: "5rem", base: "3rem" }}>
					<Box maxW="fit-content" display={"flex"} flexDir={"row"}>
						<Box mt={"13em"} display={{ base: "none", md: "block" }}>
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
						<Box mt={"1rem"} display={{ base: "block", md: "none" }}>
							<Flex flexDir="column">
								<Box mb={"3rem"}>
									<Image
										src={AugustImgs}
										alt="Image of Ambrose Ijeoma Augustina,"
									/>
								</Box>
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
						<Box ml={"5rem"} display={{ base: "none", md: "block" }}>
							<Image
								src={AugustImg}
								alt="Image of Ambrose Ijeoma Augustina,"
								width={"100%"}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Intro;
