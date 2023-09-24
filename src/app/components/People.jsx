"use client";

import Image from "next/image";
import PatrickImg from "../assets/PatrickImg.png";
import IsahImg from "../assets/isahImg.png";
import KingsleyImg from "../assets/KingsleyImg.png";

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

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const People = () => {
	return (
		<Box>
			<Box
				mt={"7rem"}
				ml={"5.5rem"}
				mr={"5.5rem"}
				display={{ md: "block", base: "none" }}>
				<Heading
					textAlign={"center"}
					fontSize={"40px"}
					mb={"5rem"}
					bgGradient="linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )"
					bgClip={"text"}>
					What people I have <br /> worked with have to say.
				</Heading>
				<Box
					display={"grid"}
					gridTemplateColumns="repeat(3, 1fr)"
					gridGap={"1rem"}>
					<Box
						p={"2rem"}
						position={"relative"}
						border={"2px solid rgb(240,240,240,1)"}
						width={"fit-content"}
						borderRadius={"30px"}
						zIndex={"hide"}>
						<Box position={"absolute"} right={"9rem"} top={"-3rem"}>
							<Image src={PatrickImg} />
						</Box>
						<Text
							textAlign={"center"}
							color={"#7f7e7e"}
							fontSize={"18px"}
							mt={"2rem"}>
							Working with Ijeoma Augustina <br /> Ambrose is always a delight
							to look <br />
							forward to. Her delivery follows the <br /> accuracy of every
							design conversation <br /> and more. Creativity is only the <br />{" "}
							beginning of the list of words that can <br /> best describe her
							works.{" "}
						</Text>
						<Heading
							fontSize={"25px"}
							textAlign={"center"}
							mt={"4rem"}
							mb={".1rem"}>
							Patrick Mayor C. Raphael
						</Heading>
						<Text textAlign={"center"} color={"#7f7e7e"} fontSize={"18px"}>
							Founder/Director <br /> GREiPR COMPANY
						</Text>
					</Box>

					<Box
						p={"2rem"}
						position={"relative"}
						border={"2px solid rgb(240,240,240,1)"}
						width={"fit-content"}
						borderRadius={"30px"}
						zIndex={"hide"}>
						<Box position={"absolute"} right={"9rem"} top={"-3rem"}>
							<Image src={IsahImg} />
						</Box>
						<Text
							textAlign={"center"}
							color={"#7f7e7e"}
							fontSize={"18px"}
							mt={"2rem"}>
							Her attention to detail is outstanding, <br /> and she
							consistently delivers designs <br /> that not only look stunning
							but also <br /> function seamlessly. Augustina is a <br /> true
							collaborator, always open to <br />
							feedback and eager to find innovative <br /> solutions to design
							challenges.
						</Text>
						<Heading
							fontSize={"25px"}
							textAlign={"center"}
							mt={"4rem"}
							mb={".1rem"}>
							Iysah Yusuf
						</Heading>
						<Text textAlign={"center"} color={"#7f7e7e"} fontSize={"18px"}>
							CEO/Software developer <br /> Zorfts tech
						</Text>
					</Box>

					<Box
						p={"2rem"}
						position={"relative"}
						border={"2px solid rgb(240,240,240,1)"}
						width={"fit-content"}
						borderRadius={"30px"}
						zIndex={"hide"}>
						<Box position={"absolute"} right={"9rem"} top={"-3rem"}>
							<Image src={KingsleyImg} />
						</Box>
						<Text
							textAlign={"center"}
							color={"#7f7e7e"}
							fontSize={"18px"}
							mt={"2rem"}>
							Ijeoma Ambrose embodies a <br /> harmonious blend of creativity,{" "}
							<br />
							engineering prowess, and empathy, <br /> shaping clients'
							perceptions and <br />
							interactions, particularly in the realm of <br /> product
							designing. She is fun and easy <br /> to work with.
						</Text>
						<Heading
							fontSize={"25px"}
							textAlign={"center"}
							mt={"4rem"}
							mb={".1rem"}>
							Kingsley-Orji Ogboih
						</Heading>
						<Text textAlign={"center"} color={"#7f7e7e"} fontSize={"18px"}>
							Software developer
						</Text>
					</Box>
				</Box>
			</Box>

			<Box>
				<Heading
					display={{ base: "block", md: "none" }}
					textAlign={"center"}
					fontSize={"24px"}
					m={"5rem 0"}
					bgGradient="linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )"
					bgClip={"text"}>
					Clients Testimonials
				</Heading>

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
								backgroundColor: "transparent",
								height: "456px",
							}}>
							<Box
								m={"0 auto"}
								mt={"3rem"}
								p={"2rem"}
								position={"relative"}
								border={"2px solid rgb(240,240,240,1)"}
								width={"fit-content"}
								borderRadius={"30px"}
								zIndex={"hide"}>
								<Box position={"absolute"} right={"7rem"} top={"-3rem"}>
									<Image src={PatrickImg} />
								</Box>
								<Text
									textAlign={"center"}
									color={"#7f7e7e"}
									fontSize={"14px"}
									mt={"2rem"}>
									Working with Ijeoma Augustina <br /> Ambrose is always a
									delight to look <br />
									forward to. Her delivery follows the <br /> accuracy of every
									design conversation <br /> and more. Creativity is only the{" "}
									<br /> beginning of the list of words that can <br /> best
									describe her works.{" "}
								</Text>
								<Heading
									fontSize={"20px"}
									textAlign={"center"}
									mt={"4rem"}
									mb={".1rem"}>
									Patrick Mayor C. Raphael
								</Heading>
								<Text textAlign={"center"} color={"#7f7e7e"} fontSize={"14px"}>
									Founder/Director <br /> GREiPR COMPANY
								</Text>
							</Box>
						</SwiperSlide>
						<SwiperSlide
							style={{
								backgroundColor: "transparent",
								height: "456px",
							}}>
							<Box
								m={"0 auto"}
								mt={"3rem"}
								p={"2rem"}
								position={"relative"}
								border={"2px solid rgb(240,240,240,1)"}
								width={"fit-content"}
								borderRadius={"30px"}
								zIndex={"hide"}>
								<Box position={"absolute"} right={"7rem"} top={"-3rem"}>
									<Image src={IsahImg} />
								</Box>
								<Text
									textAlign={"center"}
									color={"#7f7e7e"}
									fontSize={"14px"}
									mt={"2rem"}>
									Her attention to detail is outstanding, <br /> and she
									consistently delivers designs <br /> that not only look
									stunning but also <br /> function seamlessly. Augustina is a{" "}
									<br /> true collaborator, always open to <br />
									feedback and eager to find innovative <br /> solutions to
									design challenges.
								</Text>
								<Heading
									fontSize={"20px"}
									textAlign={"center"}
									mt={"4rem"}
									mb={".1rem"}>
									Iysah Yusuf
								</Heading>
								<Text textAlign={"center"} color={"#7f7e7e"} fontSize={"14px"}>
									CEO/Software developer <br /> Zorfts tech
								</Text>
							</Box>
						</SwiperSlide>
						<SwiperSlide
							style={{
								backgroundColor: "transparent",
								height: "456px",
							}}>
							<Box
								m={"0 auto"}
								mt={"3rem"}
								p={"2rem"}
								position={"relative"}
								border={"2px solid rgb(240,240,240,1)"}
								width={"fit-content"}
								borderRadius={"30px"}
								zIndex={"hide"}>
								<Box position={"absolute"} right={"7rem"} top={"-3rem"}>
									<Image src={KingsleyImg} />
								</Box>
								<Text
									textAlign={"center"}
									color={"#7f7e7e"}
									fontSize={"14px"}
									mt={"2rem"}>
									Ijeoma Ambrose embodies a <br /> harmonious blend of
									creativity, <br />
									engineering prowess, and empathy, <br /> shaping clients'
									perceptions and <br />
									interactions, particularly in the realm of <br /> product
									designing. She is fun and easy <br /> to work with.
								</Text>
								<Heading
									fontSize={"20px"}
									textAlign={"center"}
									mt={"4rem"}
									mb={".1rem"}>
									Kingsley-Orji Ogboih
								</Heading>
								<Text textAlign={"center"} color={"#7f7e7e"} fontSize={"14px"}>
									Software developer
								</Text>
							</Box>
						</SwiperSlide>
					</Swiper>
				</Box>
			</Box>
		</Box>
	);
};

export default People;
