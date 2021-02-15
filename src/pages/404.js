import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				404 - Not page
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.EmbedHTML />
		<Components.Header>
			<Override slot="link2">
				Cases
			</Override>
		</Components.Header>
		<Section
			padding="180px 0 100px 0"
			background="linear-gradient(180deg,rgba(2, 2, 2, 0.22) 0%,rgba(02, 02, 02, 0.35) 46.88%,#020202 100%),#020202 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/ebuchayasetka.svg?v=2020-10-21T00:06:31.897Z) center -693px/cover repeat"
			hd-background="#020202 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/ebuchayasetka.svg?v=2020-10-21T00:06:31.897Z) center -693px/2060px repeat"
			width="100%"
			overflow-y="hidden"
			overflow-x="hidden"
			sm-padding="70px 0 70px 0"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" position="relative" />
			<Stack width="100%">
				{"    "}
				<StackItem
					width="40%"
					display="flex"
					margin="0px 10% 0px 5%"
					sm-width="100%"
					sm-order="2"
				>
					<Override slot="StackItemContent" position="relative" sm-align-items="center" sm-justify-content="center" />
					<Image
						width="200%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/migalkiauf.svg?v=2020-10-20T11:13:38.372Z"
						position="absolute"
						z-index="1"
						left="-250px"
						top="-70px"
						right="auto"
						bottom="auto"
						transform="rotateZ(45deg)"
						nout-left="-150px"
						nout-top="-47px"
						md-left="-100px"
						md-top="-20px"
						sm-top="0px"
					/>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/robocop_PNG28%201.png?v=2020-11-04T16:31:28.931Z" md-width="100%" position="relative" z-index="2" />
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem width="45%" display="flex" sm-width="100%" sm-order="1">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						sm-align-items="center"
					/>
					<Text
						font="--headline1"
						color="#ffffff"
						letter-spacing="-0.01em"
						margin="8px 0px 16px 0px"
						md-width="80%"
						md-font="normal 700 110px/169px Inter, sans-serif"
						sm-font="normal 700 70px/169px Inter, sans-serif"
						sm-text-align="center"
					>
						404{"\n\n"}
					</Text>
					<Text
						font="--headline3"
						color="#ffffff"
						letter-spacing="-0.01em"
						margin="8px 0px 0px 0px"
						md-width="80%"
						sm-font="normal 300 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
					>
						That page can't be found{"\n\n"}
					</Text>
					<Text
						font="normal 300 18px/160% --fontFamily-googleInter"
						color="#ffffff"
						letter-spacing="-0.01em"
						margin="8px 0px 16px 0px"
						md-width="80%"
						sm-font="normal 300 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
					>
						Let's get you back somewhere safe{"\n\n"}
					</Text>
					<Link
						href="#"
						position="relative"
						z-index="2"
						color="#ffffff"
						font="600 18px/22px --fontFamily-googleInter"
						text-decoration-line="initial"
						padding="16px 38px 16px 38px"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						border-radius="40px"
						background="--color-primary"
						border-width="1px"
						border-style="solid"
						margin="20px 0px 115px 0px"
						hover-background="#409EEB"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-font="600 16px/22px --fontFamily-googleInter"
						sm-padding="16px 10px 16px 10px"
						border-color="#2165FF"
						sm-text-align="center"
						sm-margin="20px 0px 0px 0px"
					>
						Take me home
					</Link>
					{"        "}{"    "}
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
		<RawHtml>
			<script place={"endOfBody"} rawKey={"602addb1c8a45a16c77f897e"}>
				{"\t(function (i, s, o, g, r, a, m) {\n\t\ti['GoogleAnalyticsObject'] = r;\n\t\ti[r] = i[r] || function () {\n\t\t\t(i[r].q = i[r].q || []).push(arguments);\n\t\t}, i[r].l = 1 * new Date();\n\t\t\n\t\ta = s.createElement(o),\n\t\t\tm = s.getElementsByTagName(o)[0];\n\t\ta.async = 1;\n\t\ta.src = g;\n\t\tm.parentNode.insertBefore(a, m);\n\t})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');\n\tga('create', 'UA-6450776-3', 'auto');\n\tga('send', 'pageview');"}
			</script>
		</RawHtml>
	</Theme>;
});