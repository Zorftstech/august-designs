"use client";
import Image from "next/image";

import FunitureSite from "../assets/FunitureSite.png";
import RestaurantSite from "../assets/RestaurantSite.png";
import TravelSite from "../assets/TravelSite.png";
import RealEstateSite from "../assets/RealEstateSite.png";
import Dashboard from "../assets/Dashboard.png";

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

const UiDesigns = () => {
	return (
		<Box mt={"5rem"}>
			{/* desktop view */}
			<Box
				ml={{ md: "7rem", base: "2rem" }}
				position={"absolute"}
				zIndex={"hide"}>
				<Heading
					mt={"rem"}
					ml={{ md: "3rem", base: "0" }}
					mb={".5rem"}
					fontSize={{ md: "40px", base: "24px" }}
					bgGradient={{
						md: "linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )",
						base: "linear( to-r, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762,#ff8762,#ff8762  )",
					}}
					bgClip={"text"}>
					UI Designs
				</Heading>
				<Text
					color={"#7f7e7e"}
					fontSize={"20px"}
					display={{ base: "none", md: "block" }}>
					When i feel a little creative, i design simple <br /> yet beautiful
					user interfaces
				</Text>

				{/* Mobile view */}
				<Text
					color={"#7f7e7e"}
					fontSize={"14px"}
					mt={"1rem"}
					display={{ base: "block", md: "none" }}>
					When i feel a little creative, i design simple yet beautiful user
					interfaces
				</Text>
			</Box>
			<Box display={"flex"}>
				<Box
					bgColor={"rgba(255,135,98,0.05)"}
					width={{ md: "820px", base: "310px" }}
					height={{ md: "429px", base: "fit-content" }}
					borderRadius={"30px"}
					mt={"10rem"}
					ml={{ md: "4rem", base: "auto" }}
					mr={{ md: "0", base: "auto" }}
					p={{ md: "2rem", base: "1rem" }}>
					<Box borderRadius={"30px"} zIndex={"hide"}>
						<Link href="/projects/landingPage" _hover={"none"}>
							<Box width={"100%"}>
								<Image
									style={{ borderRadius: "30px" }}
									src={FunitureSite}
									alt="Landing page for a furniture company."
								/>
							</Box>
						</Link>
					</Box>
				</Box>
				<Box
					display={{ md: "block", base: "none" }}
					bgColor={"rgba(255,135,98,0.05)"}
					width={"400px"}
					height={"590px"}
					borderRadius={"30px"}
					p={"2rem"}
					ml={"2rem"}>
					<Link href="/projects/food" _hover={"none"}>
						<Box
							bgColor={"rgba(255,135,98,0.05)"}
							borderRadius={"30px"}
							zIndex={"hide"}>
							<Image
								style={{ borderRadius: "30px" }}
								src={RestaurantSite}
								alt="food app"
							/>
						</Box>
					</Link>
				</Box>
			</Box>
			<Box
				display={"grid"}
				mt={{ md: "2rem", base: "1rem" }}
				ml={{ md: "4.5rem", base: "rem" }}
				mr={{ md: "2rem", base: "rem" }}
				gridTemplateColumns={{ md: "repeat(3, 1fr)", base: "repeat(1fr)" }}
				grid-template-rows={{ md: "repeat(1fr)", base: "none" }}
				gridGap={"1rem"}>
				<Box>
					<Box
						width={{ base: "310px", md: "400px" }}
						mr={{ md: "0", base: "auto" }}
						ml={{ md: "0", base: "auto" }}
						bgColor={"rgba(255,135,98,0.05)"}
						borderRadius={"30px"}
						p={{ md: "2rem", base: "1rem" }}
						zIndex={"hide"}>
						<Link href="/projects/travelAgency" _hover={"none"}>
							<Box>
								<Image
									style={{ borderRadius: "30px" }}
									src={TravelSite}
									alt="travel agency landing page"
								/>
							</Box>
						</Link>
					</Box>
				</Box>
				<Box>
					<Box
						width={{ base: "310px", md: "400px" }}
						mr={{ md: "0", base: "auto" }}
						ml={{ md: "0", base: "auto" }}
						bgColor={"rgba(255,135,98,0.05)"}
						borderRadius={"30px"}
						p={{ md: "2rem", base: "1rem" }}
						zIndex={"hide"}>
						<Link href="/projects/realEstate" _hover={"none"}>
							<Image
								style={{ borderRadius: "30px" }}
								src={RealEstateSite}
								alt="real estate landing page"
							/>
						</Link>
					</Box>
				</Box>
				<Box display={{ md: "block", base: "none" }}>
					<Box
						bgColor={"rgba(255,135,98,0.05)"}
						borderRadius={"30px"}
						padding={"2rem"}
						zIndex={"hide"}>
						<Link href="/projects/dashboard" _hover={"none"}>
							<Image
								style={{ borderRadius: "30px" }}
								src={Dashboard}
								alt="Dashboard Ui"
							/>
						</Link>
					</Box>
				</Box>
			</Box>
			<Box textAlign={"center"} mt={{ md: "4rem", base: "2rem" }}>
				<Link
					href="/projects/viewAll"
					padding={{ md: "1rem 3rem", base: "1rem 2rem" }}
					borderRadius={"30px"}
					border={"solid 1px #ff8762"}
					bgColor={"transparent"}
					color={"#ff8762"}
					_hover={{ bgColor: "#ff8762", color: "#ffff" }}>
					<a>View more</a>
				</Link>
			</Box>
		</Box>
	);
};

export default UiDesigns;
