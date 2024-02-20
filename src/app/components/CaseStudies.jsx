"use client";

import Image from "next/image";
import Desktop1 from "../assets/Desktop-1.png";
import Desktop2 from "../assets/Desktop-2.png";
import Desktop3 from "../assets/Desktop-3.png";

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

const CaseStudies = () => {
	return (
		<Box mt={"7rem"}>
			<Heading
				textAlign={"center"}
				bgGradient="linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )"
				bgClip={"text"}
				fontSize={{ base: "24px", md: "40px" }}>
				Case Studies
			</Heading>
			<Text
				mt={".5rem"}
				mb={"4rem"}
				color="#7f7e7e"
				fontSize={{ base: "12px", md: "16px" }}
				textAlign={"center"}>
				Some of my works with a detailed case study
			</Text>
			<Box display={{ md: "block", base: "none" }}>
				<Box
					display={"grid"}
					backgroundColor={"rgba(255,135,98,0.05)"}
					ml={"auto"}
					mr={"auto"}
					pt={"2rem"}
					pb={"2rem"}
					gridTemplateColumns="repeat(3, 1fr)"
					grid-template-rows="repeat(1fr)"
					gridGap={"1rem"}>
					<Link href="/projects/mentalHealth" _hover={"none"}>
						<Card
							width={"400px"}
							ml={"4rem"}
							borderRadius={"30px"}
							pb={"1rem"}
							zIndex={"hide"}>
							<Image
								style={{
									borderTopLeftRadius: "30px",
									borderTopRightRadius: "30px",
								}}
								src={Desktop1}
								alt="Digital health app to manage mental health"
							/>
							<Text color={"#7f7e7e"} fontSize={"16px"} ml={"1rem"} mt={"1rem"}>
								Digital health app to manage <br /> mental health
							</Text>
						</Card>
					</Link>
					<Link href="/projects/finTech" _hover={"none"}>
						<Card
							width={"400px"}
							borderRadius={"30px"}
							pb={"1rem"}
							zIndex={"hide"}>
							<Image
								style={{
									borderTopLeftRadius: "30px",
									borderTopRightRadius: "30px",
								}}
								src={Desktop2}
								alt="A fintech saving and investment mobile app"
							/>
							<Text color={"#7f7e7e"} fontSize={"16px"} ml={"1rem"} mt={"1rem"}>
								A fintech saving and investment <br /> mobile app
							</Text>
						</Card>
					</Link>
					<Link href="/projects/ngo" _hover={"none"}>
						<Card
							width={"400px"}
							mr={"5.5rem"}
							borderRadius={"30px"}
							pb={"1rem"}
							zIndex={"hide"}>
							<Image
								style={{
									borderTopLeftRadius: "30px",
									borderTopRightRadius: "30px",
								}}
								src={Desktop3}
								alt="A non-profit full website that helps
							connect donors to NGO’s"
							/>
							<Text color={"#7f7e7e"} fontSize={"16px"} ml={"1rem"} mt={"1rem"}>
								A non-profit full website that helps <br />
								connect donors to NGO’s
							</Text>
						</Card>
					</Link>
				</Box>
			</Box>

			{/* Mobile view */}

			<Box display={{ base: "block", md: "none" }}>
				<Box display={"flex"} flexDir={"column"} m={"0 .5rem"}>
					<Card
						minWidth={"314px"}
						minHeight={"520px"}
						borderRadius={"30px"}
						pb={"1rem"}
						backgroundColor={"rgba(255,135,98,0.05)"}>
						<Image
							style={{
								borderTopLeftRadius: "30px",
								borderTopRightRadius: "30px",
							}}
							src={Desktop1}
							alt="Digital health app to manage mental health"
						/>
						<Heading
							textAlign={"left"}
							color={"black"}
							fontSize={"18px"}
							ml={"1rem"}
							mt={".5rem"}
							mb={"1rem"}>
							Digital health app to manage mental health
						</Heading>
						<Text fontSize={"14px"} ml={"1rem"}>
							Wellness app helps connect people in remote areas to affordable
							and accessible mental health care.
						</Text>
						<Link
							href="/projects/mentalHealth"
							color="#ffff"
							backgroundColor="#ff8762"
							padding={".7rem 1rem"}
							m={"0 1rem"}
							mt={"3rem"}
							borderRadius="30px"
							maxW="fit-content"
							_hover={{
								border: "solid 1px #ff8762",
								bgColor: "transparent",
								color: "#ff8762",
							}}>
							Read case study
						</Link>
					</Card>

					<Card
						m={"3rem 0"}
						minWidth={"314px"}
						minHeight={"544px"}
						borderRadius={"30px"}
						pb={"1rem"}
						backgroundColor={"rgba(255,135,98,0.05)"}>
						<Image
							style={{
								borderTopLeftRadius: "30px",
								borderTopRightRadius: "30px",
							}}
							src={Desktop2}
							alt="A fintech saving and investment mobile app"
						/>
						<Heading
							textAlign={"left"}
							color={"black"}
							fontSize={"18px"}
							ml={"1rem"}
							mt={".5rem"}
							mb={"1rem"}>
							A fintech saving and investment mobile app
						</Heading>
						<Text fontSize={"14px"} ml={"1rem"}>
							Beta saver is an easy-to-use fintech app that makes it easy for
							college student to save in different currencies, invest and build
							their future without feeling stuck.
						</Text>
						<Link
							href="/projects/finTech"
							color="#ffff"
							backgroundColor="#ff8762"
							padding={".7rem 1rem"}
							m={"0 1rem"}
							mt={"3rem"}
							borderRadius="30px"
							maxW="fit-content"
							_hover={{
								border: "solid 1px #ff8762",
								bgColor: "transparent",
								color: "#ff8762",
							}}>
							Read case study
						</Link>
					</Card>

					<Card
						minWidth={"314px"}
						minHeight={"514px"}
						backgroundColor={"rgba(255,135,98,0.05)"}
						borderRadius={"30px"}
						pb={"1rem"}>
						<Image
							style={{
								borderTopLeftRadius: "30px",
								borderTopRightRadius: "30px",
							}}
							src={Desktop3}
							alt="A non-profit full website that helps
						connect donors to NGO’s"
						/>
						<Heading
							textAlign={"left"}
							color={"black"}
							fontSize={"18px"}
							ml={"1rem"}
							mt={".5rem"}
							mb={"1rem"}>
							A non-profit full website that helps connect donors to NGO’s
						</Heading>
						<Text fontSize={"14px"} ml={"1rem"}>
							Connect helps individuals, industries and humanitarians gain easy
							access to non-profits that suits their interest
						</Text>
						<Link
							href="/projects/ngo"
							color="#ffff"
							backgroundColor="#ff8762"
							padding={".7rem 1rem"}
							m={"0 1rem"}
							mt={"3rem"}
							borderRadius="30px"
							maxW="fit-content"
							_hover={{
								border: "solid 1px #ff8762",
								bgColor: "transparent",
								color: "#ff8762",
							}}>
							Read case study
						</Link>
					</Card>
				</Box>
			</Box>
		</Box>
	);
};

export default CaseStudies;
