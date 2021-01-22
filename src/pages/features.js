import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"features"} />
		<Helmet>
			<title>
				Features
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2020-11-28T11:58:11.223Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header>
			<Override slot="link1" color="--primary" />
		</Components.Header>
		<Section padding="200px 0 140px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)" lg-padding="140px 0 70px 0" md-padding="100px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" sm-align-items="center" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
					/>
					{"        "}
					<Text font="--headline2" margin="0px 0px 16px 0px" display="inline-block" md-font="normal 700 30px/40px Inter, sans-serif">
						Features
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#555"
						md-font="normal 400 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
					>
						Activity Monitoring, User Behavior Analytics, Productivity Optimization & Insider Threat Detection in a Single Platform
					</Text>
					{"    "}
					<Link
						href="/request-demo/"
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
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" position="relative" sm-align-items="center" sm-justify-content="center" />
					{"        "}
					<Image
						width="803px"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						md-width="400px"
						position="absolute"
						right="-115px"
						left="auto"
						top="-115px"
						bottom="auto"
						lg-width="500px"
						lg-position="absolute"
						lg-top="-35px"
						lg-right="-50px"
						md-top="0px"
						md-right="-70px"
						sm-position="relative"
						sm-left="auto"
						sm-right="auto"
						sm-top="0px"
						sm-bottom="auto"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section padding="0px 0 0px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center 1300px/3610px no-repeat scroll padding-box">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Section padding="24px 0 124px 0" sm-padding="24px 0 50px 0">
				<Override slot="SectionContent" max-width="1200px" />
				<Stack margin="0px 0px 0px 0px">
					{"    "}
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="live-employee-desktop"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/browser-internet-web-network-window-app-icon%201%20(1).svg?v=2020-11-14T19:20:40.204Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Live view & history playback
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Real-time streaming of user activity through the Teramind dashboard
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="employee-internet-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/browser-internet-web-network-window-app-icon%201.svg?v=2020-11-14T11:50:25.162Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Website monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track all web activity including file uploads
									<br />
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="e-mail-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Postage,%20Stamp,%20Mail,%20Email%201.svg?v=2020-11-14T11:50:27.691Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									E-mail monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Monitor incoming and outgoing employee email
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="file-activity-monitoring-software"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="42px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/keyyyyyy.svg?v=2020-11-14T11:50:26.499Z" margin="0px 0px 8px 5px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Keystroke logging
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Full keystroke and copy/paste logging
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="printed-document-tracking"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/folder-circle.1%201s.svg?v=2020-11-14T11:50:28.922Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									File transfer tracking
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track files on local drive or network shares
									<br />
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="printed-document-tracking"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/printer-print-button-circle%201.svg?v=2020-11-14T11:50:27.692Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Printed document tracking
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track files on local drive or network shares
									<br />
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="optical-character-recognition-ocr"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/text-circle%201.svg?v=2020-11-14T11:50:28.847Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Optical character recognition
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Search with simple text, keyword, wildcard or RegEx to find the exact information you need.
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="smart-rules-and-alerts"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bell-notification-circles.svg?v=2020-11-14T11:50:25.401Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Smart rules & alerts
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Configure an alert on any user behavior, including web, email, keystrokes, file transfers, instant messaging, and more
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="productivity-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Graph%20,%20Analitycs%201.svg?v=2020-11-14T11:50:26.500Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Productivity monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Monitor all user activity covering 12+ system objects like: web pages, apps, email, file transfers, instant messaging, social media...
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="app-usageapplication-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/notebook-laptop-circle%201%20(1).svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									App usage/application monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track application usage. Whitelist or blacklist apps
									<br />
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="network-user-activitymonitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cursor-click-select-circle%202.svg?v=2020-11-14T12:10:38.785Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Network monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Monitor all network actitvity and view all connected computers, session durations, destination IP addresses, connection protocols used, root processes and more
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="instant-message-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/user-circle%201.svg?v=2020-11-14T12:10:38.776Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Instant message monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Monitor and react to any chat conversation, whether on a web or application-based platform.
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="none"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="social-media-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="10px 20px 20px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/eye-circle%201.svg?v=2020-11-14T12:10:38.771Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Social media monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									View employee social media activities like posts, comments, updates
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="none"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="remote-desktop-control"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="10px 20px 20px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/notebook-laptop-circle%201%20(1).svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Remote desktop control
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Control sessions from your browser or tablet. Instantly block a user's keyboard or mouse
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="none"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="active-vs-idle-time-analysis"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="10px 20px 20px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/user-circle%201.svg?v=2020-11-14T12:10:38.776Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									User & entity behavior analytics
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Real-time behavior anomaly and threat detection, privileged user monitoring, data loss prevention
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="employee-productivity-tracking"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/wifi-network-signal%201.svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Internet activity monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track employee internet usage across your departments{" "}
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="citrix-session-recording"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/star-favorite-circle.1%201.svg?v=2020-11-14T12:10:38.774Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Privileged user monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Privileged users have access to your core IT systems, network, applications and data.
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="employee-monitoring-software"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/search.1%202.svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Remote employee monitoring

ring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Privileged users have access to your core IT systems, network, applications and data.
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="nonproductive-activity-reporting"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/power-turn-on%201.svg?v=2020-11-14T12:10:38.771Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Nonproductive activity reporting
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Customized lists of websites, activities, applications that fit into both productive and nonproductive categories

.
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="configurable-monitoring-profiles"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/setting-circle.4%201.svg?v=2020-11-14T12:10:38.773Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Configurable monitoring profiles
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Teramind provides highly-granular, customizable monitoring profiles that allow you to define what actions to monitor, when to monitor, and who to monitor
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="template-based-scheduling"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/eye-circle%201.svg?v=2020-11-14T12:10:38.771Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Template based scheduling
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Full employee schedule visibility. Track time & money spent on particular projects
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="flex"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="session-recording-and-metadata"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/list-chekmark-circle%201.svg?v=2020-11-14T12:10:38.785Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Session recording & metadata
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									In addition to recording desktops as a video stream, Teramind records and indexes applications used, websites visited, file activity, keystrokes, e-mails, and more
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Components.Footer />
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