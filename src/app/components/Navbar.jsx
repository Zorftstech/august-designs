"use client";

import {
	Heading,
	Link,
	IconButton,
	Box,
	Container,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	Flex,
	Center,
} from "@chakra-ui/react";
import { DarkModeSwitch, HamburgerMenu } from "./HamburgerMenu";
import { HydrationProvider } from "react-hydration-provider";

const Navbar = () => (
	<HydrationProvider>
		<Container
			display={"flex"}
			justifyContent="space-between"
			alignContent={"Center"}
			maxW={"1321px"}
			W={{ md: "1321px", base: "312px" }}
			height={{ md: "96px", base: "74px" }}
			mt="1.5rem"
			ml={{ base: "auto", md: "1rem" }}
			mr={{ base: "auto", md: "0" }}
			position={"fixed"}
			zIndex={2}
			boxShadow="lg"
			p="6"
			rounded="md"
			bgColor="#ffff"
			borderRadius="50px">
			<Box display="flex" justifyContent="space-between" width={"100%"}>
				<Heading
					color="#ff8762"
					fontSize={{ base: "24px", md: "32px", sm: "24px" }}>
					AIA
				</Heading>
				<Box
					color="#7f7e7e"
					display={{ base: "none", md: "block", sm: "none" }}>
					<Link
						href="/"
						ml="1rem"
						mr="1rem"
						padding=".5rem"
						_hover={{
							borderBottom: "5px solid #ff8762",
							borderBottomRadius: "10px",
						}}>
						<a>Home</a>
					</Link>
					<Link
						href="/about"
						ml="1rem"
						mr="1rem"
						padding=".5rem"
						_hover={{
							borderBottom: "5px solid #ff8762",
							borderBottomRadius: "10px",
						}}>
						<a>About</a>
					</Link>
					<Menu>
						<MenuButton
							ml="1rem"
							mr="1rem"
							padding=".5rem"
							_hover={{
								borderBottom: "5px solid #ff8762",
								borderBottomRadius: "10px",
							}}>
							Projects
						</MenuButton>
						<MenuList
							borderRadius={"30px"}
							p={"2rem 0"}
							pl={"2rem"}
							pr={"6rem"}>
							<MenuItem as="a" href="/projects/mentalHealth">
								Mental health app (case study)
							</MenuItem>
							<MenuItem as="a" href="/projects/finTech">
								Fintech app (case study)
							</MenuItem>
							<MenuItem as="a" href="/projects/ngo">
								NGO Website (case study)
							</MenuItem>
							<MenuItem as="a" href="/projects/food">
								Food app UI
							</MenuItem>
							<MenuItem as="a" href="/projects/dashboard">
								Dashboard UI
							</MenuItem>
							<MenuItem as="a" href="/projects/landingPage">
								Furniture landing page
							</MenuItem>
							<MenuItem as="a" href="/projects/travelAgency">
								Travel agency landing page
							</MenuItem>
							<MenuItem as="a" href="/projects/realEstate">
								Real estate landing page
							</MenuItem>
							<MenuItem as="a" href="/projects/viewAll">
								View All
							</MenuItem>
						</MenuList>
					</Menu>
				</Box>

				<Link
					href="mailto:Augustdesigns18@gmail.com"
					display={{ base: "none", md: "block", sm: "none" }}
					color="#ffff"
					backgroundColor="#ff8762"
					padding={".7rem 3rem"}
					borderRadius="30px"
					_hover={{
						border: "solid 1px #ff8762",
						bgColor: "transparent",
						color: "#ff8762",
					}}>
					Request for my resume
				</Link>
			</Box>
			<Box display={{ base: "block", md: "none" }}>
				<HamburgerMenu />
			</Box>
		</Container>
	</HydrationProvider>
);

export default Navbar;
