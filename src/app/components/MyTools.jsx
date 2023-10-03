"use client";

import Image from "next/image";
import JiraIcon from "../assets/atlassianJira.png";
import DiscordIcon from "../assets/discord.png";
import FigmaIcon from "../assets/figma.png";
import DocsIcon from "../assets/googledocs.png";
import MeetIcon from "../assets/googleMeet.png";
import InvisionIcon from "../assets/Invision.png";
import MiroIcon from "../assets/miroLogo.png";
import PhotoshopIcon from "../assets/photoshop.png";
import PngClipartIcon from "../assets/pngClipart.png";
import SlackIcon from "../assets/slack.png";
import TrelloIcon from "../assets/trelloMacosBigs.png";
import ZeplinIcon from "../assets/zeplinMacosBigsur.png";

import PhotoshopsIcon from "../assets/ToolsIcon/photoshops.png";
import JirasIcon from "../assets/ToolsIcon/atlassianJiras.png";
import DiscordsIcon from "../assets/ToolsIcon/discords.png";
import FigmasIcon from "../assets/ToolsIcon/figmas.png";
import DocssIcon from "../assets/ToolsIcon/googledocss.png";
import MeetsIcon from "../assets/ToolsIcon/googleMeets.png";
import InvisionsIcon from "../assets/ToolsIcon/Invisions.png";
import MirosIcon from "../assets/ToolsIcon/miroLogos.png";
import PngClipartsIcon from "../assets/ToolsIcon/pngCliparts.png";
import SlacksIcon from "../assets/ToolsIcon/slacks.png";
import TrellosIcon from "../assets/ToolsIcon/trelloMacosBigss.png";
import ZeplinsIcon from "../assets/ToolsIcon/zeplinMacosBigsurs.png";

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

