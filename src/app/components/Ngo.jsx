"use client";

import Image from "next/image";
import section1 from "../assets/ngo/section1.png";
import section2 from "../assets/ngo/section2.png";
import section3 from "../assets/ngo/section3.png";
import section4 from "../assets/ngo/section4.png";
import section5 from "../assets/ngo/section5.png";
import section6 from "../assets/ngo/section6.png";
import section7 from "../assets/ngo/section7.png";
import section8 from "../assets/ngo/section8.png";
import section9 from "../assets/ngo/section9.png";
import section10 from "../assets/ngo/section10.png";
import section11 from "../assets/ngo/section11.png";
import section12 from "../assets/ngo/section12.png";
import section13 from "../assets/ngo/section13.png";
import section14 from "../assets/ngo/section14.png";
import section15 from "../assets/ngo/section15.png";
import section16 from "../assets/ngo/section16.png";
import section17 from "../assets/ngo/section17.png";
import section18 from "../assets/ngo/section18.png";
import section19 from "../assets/ngo/section19.png";

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
} from "@chakra-ui/react";

const Ngo = () => {
	return (
		<Box
			m={"8rem 0"}
			ml={{ md: "3.5rem", base: "auto" }}
			mr={{ base: "auto", md: "0" }}>
			<Box>
				<Image src={section1} alt="section-1" />
			</Box>
			<Box>
				<Image src={section2} alt="section-2" />
			</Box>
			<Box>
				<Image src={section3} alt="section-3" />
			</Box>
			<Box>
				<Image src={section4} alt="section-4" />
			</Box>
			<Box>
				<Image src={section5} alt="section-5" />
			</Box>
			<Box>
				<Image src={section6} alt="section-6" />
			</Box>
			<Box>
				<Image src={section7} alt="section-7" />
			</Box>
			<Box>
				<Image src={section8} alt="section-8" />
			</Box>
			<Box>
				<Image src={section9} alt="section-9" />
			</Box>
			<Box>
				<Image src={section10} alt="section-10" />
			</Box>
			<Box>
				<Image src={section11} alt="section-11" />
			</Box>
			<Box>
				<Image src={section12} alt="section-12" />
			</Box>
			<Box>
				<Image src={section13} alt="section-13" />
			</Box>
			<Box>
				<Image src={section14} alt="section-14" />
			</Box>
			<Box>
				<Image src={section15} alt="section-15" />
			</Box>
			<Box>
				<Image src={section16} alt="section-16" />
			</Box>
			<Box>
				<Image src={section17} alt="section-17" />
			</Box>
			<Box>
				<Image src={section18} alt="section-18" />
			</Box>
			<Box>
				<Image src={section19} alt="section-19" />
			</Box>
		</Box>
	);
};

export default Ngo;
