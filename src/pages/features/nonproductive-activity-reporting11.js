import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box, Image, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"features/nonproductive-activity-reporting11"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header />
		<Section
			padding="180px 0 120px 0"
			background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)"
			lg-padding="100px 0 30px 0"
			md-padding="100px 0 0px 0"
			sm-padding="80px 0 0px 0"
		>
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="50%"
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
						padding="0px 10px 0px 0px"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						lg-text-align="center"
					>
						Screen capture
						<br />
						{"\n\n\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Take screnshots at a specified interval
							<br />
							{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Take screenshot at changing active window or web page
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Special monitoring: take screenshots when a specific application (web-site) is running{"\n\n"}
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							See all screenshots taken by users with "PrtSc" button.{"\n\n\n\n"}
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					{"    "}
					<Link
						href="/demo-request"
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
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						margin="36px 0px 0px 0px"
						hover-background="#409EEB"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-font="600 16px/22px --fontFamily-googleInter"
						sm-padding="16px 20px 16px 20px"
						md-padding="16px 26px 16px 26px"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%" lg-width="100%">
					<Override slot="StackItemContent" position="relative" lg-align-items="center" lg-justify-content="center" />
					{"        "}
					<Image
						width="803px"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						md-width="400px"
						position="absolute"
						right="-115px"
						left="auto"
						top="-60px"
						bottom="auto"
						lg-width="500px"
						lg-position="relative"
						lg-top="0px"
						lg-right="auto"
						md-top="0px"
						md-right="auto"
						sm-position="relative"
						lg-bottom="auto"
						lg-left="auto"
						md-left="auto"
						md-bottom="auto"
						sm-bottom="auto"
						sm-left="auto"
						sm-right="auto"
						sm-top="0px"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
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
						<Strong
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Take screenshots
						</Strong>
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							StaffCop can take screenshots at the specified interval or by changing active window (web page). If the second option us enabled, a screenshot is taken each time when a user switches between applications or web-pages, for example from MS Word to Thunderbird or from one Firefox tab to another.
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/82.png?v=2021-02-03T07:59:19.244Z" />
					</Box>
					{"            "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							You can get a list of screenshots taken for a specific application, user, PC, web-site or department. If a user has two screens, for a example a notepad with connected extetnal monitor, screenshots will be taken from both screens and merged to a single file.
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/81.png?v=2021-02-03T08:03:38.898Z" />
					</Box>
					{"            "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							You can download a specific screenshot or all screenshots packed in a single ZIP-archive. Or you can view them in StaffCop admin panel with either manual or automatic scrolling.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/83.png?v=2021-02-03T08:07:43.208Z" />
					</Box>
					{"            "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Besides common options of taking screenshots as a specified interval and at the moment the active window is changed there is an option called "Special monitoring". If we specify an aplication or website for special momnitoring, screenshots will be taken with a higher frequency all the time when this application is running or this web-site is open.{"\n\n"}
							<br />
							{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/84.png?v=2021-02-03T08:08:50.390Z" />
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
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
						<Strong>
							See all screenshots taken by users with "PrtSc" button
						</Strong>
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							StaffCop allows to get a list of screenshots that were taken by a user on a workstation. This function is very useful when it comes to information security issues, as users may take screenshot of sensitive data in order to get it outside of the corporate network as an attached image (or as an image inside a document). Administrator can get notifications each time a user takes a screenshot.
							<br />
							{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/85.png?v=2021-02-03T08:12:09.991Z" />
					</Box>
					{"            "}
				</StackItem>
				{"    "}
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