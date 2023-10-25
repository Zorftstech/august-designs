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
		<Box m={{ md: "0 4rem", base: "0 0" }}>
			<Box
				mt={"7rem"}
				ml={"auto"}
				mr={"auto"}
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
						width={"100%"}
						borderRadius={"30px"}
						zIndex={"hide"}>
						<Box position={"absolute"} right={"40%"} top={"-10%"}>
							<Image src={PatrickImg} alt="image of patrick mayor c. rapheal" />
						</Box>
						<Text
							textAlign={"center"}
							color={"#7f7e7e"}
							fontSize={"18px"}
							mt={"2rem"}>
							Working with Ijeoma Augustina <br /> Ambrose is always a delight
							to look forward to. Her delivery follows the accuracy of every
							design conversation <br /> and more. Creativity is only the <br />{" "}
							beginning of the list of words that can best describe her works.{" "}
						</Text>
						<Heading
							fontSize={"25px"}
							textAlign={"center"}
							mt={"2rem"}
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
						width={"100%"}
						borderRadius={"30px"}
						zIndex={"hide"}>
						<Box position={"absolute"} right={"40%"} top={"-10%"}>
							<Image src={IsahImg} alt="image of iysah yusuf" />
						</Box>
						<Text
							textAlign={"center"}
							color={"#7f7e7e"}
							fontSize={"18px"}
							mt={"2rem"}>
							Her attention to detail is <br /> outstanding, and she
							consistently <br /> delivers designs that not only look <br />
							stunning but also function <br /> seamlessly. Augustina is a true{" "}
							<br /> collaborator, always open to <br />
							feedback and eager to find innovative solutions to design
							<br />
							challenges.
						</Text>
						<Heading
							fontSize={"25px"}
							textAlign={"center"}
							mt={"2rem"}
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
						width={"100%"}
						borderRadius={"30px"}
						zIndex={"hide"}>
						<Box position={"absolute"} right={"40%"} top={"-10%"}>
							<Image src={KingsleyImg} alt="image of kingsley-orji ogboih" />
						</Box>
						<Text
							textAlign={"center"}
							color={"#7f7e7e"}
							fontSize={"18px"}
							mt={"2rem"}>
							Ijeoma Ambrose embodies a <br /> harmonious blend of creativity,{" "}
							<br />
							engineering prowess, and <br /> empathy, shaping clients
							perceptions and interactions, <br /> particularly in the realm of{" "}
							<br /> product designing. She is fun and <br /> easy to work with.
						</Text>
						<Heading
							fontSize={"25px"}
							textAlign={"center"}
							mt={"2rem"}
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
					m={"4rem 0"}
					bgGradient="linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )"
					bgClip={"text"}>
					Clients Testimonials
				</Heading>

				<Box display={{ base: "block", md: "none" }}>
					<Swiper
						style={{ "--swiper-pagination-color": "#ff8762" }}
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
								height: "456px",
								width: "80%",
							}}>
							<Box
								ml={"1rem"}
								mt={"3rem"}
								p={".5rem"}
								position={"relative"}
								border={"2px solid rgb(240,240,240,1)"}
								minWidth={"269px"}
								maxWidth={"340px"}
								height={"372px"}
								borderRadius={"30px"}
								zIndex={"hide"}>
								<Box
									position={"absolute"}
									width={"80px"}
									height={"80px"}
									left={"104.5px"}
									top={"-40px"}>
									<Image
										src={PatrickImg}
										alt="image of patrick mayor c. rapheal"
									/>
								</Box>
								<Text
									textAlign={"center"}
									color={"#7f7e7e"}
									fontSize={"14px"}
									mt={"3rem"}>
									Working with Ijeoma Augustina <br /> Ambrose is always a
									delight to look <br />
									forward to. Her delivery follows the <br /> accuracy of every
									design conversation and more. Creativity is only the beginning
									of the list of words that can best describe her works.{" "}
								</Text>
								<Heading
									fontSize={"16px"}
									textAlign={"center"}
									mt={"2rem"}
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
								width: "75%",
							}}>
							<Box
								mt={"3rem"}
								p={".5rem"}
								position={"relative"}
								border={"2px solid rgb(240,240,240,1)"}
								minWidth={"269px"}
								maxWidth={"340px"}
								height={"372px"}
								borderRadius={"30px"}
								zIndex={"hide"}>
								<Box
									position={"absolute"}
									width={"80px"}
									height={"80px"}
									left={"104.5px"}
									top={"-40px"}>
									<Image src={IsahImg} alt="image of iysah yusuf" />
								</Box>
								<Text
									textAlign={"center"}
									color={"#7f7e7e"}
									fontSize={"14px"}
									mt={"3rem"}>
									Her attention to detail is outstanding, and she consistently
									delivers designs that not only look stunning but also function
									seamlessly. Augustina is a true collaborator, always open to
									feedback and eager to find innovative solutions to design
									challenges.
								</Text>
								<Heading
									fontSize={"16px"}
									textAlign={"center"}
									mt={"1rem"}
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
								width: "80%",
							}}>
							<Box
								mt={"3rem"}
								p={".5rem"}
								position={"relative"}
								border={"2px solid rgb(240,240,240,1)"}
								minWidth={"269px"}
								maxWidth={"320px"}
								height={"372px"}
								borderRadius={"30px"}
								zIndex={"hide"}>
								<Box
									position={"absolute"}
									width={"80px"}
									height={"80px"}
									left={"104.5px"}
									top={"-40px"}>
									<Image
										src={KingsleyImg}
										alt="image of kingsley-orji ogboih"
									/>
								</Box>
								<Text
									textAlign={"center"}
									color={"#7f7e7e"}
									fontSize={"14px"}
									mt={"3rem"}>
									Ijeoma Ambrose embodies a harmonious blend of creativity,
									engineering prowess, and empathy, shaping clients perceptions
									and interactions, particularly in the realm of product
									designing. She is fun and easy to work with.
								</Text>
								<Heading
									fontSize={"16px"}
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
