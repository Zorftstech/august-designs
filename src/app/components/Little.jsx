"use client";

import Image from "next/image";
import AugustImg from "../assets/AugustImg.png";
import GoogleIcon from "../assets/googleIcon.png";
import UiUxIcon from "../assets/UIUX.png";
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
		<Container maxWidth="100%" mt={"5rem"}>
			<Box maxW="fit-content" display={"flex"}>
				<Box
					mt={{ md: "13em", base: "5rem" }}
					ml={{ md: "3rem", base: "1rem" }}>
					<Flex flexDir="column">
						<Heading
							bgGradient={{
								md: "linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )",
								base: "linear( to-r, #393939,  #403c3a,#e07b5b,#ff8762, #ff8762, #ff8762  )",
							}}
							bgClip={"text"}
							fontSize={{ base: "24px", md: "48px" }}>
							A little about me
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
							almost everyone I have worked with call me August. I didn't start{" "}
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
								call me August. I didn't start <br />
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

						<Heading
							bgGradient={{
								md: "linear( to-r, #393939, #393939, #393939, #403c3a,#e07b5b,#ff8762  )",
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
							I believe that design should be user focused, when a product can{" "}
							<br />
							be useful, enjoyable and equitable by users companies and <br />
							businesses would have a return of investments. Understanding{" "}
							<br /> that enables me to create features that users will enjoy
							and also <br />
							generate revenue for my company or clients. I Strive for designs{" "}
							<br />
							that are intuitive, user-friendly, and easy to understand.
							Avoiding <br /> unnecessary complexity that could confuse users.
						</Text>

						{/* Mobile view */}
						<Text
							color="#7f7e7e"
							mt={"2rem"}
							mb={"1rem"}
							fontSize={"14px"}
							display={{ base: "block", md: "none" }}>
							I believe that design should be user focused, when a product can{" "}
							<br />
							be useful, enjoyable and equitable by users companies and <br />
							businesses would have a return of investments. Understanding{" "}
							<br /> that enables me to create features that users will enjoy
							and also <br />
							generate revenue for my company or clients. I Strive for designs{" "}
							<br />
							that are intuitive, user-friendly, and easy to understand.
							Avoiding <br /> unnecessary complexity that could confuse users.
						</Text>
					</Flex>
				</Box>
				<Box ml={"7rem"} display={{ base: "none", md: "block" }}>
					<Image src={AugustImg} width={"100%"} />
				</Box>
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
					mr={{ md: "13rem", base: "2rem" }}>
					<Box display={"flex"} alignItems={"center"}>
						<Image src={GoogleIcon} width={"100%"} />
						<Text
							fontSize={{ md: "20px", base: "14px" }}
							fontWeight={"700px"}
							ml={"1rem"}
							color={"#464646"}>
							Google UX design course
						</Text>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						m={{ base: "2rem 0", md: "0 0" }}>
						<Image src={UiUxIcon} width={"100%"} />
						<Text
							fontSize={{ md: "20px", base: "14px" }}
							fontWeight={"700px"}
							ml={"1rem"}>
							UI/UX design course
						</Text>
					</Box>
					<Box display={"flex"} alignItems={"center"}>
						<Image src={PrexelsIcon} width={"100%"} />
						<Text
							fontSize={{ md: "20px", base: "14px" }}
							fontWeight={"700px"}
							ml={"1rem"}>
							School of design
						</Text>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default Little;
