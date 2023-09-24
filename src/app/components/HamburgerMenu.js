import { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	useColorMode,
	Switch,
	Link,
	Flex,
	Button,
	IconButton,
	Box,
	MenuButton,
	Menu,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const HamburgerMenu = () => {
	const [display, changeDisplay] = useState("none");
	return (
		<Flex>
			<Flex position="fixed" top="1rem" right="1rem" align="center">
				{/* Mobile */}
				<IconButton
					aria-label="Open Menu"
					size="md"
					variant={"ghost"}
					mt={5}
					mr={4}
					icon={<HamburgerIcon />}
					onClick={() => changeDisplay("flex")}
					display={["flex", "flex", "none", "none"]}
				/>
			</Flex>

			{/* Mobile Content */}
			<Flex
				w="100vw"
				display={display}
				bgColor="#ffffff"
				zIndex={20}
				h="100vh"
				pos="fixed"
				top="0"
				left="0"
				// zIndex={20}
				overflowY="auto"
				flexDir="column">
				<Flex justify="flex-end">
					<IconButton
						mt={"5rem"}
						mr={"3rem"}
						aria-label="Open Menu"
						variant={"ghost"}
						size="md"
						icon={<CloseIcon />}
						onClick={() => changeDisplay("none")}
					/>
				</Flex>

				<Flex flexDir="column" width={"fit-content"} ml={"1rem"} mt={"5rem"}>
					<NextLink href="/" passHref>
						<Button
							as="a"
							variant="ghost"
							aria-label="Home"
							my={4}
							w="100%"
							rightIcon={<ChevronRightIcon hmmmIcon ml={"15rem"} />}
							onClick={() => changeDisplay("none")}>
							Home
						</Button>
					</NextLink>

					<NextLink href="/about" passHref>
						<Button
							as="a"
							variant="ghost"
							aria-label="About"
							my={4}
							w="100%"
							rightIcon={<ChevronRightIcon hmmmIcon ml={"13.4rem"} />}
							onClick={() => changeDisplay("none")}>
							About me
						</Button>
					</NextLink>

					<Menu>
						<MenuButton
							as={Button}
							rightIcon={<ChevronRightIcon hmmmIcon ml={"14.5rem"} />}
							variant={"ghost"}
							my={4}
							ml={".5rem"}>
							Projects
						</MenuButton>
						<MenuList fontSize={"14px"}>
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
				</Flex>
				<Link
					href="Augustdesigns18@gmail.com"
					width={"fit-content"}
					mt={"2rem"}
					ml={"3rem"}
					color="#ffff"
					backgroundColor="#ff8762"
					padding={".5rem 2.5rem"}
					borderRadius="30px"
					_hover={{
						border: "solid 1px #ff8762",
						bgColor: "transparent",
						color: "#ff8762",
					}}>
					Request for my resume
				</Link>
			</Flex>
		</Flex>
	);
};
