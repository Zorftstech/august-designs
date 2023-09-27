"use client";

import Image from "next/image";

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

const DesignProcess = () => {
	return (
		<Box mt={"7rem"}>
			<Heading
				textAlign={"center"}
				fontSize={{ md: "48px", base: "24px" }}
				bgGradient="linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )"
				bgClip={"text"}>
				My Design Process
			</Heading>
			<Box
				mt={{ md: "3rem", base: "1rem" }}
				ml={{ md: "4rem", base: "2rem" }}
				display={"grid"}
				gridTemplateColumns={{ md: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
				grid-template-rows={{ md: "repeat(2, 1fr)", base: "0" }}
				gridGap={{ md: "5rem", base: "0" }}>
				<Box display={"flex"} mb={{ md: "0", base: "1rem" }}>
					<Box>
						<Heading
							fontSize={{ md: "40px", base: "16px" }}
							color={"#fff"}
							bgColor={"#ff8762"}
							width={"fit-content"}
							p={{ md: " 1.5rem 2.0rem", base: "1rem 1rem" }}
							mr={{ md: "2.5rem", base: "1.5rem" }}
							borderRadius={"100%"}>
							01
						</Heading>
					</Box>
					<Box mt={{ md: "1.5rem", base: ".5rem" }}>
						<Heading
							fontSize={{ md: "32px", base: "20px" }}
							mb={{ md: "1rem", base: ".5rem" }}>
							Understand
						</Heading>
						<Text
							color={"#7f7e7e"}
							fontSize={"16px"}
							display={{ md: "block", base: "none" }}>
							This is the first stage of my design process <br /> where I pay
							attention to the <br /> business requirements, goals and deadlines
							and how I <br /> am going to work effectively with cross <br />{" "}
							functional teams such as product managers, <br /> engineers,
							marketers etc, in other to deliver <br /> quality designs.
						</Text>

						{/* mobile view */}
						<Text
							color={"#7f7e7e"}
							fontSize={"14px"}
							display={{ md: "none", base: "block" }}>
							This is the first stage of my design
							<br /> process where I pay attention to <br /> the business
							requirements, goals
							<br /> and deadlines and how I am going <br /> to work effectively
							with cross <br /> functional teams such as product <br />
							managers, engineers, marketers
							<br /> etc, in other to deliver quality
							<br /> designs.
						</Text>
					</Box>
				</Box>

				<Box display={"flex"} mb={{ md: "0", base: "1rem" }}>
					<Box>
						<Heading
							fontSize={{ md: "40px", base: "16px" }}
							color={"#fff"}
							bgColor={"#ff8762"}
							width={"fit-content"}
							p={{ md: " 1.5rem 2.0rem", base: "1rem 1rem" }}
							mr={{ md: "2.5rem", base: "1.5rem" }}
							borderRadius={"100%"}>
							02
						</Heading>
					</Box>
					<Box mt={{ md: "1.5rem", base: ".5rem" }}>
						<Heading
							fontSize={{ md: "32px", base: "20px" }}
							mb={{ md: "1rem", base: ".5rem" }}>
							User Research
						</Heading>
						<Text
							color={"#7f7e7e"}
							fontSize={"16px"}
							display={{ md: "block", base: "none" }}>
							This is the most important aspect of my <br /> design process. A
							comprehensive user <br /> research enables me to understand the
							user <br />
							needs through user stories and personas and <br /> also understand
							my competitors weakness <br /> thereby making it the products
							strength.
						</Text>

						{/* mobile view */}
						<Text
							color={"#7f7e7e"}
							fontSize={"14px"}
							display={{ md: "none", base: "block" }}>
							This is the most important aspect
							<br /> of my design process. A<br /> comprehensive user research
							<br /> enables me to understand the user <br />
							needs through user stories and <br /> personas and also understand
							my <br /> competitors weakness thereby <br /> making it the
							products strength.
						</Text>
					</Box>
				</Box>

				<Box display={"flex"} mb={{ md: "0", base: "1rem" }}>
					<Box>
						<Heading
							fontSize={{ md: "40px", base: "16px" }}
							color={"#fff"}
							bgColor={"#ff8762"}
							width={"fit-content"}
							p={{ md: " 1.5rem 2.0rem", base: "1rem 1rem" }}
							mr={{ md: "2.5rem", base: "1.5rem" }}
							borderRadius={"100%"}>
							03
						</Heading>
					</Box>
					<Box mt={{ md: "1.5rem", base: ".5rem" }}>
						<Heading
							fontSize={{ md: "32px", base: "20px" }}
							mb={{ md: "1rem", base: ".5rem" }}>
							Design
						</Heading>
						<Text
							color={"#7f7e7e"}
							fontSize={"16px"}
							display={{ base: "none", md: "block" }}>
							At this stage, I can finally create a sketched <br /> design from
							the research that was <br /> conducted and the business
							requirement. i <br /> then proceed to wireframes, present it to
							the <br /> stakeholders and analyze if it suits their <br /> needs
							before the high fidelity designs are <br /> created.
						</Text>

						{/* mobile view */}
						<Text
							color={"#7f7e7e"}
							fontSize={"14px"}
							display={{ base: "block", md: "none" }}>
							At this stage, I can finally create <br /> a sketched design from
							the research <br /> that was conducted and the <br /> business
							requirement. i then
							<br /> proceed to wireframes, present it
							<br /> to the stakeholders and analyze it <br /> for sign offs
							before high fidelity <br /> designs are created
						</Text>
					</Box>
				</Box>

				<Box display={"flex"} mb={{ md: "0", base: "1rem" }}>
					<Box>
						<Heading
							fontSize={{ md: "40px", base: "16px" }}
							color={"#fff"}
							bgColor={"#ff8762"}
							width={"fit-content"}
							p={{ md: " 1.5rem 2.0rem", base: "1rem 1rem" }}
							mr={{ md: "2.5rem", base: "1.5rem" }}
							borderRadius={"100%"}>
							04
						</Heading>
					</Box>
					<Box mt={{ md: "1.5rem", base: ".5rem" }}>
						<Heading
							fontSize={{ md: "32px", base: "20px" }}
							mb={{ md: "1rem", base: ".5rem" }}>
							Prototype/Testing
						</Heading>
						<Text
							color={"#7f7e7e"}
							fontSize={"16px"}
							display={{ base: "none", md: "block" }}>
							I focus on how the user will interact with the <br /> product by
							presenting it to stakeholders <br /> using a prototype software
							and also carrying <br /> out it’s usability test. Mockups are also{" "}
							<br />
							created at this phase while its being handed <br /> over to the
							development team. I do follow up <br /> with the development team
							to ensure that <br /> the designs made were accurately <br />{" "}
							developed.
						</Text>

						{/* mobile view */}

						<Text
							color={"#7f7e7e"}
							fontSize={"14px"}
							display={{ base: "block", md: "none" }}>
							I focus on how the user will <br /> interact with the product by
							<br />
							presenting it to users and <br /> stakeholders using a prototype{" "}
							<br /> software and also carrying out it’s
							<br /> usability test. Mockups are also <br />
							created at this phase while its <br /> being handed over to <br />
							the development team. I do follow <br /> up with the development
							team to <br /> ensure that the designs made
							<br /> were accurately developed.
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default DesignProcess;
