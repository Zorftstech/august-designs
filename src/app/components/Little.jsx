"use client";

import Image from "next/image";
import AugustImg from "../assets/AugustImg.png";
import GoogleIcon from "../assets/googleIcon.png";
import UvaIcon from "../assets/UVA-Logo.png";
import PrexelsIcon from "../assets/prexels.png";
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
} from "@chakra-ui/react";

const Little = () => {
	return (
		<Container maxWidth="100%" mt={"7rem"}>
			<Box maxW="fit-content" display={"flex"}>
				<Box
					mt={{ md: "8rem", base: "5rem" }}
					ml={{ md: "3rem", base: "1rem" }}>
					<Flex flexDir="column">
						<Heading
							bgGradient={{
								md: "linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )",
								base: "linear( to-r, #393939,  #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )",
							}}
							bgClip={"text"}
							fontSize={{ base: "24px", md: "48px" }}>
							A Little about me
						</Heading>
						<Text
							color="#7f7e7e"
							mt={"2rem"}
							mb={"1rem"}
							display={{ base: "none", md: "block" }}
							fontSize={"16px"}>
							I am a product designer, majorly in UI/UX design. My name is{" "}
							<br />
							Ambrose Ijeoma Augustina but for some reason, my friends and{" "}
							<br />
							almost everyone I have worked with call me August. I didnt start{" "}
							<br />
							as a designer, I got my BSc degree in Microbiology in the year{" "}
							<br />
							2020 but during my course of study I got interested in graphics{" "}
							<br />
							design, I volunteered with an NGO as a graphics designer and{" "}
							<br />
							worked with small businesses before picking an interest in <br />{" "}
							product design before I graduated. I enjoyed every part <br /> of
							product design and still enjoy it. I have faced several challenges{" "}
							<br /> when it comes to designing for clients with complexity in
							their <br /> design jobs but I always come up with solutions that
							guarantee <br /> clients satisfaction.
						</Text>
						<Text
							color="#7f7e7e"
							mt={"rem"}
							mb={"2rem"}
							display={{ base: "none", md: "block" }}>
							My years of experience working for different niches, especially
							for <br /> start-ups, have made it possible for me to be able to
							handle <br />
							small and large projects on my own from start to finish utilizing{" "}
							<br />
							my creativity at each step to deliver quality work. I handle my{" "}
							<br />
							jobs professionally and incorporate fun as much as possible.
						</Text>

						{/* Mobile view */}
						<Box display={{ base: "block", md: "none" }}>
							<Text color="#7f7e7e" mt={"2rem"} mb={"1rem"} fontSize={"14px"}>
								I am a product designer, majorly in UI/UX <br /> design. My name
								is Ambrose Ijeoma <br /> Augustina but for some reason, my{" "}
								<br /> friends and almost everyone I have <br /> worked with
								call me August. I didnt start <br />
								as a designer, I got my BSc degree in <br /> Microbiology in the
								year 2020 but during <br /> my course of study I got interested
								in <br />
								graphics design, I volunteered with an <br /> NGO as a graphics
								designer and worked <br /> with small businesses before picking
								an <br />
								interest in product design before I <br /> graduated. I enjoyed
								every part of <br /> product design and still enjoy it. I have{" "}
								<br />
								faced several challenges when it comes <br /> to designing for
								clients with complexity in <br /> their design jobs but I always
								come up <br /> with solutions that guarantee clients <br />
								satisfaction.
							</Text>
							<Text
								color="#7f7e7e"
								mt={"rem"}
								mb={"2rem"}
								display={{ base: "block", md: "none" }}
								fontSize={"14px"}>
								My years of experience working for <br /> different niches,
								especially for start-ups,
								<br /> have made it possible for me to be able <br /> to handle{" "}
								small and large projects on my <br /> own from start to finish
								utilizing my <br /> creativity at each step to deliver quality
								<br />
								work. I handle my jobs professionally and
								<br /> incorporate fun as much as possible.
							</Text>
						</Box>
					</Flex>
				</Box>
				<Box ml={"7rem"} display={{ base: "none", md: "block" }}>
					<Image
						src={AugustImg}
						alt="Image of Ambrose Ijeoma Augustina,"
						width={"100%"}
					/>
				</Box>
			</Box>
			<Box ml={{ md: "3rem", base: "1rem" }}>
				<Heading
					bgGradient={{
						md: "linear( to-r, #393939, #403c3a,#e07b5b,#ff8762,#ff8762 ,#ff8762   )",
						base: "linear( to-r, #393939,  #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )",
					}}
					bgClip={"text"}
					fontSize={{ base: "24px", md: "48px" }}>
					My approach to design
				</Heading>
				<Text
					color="#7f7e7e"
					mt={"2rem"}
					mb={"1rem"}
					fontSize={"16px"}
					display={{ base: "none", md: "block" }}>
					In my approach to design, I focus on creating things that look great
					and work well. I put the user at the center of <br /> everything,
					making sure every detail serves a purpose. It's like blending beauty
					with usefulness. I care about <br /> understanding what people need
					and keep improving until I get it just right. I like to get involved
					in the messy work, <br /> design sprints, analyze KPIs, OKR, roadmaps,
					take ownership of new projects, give and receive feedback which is{" "}
					<br /> required to create successful business outcomes. My goal is to
					make designs that not only catch the eye but are <br />
					equitable, inclusive and also make using them a breeze. I'm all about
					using creativity and a deep understanding of <br /> what people want
					to craft digital experiences that feel real and meaningful. My design
					approach is more than just <br /> a process; it's a careful
					observation of problems and creating profitable solutions for both
					users and businesses
				</Text>

				{/* Mobile view */}
				<Text
					color="#7f7e7e"
					mt={"2rem"}
					mr={43}
					mb={"1rem"}
					fontSize={"14px"}
					display={{ base: "block", md: "none" }}>
					In my approach to design, I focus on creating things that look great
					and work well. I put the user at the center of everything, making sure
					every detail serves a purpose. It's like blending beauty with
					usefulness. I care about understanding what people need and keep
					improving until I get it just right. I like to get involved in the
					messy work, design sprints, analyze KPIs, OKR, roadmaps, take
					ownership of new projects, give and receive feedback which is required
					to create successful business outcomes. My goal is to make designs
					that not only catch the eye but are equitable, inclusive and also make
					using them a breeze. I'm all about using creativity and a deep
					understanding of what people want to craft digital experiences that
					feel real and meaningful. My design approach is more than just a
					process; it's a careful observation of problems and creating
					profitable solutions for both users and businesses.
				</Text>
			</Box>
			<Box ml={{ md: "3rem", base: "1rem" }}>
				<Heading
					mt={{ md: "4rem", base: "2rem" }}
					bgGradient="linear( to-r, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762, #ff8762, #ff8762, #ff8762  )"
					bgClip={"text"}
					fontSize={{ md: "48px", base: "24px" }}>
					My Certifications
				</Heading>
				<Box
					display={"flex"}
					flexDir={{ md: "row", base: "column" }}
					justifyContent={"space-between"}
					mt={"2rem"}
					mr={{ md: "2rem", base: "2rem" }}>
					<Box display={"flex"} alignItems={"center"}>
						<Image src={GoogleIcon} alt="Google Icon" width={"100%"} />
						<Heading
							fontSize={{ md: "20px", base: "14px" }}
							ml={".5rem"}
							color={"#464646"}>
							Google UX design Certifications
						</Heading>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						m={{ base: "2rem 0", md: "0 0" }}>
						<Image src={PrexelsIcon} alt="prexels Icon" width={"100%"} />
						<Heading fontSize={{ md: "20px", base: "14px" }} ml={".5rem"}>
							School of design
						</Heading>
					</Box>
					<Box display={"flex"} alignItems={"center"}>
						<Image src={UvaIcon} alt="Ui/Ux Icon" width={"100%"} />
						<Heading fontSize={{ md: "20px", base: "14px" }} ml={".5rem"}>
							Design thinking for innovation (Coursera)
						</Heading>
					</Box>
				</Box>
			</Box>
			<Heading
				m={{ base: "2rem 0", md: "2rem 0" }}
				ml={{ base: "1rem", md: "3rem" }}
				fontSize={{ md: "20px", base: "14px" }}>
				Motion design, Illustration and 3D design ( ongoing)
			</Heading>
		</Container>
	);
};

export default Little;
