"use client";

import Image from "next/image";
import Ellipse from "../assets/Ellipse.png";
import Ellipses from "../assets/Ellipses.png";

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
} from "@chakra-ui/react";

const MySkills = () => {
	return (
		<Box
			mt={{ md: "5rem", base: "3rem" }}
			ml={{ md: "4rem", base: "1rem" }}
			mr={{ md: "0rem", base: "0" }}>
			<Heading
				ml={{ md: "10rem", base: "0" }}
				textAlign={{ md: "left", base: "center" }}
				mb={{ md: "4rem", base: "2rem" }}
				fontSize={{ md: "40px", base: "24px" }}
				bgGradient={{
					md: "linear( to-r, #393939, #ff8762, #ff8762, #ff8762, #ff8762, #ff8762  )",
					base: "linear( to-r, #393939,#393939,#393939, #ff8762, #ff8762, #ff8762  )",
				}}
				bgClip={"text"}>
				My Skills
			</Heading>
			<Box
				display={"grid"}
				gridTemplateColumns={{ md: "repeat(4, 1fr)", base: "repeat(2, 1fr)" }}
				grid-template-rows="repeat(3, 1fr)"
				gridGap={{ md: "4rem 5rem", base: ".5rem 1rem" }}>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Creative
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Story Telling
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Problem Solving
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						User Research
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Empathetic
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Innovative
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Sketching
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Attention to detail
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Visualization
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Communicative
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Collaborator
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Strategic Thinker
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Analytical
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Design thinking
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Project management
					</Text>
				</Box>
				<Box display={"flex"} alignItems={"center"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={Ellipse} alt="Ellipse" />
					</Box>
					<Box display={{ md: "none", base: "block" }}>
						<Image src={Ellipses} alt="Ellipse" />
					</Box>
					<Text
						ml={{ md: "1rem", base: ".5rem" }}
						color={"#7f7e7e"}
						fontSize={{ md: "20px", base: "14px" }}>
						Giving feedback
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default MySkills;