const MyTools = () => {
	return (
		<Box mt={{ md: "7rem", base: "3rem" }}>
			<Box
				width={{ md: "1036px", base: "312px" }}
				bgColor={"rgb(225,135,98,0.08)"}
				borderRadius={"30px"}
				p={{ md: "4rem", base: "2rem" }}
				m={"0 auto"}>
				<Heading fontSize={{ md: "40px", base: "24px" }} textAlign={"center"}>
					My Tools
				</Heading>
				<Text
					color={"#7f7e7e"}
					textAlign={"center"}
					mt={"1rem"}
					mb={"3rem"}
					fontSize="24px"
					display={{ md: "block", base: "none" }}>
					While working on projects the following tools help me <br />{" "}
					throughout my design process and communicate with <br /> my team
				</Text>

				{/* Mobile view */}

				<Text
					color={"#7f7e7e"}
					textAlign={"center"}
					fontSize="14px"
					mt={"1rem"}
					mb={"1rem"}
					display={{ md: "none", base: "block" }}>
					While working on projects the following tools help me throughout my
					design process and communicate with my team
				</Text>
				<Box
					display={"grid"}
					ml={{ md: "2rem", base: "0" }}
					gridTemplateColumns={{ md: "repeat(4, 1fr)", base: "repeat(2, 1fr)" }}
					grid-template-rows="repeat(3, 1fr)"
					gridGap={{ md: "2rem 3rem", base: ".5rem .5rem" }}>
					<Box
						display={"flex"}
						alignItems={"center"}
						bgColor={"#ffff"}
						width={"fit-content"}
						p={{ md: ".5rem 1.5rem", base: ".5rem .5rem" }}
						borderRadius={"30px"}>
						<Box display={{ md: "block", base: "none" }}>
							<Image src={FigmaIcon} alt="figma icon" />
						</Box>
						<Box display={{ md: "none", base: "block" }}>
							<Image src={FigmasIcon} alt="figma icon" />
						</Box>
						<Text
							color={"#7f7e7e"}
							fontSize={{ md: "16px", base: "14px" }}
							ml={{ md: ".5rem", base: ".3rem" }}>
							Figma
						</Text>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						bgColor={"#ffff"}
						width={"fit-content"}
						p={{ md: ".5rem 1.5rem", base: ".5rem .5rem" }}
						borderRadius={"30px"}>
						<Box display={{ md: "block", base: "none" }}>
							<Image src={PhotoshopIcon} alt="photoshop icon" />
						</Box>
						<Box display={{ md: "none", base: "block" }}>
							<Image src={PhotoshopsIcon} alt="photoshop icon" />
						</Box>

						<Text
							color={"#7f7e7e"}
							fontSize={{ md: "16px", base: "14px" }}
							ml={{ md: ".5rem", base: ".3rem" }}>
							Photoshop
						</Text>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						bgColor={"#ffff"}
						width={"fit-content"}
						p={{ md: ".5rem 1.5rem", base: ".5rem .5rem" }}
						borderRadius={"30px"}>
						<Box display={{ md: "block", base: "none" }}>
							<Image src={MeetIcon} alt="meet icon" />
						</Box>
						<Box display={{ md: "none", base: "block" }}>
							<Image src={MeetsIcon} alt="meet icon" />
						</Box>
						<Text
							color={"#7f7e7e"}
							fontSize={{ md: "16px", base: "14px" }}
							ml={{ md: ".5rem", base: ".3rem" }}>
							Meet
						</Text>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						bgColor={"#ffff"}
						width={"fit-content"}
						p={{ md: ".5rem 1.5rem", base: ".5rem .5rem" }}
						borderRadius={"30px"}>
						<Box display={{ md: "block", base: "none" }}>
							<Image src={TrelloIcon} alt="trello icon" />
						</Box>
						<Box display={{ md: "none", base: "block" }}>
							<Image src={TrellosIcon} alt="trello icon" />
						</Box>
						<Text
							color={"#7f7e7e"}
							fontSize={{ md: "16px", base: "14px" }}
							ml={{ md: ".5rem", base: ".3rem" }}>
							Trello
						</Text>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						bgColor={"#ffff"}
						width={"fit-content"}
						p={{ md: ".5rem 1.5rem", base: ".5rem .5rem" }}
						borderRadius={"30px"}>
						<Box display={{ md: "block", base: "none" }}>
							<Image src={DocsIcon} alt="google forms icon" />
						</Box>
						<Box display={{ md: "none", base: "block" }}>
							<Image src={DocssIcon} alt="google forms icon" />
						</Box>
						<Text
							color={"#7f7e7e"}
							fontSize={{ md: "16px", base: "14px" }}
							ml={{ md: ".5rem", base: ".3rem" }}>
							Forms
						</Text>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						bgColor={"#ffff"}
						width={"fit-content"}
						p={{ md: ".5rem 1.5rem", base: ".5rem .5rem" }}
						borderRadius={"30px"}>
						<Box display={{ md: "block", base: "none" }}>
							<Image src={DiscordIcon} alt="discord icon" />
						</Box>
						<Box display={{ md: "none", base: "block" }}>
							<Image src={DiscordsIcon} alt="discord icon" />
						</Box>
						<Text
							color={"#7f7e7e"}
							fontSize={{ md: "16px", base: "14px" }}
							ml={{ md: ".5rem", base: ".3rem" }}>
							Discord
						</Text>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						bgColor={"#ffff"}
						width={"fit-content"}
						p={{ md: ".5rem 1.5rem", base: ".5rem .5rem" }}
						borderRadius={"30px"}>
						<Box display={{ md: "block", base: "none" }}>
							<Image src={SlackIcon} alt="slack icon" />
						</Box>
						<Box display={{ md: "none", base: "block" }}>
							<Image src={SlacksIcon} alt="slack icon" />
						</Box>
						<Text
							color={"#7f7e7e"}
							fontSize={{ md: "16px", base: "14px" }}
							ml={{ md: ".5rem", base: ".3rem" }}>
							Slack
						</Text>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						bgColor={"#ffff"}
						width={"fit-content"}
						p={{ md: ".5rem 1.5rem", base: ".5rem .5rem" }}
						borderRadius={"30px"}>
						<Box display={{ md: "block", base: "none" }}>
							<Image src={MiroIcon} alt="miro icon" />
						</Box>
						<Box display={{ md: "none", base: "block" }}>
							<Image src={MirosIcon} alt="miro icon" />
						</Box>
						<Text
							color={"#7f7e7e"}
							fontSize={{ md: "16px", base: "14px" }}
							ml={{ md: ".5rem", base: ".3rem" }}>
							Miro
						</Text>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						bgColor={"#ffff"}
						width={"fit-content"}
						p={{ md: ".5rem 1.5rem", base: ".5rem .5rem" }}
						borderRadius={"30px"}>
						<Box display={{ md: "block", base: "none" }}>
							<Image src={ZeplinIcon} alt="zeplin icon" />
						</Box>
						<Box display={{ md: "none", base: "block" }}>
							<Image src={ZeplinsIcon} alt="zeplin icon" />
						</Box>
						<Text
							color={"#7f7e7e"}
							fontSize={{ md: "16px", base: "14px" }}
							ml={{ md: ".5rem", base: ".3rem" }}>
							Zeplin
						</Text>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						bgColor={"#ffff"}
						width={"fit-content"}
						p={{ md: ".5rem 1.5rem", base: ".5rem .5rem" }}
						borderRadius={"30px"}>
						<Box display={{ md: "block", base: "none" }}>
							<Image src={InvisionIcon} alt="invision icon" />
						</Box>
						<Box display={{ md: "none", base: "block" }}>
							<Image src={InvisionsIcon} alt="invision icon" />
						</Box>
						<Text
							color={"#7f7e7e"}
							fontSize={{ md: "16px", base: "14px" }}
							ml={{ md: ".5rem", base: ".3rem" }}>
							Invision
						</Text>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						bgColor={"#ffff"}
						width={"fit-content"}
						p={{ md: ".5rem 1.5rem", base: ".5rem .5rem" }}
						borderRadius={"30px"}>
						<Box display={{ md: "block", base: "none" }}>
							<Image src={JiraIcon} alt="jira icon" />
						</Box>
						<Box display={{ md: "none", base: "block" }}>
							<Image src={JirasIcon} alt="jira icon" />
						</Box>
						<Text
							display={{ md: "block", base: "none" }}
							color={"#7f7e7e"}
							fontSize={{ md: "16px", base: "14px" }}
							ml={{ md: ".5rem", base: ".3rem" }}>
							Jira
						</Text>
						<Text
							display={{ md: "none", base: "block" }}
							color={"#7f7e7e"}
							fontSize={{ md: "16px", base: "14px" }}
							ml={{ md: ".5rem", base: ".3rem" }}>
							Adobe
						</Text>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						bgColor={"#ffff"}
						width={"fit-content"}
						p={{ md: ".5rem 1.5rem", base: ".5rem .5rem" }}
						borderRadius={"30px"}>
						<Box display={{ md: "block", base: "none" }}>
							<Image src={PngClipartIcon} alt="click up icon" />
						</Box>
						<Box display={{ md: "none", base: "block" }}>
							<Image src={PngClipartsIcon} alt="click up icon" />
						</Box>
						<Text
							color={"#7f7e7e"}
							fontSize={{ md: "16px", base: "14px" }}
							ml={{ md: ".5rem", base: ".3rem" }}>
							Click up
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default MyTools;
