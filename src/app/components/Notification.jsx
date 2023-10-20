"use client";
import Image from "next/image";
import closeIcon from "../assets/closeIcon.png";

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
	Checkbox,
} from "@chakra-ui/react";

const Notification = () => {
	return (
		<Box>
			<Box display={"flex"} justifyContent={"flex-end"} mr={"1rem"}>
				<Link>
					<Image src={closeIcon} />
				</Link>
			</Box>
			<Heading
				mt={"3rem"}
				textAlign={"center"}
				color={"#4a4a4a"}
				fontSize={"20px"}>
				Hey Recruiter!
			</Heading>
			<Text mt={"2rem"} textAlign={"center"} p={"0 2.5rem"} color={"#4a4a4a"}>
				The mobile view for this website is still undergoing development, it’s
				best viewed on desktop for a better experience
			</Text>
			<Checkbox ml={"2.5rem"} mt={"2rem"} color={"#4a4a4a"}>
				I understand
			</Checkbox>
			<Box mt={"4rem"} textAlign={"center"}>
				<Link
					href="/popUp"
					color="#ffff"
					backgroundColor="#ff8762"
					padding={".7rem 3rem"}
					borderRadius="30px"
					_hover={{
						border: "solid 1px #ff8762",
						bgColor: "transparent",
						color: "#ff8762",
					}}>
					Continue veiwing
				</Link>
			</Box>
		</Box>
	);
};

export default Notification;
