"use client";
import Image from "next/image";
import GoalIcon from "../assets/Goal.png";

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
	Card,
} from "@chakra-ui/react";

const MyGoals = () => {
	return (
		<Box>
			<Heading
				ml={{ md: "4rem", base: "2rem" }}
				mb={"3rem"}
				fontSize={{ md: "40px", base: "24px" }}
				bgGradient={{
					md: "linear( to-r, #393939, #393939, #393939,#393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762,#ff8762  )",
					base: "linear( to-r,  #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762,  #ff8762, #ff8762,#ff8762  )",
				}}
				bgClip={"text"}
				textAlign={{ md: "center", base: "left" }}>
				My Goals
			</Heading>
			<Box
				display={"flex"}
				flexDir={{ base: "column", md: "row" }}
				alignItems={{ md: "center", base: "flex-start" }}
				ml={{ md: "15rem", base: "1rem" }}>
				<Box
					width={{ md: "fit-content", base: "40%" }}
					mt={{ base: "1rem ", md: "0" }}
					mb={{ base: "3rem ", md: "0" }}
					ml={{ base: "3rem", md: "0" }}>
					<Image src={GoalIcon} alt="Goal icon" />
				</Box>
				<Text
					color={"#7f7e7e"}
					ml={"3rem"}
					display={{ base: "none", md: "block" }}>
					Asides being a certified product designer from a really good <br />{" "}
					design school, google and Udemy, I have goals and targets that <br />{" "}
					involves me growing in the field of design. The design field is <br />{" "}
					constantly evolving, with new tools and techniques emerging <br />{" "}
					regularly. I intend to stay up-to-date with industry trends, attend{" "}
					<br /> workshops, and engage in lifelong learning to refine my skills
					and <br /> stay competitive. I want to be among the best designers in
					the <br /> world this is why growth matters to me.
				</Text>

				{/* Mobile view */}
				<Text
					color={"#7f7e7e"}
					ml={"1rem"}
					display={{ base: "block", md: "none" }}>
					Asides being a certified product <br /> designer from a really good
					design <br /> school, google and Udemy, I have <br /> goals and
					targets that involves me <br /> growing in the field of design. The{" "}
					<br /> design field is constantly evolving, <br /> with new tools and
					techniques <br /> emerging regularly. I intend to stay <br />{" "}
					up-to-date with industry trends, <br /> attend workshops, and engage
					in <br /> lifelong learning to refine my skills <br />
					and stay competitive. I want to be <br /> among the best designers in
					the <br /> world this is why growth matters to <br /> me.
				</Text>
			</Box>
		</Box>
	);
};

export default MyGoals;
