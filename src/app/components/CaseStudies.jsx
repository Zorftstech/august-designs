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
		<Box textAlign={"center"} mt={"7rem"}>
			<Heading
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
					gridGap={".5rem"}>
					<Card
						width={"400px"}
						ml={"4.5rem"}
						borderRadius={"30px"}
						pb={"1rem"}
						zIndex={"hide"}>
						<Image src={Desktop1} />
						<Text color={"#7f7e7e"} fontSize={"20px"}>
							Digital health app to manage <br /> mental health
						</Text>
					</Card>
					<Card
						width={"400px"}
						borderRadius={"30px"}
						pb={"1rem"}
						zIndex={"hide"}>
						<Image src={Desktop2} />
						<Text color={"#7f7e7e"} fontSize={"20px"}>
							A fintech saving and investment <br /> mobile app
						</Text>
					</Card>
					<Card
						width={"400px"}
						mr={"6rem"}
						borderRadius={"30px"}
						pb={"1rem"}
						zIndex={"hide"}>
						<Image src={Desktop3} />
						<Text color={"#7f7e7e"} fontSize={"20px"}>
							A non-profit full website that helps <br />
							connect donors to NGO’s
						</Text>
					</Card>
				</Box>
			</Box>
			<Box display={{ base: "block", md: "none" }}>
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
							backgroundColor: "rgba(255,135,98,0.05)",
							height: "265px",
						}}>
						<Card
							width={"249px"}
							ml={"4.5rem"}
							borderRadius={"30px"}
							pb={"1rem"}
							zIndex={"hide"}>
							<Image src={Desktop1} />
							<Text color={"#7f7e7e"} fontSize={"14px"}>
								Digital health app to manage <br /> mental health
							</Text>
						</Card>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "rgba(255,135,98,0.05)",
							height: "265px",
						}}>
						<Card
							width={"249px"}
							ml={"4.5rem"}
							borderRadius={"30px"}
							pb={"1rem"}
							zIndex={"hide"}>
							<Image src={Desktop2} />
							<Text color={"#7f7e7e"} fontSize={"14px"}>
								A fintech saving and investment <br /> mobile app
							</Text>
						</Card>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "rgba(255,135,98,0.05)",
							height: "265px",
						}}>
						<Card
							width={"249px"}
							ml={"4.5rem"}
							borderRadius={"30px"}
							pb={"1rem"}
							zIndex={"hide"}>
							<Image src={Desktop3} />
							<Text color={"#7f7e7e"} fontSize={"14px"}>
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
