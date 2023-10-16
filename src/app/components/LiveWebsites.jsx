"use client";

import Image from "next/image";

import landingPage1 from "../assets/landing-page1.png";
import landingPage2 from "../assets/landing-page2.png";
import smilebox from "../assets/smilebox.png";
import zynta from "../assets/zynta.png";

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
										style={{ borderRadius: "30px" }}
										src={smilebox}
										alt="website for Brand Identity design"
									/>
									<Heading
										fontSize={"35px"}
										ml={"2rem"}
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
										style={{ borderRadius: "30px" }}
										src={zynta}
										alt="Non-profit website."
									/>
									<Heading
										fontSize={"35px"}
										color={"#515151"}
										mt={"1.5rem"}
										ml={"2rem"}>
										Logo Design
									</Heading>
								</Flex>
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box display={{ base: "block", md: "none" }} mt={"2rem"}>
				<Swiper
					style={{ "--swiper-pagination-color": "#ff8762" }}
					slidesPerView={"auto"}
					spaceBetween={0}
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination, Autoplay]}
					className="mySwiper">
					<SwiperSlide
						style={{
							backgroundColor: "transparent",
							height: "394px",
							width: "81%",
						}}>
						<Box
							ml={"1.5rem"}
							position={"relative"}
							width={"226px"}
							height={"363px"}
							borderRadius={"50px"}
							bgColor={"rgb(233,173,75,0.15)"}>
							<Link href="/projects/fashion" _hover={"none"}>
								<Flex flexDir={"column"} justifyContent={"center"}>
									<Box
										position={"absolute"}
										top={"3rem"}
										right={"2.7rem"}
										width={"86.1px"}
										height={"144.24px"}>
										<Image src={landingPage1} alt="landing page 1" />
									</Box>
									<Box
										mt={"4.5rem"}
										ml={"2.8rem"}
										width={"86.1px"}
										height={"144.24px"}>
										<Image src={landingPage2} alt="landing page 2" />
									</Box>
									<Heading
										fontSize={"20px"}
										textAlign={"center"}
										color={"#515151"}
										mt={"2rem"}>
										Website design <br /> for a fashion <br /> brand.
									</Heading>
								</Flex>
							</Link>
						</Box>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "transparent",
							height: "394px",
							width: "76%",
						}}>
						<Box
							display={"flex"}
							flexDir={"column"}
							width={"226px"}
							height={"363px"}
							bgColor={"rgb(232,232,234,1)"}
							borderRadius={"50px"}>
							<Link href="/projects/smilebox" _hover={"none"}>
								<Flex flexDir={"column"} ml={".7rem"} mt={"3rem"}>
									<Box width={"193px"} height={"177px"}>
										<Image
											style={{ borderRadius: "30px" }}
											src={smilebox}
											alt="website for Brand Identity design"
										/>
									</Box>
									<Heading fontSize={"20px"} mt={"1rem"} color={"#515151"}>
										Brand Identity <br /> design
									</Heading>
								</Flex>
							</Link>
						</Box>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "transparent",
							width: "90%",
							height: "394px",
						}}>
						<Box
							display={"flex"}
							flexDir={"column"}
							width={"226px"}
							height={"363px"}
							bgColor={"rgb(232,232,234,1)"}
							borderRadius={"50px"}>
							<Link href="/projects/smilebox" _hover={"none"}>
								<Flex flexDir={"column"} ml={".7rem"} mt={"3rem"}>
									<Box width={"193px"} height={"177px"}>
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
						</Box>
					</SwiperSlide>
				</Swiper>
			</Box>
		</Box>
	);
};

export default LiveWebsites;
