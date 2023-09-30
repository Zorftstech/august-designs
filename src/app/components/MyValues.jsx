"use client";

import Image from "next/image";
import GrowthIcon from "../assets/Growth.png";
import RemoteIcon from "../assets/Remote.png";
import OpenIcon from "../assets/Open.png";
import HumbleIcon from "../assets/Humble.png";
import AdaptableIcon from "../assets/Adaptable.png";
import EmpatheticIcon from "../assets/Empathetic.png";

import {
	Heading,
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
	Card,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const MyValues = () => {
	return (
		<Box>
			<Box
				position={"relative"}
				mb={"55rem"}
				zIndex={"hide"}
				display={{ md: "block", base: "none" }}>
				<Heading
					mt={{ md: "10rem", base: "7rem" }}
					ml={{ md: "4rem", base: "2rem" }}
					mb={"4rem"}
					fontSize={{ md: "40px", base: "24px" }}
					bgGradient="linear( to-r, #393939, #ff8762, #ff8762, #ff8762, #ff8762, #ff8762  )"
					bgClip={"text"}>
					My Values
				</Heading>
				<Box>
					<Card
						bgColor={"#464646"}
						borderRadius={"20px"}
						width={"fit-content"}
						p={"2.5rem 0"}
						pl={"1.5rem"}
						pr={"3rem"}
						position={"absolute"}
						top={"10.5rem"}
						left={"6rem"}>
						<Box display={"flex"} alignItems={"center"}>
							<Image src={GrowthIcon} alt="growth icon" width={"100%"} />
							<Heading fontSize={"32px"} ml={"1rem"} color={"#ffffff"}>
								Growth
							</Heading>
						</Box>
						<Text color={"#dddddd"} mt={"1rem"}>
							This has always been my mantra, i <br /> believe in consistently
							evolving <br />
							and growing in my field as well as <br /> the company I would work
							for.
						</Text>
					</Card>
				</Box>
				<Box>
					<Card
						bgColor={"#464646"}
						borderRadius={"20px"}
						width={"fit-content"}
						p={"2.5rem 0"}
						pl={"1.5rem"}
						pr={"3rem"}
						position={"absolute"}
						left={"30rem"}>
						<Box display={"flex"} alignItems={"center"}>
							<Image src={RemoteIcon} alt="remote icon" width={"100%"} />
							<Heading fontSize={"32px"} ml={"1rem"} color={"#ffffff"}>
								Remote
							</Heading>
						</Box>
						<Text color={"#dddddd"} mt={"1rem"}>
							I work remotely but still maintain <br /> adequate communication
							with <br />
							everyone I work with regardless of <br /> the position they hold.
						</Text>
					</Card>
				</Box>
				<Box>
					<Card
						bgColor={"#464646"}
						borderRadius={"20px"}
						width={"fit-content"}
						p={"2.5rem 0"}
						pl={"1.5rem"}
						pr={"4rem"}
						position={"absolute"}
						right={"9rem"}
						top={"10.5rem"}>
						<Box display={"flex"} alignItems={"center"}>
							<Image src={OpenIcon} alt="open icon" width={"100%"} />
							<Heading fontSize={"32px"} ml={"1rem"} color={"#ffffff"}>
								Open
							</Heading>
						</Box>
						<Text color={"#dddddd"} mt={"1rem"}>
							I am very open to feedback and <br /> make necessary corrections{" "}
							<br />
							wherever it is required. I do not <br /> frown at constructive
							criticism.
						</Text>
					</Card>
				</Box>
				<Box>
					<Card
						bgColor={"#464646"}
						borderRadius={"20px"}
						width={"fit-content"}
						p={"2.5rem 0"}
						pl={"1.5rem"}
						pr={"3rem"}
						position={"absolute"}
						top={"33rem"}
						left={"8rem"}>
						<Box display={"flex"} alignItems={"center"}>
							<Image src={HumbleIcon} alt="humble icon" width={"100%"} />
							<Heading fontSize={"32px"} ml={"1rem"} color={"#ffffff"}>
								Humble
							</Heading>
						</Box>
						<Text color={"#dddddd"} mt={"1rem"}>
							I listen when I am being corrected, <br /> not afraid to ask
							questions when <br />
							necessary, speak and treat <br /> everyone with respect.
						</Text>
					</Card>
				</Box>
				<Box>
					<Card
						bgColor={"#464646"}
						borderRadius={"20px"}
						width={"fit-content"}
						p={"2.5rem 0"}
						pl={"1.5rem"}
						pr={"3rem"}
						position={"absolute"}
						top={"28rem"}
						left={"31.7rem"}>
						<Box display={"flex"} alignItems={"center"}>
							<Image src={AdaptableIcon} alt="adaptable icon" width={"100%"} />
							<Heading fontSize={"32px"} ml={"1rem"} color={"#ffffff"}>
								Adaptable
							</Heading>
						</Box>
						<Text color={"#dddddd"} mt={"1rem"}>
							I am flexible and adaptable in the <br /> face of changing project{" "}
							<br />
							requirements, user feedback, and <br /> technological
							advancements.
						</Text>
					</Card>
				</Box>
				<Box>
					<Card
						bgColor={"#464646"}
						borderRadius={"20px"}
						width={"fit-content"}
						p={"2.5rem 0"}
						pl={"1.5rem"}
						pr={"3rem"}
						position={"absolute"}
						top={"33rem"}
						right={"3.7rem"}>
						<Box display={"flex"} alignItems={"center"}>
							<Image
								src={EmpatheticIcon}
								alt="empathetic icon"
								width={"100%"}
							/>
							<Heading fontSize={"32px"} ml={"1rem"} color={"#ffffff"}>
								Empathetic
							</Heading>
						</Box>
						<Text color={"#dddddd"} mt={"1rem"}>
							I practice empathy in my interactions with <br /> users,
							colleagues, and stakeholders. <br /> Understanding the emotions
							and <br /> perspectives of others to create designs <br /> that
							resonate.
						</Text>
					</Card>
				</Box>
			</Box>

			{/* Mobile view */}

			<Box>
				<Box display={{ base: "block", md: "none" }} m={"5rem 0"}>
					<Heading
						mt={{ md: "10rem", base: "7rem" }}
						ml={{ md: "4rem", base: "2rem" }}
						mb={"4rem"}
						fontSize={{ md: "40px", base: "24px" }}
						bgGradient="linear( to-r, #393939, #ff8762, #ff8762, #ff8762, #ff8762, #ff8762  )"
						bgClip={"text"}>
						My Values
					</Heading>
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
								height: "264px",
							}}>
							<Box>
								<Card
									m={"0 auto"}
									bgColor={"#464646"}
									borderRadius={"20px"}
									width={"fit-content"}
									p={"2.5rem 0"}
									pl={"1.5rem"}
									pr={"3rem"}>
									<Box display={"flex"} alignItems={"center"}>
										<Box>
											<Image src={GrowthIcon} alt="growth icon" />
										</Box>
										<Heading fontSize={"24px"} ml={"1rem"} color={"#ffffff"}>
											Growth
										</Heading>
									</Box>
									<Text color={"#dddddd"} mt={"1rem"} fontSize={"16px"}>
										This has always been my mantra, i <br /> believe in
										consistently evolving <br />
										and growing in my field as well as <br /> the company I
										would work for.
									</Text>
								</Card>
							</Box>
						</SwiperSlide>
						<SwiperSlide
							style={{
								backgroundColor: "transparent",
								height: "264px",
							}}>
							<Box>
								<Card
									m={"0 auto"}
									bgColor={"#464646"}
									borderRadius={"20px"}
									width={"fit-content"}
									p={"2.5rem 0"}
									pl={"1.5rem"}
									pr={"3rem"}>
									<Box display={"flex"} alignItems={"center"}>
										<Box>
											<Image
												src={RemoteIcon}
												alt="remote icon"
												width={"100%"}
											/>
										</Box>
										<Heading fontSize={"24px"} ml={"1rem"} color={"#ffffff"}>
											Remote
										</Heading>
									</Box>
									<Text color={"#dddddd"} mt={"1rem"} fontSize={"16px"}>
										I work remotely but still maintain <br /> adequate
										communication with <br />
										everyone I work with regardless of <br /> the position they
										hold.
									</Text>
								</Card>
							</Box>
						</SwiperSlide>
						<SwiperSlide
							style={{
								backgroundColor: "transparent",
								height: "264px",
							}}>
							<Box>
								<Card
									m={"0 auto"}
									bgColor={"#464646"}
									borderRadius={"20px"}
									width={"fit-content"}
									p={"2.5rem 0"}
									pl={"1.5rem"}
									pr={"4rem"}>
									<Box display={"flex"} alignItems={"center"}>
										<Box>
											<Image src={OpenIcon} alt="open icon" width={"100%"} />
										</Box>
										<Heading fontSize={"24px"} ml={"1rem"} color={"#ffffff"}>
											Open
										</Heading>
									</Box>
									<Text color={"#dddddd"} mt={"1rem"} fontSize={"16px"}>
										I am very open to feedback and <br /> make necessary
										corrections <br />
										wherever it is required. I do not <br /> frown at
										constructive criticism.
									</Text>
								</Card>
							</Box>
						</SwiperSlide>
						<SwiperSlide
							style={{
								backgroundColor: "transparent",
								height: "254px",
							}}>
							<Box>
								<Card
									m={"0 auto"}
									bgColor={"#464646"}
									borderRadius={"20px"}
									width={"fit-content"}
									p={"2.5rem 0"}
									pl={"1.5rem"}
									pr={"3rem"}>
									<Box display={"flex"} alignItems={"center"}>
										<Box>
											<Image
												src={HumbleIcon}
												alt="humble icon"
												width={"100%"}
											/>
										</Box>
										<Heading fontSize={"24px"} ml={"1rem"} color={"#ffffff"}>
											Humble
										</Heading>
									</Box>
									<Text color={"#dddddd"} mt={"1rem"} fontSize={"16px"}>
										I listen when I am being corrected, <br /> not afraid to ask
										questions when <br />
										necessary, speak and treat <br /> everyone with respect.
									</Text>
								</Card>
							</Box>
						</SwiperSlide>

						<SwiperSlide
							style={{
								backgroundColor: "transparent",
								height: "254px",
							}}>
							<Box>
								<Card
									m={"0 auto"}
									bgColor={"#464646"}
									borderRadius={"20px"}
									width={"fit-content"}
									p={"2.5rem 0"}
									pl={"1.5rem"}
									pr={"3rem"}>
									<Box display={"flex"} alignItems={"center"}>
										<Box>
											<Image
												src={AdaptableIcon}
												alt="adaptable icon"
												width={"100%"}
											/>
										</Box>
										<Heading fontSize={"24px"} ml={"1rem"} color={"#ffffff"}>
											Adaptable
										</Heading>
									</Box>
									<Text color={"#dddddd"} mt={"1rem"} fontSize={"16px"}>
										I am flexible and adaptable in the <br /> face of changing
										project <br />
										requirements, user feedback, and <br /> technological
										advancements.
									</Text>
								</Card>
							</Box>
						</SwiperSlide>

						<SwiperSlide
							style={{
								backgroundColor: "transparent",
								height: "300px",
							}}>
							<Box>
								<Card
									m={"0 auto"}
									bgColor={"#464646"}
									borderRadius={"20px"}
									width={"fit-content"}
									p={"2.5rem 0"}
									pl={"1.5rem"}
									pr={"3rem"}>
									<Box display={"flex"} alignItems={"center"}>
										<Box>
											<Image
												src={EmpatheticIcon}
												alt="empathetic icon"
												width={"100%"}
											/>
										</Box>
										<Heading fontSize={"24px"} ml={"1rem"} color={"#ffffff"}>
											Empathetic
										</Heading>
									</Box>
									<Text color={"#dddddd"} mt={"1rem"} fontSize={"16px"}>
										I practice empathy in my interactions with users,
										colleagues, and stakeholders. Understanding the emotions and{" "}
										perspectives of others to create designs that resonate.
									</Text>
								</Card>
							</Box>
						</SwiperSlide>
					</Swiper>
				</Box>
			</Box>
		</Box>
	);
};

export default MyValues;