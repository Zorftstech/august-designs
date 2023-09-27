"use client";

import Image from "next/image";
import spiralIcon from "../assets/spiral.png";
import SaasSite from "../assets/SaasSite.png";
import fashionSite from "../assets/fashionSite.png";
import NonprofitSite from "../assets/NonprofitSite.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

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

const LiveWebsites = () => {
	return (
		<Box mt={"5rem"}>
			<Box display={"flex"} alignItems={"Center"} justifyContent={"center"}>
				<Heading
					bgGradient="linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )"
					bgClip={"text"}
					fontSize={{ md: "40px", base: "24px" }}>
					Live Websites
				</Heading>
				<Box
					width={"fit-content"}
					ml={"1rem"}
					bgColor={"#ff8762"}
					p={{ md: ".5rem 2rem", base: "1rem 1.5rem " }}
					borderRadius={"30px"}>
					<Box display={{ md: "block", base: "none" }}>
						<Image src={spiralIcon} />
					</Box>
					<Box
						display={{ md: "none", base: "block" }}
						width={"20.91px"}
						height={"20.91px"}>
						<Image src={spiralIcon} />
					</Box>
				</Box>
			</Box>
			<Box display={{ md: "block", base: "none" }}>
				<Box display={"flex"} justifyContent={"Center"} mt={"3rem"}>
					<Card
						width={"fit-content"}
						pt={"9rem"}
						pb={"8rem"}
						pl={"3rem"}
						borderRadius={"50px"}
						bgColor={"rgb(233,173,75,0.15)"}>
						<Flex flexDir={"column"} justifyContent={"center"}>
							<Image src={SaasSite} />
							<Heading fontSize={"35px"} textAlign={"center"} mt={"2rem"}>
								SaaS mini website for <br /> a HR recruiting <br /> company.
							</Heading>
							<Link
								width={"fit-content"}
								href="https://greiprgroup.com/"
								mt={"2rem"}
								mr={"auto"}
								ml={"auto"}
								color="black"
								backgroundColor="transparent"
								padding={".5rem 1.5rem"}
								border={"solid 1px black"}
								borderRadius="30px"
								_hover={{
									border: "solid 1px black",
									bgColor: "transparent",
								}}>
								View website
							</Link>
						</Flex>
					</Card>

					<Box display={"grid"} gridGap={"1rem"} ml={"1rem"}>
						<Card
							display={"flex"}
							justifyContent={"center"}
							width={"fit-content"}
							bgColor={"rgb(232,232,234,1)"}
							borderRadius={"50px"}>
							<Flex alignItems={"center"}>
								<Heading fontSize={"35px"} ml={"2rem"}>
									website for a <br /> fashion <br /> brand!
								</Heading>
								<Image src={fashionSite} />
							</Flex>
							<Link
								width={"fit-content"}
								href=""
								mt={"1rem"}
								mr={"auto"}
								ml={"auto"}
								color="black"
								backgroundColor="transparent"
								padding={".5rem 1.5rem"}
								border={"solid 1px black"}
								borderRadius="30px"
								_hover={{
									border: "solid 1px black",
									bgColor: "transparent",
								}}>
								View website
							</Link>
						</Card>
						<Card
							display={"flex"}
							justifyContent={"center"}
							p={"2rem"}
							width={"fit-content"}
							bgColor={"rgb(58,220,48,0.1)"}
							borderRadius={"50px"}>
							<Flex alignItems={"center"}>
								<Image src={NonprofitSite} />
								<Heading fontSize={"35px"} textAlign={"right"}>
									Non-profit <br /> website.
								</Heading>
							</Flex>
							<Link
								width={"fit-content"}
								href="https://ngozi-foundation.netlify.app/"
								mt={"2rem"}
								mr={"auto"}
								ml={"auto"}
								color="black"
								backgroundColor="transparent"
								padding={".5rem 1.5rem"}
								border={"solid 1px black"}
								borderRadius="30px"
								_hover={{
									border: "solid 1px black",
									bgColor: "transparent",
								}}>
								View website
							</Link>
						</Card>
					</Box>
				</Box>
			</Box>
			<Box display={{ base: "block", md: "none" }} mt={"2rem"}>
				<Swiper
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination, Autoplay]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					className="mySwiper">
					<SwiperSlide
						style={{
							backgroundColor: "transparent",
							height: "404px",
						}}>
						<Card
							width={"fit-content"}
							borderRadius={"50px"}
							bgColor={"rgb(233,173,75,0.15)"}
							pb={"1rem"}>
							<Flex flexDir={"column"} justifyContent={"center"}>
								<Image src={SaasSite} />
								<Heading fontSize={"14px"} textAlign={"center"} mt={".5rem"}>
									SaaS mini website for <br /> a HR recruiting <br /> company.
								</Heading>
							</Flex>
							<Link
								width={"fit-content"}
								href="https://greiprgroup.com/"
								mt={".5rem"}
								mr={"auto"}
								ml={"auto"}
								color="black"
								backgroundColor="transparent"
								fontSize={"14px"}
								padding={".5rem 1rem"}
								border={"solid 1px black"}
								borderRadius="30px"
								_hover={{
									border: "solid 1px black",
									bgColor: "transparent",
								}}>
								View website
							</Link>
						</Card>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "transparent",
							height: "404px",
						}}>
						<Card
							display={"flex"}
							justifyContent={"center"}
							width={"fit-content"}
							bgColor={"rgb(232,232,234,1)"}
							pb={"1rem"}
							borderRadius={"50px"}>
							<Flex alignItems={"center"}>
								<Heading fontSize={"14px"} ml={"1rem"}>
									website for a fashion <br /> brand!
								</Heading>
								<Image src={fashionSite} />
							</Flex>
							<Link
								width={"fit-content"}
								href=""
								mt={".5rem"}
								mr={"auto"}
								ml={"auto"}
								color="black"
								backgroundColor="transparent"
								fontSize={"14px"}
								padding={".5rem 1rem"}
								border={"solid 1px black"}
								borderRadius="30px"
								_hover={{
									border: "solid 1px black",
									bgColor: "transparent",
								}}>
								View website
							</Link>
						</Card>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "transparent",
							height: "404px",
						}}>
						<Card
							display={"flex"}
							justifyContent={"center"}
							p={"1.5rem"}
							width={"fit-content"}
							bgColor={"rgb(58,220,48,0.1)"}
							borderRadius={"50px"}>
							<Flex flexDir={"column"} alignItems={"center"}>
								<Image src={NonprofitSite} />
								<Heading fontSize={"14px"}>
									Non-profit <br /> website.
								</Heading>
							</Flex>
							<Link
								width={"fit-content"}
								href="https://ngozi-foundation.netlify.app/"
								mt={".5rem"}
								mr={"auto"}
								ml={"auto"}
								color="black"
								backgroundColor="transparent"
								fontSize={"14px"}
								padding={".5rem 1rem"}
								border={"solid 1px black"}
								borderRadius="30px"
								_hover={{
									border: "solid 1px black",
									bgColor: "transparent",
								}}>
								View website
							</Link>
						</Card>
					</SwiperSlide>
				</Swiper>
			</Box>
		</Box>
	);
};

export default LiveWebsites;
