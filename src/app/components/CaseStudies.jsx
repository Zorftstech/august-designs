"use client";

import Image from "next/image";
import Desktop1 from "../assets/Desktop-1.png";
import Desktop2 from "../assets/Desktop-2.png";
import Desktop3 from "../assets/Desktop-3.png";
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
} from "@chakra-ui/react";

const CaseStudies = () => {
	return (
		<Box mt={"7rem"}>
			<Heading
				textAlign={"center"}
				bgGradient="linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )"
				bgClip={"text"}
				fontSize={{ base: "24px", md: "40px" }}>
				Case Studies
			</Heading>
			<Text
				mt={".5rem"}
				mb={"1rem"}
				color="#7f7e7e"
				fontSize={{ base: "12px", md: "16px" }}
				textAlign={"center"}>
				Some of my works with a detailed case study
			</Text>
			<Box display={{ md: "block", base: "none" }}>
				<Box
					display={"grid"}
					backgroundColor={"rgba(255,135,98,0.05)"}
					ml={"auto"}
					mr={"auto"}
					pt={"2rem"}
					pb={"2rem"}
					gridTemplateColumns="repeat(3, 1fr)"
					grid-template-rows="repeat(1fr)"
					gridGap={"1rem"}>
					<Card
						width={"400px"}
						ml={"5.5rem"}
						borderRadius={"30px"}
						pb={"1rem"}
						zIndex={"hide"}>
						<Image
							style={{
								borderTopLeftRadius: "30px",
								borderTopRightRadius: "30px",
							}}
							src={Desktop1}
							alt="Digital health app to manage mental health"
						/>
						<Text color={"#7f7e7e"} fontSize={"16px"} ml={"1rem"} mt={"1rem"}>
							Digital health app to manage <br /> mental health
						</Text>
					</Card>
					<Card
						width={"400px"}
						ml={".5rem"}
						borderRadius={"30px"}
						pb={"1rem"}
						zIndex={"hide"}>
						<Image
							style={{
								borderTopLeftRadius: "30px",
								borderTopRightRadius: "30px",
							}}
							src={Desktop2}
							alt="A fintech saving and investment mobile app"
						/>
						<Text color={"#7f7e7e"} fontSize={"16px"} ml={"1rem"} mt={"1rem"}>
							A fintech saving and investment <br /> mobile app
						</Text>
					</Card>
					<Card
						width={"400px"}
						mr={"5.5rem"}
						borderRadius={"30px"}
						pb={"1rem"}
						zIndex={"hide"}>
						<Image
							style={{
								borderTopLeftRadius: "30px",
								borderTopRightRadius: "30px",
							}}
							src={Desktop3}
							alt="A non-profit full website that helps
							connect donors to NGO’s"
						/>
						<Text color={"#7f7e7e"} fontSize={"16px"} ml={"1rem"} mt={"1rem"}>
							A non-profit full website that helps <br />
							connect donors to NGO’s
						</Text>
					</Card>
				</Box>
			</Box>

			<Box display={{ base: "block", md: "none" }}>
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={0}
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination, Autoplay]}
					className="mySwiper">
					<SwiperSlide
						style={{
							backgroundColor: "rgba(255,135,98,0.05)",
							width: "80%",
							height: "305px",
							padding: " 1rem 0",
						}}>
						<Card
							width={"249px"}
							ml={"2rem"}
							borderRadius={"30px"}
							pb={"1rem"}
							zIndex={"hide"}>
							<Image
								style={{
									borderTopLeftRadius: "30px",
									borderTopRightRadius: "30px",
								}}
								src={Desktop1}
								alt="Digital health app to manage mental health"
							/>
							<Text
								textAlign={"left"}
								color={"#7f7e7e"}
								fontSize={"14px"}
								ml={".5rem"}
								mt={".5rem"}>
								Digital health app to manage <br /> mental health
							</Text>
						</Card>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "rgba(255,135,98,0.05)",
							width: "77%",
							height: "305px",
							padding: "1rem 0",
						}}>
						<Card
							width={"249px"}
							ml={"1.5rem"}
							borderRadius={"30px"}
							pb={"1rem"}
							zIndex={"hide"}>
							<Image
								style={{
									borderTopLeftRadius: "30px",
									borderTopRightRadius: "30px",
								}}
								src={Desktop2}
								alt="A fintech saving and investment mobile app"
							/>
							<Text
								color={"#7f7e7e"}
								fontSize={"14px"}
								textAlign={"left"}
								ml={".5rem"}
								mt={".5rem"}>
								A fintech saving and investment <br /> mobile app
							</Text>
						</Card>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "rgba(255,135,98,0.05)",

							height: "305px",
							padding: "1rem 0",
						}}>
						<Card
							width={"249px"}
							ml={"1.5rem"}
							borderRadius={"30px"}
							pb={"1rem"}
							zIndex={"hide"}>
							<Image
								style={{
									borderTopLeftRadius: "30px",
									borderTopRightRadius: "30px",
								}}
								src={Desktop3}
								alt="A non-profit full website that helps
								connect donors to NGO’s"
							/>
							<Text
								color={"#7f7e7e"}
								fontSize={"14px"}
								textAlign={"left"}
								ml={".5rem"}
								mt={".5rem"}>
								A non-profit full website that helps <br />
								connect donors to NGO’s
							</Text>
						</Card>
					</SwiperSlide>
				</Swiper>
			</Box>
		</Box>
	);
};

export default CaseStudies;
