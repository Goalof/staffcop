import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box, Hr, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Support
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2020-11-28T11:58:11.223Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header />
		<Section padding="103px 0 18px 0" lg-padding="100px 0px 18px 0px" md-padding="100px 0px 18px 0px" sm-padding="80px 0px 18px 0px">
			<Override
				slot="SectionContent"
				max-width="1100px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/gfjkjkljkl.nbmbv.png?v=2020-11-04T15:35:13.162Z) 100% 100% /cover no-repeat scroll padding-box"
				padding="59px 0px 66px 72px"
				width="100%"
				border-radius="6px"
				height="267px"
				justify-content="flex-end"
				lg-padding="40px 0px 50px 0px"
				lg-width="95%"
			/>
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					lg-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						lg-align-items="center"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 0px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						lg-text-align="center"
						color="#ffffff"
					>
						Support{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 0px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
					>
						Our vision
					</Text>
					<Text margin="30px 0px 9px 0px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
						Here you can find guides on installation, upgrades, faq and other relevant information.{" "}
						<Link href="docs.staffcop.com" text-decoration-line="initial" color="#1465FF" hover-text-decoration-line="underline">
							docs.staffcop.com
						</Link>
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
					>
						Headquarters
					</Text>
					<Text margin="30px 0px 9px 0px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
						Russia, Novosibirsk, Koptug Road 4,{" "}
						<br />
						Sobolev Institute of Mathematics
					</Text>
					<Box display="flex">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							padding="18px 0px 0px 0px"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							5 AM – 2 PM (GMT), Monday-Friday;
						</Text>
					</Box>
					<Box display="flex">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							padding="18px 0px 0px 0px"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							in the ticket system{" "}
							<Link href="help.staffcop.com" text-decoration-line="initial" color="--primary" hover-text-decoration-line="underline">
								help.staffcop.com
							</Link>
						</Text>
					</Box>
					<Box display="flex">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							padding="18px 0px 0px 0px"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							by e-mail{" "}
							<Link href="malito:support@staffcop.com" text-decoration-line="initial" color="--primary" hover-text-decoration-line="underline">
								support@staffcop.com
							</Link>
						</Text>
					</Box>
					<Box display="flex">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							padding="18px 0px 0px 0px"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							tickets are processed within 24 hours (weekdays)
						</Text>
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Hr
				width="100%"
				margin="70px 0px 70px 0px"
				border-color="rgba(237, 237, 237, 1)"
				sm-margin="30px 0px 30px 0px"
				md-margin="30px 0px 30px 0px"
			/>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0" sm-padding="0px 0 0px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				<StackItem
					width="50%"
					display="flex"
					sm-width="100%"
					md-width="100%"
					lg-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" />
					<Text
						margin="0px 0px 46px 0px"
						font="400 18px/160% --fontFamily-googleInter"
						color="#555"
						sm-font="400 16px/22px --fontFamily-googleInter"
						sm-margin="0px 0px 0px 0px"
					>
						If you meet any questions or troubles, don’t hesitate to contact our support team – our specialists are always glad to help you.{"\n"}
						<br />
						If you can’t find the answer to your question in the documentation – open a ticket in the support center:{"\n\n"}
					</Text>
					<Box>
						<Link
							href="#"
							font="600 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							padding="14px 29px 14px 29px"
							border-width="0px"
							border-color="--color-primary"
							border-radius="40px"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							hover-background="--color-primary"
							hover-color="#ffffff"
							text-align="center"
							nout-padding="13px 15px 13px 15px"
							lg-margin="0px 8px 0px 0px"
							sm-display="none"
							margin="0px 24px 0px 0px"
							background="--color-primary"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						>
							Open new ticket{"\n\n"}
						</Link>
						<Link
							href="#"
							font="600 18px/22px --fontFamily-googleInter"
							color="--primary"
							text-decoration-line="initial"
							padding="13px 29px 13px 29px"
							border-width="2px"
							border-style="solid"
							border-color="--color-primary"
							border-radius="40px"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							hover-background="--color-primary"
							hover-color="#ffffff"
							text-align="center"
							nout-padding="13px 15px 13px 15px"
							lg-margin="0px 8px 0px 0px"
							sm-display="none"
						>
							Try for free{"\n\n"}
						</Link>
					</Box>
					{"            "}
				</StackItem>
				{"    "}{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Components.Form />
			<Components.Footer>
				<Override slot="text">
					Russia, Novosibirsk, Koptug Road 4, Sobolev Institute of Mathematics
				</Override>
			</Components.Footer>
		</Section>
		<Section
			background="#ffffff"
			padding="30px 0 30px 0"
			border-width="1px 0px 0px 0px"
			border-style="solid"
			border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="53%" display="flex" lg-width="85%">
					{"        "}
					<Text
						font="normal 400 15px/24px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#999999"
						md-font="normal 400 13px/22px --fontFamily-googleInter"
						sm-font="normal 400 12px/17px --fontFamily-googleInter"
					>
						© Atom Security LLC, 2001–2020. All rights reserved. All trademarks are the property of their respective owners.{"\n\n\n\n\n        "}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="47%" display="flex" lg-width="15%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" md-justify-content="center" />
					{"        "}
					<Link
						id="gobot"
						href="#shapka"
						color="--primary"
						text-decoration-line="initial"
						padding="0px 0px 0px 0px"
						target="_blank"
						font="normal 600 25px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						display="flex"
						lg-font="normal 400 24px/1.5 --fontFamily-sans"
						sm-width="auto"
						sm-text-align="center"
						border-radius="40px"
						text-align="center"
						transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
						hover-box-shadow="0 10px 10px -6px rgba(0,0,0,.24)"
						hover-transform="translateY(-2px)"
						cursor="pointer"
						align-items="center"
						border-width="2px"
						border-style="solid"
						border-color="--color-primary"
						md-padding="0px 0px 0px 0px"
					>
						<Image width="18px" height="18px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Icon.svg?v=2020-10-21T00:34:26.772Z" padding="12px 13px 14px 13px" />
					</Link>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});