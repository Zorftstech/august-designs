"use client";

import Image from "next/image";

import landingPage1 from "../assets/landing-page1.png";
import landingPage2 from "../assets/landing-page2.png";
import smilebox from "../assets/smilebox.png";
import zynta from "../assets/zynta.png";
import fashionu from "../assets/fashionu.png";

import smile from "../assets/smile.png";
import landing from "../assets/landing.png";

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

const OtherDesigns = () => {
	return (
		<Box mt={"5rem"} display={{ base: "block", md: "none" }}>
			<Heading
				textAlign={"center"}
				bgGradient="linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )"
				bgClip={"text"}
				fontSize={{ md: "40px", base: "24px" }}>
				Other Designs
			</Heading>

			<Box display={{ md: "block", base: "none" }}>
				<Box display={"flex"} justifyContent={"Center"} mt={"3rem"}>
					<Box
						position={"relative"}
						width={"610px"}
						pt={"7rem"}
						pb={"5rem"}
						pl={"3rem"}
						borderRadius={"50px"}
						bgColor={"rgb(233,173,75,0.15)"}>
						<Link href="/projects/fashion" _hover={"none"}>
							<Flex flexDir={"column"} justifyContent={"center"}>
								<Heading fontSize={"40px"} color={"#515151"}>
									Website <br /> design for a <br /> fashion <br /> brand.
								</Heading>
								<Box position={"absolute"} right={"1rem"} mt={"3.8rem"}>
									<Image src={landingPage1} alt="landing page 1" />
								</Box>
								<Box mt={"2.7rem"} ml={"3.8rem"}>
									<Image src={landingPage2} alt="landing page 2" />
								</Box>
							</Flex>
						</Link>
					</Box>

					<Box display={"grid"} gridGap={"1rem"} ml={"1rem"}>
						<Box
							display={"flex"}
							flexDir={"column"}
							width={"610px"}
							bgColor={"rgb(232,232,234,1)"}
							borderRadius={"50px"}>
							<Link href="/projects/smilebox" _hover={"none"}>
								<Flex flexDir={"column"} ml={"3rem"} mt={"3rem"}>
									<Image
										style={{
											borderRadius: "30px",
											marginLeft: "auto",
											marginRight: "auto",
										}}
										src={smilebox}
										alt="website for Brand Identity design"
									/>
									<Heading
										fontSize={"35px"}
										ml={"auto"}
										mr={"auto"}
										mt={"1.5rem"}
										color={"#515151"}>
										Brand Identity design
									</Heading>
								</Flex>
							</Link>
						</Box>

						<Box
							display={"flex"}
							flexDir={"column"}
							p={"2rem"}
							width={"610px"}
							bgColor={"rgb(58,220,48,0.1)"}
							borderRadius={"50px"}>
							<Link href="/projects/zynta" _hover={"none"}>
								<Flex flexDir={"column"} ml={"1rem"} mt={"1rem"}>
									<Image
										style={{
											borderRadius: "30px",
											marginLeft: "auto",
											marginRight: "auto",
										}}
										src={zynta}
										alt="Non-profit website."
									/>
									<Heading
										fontSize={"35px"}
										color={"#515151"}
										mt={"1.5rem"}
										ml={"auto"}
										mr={"auto"}>
										Logo Design
									</Heading>
								</Flex>
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box display={{ base: "block", md: "none" }} mt={"2rem"}>
				{/* <Box
					ml={"1.5rem"}
					minWidth={"226px"}
					maxWidth={"300px"}
					height={"363px"}
					borderRadius={"50px"}
					bgColor={"rgb(233,173,75,0.15)"}>
					<Link href="/projects/fashion" _hover={"none"}>
						<Flex flexDir={"column"} justifyContent={"center"}>
							<Box
								mt={"rem"}
								width={"220px"}
								position={"absolute"}
								top={"1rem"}
								left={"4.5rem"}>
								<Image src={fashionu} alt="fashion" />
							</Box>
							<Heading
								position={"absolute"}
								bottom={"3rem"}
								left={"4.7rem"}
								fontSize={"20px"}
								textAlign={"center"}
								color={"#515151"}
								mt={"rem"}>
								Website design <br /> for a fashion <br /> brand.
							</Heading>
						</Flex>
					</Link>
				</Box> */}

				<Card
					display={"flex"}
					maxWidth={"314px"}
					height={"384px"}
					bgColor={"rgba(255,135,98,0.05)"}
					borderRadius={"30px"}
					m={"0 auto"}
					mb={"3rem"}>
					<Link href="/projects/landingPage" _hover={"none"}>
						<Flex flexDir={"column"}>
							<Image
								style={{ borderRadius: "30px" }}
								src={landing}
								alt="website for Brand Identity design"
							/>
						</Flex>
						<Heading
							ml={"1.5rem"}
							fontSize={"20px"}
							mt={"1rem"}
							color={"#515151"}>
							Landing page for a real estate company.
						</Heading>
					</Link>
				</Card>

				<Card
					display={"flex"}
					maxWidth={"314px"}
					height={"384px"}
					bgColor={"rgba(255,135,98,0.05)"}
					borderRadius={"30px"}
					m={"0 auto"}>
					<Link href="/projects/smilebox" _hover={"none"}>
						<Flex flexDir={"column"}>
							<Image
								style={{ borderRadius: "30px" }}
								src={smile}
								alt="website for Brand Identity design"
							/>
						</Flex>
						<Heading
							ml={"1.5rem"}
							fontSize={"20px"}
							mt={"1rem"}
							color={"#515151"}>
							Brand Identity design for a small business
						</Heading>
					</Link>
				</Card>

				{/* <Box
					display={"flex"}
					flexDir={"column"}
					minWidth={"216px"}
					maxWidth={"300px"}
					height={"363px"}
					bgColor={"rgb(232,232,234,1)"}
					borderRadius={"50px"}>
					<Link href="/projects/zynta" _hover={"none"}>
						<Flex flexDir={"column"} ml={".7rem"} mt={"3rem"}>
							<Box width={"193px"} ml={"auto"} mr={"auto"} height={"177px"}>
								<Image
									style={{ borderRadius: "30px" }}
									src={zynta}
									alt="website for Brand Identity design"
								/>
							</Box>
							<Heading fontSize={"20px"} mt={"1rem"} color={"#515151"}>
								Logo Design
							</Heading>
						</Flex>
					</Link>
				</Box> */}
			</Box>
		</Box>
	);
};

export default OtherDesigns;
