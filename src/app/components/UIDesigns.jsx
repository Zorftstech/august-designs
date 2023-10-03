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
					When i feel a little creative, i design simple yet <br /> beautiful
					user interfaces
				</Text>
			</Box>
			<Box display={"flex"}>
				<Box
					bgColor={"rgba(255,135,98,0.05)"}
					width={"820px"}
					height={{ md: "429px", base: "fit-content" }}
					borderRadius={"30px"}
					mt={"10rem"}
					ml={{ md: "4rem", base: "1rem" }}
					mr={{ md: "0", base: "1rem" }}
					p={{ md: "2rem", base: "1rem" }}>
					<Card borderRadius={"30px"} zIndex={"hide"}>
						<Image
							src={FunitureSite}
							alt="Landing page for a furniture company."
						/>
					</Card>
					<Text
						color={"#7f7e7e"}
						textAlign={{ base: "center", md: "" }}
						fontSize={{ md: "20px", base: "14px" }}
						mt={"1rem"}>
						Landing page for a furniture company.
					</Text>
				</Box>
				<Box
					display={{ md: "block", base: "none" }}
					bgColor={"rgba(255,135,98,0.05)"}
					width={"400px"}
					height={"590px"}
					borderRadius={"30px"}
					p={"2rem"}
					ml={"2rem"}>
					<Card
						bgColor={"rgba(255,135,98,0.05)"}
						borderRadius={"30px"}
						zIndex={"hide"}>
						<Image src={RestaurantSite} alt="food app" />
					</Card>
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
				<Box width={"400px"}>
					<Card
						mr={{ md: "0", base: "2rem" }}
						ml={{ md: "0", base: "1rem" }}
						bgColor={"rgba(255,135,98,0.05)"}
						borderRadius={"30px"}
						p={{ md: "2rem", base: "1rem" }}
						zIndex={"hide"}>
						<Image src={TravelSite} alt="travel agency landing page" />
					</Card>
				</Box>
				<Box>
					<Card
						mr={{ md: "0", base: "2rem" }}
						ml={{ md: "0", base: "1rem" }}
						bgColor={"rgba(255,135,98,0.05)"}
						borderRadius={"30px"}
						p={{ md: "2rem", base: "1rem" }}
						zIndex={"hide"}>
						<Image src={RealEstateSite} alt="real estate landing page" />
					</Card>
				</Box>
				<Box display={{ md: "block", base: "none" }}>
					<Card
						bgColor={"rgba(255,135,98,0.05)"}
						borderRadius={"30px"}
						padding={"2rem"}
						zIndex={"hide"}>
						<Image src={Dashboard} alt="Dashboard Ui" />
					</Card>
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
