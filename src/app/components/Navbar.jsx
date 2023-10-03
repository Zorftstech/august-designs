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
} from "@chakra-ui/react";
import { DarkModeSwitch, HamburgerMenu } from "./HamburgerMenu";
import { HydrationProvider } from "react-hydration-provider";

const Navbar = () => (
	<HydrationProvider>
		<Container
			maxW="1321px"
			mt="1rem"
			ml={{ base: "0", md: "1rem" }}
			position={"fixed"}
			zIndex={2}>
			<Box
				display="flex"
				justifyContent="space-between"
				boxShadow="lg"
				p="6"
				rounded="md"
				bgColor="#ffff"
				borderRadius="50px">
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
					href="Augustdesigns18@gmail.com"
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
			<Box>
				<HamburgerMenu />
			</Box>
		</Container>
	</HydrationProvider>
);

export default Navbar;
