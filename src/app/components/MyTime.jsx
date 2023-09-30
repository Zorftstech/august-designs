"use client";
import Image from "next/image";
import NeedyImg from "../assets/Needy.png";
import CulinaryImg from "../assets/Culinary.png";
import PublicImg from "../assets/Public.png";

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

const MyTime = () => {
	return (
		<Box mt={{ md: "10rem", base: "5rem" }}>
			<Heading
				display={{ md: "block", base: "none" }}
				textAlign={"center"}
				fontSize={"40px"}
				mb={"7rem"}
				bgGradient="linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )"
				bgClip={"text"}>
				When I am not designing, this is what I <br /> spend my time doing.
			</Heading>

			{/* Mobile view */}

			<Heading
				display={{ md: "none", base: "block" }}
				textAlign={"center"}
				fontSize={"24px"}
				mb={"3rem"}
				bgGradient="linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b, #ff8762, #ff8762  )"
				bgClip={"text"}>
				When I am not <br /> designing, this is what I <br /> spend my time
				doing.
			</Heading>

			<Box
				position={"relative"}
				mb={"50rem"}
				zIndex={"hide"}
				display={{ base: "none", md: "block" }}>
				<Box display={"flex"} justifyContent={"space-between"}>
					<Card
						width={"fit-content"}
						p={"0 1.5rem"}
						pt={"1.5rem"}
						pb={"2.5rem"}
						bgColor={"#f9eae6"}
						borderRadius={"30px"}
						position={"absolute"}
						left={"3.5rem"}>
<<<<<<< HEAD
						<Image src={NeedyImg} alt="Helping the needy" />
=======
						<Image src={NeedyImg} />
>>>>>>> 008e8a76e9f767f739c93d768c9dfb3839952bab
						<Heading fontSize={"32px"} textAlign={"center"} mt={"1rem"}>
							Helping the needy
						</Heading>
					</Card>
					<Card
						width={"fit-content"}
						p={"0 1.5rem"}
						pt={"1.5rem"}
						pb={"2.5rem"}
						bgColor={"#f9eae6"}
						borderRadius={"30px"}
						position={"absolute"}
						top={"6rem"}
						left={"29.6rem"}>
<<<<<<< HEAD
						<Image src={CulinaryImg} alt="Culinary adventures" />
=======
						<Image src={CulinaryImg} />
>>>>>>> 008e8a76e9f767f739c93d768c9dfb3839952bab
						<Heading fontSize={"32px"} textAlign={"center"} mt={"1rem"}>
							Culinary adventures
						</Heading>
					</Card>
					<Card
						width={"fit-content"}
						p={"0 1.5rem"}
						pt={"1.5rem"}
						pb={"2.5rem"}
						bgColor={"#f9eae6"}
						borderRadius={"30px"}
						position={"absolute"}
						right={"3.5rem"}>
<<<<<<< HEAD
						<Image src={PublicImg} alt="Public speaking" />
=======
						<Image src={PublicImg} />
>>>>>>> 008e8a76e9f767f739c93d768c9dfb3839952bab
						<Heading fontSize={"32px"} textAlign={"center"} mt={"1rem"}>
							Public speaking
						</Heading>
					</Card>
				</Box>
			</Box>

			{/* Mobile view */}

			<Box zIndex={"hide"} display={{ base: "block", md: "none" }} m={"0 2rem"}>
				<Box
					display={"flex"}
					flexDir={"column"}
					justifyContent={"space-between"}>
					<Card
						width={"fit-content"}
						p={"1rem 1rem"}
						bgColor={"#f9eae6"}
						borderRadius={"30px"}>
<<<<<<< HEAD
						<Image src={NeedyImg} alt="Helping the needy" />
=======
						<Image src={NeedyImg} />
>>>>>>> 008e8a76e9f767f739c93d768c9dfb3839952bab
						<Heading fontSize={"20px"} textAlign={"center"} mt={"1rem"}>
							Helping the needy
						</Heading>
					</Card>
					<Card
						width={"fit-content"}
						p={"1rem 1rem"}
						m={"2rem 0"}
						bgColor={"#f9eae6"}
						borderRadius={"30px"}>
<<<<<<< HEAD
						<Image src={CulinaryImg} alt="Culinary adventures" />
=======
						<Image src={CulinaryImg} />
>>>>>>> 008e8a76e9f767f739c93d768c9dfb3839952bab
						<Heading fontSize={"20px"} textAlign={"center"} mt={"1rem"}>
							Culinary adventures
						</Heading>
					</Card>
					<Card
						width={"fit-content"}
						p={"1rem 1rem"}
						bgColor={"#f9eae6"}
						borderRadius={"30px"}>
<<<<<<< HEAD
						<Image src={PublicImg} alt="Public speaking" />
=======
						<Image src={PublicImg} />
>>>>>>> 008e8a76e9f767f739c93d768c9dfb3839952bab
						<Heading fontSize={"20px"} textAlign={"center"} mt={"1rem"}>
							Public speaking
						</Heading>
					</Card>
				</Box>
			</Box>
		</Box>
	);
};

export default MyTime;
