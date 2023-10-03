"use client";

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
	Container,
	Center,
	grid,
} from "@chakra-ui/react";
import { HydrationProvider } from "react-hydration-provider";

const ContactMe = () => {
	return (
		<HydrationProvider>
			<Box
				display={"flex"}
				flexDir={{ md: "row", base: "column" }}
				alignItems={{ md: "center", base: "flex-start" }}
				justifyContent={"space-between"}
				bgColor={"#fff5f2"}
				mt={{ md: "8.1rem", base: "3rem" }}
				mb={{ md: "10rem", base: "3rem" }}
				ml={{ base: "0", md: "5.5rem" }}
				mr={{ base: "0", md: "5.5rem" }}
				pb={"2rem"}>
				<Box ml={{ md: "5rem", base: "2rem" }} mt={"2rem"}>
					<Heading fontSize={{ md: "47px", base: "20px" }}>
						Let’s work together <br /> as a team.
					</Heading>
					<Text
						color={"#7f7e7e"}
						fontSize={"14px"}
						mt={"2rem"}
						display={{ base: "none", md: "block" }}>
						Offer me the chance at your company or as a freelance agent and lets{" "}
						<br />
						put creativity together to create products that solves problems and{" "}
						<br />
						generates revenue...
					</Text>

					{/* Mobile view */}
					<Text
						color={"#7f7e7e"}
						fontSize={"14px"}
						mt={"1rem"}
						display={{ base: "block", md: "none" }}>
						Offer me the chance at your company <br /> or as a freelance agent
						and lets <br /> put creativity together to create products <br />{" "}
						that solves problems and generates <br /> revenue..
					</Text>
				</Box>
				<Link
					href="Augustdesigns18@gmail.com"
					mt={{ md: "0", base: "1rem" }}
					mr={{ md: "7rem", base: "0" }}
					ml={{ md: "0", base: "2rem" }}
					color="#ffff"
					backgroundColor="#ff8762"
					padding={{ md: "1rem 3rem", base: "1rem 1.5rem" }}
					borderRadius="30px"
					_hover={{
						border: "solid 1px #ff8762",
						bgColor: "transparent",
						color: "#ff8762",
					}}>
					<a>Contact Me</a>
				</Link>
			</Box>
		</HydrationProvider>
	);
};

export default ContactMe;
