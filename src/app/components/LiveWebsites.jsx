"use client";

import Image from "next/image";
import spiralIcon from "../assets/spiral.png";
import SaasSite from "../assets/SaasSite.png";
import fashionSite from "../assets/fashionSite.png";
import NonprofitSite from "../assets/NonprofitSite.png";
import ArrowIcon from "../assets/Arrow.png";

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
						<Image src={spiralIcon} alt="spiral icon" />
					</Box>
					<Box
						display={{ md: "none", base: "block" }}
						width={"20.91px"}
						height={"20.91px"}>
						<Image src={spiralIcon} alt="spiral icon" />
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
							<Image
								src={SaasSite}
								alt="SaaS mini website for a HR recruiting company."
							/>
							<Heading fontSize={"35px"} textAlign={"center"} mt={"2rem"}>
								SaaS mini website for <br /> a HR recruiting <br /> company.
							</Heading>
							<Link
								width={"fit-content"}
								href="https://greiprgroup.com/"
								mt={"2rem"}
								mr={"auto"}
								ml={"auto"}
								color="#ff8762"
								backgroundColor="transparent"
								padding={".5rem 1.5rem"}
								borderRadius="30px"
								_hover={{
									bgColor: "transparent",
								}}>
								<a>View website</a>
								<Image src={ArrowIcon} />
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
								<Image src={fashionSite} alt="website for a fashion brand!" />
							</Flex>
							<Link
								width={"fit-content"}
								href=""
								mt={"1rem"}
								mr={"auto"}
								ml={"auto"}
								color="#ff8762"
								backgroundColor="transparent"
								padding={".5rem 1.5rem"}
								borderRadius="30px"
								_hover={{
									bgColor: "transparent",
								}}>
								<a>View website</a>
								<Image src={ArrowIcon} />
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
								<Image src={NonprofitSite} alt="Non-profit website." />
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
								color="#ff8762"
								backgroundColor="transparent"
								padding={".5rem 1.5rem"}
								borderRadius="30px"
								_hover={{
									bgColor: "transparent",
								}}>
								<a>View website</a>
								<Image src={ArrowIcon} />
							</Link>
						</Card>
					</Box>
				</Box>
			</Box>
			<Box display={{ base: "block", md: "none" }} mt={"2rem"}>
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={30}
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination, Autoplay]}
					className="mySwiper">
					<SwiperSlide
						style={{
							backgroundColor: "transparent",
							height: "434px",
						}}>
						<Card
							ml={"2rem"}
							mr={"auto"}
							width={"fit-content"}
							borderRadius={"50px"}
							bgColor={"rgb(233,173,75,0.15)"}
							p={"3rem"}
							pb={"2.5rem"}>
							<Flex flexDir={"column"} justifyContent={"center"}>
								<Box width={"191px"} m={"0 auto"}>
									<Image
										src={SaasSite}
										alt="SaaS mini website for a HR recruiting company."
									/>
								</Box>
								<Heading fontSize={"20px"} textAlign={"center"} mt={".5rem"}>
									SaaS mini website for <br /> a HR recruiting <br /> company.
								</Heading>
							</Flex>

							<Link
								width={"fit-content"}
								href="https://greiprgroup.com/"
								mt={"1rem"}
								mr={"auto"}
								ml={"auto"}
								color="#ff8762"
								backgroundColor="transparent"
								fontSize={"14px"}
								padding={".5rem 1rem"}
								borderRadius="30px"
								_hover={{
									bgColor: "transparent",
								}}>
								<a>View website</a>
								<Box m={"0 auto"}>
									<Image src={ArrowIcon} />
								</Box>
							</Link>
						</Card>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "transparent",
							height: "434px",
						}}>
						<Card
							display={"flex"}
							justifyContent={"center"}
							width={"fit-content"}
							bgColor={"rgb(232,232,234,1)"}
							pb={"4rem"}
							borderRadius={"50px"}
							ml={"auto"}
							mr={"auto"}>
							<Flex alignItems={"center"} flexDir={"column"}>
								<Heading fontSize={"20px"} m={"2rem 0"}>
									website for a fashion <br /> brand!
								</Heading>
								<Box width={"60%"} m={"0 auto"}>
									<Image src={fashionSite} alt="website for a fashion brand!" />
								</Box>
							</Flex>
							<Link
								width={"fit-content"}
								href=""
								mt={"1rem"}
								mr={"auto"}
								ml={"auto"}
								color="#ff8762"
								backgroundColor="transparent"
								fontSize={"14px"}
								padding={".5rem 1rem"}
								borderRadius="30px"
								_hover={{
									bgColor: "transparent",
								}}>
								<a>View website</a>
								<Box m={"0 auto"}>
									<Image src={ArrowIcon} />
								</Box>
							</Link>
						</Card>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "transparent",
							height: "434px",
						}}>
						<Card
							display={"flex"}
							justifyContent={"center"}
							pb={"4.5rem"}
							width={"fit-content"}
							bgColor={"rgb(58,220,48,0.1)"}
							borderRadius={"50px"}
							ml={"auto"}
							mr={"2rem"}>
							<Flex flexDir={"column"} alignItems={"center"}>
								<Box width={"60%"} m={"0 auto"} mt={"2rem"}>
									<Image src={NonprofitSite} alt="Non-profit website." />
								</Box>
								<Heading fontSize={"20px"} m={"1.5rem 0"}>
									Non-profit <br /> website.
								</Heading>
							</Flex>
							<Link
								width={"fit-content"}
								href="https://ngozi-foundation.netlify.app/"
								mt={"1rem"}
								mr={"auto"}
								ml={"auto"}
								color="#ff8762"
								backgroundColor="transparent"
								fontSize={"14px"}
								padding={".5rem 1rem"}
								borderRadius="30px"
								_hover={{
									bgColor: "transparent",
								}}>
								<a>View website</a>
								<Box m={"0 auto"}>
									<Image src={ArrowIcon} />
								</Box>
							</Link>
						</Card>
					</SwiperSlide>
				</Swiper>
			</Box>
		</Box>
	);
};

export default LiveWebsites;
