import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Strong, Hr, Box, Span, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"features/employee-monitoring-software"} />
		<Helmet>
			<title>
				Employee Monitoring Software
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2020-11-28T11:58:11.223Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<meta name={"msapplication-TileColor"} content={"#1465FF"} />
		</Helmet>
		<Components.Header />
		<Section
			padding="200px 0 140px 0"
			background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)"
			lg-padding="100px 0 30px 0"
			md-padding="100px 0 0px 0"
			sm-padding="80px 0 0px 0"
		>
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
					<Text
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
					>
						Employee Monitoring Software
					</Text>
					{"    "}
					<Link
						href="/request-demo"
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
					<Override slot="StackItemContent" position="relative" />
					{"        "}
					<Image
						width="803px"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						md-width="400px"
						position="absolute"
						right="-115px"
						left="auto"
						top="-110px"
						bottom="auto"
						lg-width="500px"
						lg-position="absolute"
						lg-top="-35px"
						lg-right="-50px"
						md-top="0px"
						md-right="-70px"
						sm-position="relative"
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
		<Section background="#FFFFFF">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="75%" display="flex" sm-width="100%" nout-width="100%">
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
						What is Employee Monitoring Software?
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="75%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						<Strong>
							Employee monitoring
						</Strong>
						, also known as user activity monitoring (UAM) is used to monitor employee computer activity to identify and stop insider threats, for employee training, to monitor productivity and use results for process optimization with the ultimate goal to increase productivity and reduce or eliminate insider threats. An employee monitoring software tracks all user activity for apps, websites, emails, network etc. while at work. In addition to basic employee monitoring, top-ranking solutions also include insider threat detection, third-party vendor monitoring, data loss prevention, risk management, legal and compliance features as part of their monitoring suite.
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						<Strong>
							Check out Teramind's primer below to learn everything about employee monitoring software.
						</Strong>
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 0px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Some modern employee monitoring tools like Teramind pack workforce productivity optimization, time tracking, project management and other additional value-added features too. This has helped boost the popularity and usefulness of workforce monitoring from its original surveillance and tracking purpose to the territory of business intelligence (BI), HR management, Finance and other enterprise productivity tools. Probably that’s why it's not surprising to see nearly 80% businesses use some form of user monitoring and its powerful productivity features for their day to day decision making, performance reviews, workplace safety, protection from legal liability, and as a defense from sabotage and IP theft.
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr width="98%" margin="50px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section background="#FFFFFF" padding="40px 0 12px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="75%" display="flex" sm-width="100%" nout-width="100%">
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
						Teramind Employee Monitoring Products: Teramind UAM
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="75%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Teramind UAM goes beyond the basic employee tracking functionality and adds intelligent behavior-based analysis to provide actionable insight and automated responses to employee generated threats. It can monitor employees, third-party vendors, contractors, remote and special/privileged users. With its rules and policies, Teramind UAM captures violation incidents as forensic evidence and take action to alert, stop, block and more.
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Teramind UAM can also measures employee productivity, conduct risk analysis, prevent unauthorized data exfiltration and keep track of how employees and third-party vendors access company resources while logged in at work. Finally, in case of a data breach or security incident, Teramind provides comprehensive forensic data and session recordings to identify the employees and vendors who have triggered a rule violation along with their activity footprint with pinpoint accuracy.
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="70px 0 24px 0" sm-padding="24px 0 50px 0">
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							1
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Real-Time Employee Monitoring
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Real-Time Employee Monitoring
							<br />
							Starter lets you monitor all employee activity for system objects like website, applications, social media, IMs. Searches etc. in real-time for Windows, Mac, Virtual PCs and Terminal Servers
						</Text>
					</Box>
					{"    "}
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							2
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							User Behavior Analytics
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Intelligent behavior analysis can detect malicious activity and anomalies that indicate deviation from normal behavioral baseline. Dynamic risk scoring and vulnerability scanning identifies insider activity before they represent a real threat.
							<br />
							<br />
							<br />
						</Text>
					</Box>
					{"    "}
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="13px 0px 13px 0px"
							display="block"
							align-items="center"
							justify-content="center"
							width="48px"
							text-align="center"
						>
							3
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Policy and Rules Engine
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Get started right away with hundreds of pre-built rule templates, activity classification lists and data categories. Create your own policies and rules with an intuitive, visual rule editor. Use natural English, regular expressions and sample conditions to easily define your requirements. Create monitoring profiles for individual employees, groups or departments.
						</Text>
					</Box>
					{"    "}
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							4
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Built-In Productivity Optimization
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Define which apps and websites you consider productive and get in-depth reports on how your employees utilize them. Identify the laggards or high performers with active vs. idle time analysis. Establish a continuous feedback loop to refine and adjust your organizational workflow through tracking of schedules, projects and employee engagement rate for overall productivity boost.
						</Text>
					</Box>
					{"    "}
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							5
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Audit and Forensics
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Video recording of all employee activity, audio recording, session recording, immutable logs, alerts and optional OCR search are just few examples of powerful audit and forensic capabilities. Together they provide a vast collection of investigative data to locate the source of an insider threat with pinpoint accuracy.
							<br />
							<br />
							<br />
						</Text>
					</Box>
					{"    "}
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							6
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Third Party Vendor Management
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Monitoring features cover third party vendors and remote users who have access to your critical systems. This enables you to control vendor management and third-party SLA and decreases the chances of cyber threats.
							<br />
							<br />
							<br />
							<br />
						</Text>
					</Box>
					{"    "}
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							7
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Compliance Management
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							UAM can be used to create activity and schedule based rules to support several common compliance requirements like: implementing audit trails (GDPR), limiting unauthorized login (ISO 27001), prevent unencrypted file transfers (PCI DSS), reporting, and more.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Hr width="98%" margin="70px 0px 24px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section background="#FFFFFF" padding="24px 0 70px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="75%" display="flex" sm-width="100%" nout-width="100%">
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
						Comes with Powerful User & Entity Behavior Analytics Capabilities
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="75%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						UAM features user and entity behavior analytics (UEBA) capabilities to identify and alert the organization to a wide-range of anomalous behavior and potential threats by either a malicious, inadvertent or compromised employee, user or third-party entity.
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Automatically creates a behavioral baseline taking into account a user’s activity (i.e. how many times a user accessed a file), data pattern (file type, source, category etc.), entity role (application, access level, domain etc.) and other attributes (i.e. time of day, schedule, assigned project). Any anomaly or deviation from the normal baseline can then trigger real-time alerts and notification.
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Intelligent Policy & Rules Engine then combines this UEBA capability to proactively prevent insider threats while providing the organizations with a clear and complete picture of all user & entity activity, context and forensic evidence in a single solution.
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr />
			<Components.TimelineWrapper alignDesktop="to the left" width="100%" overflow-y="hidden">
				<Override slot="Timeline Line" margin="7px 0px 0px 7px" height="457px" />
				<Components.TimelineItem>
					<Override slot="Timeline Item" padding="0px 0px 57px 30px" />
					<Override slot="Timeline Point" margin="0px 0px 0px 0px" z-index="2" padding="0px 0px 0px 0px" />
					<Text color="--primary" font="normal 600 20px/130% --fontFamily-googleInter" margin="0px 0px 0px 20px">
						Types of employee monitoring software
					</Text>
				</Components.TimelineItem>
				<Components.TimelineItem>
					<Override slot="Timeline Item" padding="0px 0px 57px 30px" />
					<Override slot="Timeline Point" margin="0px 0px 0px 0px" />
					<Text color="--primary" font="normal 600 20px/130% --fontFamily-googleInter" margin="0px 0px 0px 20px">
						Advantages of employee monitoring software
					</Text>
				</Components.TimelineItem>
				<Components.TimelineItem>
					<Override slot="Timeline Item" padding="0px 0px 57px 30px" />
					<Override slot="Timeline Point" margin="0px 0px 0px 0px" />
					<Text color="--primary" font="normal 600 20px/130% --fontFamily-googleInter" margin="0px 0px 0px 20px">
						Challenges of Using an Employee Monitoring{" "}
						<br />
						System and How to Address Them
					</Text>
				</Components.TimelineItem>
				<Components.TimelineItem>
					<Override slot="Timeline Item" padding="0px 0px 57px 30px" />
					<Override slot="Timeline Point" margin="0px 0px 0px 0px" />
					<Text color="--primary" font="normal 600 20px/130% --fontFamily-googleInter" margin="0px 0px 0px 20px">
						How to Choose the Best Employee Monitoring Software?
					</Text>
				</Components.TimelineItem>
				<Components.TimelineItem>
					<Override slot="Timeline Item" padding="0px 0px 57px 30px" />
					<Override slot="Timeline Point" margin="0px 0px 0px 0px" />
					<Text color="--primary" font="normal 600 20px/130% --fontFamily-googleInter" margin="0px 0px 0px 20px">
						How Can I Start Monitoring Employees?
					</Text>
				</Components.TimelineItem>
				<Components.TimelineItem>
					<Override slot="Timeline Item" padding="0px 0px 0px 30px" />
					<Override slot="Timeline Point" margin="0px 0px 0px 0px" />
					<Text color="--primary" font="normal 600 20px/130% --fontFamily-googleInter" margin="0px 0px 0px 20px">
						Tips for Better Employee Monitoring
					</Text>
				</Components.TimelineItem>
			</Components.TimelineWrapper>
		</Section>
		<Section background="#F8F8F9" padding="100px 0 70px 0" sm-padding="50px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 45px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
			>
				Industry Statistics Prove the{" "}
				<br />
				<Span color="--primary">
					Need for Employee Monitoring
				</Span>
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 36px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Colluding employees are the sources of insider threats
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							According to the Community Emergency Response Team, the main reasons for insider caused incidents are collusion from employees and third-parties.
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								48.3%+{" "}
							</Span>
							{" "}Insider-Insider Collusion
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								16.75%+
							</Span>
							{"  "}Insider-Outsider Collusion
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 36px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						/>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							According to a survey of 400,000 member online by Cybersecurity Insiders published on The Insider Threat 2018 report.
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								37%
							</Span>
							{" "}Excess Privilege
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								34%
							</Span>
							{" "}Increased Amount of Sensitive Data
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 36px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Employees are a major security concern
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Businesses agree employees are their biggest weakness in IT security - according to Kaspersky Lab and B2B International study of over 5,000 businesses.{" "}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							sm-margin="0px 0px 0px 0px"
						>
							<Span
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								52%
							</Span>
							{" "}of Businesses Agree Employees are Biggest Risk
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 36px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Many employees spend unproductive time at work
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							According to FinancesOnline, 64% of employees use non-work related worksites every day and 85% of employees use their email for personal reasons.
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								64%
							</Span>
							{" "}Browse Unproductive Sites
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							sm-margin="0px 0px 0px 0px"
						>
							<Span
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								85%
							</Span>
							{" "}Use Email for Personal Tasks
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#F8F8F9" padding="70px 0 90px 0" sm-padding="24px 0 50px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Text
				font="--headline2"
				margin="0px 0px 45px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
			>
				Industry Statistics Prove the{" "}
				<br />
				<Span color="--primary">
					Need for Employee Monitoring
				</Span>
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							App usage/application monitoring{" "}
						</Override>
						<Override slot="Before Text2 :default">
							App usage/application monitoring{" "}
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/eyes.svg?v=2020-10-27T01:34:33.060Z" margin="0px 0px 50px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Internet activity monitoring
						</Override>
						<Override slot="Before Text2 :default">
							Internet activity monitoring{" "}
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/planet-saturn%201.svg?v=2020-10-28T15:43:07.007Z" margin="-20px 0px 36px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="start"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Email monitoring
						</Override>
						<Override slot="Before Text2 :default">
							Email monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(6).svg?v=2020-10-28T15:43:13.528Z" margin="-20px 0px 38px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="start"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							file transfer tracking
						</Override>
						<Override slot="Before Text2 :default">
							file transfer tracking
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(7).svg?v=2020-10-28T15:43:13.528Z" margin="-14px 0px 32px 1px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="start"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Network monitoring
						</Override>
						<Override slot="Before Text2 :default">
							Network monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(8).svg?v=2020-10-28T15:43:13.521Z" margin="-5px 0px 41px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="start"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Social media monitoring
						</Override>
						<Override slot="Before Text2 :default">
							Social media monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Facebook,%20Messanger%201.svg?v=2020-10-28T15:43:13.517Z" margin="-20px 0px 38px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							instant message monitoring
						</Override>
						<Override slot="Before Text2 :default">
							instant message monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Messages,%20Chat.18%201.svg?v=2020-10-28T15:43:13.520Z" margin="-20px 0px 36px -10px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Printed document tracking
						</Override>
						<Override slot="Before Text2 :default">
							Printed document tracking
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/documents-file-word.1%201.svg?v=2020-10-28T15:43:13.523Z" margin="-20px 0px 36px -11px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Screen and audio recording{" "}
						</Override>
						<Override slot="Before Text2 :default">
							Screen and audio recording{" "}
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Volume,%20Audio,%20Music,%20Volume,%20Circle%201.svg?v=2020-10-28T15:43:13.528Z" margin="-20px 0px 36px -10px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Privileged user monitoring
						</Override>
						<Override slot="Before Text2 :default">
							Privileged user monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(9).svg?v=2020-10-28T15:43:13.527Z" margin="-20px 0px 36px 0px" nout-margin="-20px 0px 55px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Remote employee monitoring
						</Override>
						<Override slot="Before Text2 :default">
							Remote employee monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(10).svg?v=2020-10-28T15:43:13.518Z" margin="-20px 0px 36px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="start"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Insider threat detection
						</Override>
						<Override slot="Before Text2 :default">
							Insider threat detection
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(11).svg?v=2020-10-28T18:13:46.820Z" margin="-20px 0px 38px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Employee monitoring software
						</Override>
						<Override slot="Before Text2 :default">
							Employee monitoring software
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(12).svg?v=2020-10-28T18:13:46.828Z" margin="-20px 0px 36px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="start"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Productivity monitoring
						</Override>
						<Override slot="Before Text2 :default">
							Productivity monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(13).svg?v=2020-10-28T18:13:46.817Z" margin="-11px 0px 47px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="start"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="40px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Auditing & compliance
						</Override>
						<Override slot="Before Text2 :default">
							Auditing & compliance
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(14).svg?v=2020-10-28T18:13:46.836Z" margin="-11px 0px 47px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="90px 0 12px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 45px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				width="80%"
			>
				Advantages of employee{" "}
				<Span color="--primary">
					monitoring software
				</Span>
			</Text>
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="75%" display="flex" sm-width="100%" nout-width="100%">
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
						Increase Employee Productivity{" "}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="75%"
					display="flex"
					sm-width="100%"
					nout-width="100%"
					align-items="flex-start"
					justify-content="flex-start"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						How focused are your employees? Are they spending too much time on social media? This distraction is a problem even when your employees are using productivity software. Sometimes, too many so called ‘productivity tools’ can be a problem too. A{" "}
						<Span
							color="--primary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Workplace Zen
						</Span>
						{" "}survey of more than 2,500 global employees found that “app overload” is real, and most workplace apps intended to streamline productivity and communications are actually undermining employee performance, the main reason being frequent task switching and the loss of focus. Sometimes, a lack of productivity indicates that{" "}
						<Span color="--primary">
							employees don’t fully understand what’s expected of them
						</Span>
						. With a good employee monitoring software, these can easily be fixed. However, you have to make sure the software can track an employee’s computer actions throughout the day, then aggregate that data to produce detailed metrics, such as:
					</Text>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
						/>
						<Text
							margin="9px 0px 9px 18px"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							md-font="400 14px/20px --fontFamily-googleInter"
						>
							A breakdown of how many hours each day were spent on work-related vs. non-work-related tasks
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
						/>
						<Text
							margin="9px 0px 9px 18px"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							md-font="400 14px/20px --fontFamily-googleInter"
						>
							Identify and limit use of websites and applications less productive by department and team.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
						/>
						<Text
							margin="9px 0px 9px 18px"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							md-font="400 14px/20px --fontFamily-googleInter"
						>
							Minute-to-minute trend graphs showing how much time is spent on specific projects.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
						/>
						<Text
							margin="9px 0px 9px 18px"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							md-font="400 14px/20px --fontFamily-googleInter"
						>
							Be able to identify what projects each team is working on. Prioritize important projects and ensure they are focused on them.
						</Text>
					</Box>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 60px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						You can then meet with your employees parodically to find out how their goals are progressing and whether they need help. This will reinforce that you’re paying attention to productivity and progress, but it also makes clear that you’re there to assist if needed.
					</Text>
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
						Reduce Administrative Work
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 30px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Managers and supervisors spend a lot of time with administrative works.{" "}
						<Span color="--primary">
							In a US-based survey
						</Span>
						{" "}of 500 managers, it was found that a majority of them (36%) spend in the range of 3-4 hours per day on these tasks. More than one in five (23%) said they spend 5+ hours a day on things like time tracking, scheduling etc. With the right employee monitoring solution, many of these tasks can be automated or made efficient. For example, with Teramind you can:
					</Text>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
						/>
						<Text
							margin="9px 0px 9px 18px"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							md-font="400 14px/20px --fontFamily-googleInter"
						>
							Setup schedules and automatically track attendance, breaks, sick hours, identify late shifts, absence etc.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
						/>
						<Text
							margin="9px 0px 9px 18px"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							md-font="400 14px/20px --fontFamily-googleInter"
						>
							Track the time, performance and cost for projects with contractors and hourly employees reducing the need for manual invoicing and oversight.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
						/>
						<Text
							margin="9px 0px 9px 18px"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							md-font="400 14px/20px --fontFamily-googleInter"
						>
							Reduce project supervision by automatically identifying tasks based on employee apps and website usage.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
						/>
						<Text
							margin="9px 0px 60px 18px"
							font="400 18px/160% --fontFamily-googleInter"
							color="#555"
							sm-font="400 16px/22px --fontFamily-googleInter"
							md-font="400 14px/20px --fontFamily-googleInter"
						>
							Reduce time spend on developing performance reviews by automatically identifying high performing vs laggards. Provide a continuous, automated feedback based on user behavior & activity.
						</Text>
					</Box>
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
						Reduce Administrative Work
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 60px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Engaged employees are a healthy, productive workforce. Well-driven employees are what essentially stimulates the progress of a company. Businesses with{" "}
						<Span
							color="--primary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							engaged employees outperform those without by 202%
						</Span>
						. Moreover, when employees are engaged, businesses see a revenue growth of{" "}
						<Span color="--primary">
							2.5% than that of their peers and a 40% reduction in employee turnover.
						</Span>
						{" "}However, sometimes your most active employees can become disengaged. There are several reasons for this. Some of them has to do with motivation some due to over pressure or lack of incentives. One of the most futuristic and progressive approaches to solving these problems is through employee behavior analytics. An employee monitoring software can track user activity throughout the work day creating a catalog of behaviors and actions. You can then develop all sorts of KPIs and metrics to measure employee engagement: How many hours are your employees active? Maybe they’re spending too much time in meetings? Getting buried under Emails? You can track employee performance over time and see if they are on a decreasing trend. Find out how often your employees are spending time on breaks and unproductive activity. Identify disgruntled, angry sentiment from their emails, IMs and social media engagement. When you know the cause(es) of the disengagement, you can systematically address them. For example, management can approach the subject of long meetings and email overload by adapting another communication method like instant messaging. For low performing employees, arrange for a performance development plan (PDP) etc. The trick is to identify a potential issue before it becomes a problem.
					</Text>
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
						Identify Process Gaps
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 60px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						In management,{" "}
						<Span color="--primary">
							gap analysis
						</Span>
						{" "}involves the comparison of actual performance with potential or desired performance. With an employee monitoring system with the right features, HR managers can conduct gap analysis and process improvement at individual and team levels by identifying skill gaps, overlap in duties and responsibilities, conflicting goals and accountability etc. All these information gives you better understanding of your employees work habits so that you can adopt or personalize workflow process to suit their capabilities, delegate task better or move things around. For example, a talented programmer who consistently engages in poor client communications can be shifted to a position that is less customer facing, which maximizes the developer’s strengths while also protecting the reputation of the company.
					</Text>
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
						Detect Insider Threats
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 60px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						An insider is someone who have access to an organization’s internal information and resources. These can be employees, partners, third-party vendors, contractors etc. They pose a threat when they intentionally or accidentally put the organization on harms way by leaking sensitive data, sabotage, fraud, theft or other misuses of their access privilege. The insiders often collude with each other or external parties and can cause one of the biggest risks for an organization. According to the{" "}
						<Span color="--primary">
							Community Emergency Response Team
						</Span>
						, the main reasons for insider caused incidents are: 48.3% insider-insider collusion and 16.75% insider-outsider collusion. To mitigate such threats, some employee monitoring system like Teramind come with insider threat detection modules. This feature work by first identifying what employee behaviors are high risk i.e. copying files to external drives, using cloud storage to share corporate files with an outsider, downloading/opening files and attachments from unknown sources etc. Then, advanced behavior-based rules are used to automatically detect when users violate the rules. Teramind utilizes sophisticated anomaly rules to identify employee or third-party vendor activity outside the normal behavior. It can then send immediately alert about harmful employee activity, lock them out or let an admin take remote control of their computer before any malicious or fraudulent attempt.
					</Text>
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
						Protect Sensitive Data and Resources
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 60px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Data loss and IP theft can cause a great deal of financial burden for an organization.{" "}
						<Span
							color="--primary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							A study conducted by IBM and the Ponemon Institute
						</Span>
						{" "}in 2018 found that, average cost of a data breach is about $3.86M. The figure is $350M or more for larger breaches. Majority of the data breaches involve employees. According{" "}
						<Span color="--primary">
							a CompTIA study
						</Span>
						, 52% of the root cause of security incidents is due to human errors. For example, using weak passwords, lost or stolen login credentials to phishing scams/malware, emailing sensitive document to wrong recipient by mistake etc. While an employee monitoring system cannot protect you from all these data breaches (you need a dedicated data loss prevention solution like Teramind DLP for that); it can give you at least basic protection from employee-borne data breach incidents. For example, Teramind comes with some useful data protection features. You can utilize its Activity and Schedule-based ‘rules’ to prevent external drive usage, detect unusual or unauthorized network login or files transfers etc. All these features can help minimize information exfiltration and data leaks.
					</Text>
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
						Minimize Waste and Reduce Cost
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 60px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Almost one in five people waste more than a third of their time at the office according to{" "}
						<Span color="--primary">
							a GoVoip survey
						</Span>
						. In a week, this adds up to at least 15 hours, or nearly 2 full workdays of wasted time. You can minimize such waste by implementing website usage and social media policies as mentioned before. There are other ways too. For example, Teramind can track employee active vs idle time and allows you to send automated notifications to employees if they are idling excessively. Over time, you can build a pretty accurate estimate on which type of works takes how much time and then set your team’s deliverables accordingly reducing slack times and overtime hours. Using the software’s device monitoring feature, you can implement policies like set a limit on printer to reduce paper and ink waste.
					</Text>
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
						Improve Employee Time Management
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 60px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Some of the employee monitoring software products like Teramind feature time tracking modules built-into them, letting you do away with manual paper work or timesheets in Excel. They can record time logs automatically for day/month/week, validate entries with actual work hours, calculate overtime and PTOs, off-hours and breaks automatically and even generate invoices and billing reports for you. Some let you export the information to dedicated time tracking software like Zoho for further processing. Another benefit of having time tracking with employee monitoring means that you can synchronize across multiple time zones and remote teams. For example, in the IT industry, software developers frequently operate under tight deadlines, and managers need to remain informed about a job’s progress. When development teams are working across different locations and even different time zones, communicating and evaluating this progress becomes complicated. Therefore, by deploying employee monitoring software across the enterprise, it’s possible to prioritize tasks and to measure progress towards deliverable within established timeframes.
					</Text>
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
						Improve Employee and Organizational Safety
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 60px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Employee monitoring can help your security and legal team investigate possible criminal activity (i.e. use of illegal software), investigate thefts and gather evidence. Solutions like Teramind can provide them with detailed alerts for all employees including any security incidents and what actions were taken. Warning messages can be configured to inform employees about nonconformity and influence corrective behavior. Instant snapshots, session recordings and history playback features can be used for audit and evidence gathering purposes. The recordings can be handed over to law enforcement as evidence. That’s not all. Your HR/legal can build etiquette ‘rules’ to detect abuse and harassment at workplace by scanning the communication channels like emails, IM and social media and use the same for collecting evidence against the offender. Some software which has GPS tracking or mobile phone monitoring can know the whereabout of its workers and provide safety support in case of an emergency, especially to fieldworkers in remote/dangerous areas.
					</Text>
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
						Improve Employee and Organizational Safety
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 60px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Employee monitoring can help your security and legal team investigate possible criminal activity (i.e. use of illegal software), investigate thefts and gather evidence. Solutions like Teramind can provide them with detailed alerts for all employees including any security incidents and what actions were taken. Warning messages can be configured to inform employees about nonconformity and influence corrective behavior. Instant snapshots, session recordings and history playback features can be used for audit and evidence gathering purposes. The recordings can be handed over to law enforcement as evidence. That’s not all. Your HR/legal can build etiquette ‘rules’ to detect abuse and harassment at workplace by scanning the communication channels like emails, IM and social media and use the same for collecting evidence against the offender. Some software which has GPS tracking or mobile phone monitoring can know the whereabout of its workers and provide safety support in case of an emergency, especially to fieldworkers in remote/dangerous areas.
					</Text>
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
						Establish a Culture of Fairness and Transparency
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 60px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Utilizing employee monitoring for all your staff members means you are creating a flat organization, where everybody is measured objectively and the same way. You will be promoting or product/demoting the right people for the right reasons. This creates an atmosphere of fairness and transparency. Furthermore, it makes it easy for managers and supervisor to communicate better and connect with more people. Since they can easily find out what each employee is up to, providing feedback is easier and faster. This is particularly helpful in planning for collaborative works or shared projects. For example, you can assign alternate tasks to one of your marketing employees when they are waiting for product department to give the product road-map. Since, you already know where your product department is, you can determine which ‘filler’ task to give to your marketing guy.
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F9" padding="90px 0 12px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 45px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				width="80%"
			>
				Challenges of Using an Employee Monitoring System and{" "}
				<Span color="--primary">
					How to Address Them
				</Span>
			</Text>
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"        "}
				<StackItem
					width="75%"
					display="flex"
					sm-width="100%"
					nout-width="100%"
					align-items="flex-start"
					justify-content="flex-start"
				>
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
						Employee Privacy Concerns
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 60px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Employee monitoring is still a sensitive subject for most organizations. Especially, in recent years data privacy has become the topic of conversation in every boardroom due to the introduction of GDPR and similar laws. The truth is, federal and most state and jurisdictions’ privacy laws allow employee monitoring including GDPR. However, many employees themselves might see such software an invasion to their privacy. Organizations planning to use employee monitoring should consider what they intend to achieve and select a solution accordingly. Not every workplace culture is ready for a full-blown employee monitoring system. You might want to use employee monitoring to capture only privileged user activity. Or may be you just want to monitor your third party vendors. Another company might want to leverage employee monitoring in specific departments such as a bank for their tellers only. You need to figure out the primary use case(s) and pick a solution that can be configured based on the need of your organization’s privacy and compliance requirements. For example, with Teramind, you can set up a social media monitoring rule only for the Marketing department while leaving it turned off for other employees. Or, while monitoring online activity, a rule could automatically suspend monitoring and keystrokes logging when users visit their bank’s website or logs into their personal email account. Check out this article, ‘Five Steps to Implement Employee Monitoring without Violating Employee Privacy’ to learn about some other ways you can go about establishing an employee monitoring policy while respecting employee privacy rights.
					</Text>
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
						Risk of Negative Employee Morale
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 60px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						To mitigate fears and moral dilemma, organizations should implement clear privacy and performance evaluation guidelines when hiring new employees, conduct briefing sessions and educational seminar about employee privacy and monitoring practices etc. On the software level, vendors are introducing machine learning and AI to conduct context analysis and behavior-based monitoring so that human factors are included as part of the monitoring process. Teramind, for example, supports Revealed/Visible monitoring agents so employees can see when they are being tracked and even choose their own logging hours and tasks. It only records when it’s needed (i.e. during a rule violation incident). Admin can purge the recording when no longer required. Teramind also allows employees to view their own monitoring data and activity logs and request redaction/removal if they think the information violates their privacy rights. All these transparency and control over the monitoring process can reduce the negative effects on employee morale.
					</Text>
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
						Potential Legal Issues
					</Text>
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="30px 0px 60px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Different jurisdictions may impose restrictions on how certain employee monitoring functionality is implemented. For example, in 2017,{" "}
						<Span color="--primary">
							a federal court in Germany ruled
						</Span>
						{" "}that companies can’t use keyloggers for employee monitoring. Yet, just the previous year, European Court of Human Rights issued a landmark ruling that it’s not unreasonable for employers to monitor their employees’ computer activity and such monitoring does not violate their human rights. Then there are international compliance laws and standards like GDPR which complicate employee monitoring and privacy issues even further. So, how do you go about deciding what to do or not do when it comes to employee monitoring? Especially, if you are a global company or a small business with remote workers, how do you comply with multiple laws spanned across different jurisdictions? As it seems, it’s not one size fits all when it comes to legal matters. It’s always a good idea to consult your legal counsel to ensure you are implementing employee monitoring within the legal and regulatory guidelines applicable to your organization and jurisdiction. Once your legal and HR gives you the green light, you can then choose an employee monitoring system like Teramind which can be customized with respect to its monitoring and recording features to abide by any legal, ethical or regulatory restrictions.
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F9" padding="90px 0 70px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 45px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				width="80%"
			>
				Challenges of Using an Employee Monitoring System and{" "}
				<Span color="--primary">
					How to Address Them
				</Span>
			</Text>
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"        "}
				<StackItem
					width="100%"
					display="flex"
					sm-width="100%"
					nout-width="100%"
					align-items="flex-start"
					justify-content="flex-start"
					flex-wrap="wrap"
				>
					<Override
						slot="StackItemContent"
						border-width="1px"
						border-style="solid"
						border-color="rgba(218, 218, 218, 1)"
						flex-direction="column"
					/>
					<Box display="flex" md-flex-direction="column">
						<Box
							width="35%"
							display="flex"
							align-items="flex-start"
							padding="0px 0px 0px 0px"
							background="#EDEDED"
							border-width="0px 1px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-width="100%"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								color="rgba(19, 33, 42, 1)"
								font="normal 600 24px/31px --fontFamily-googleInter"
							>
								Features:
								<br />
								compare features and benefits. is it easy to use?
								<br />
							</Text>
						</Box>
						<Box
							width="65%"
							display="flex"
							align-items="center"
							padding="0px 0px 0px 0px"
							background="#ffffff"
							md-width="100%"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								font="normal 400 18px/28px --fontFamily-googleInter"
								color="rgba(85, 85, 85, 1)"
								md-border-width="0px 0px 1px 0px"
								border-width="0px 0px 1px 0px"
								border-style="solid"
								border-color="rgba(218, 218, 218, 1)"
							>
								Compare the monitoring features among the top few and then select the ones you want to investigate further. Ask yourself if you need additional features like insider threat detection, data loss prevention, time tracking, productivity optimization. Not all employee monitoring solutions offer these or they can charge extra for each module. You can also ask questions like, What analytics/reporting can you get out of it? What kind of advanced technology it utilizes? Does it support OCR, fingerprinting, tagging? How many system objects can it monitor (apps, web, screen, network, keyboard)? How easy it is to use? Can you learn it quickly or will it take a long learning curve? It’s better if you can get a product/demo or trial version of the software. Once you know the answers to these, proceed to the next step.
							</Text>
						</Box>
					</Box>
					<Box display="flex" md-flex-direction="column">
						<Box
							width="35%"
							display="flex"
							align-items="flex-start"
							padding="0px 0px 0px 0px"
							background="#EDEDED"
							border-width="0px 1px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-width="100%"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								color="rgba(19, 33, 42, 1)"
								font="normal 600 24px/31px --fontFamily-googleInter"
							>
								Business case:
								<br />
								can it deliver my business requirements?
								<br />
							</Text>
						</Box>
						<Box
							width="65%"
							display="flex"
							align-items="center"
							padding="0px 0px 0px 0px"
							background="#ffffff"
							md-width="100%"
							border-width="0px 0px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								font="normal 400 18px/28px --fontFamily-googleInter"
								color="rgba(85, 85, 85, 1)"
							>
								For example, if you are a call center, check to see if the employee monitoring system will support audio captures since that’s a big part of your employees’ day to day activity. Or, if you have employees or customers in the EU, check if the employee monitoring system supports GDPR compliance. Another strategic thing to ask is: Will the solution be able to support your business goals (profitability, reduce expense, productivity) and sustain them through an evolving competitive landscape? Read the case studies and customer stories to see what you peers are using employee monitoring for ideas and inspirations.
							</Text>
						</Box>
					</Box>
					<Box display="flex" md-flex-direction="column">
						<Box
							width="35%"
							display="flex"
							align-items="flex-start"
							padding="0px 0px 0px 0px"
							background="#EDEDED"
							border-width="0px 1px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-width="100%"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								color="rgba(19, 33, 42, 1)"
								font="normal 600 24px/31px --fontFamily-googleInter"
							>
								Price vs value:
								<br />
								does the product/price justify the return? are there any hidden costs?
								<br />
							</Text>
						</Box>
						<Box
							width="65%"
							display="flex"
							align-items="center"
							padding="0px 0px 0px 0px"
							background="#ffffff"
							md-width="100%"
							border-width="0px 0px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								font="normal 400 18px/28px --fontFamily-googleInter"
								color="rgba(85, 85, 85, 1)"
							>
								Calculate the total cost of ownership (TOC) and verify if the solution is worth its value. Include hidden/opportunity costs like maintenance, upgrade and support costs. Does the vendor include those in the pricing, or do you have to pay extra for them? How does the licensing work? Is it per device or per user? If you are deploying on a private server say on AWS, check the documentation for server requirements. The solution may require additional storage, bandwidth that might become a problem when you scale up. Understand how the cost will increase as your team grows. Finally, consider how much you will benefit from the employee monitoring system. Will it increase your team’s productivity? By how much? Can it save you from data loss/theft or other damages? Eliminate wasted time? Attach a value for these savings. Only then you will have a proper evaluation of the employee monitoring solution(s) you are looking at.
							</Text>
						</Box>
					</Box>
					<Box display="flex" md-flex-direction="column">
						<Box
							width="35%"
							display="flex"
							align-items="flex-start"
							padding="0px 0px 0px 0px"
							background="#EDEDED"
							border-width="0px 1px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-width="100%"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								color="rgba(19, 33, 42, 1)"
								font="normal 600 24px/31px --fontFamily-googleInter"
							>
								Ease of deployment
								<br />
								how fast can you get started? what are the deployment options?
								<br />
							</Text>
						</Box>
						<Box
							width="65%"
							display="flex"
							align-items="center"
							padding="0px 0px 0px 0px"
							background="#ffffff"
							md-width="100%"
							border-width="0px 0px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								font="normal 400 18px/28px --fontFamily-googleInter"
								color="rgba(85, 85, 85, 1)"
							>
								If you want total control over the software’s implementation, choose an employee monitoring solution that has on-premise deployment options. You can leverage LDAP groups and users to identify which employee and groups to apply which policies and rules to. However, this can be expensive and may require longer deployment time. If you want a cheaper, faster and scalable deployment option, then you might consider a Cloud-based solution. This way, you just need to install the monitoring agent on the endpoints and don’t need to worry about managing the servers. Some vendors also offer a Private Cloud solution. This is the best of the both worlds where you can get the scalability and product/price similar to a Cloud deployment and the flexibility and security similar to an on-premise deployment. However, first find out what platform (AWS, Google Cloud, Azure etc.) the solution supports. They each have their own strength and weakness. Consult with your Finance and IT if you need a second opinion.
							</Text>
						</Box>
					</Box>
					<Box display="flex" md-flex-direction="column">
						<Box
							width="35%"
							display="flex"
							align-items="flex-start"
							padding="0px 0px 0px 0px"
							background="#EDEDED"
							border-width="0px 1px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-width="100%"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								color="rgba(19, 33, 42, 1)"
								font="normal 600 24px/31px --fontFamily-googleInter"
							>
								Platform availability
								<br />
								where can you use the software? can it monitor all your employees?
								<br />
								<br />
							</Text>
						</Box>
						<Box
							width="65%"
							display="flex"
							align-items="center"
							padding="0px 0px 0px 0px"
							background="#ffffff"
							md-width="100%"
							border-width="0px 0px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								font="normal 400 18px/28px --fontFamily-googleInter"
								color="rgba(85, 85, 85, 1)"
							>
								A good way to judge a software is to checkout its user reviews and vendor reputation. How many users liked the product? Does it have a good rating? If there are complaints, what are they for? What are its core features and weaknesses? How does it stack up against competitors? These are all valid queries answer to which you can find out easily with a quick internet search. Check out the reviews on credible sites like PC Magazine, Capterra, Business News Daily, GetApp, Crozdesk etc. to find out about the solution before you decide to buy. However, please remember the adage, being popular doesn’t always mean it will be the best for you. As mentioned before, find out your use cases first and then try to fit in a solution that will meet your need.
							</Text>
						</Box>
					</Box>
					<Box display="flex" md-flex-direction="column">
						<Box
							width="35%"
							display="flex"
							align-items="flex-start"
							padding="0px 0px 0px 0px"
							background="#EDEDED"
							border-width="0px 1px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-width="100%"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								color="rgba(19, 33, 42, 1)"
								font="normal 600 24px/31px --fontFamily-googleInter"
							>
								Ease of deployment
								<br />
								how fast can you get started? what are the deployment options?
								<br />
							</Text>
						</Box>
						<Box
							width="65%"
							display="flex"
							align-items="center"
							padding="0px 0px 0px 0px"
							background="#ffffff"
							md-width="100%"
							border-width="0px 0px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								font="normal 400 18px/28px --fontFamily-googleInter"
								color="rgba(85, 85, 85, 1)"
							>
								If you want total control over the software’s implementation, choose an employee monitoring solution that has on-premise deployment options. You can leverage LDAP groups and users to identify which employee and groups to apply which policies and rules to. However, this can be expensive and may require longer deployment time. If you want a cheaper, faster and scalable deployment option, then you might consider a Cloud-based solution. This way, you just need to install the monitoring agent on the endpoints and don’t need to worry about managing the servers. Some vendors also offer a Private Cloud solution. This is the best of the both worlds where you can get the scalability and product/price similar to a Cloud deployment and the flexibility and security similar to an on-premise deployment. However, first find out what platform (AWS, Google Cloud, Azure etc.) the solution supports. They each have their own strength and weakness. Consult with your Finance and IT if you need a second opinion.
							</Text>
						</Box>
					</Box>
					<Box display="flex" md-flex-direction="column">
						<Box
							width="35%"
							display="flex"
							align-items="flex-start"
							padding="0px 0px 0px 0px"
							background="#EDEDED"
							border-width="0px 1px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-width="100%"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								color="rgba(19, 33, 42, 1)"
								font="normal 600 24px/31px --fontFamily-googleInter"
							>
								Support/sla:
								<br />
								will you get the help when you need it?
							</Text>
						</Box>
						<Box
							width="65%"
							display="flex"
							align-items="center"
							padding="0px 0px 0px 0px"
							background="#ffffff"
							md-width="100%"
							border-width="0px 0px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								font="normal 400 18px/28px --fontFamily-googleInter"
								color="rgba(85, 85, 85, 1)"
							>
								Some vendors may charge you extra for premium support (i.e. 24/7 on call) while others provide it for free. Again, check out the reviews to find out if a vendor has a good reputation for providing great support. Ask for an enterprise SLA if you need one. It’s a good idea to scan the vendor’s website and see if they have enough documentation, tutorials, guides and other resources as you might need them later on.
							</Text>
						</Box>
					</Box>
					<Box display="flex" md-flex-direction="column">
						<Box
							width="35%"
							display="flex"
							align-items="flex-start"
							padding="0px 0px 0px 0px"
							background="#EDEDED"
							border-width="0px 1px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-width="100%"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								color="rgba(19, 33, 42, 1)"
								font="normal 600 24px/31px --fontFamily-googleInter"
							>
								Integration and api:
								<br />
								is it a monolithic product or can you extend its usefulness?
								<br />
								<br />
							</Text>
						</Box>
						<Box
							width="65%"
							display="flex"
							align-items="center"
							padding="0px 0px 0px 0px"
							background="#ffffff"
							md-width="100%"
							border-width="0px 0px 1px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								font="normal 400 18px/28px --fontFamily-googleInter"
								color="rgba(85, 85, 85, 1)"
							>
								A good employee monitoring solution will let you easily integrate with popular tools like JIRA, Trello, BaseCamp, Redmine etc. that helps make project management tasks easier. You can sync user activity, tasks, budget etc. for each project and process them further in these tools. Some solutions also allow you to integrate with SIEM (Security Information and Event Management) and threat detection tools like HP ArcSight, Splunk, IBM QRadar, McAfee Enterprise Security Manager, LogRhythm, NetIQ Sentinel etc. allowing you coordinate a holistic security perimeter.
							</Text>
						</Box>
					</Box>
					<Box display="flex" md-flex-direction="column">
						<Box
							width="35%"
							display="flex"
							align-items="flex-start"
							padding="0px 0px 0px 0px"
							background="#EDEDED"
							border-width="0px 1px 0px 0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
							md-width="100%"
							md-border-width="0px 0px 1px 0px"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								color="rgba(19, 33, 42, 1)"
								font="normal 600 24px/31px --fontFamily-googleInter"
							>
								Compatibility:
								<br />
								will it work well with your it systems?
								<br />
								<br />
							</Text>
						</Box>
						<Box
							width="65%"
							display="flex"
							align-items="center"
							padding="0px 0px 0px 0px"
							background="#ffffff"
							md-width="100%"
							border-width="0px"
							border-style="solid"
							border-color="rgba(218, 218, 218, 1)"
						>
							<Text
								padding="36px 24px 36px 36px"
								margin="0px 0px 0px 0px"
								width="100%"
								font="normal 400 18px/28px --fontFamily-googleInter"
								color="rgba(85, 85, 85, 1)"
							>
								Find out if your existing software will work well with the employee monitoring agent software. Is it going to slow down your network or chew up the CPU performance? How about antivirus and firewall solutions you might already have in place? Will they cause conflict? These might sound trivial at first, but compatibility issues can cause a lot of annoyance and wasted time down the road.
							</Text>
						</Box>
					</Box>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#F8F8F9" padding="70px 0 24px 0" sm-padding="24px 0 50px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 45px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				width="70%"
			>
				How Can I Start{" "}
				<Span color="--primary">
					Monitoring Employees?
				</Span>
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="100%"
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							1
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Company-wide Acceptance
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							It might be tempting (and even justifiable in some scenarios) to keep an eye on your employees without their knowledge. However, many industries and organizations believe that informing employees of monitoring will deter employees from committing malicious or possible criminal activity. It’s highly likely that you will get better results if you are open about your monitoring intention and bring your employees onboard from the beginning. Be transparent about your reasons for using the software. The Santa Clara Valley Water District educated its employees in the bargaining units on why monitoring was being put in place, how it would be done, and how it would affect employees. All of these issues were discussed at various meetings over six months before monitoring began. The idea was to roll out the software smoothly and reduce any fear and loathing.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="100%"
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							2
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Set Up Monitoring Policies
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Intelligent behavior analysis can detect malicious activity and anomalies that indicate deviation from normal behavioral baseline. Dynamic risk scoring and vulnerability scanning identifies insider activity before they represent a real threat.
							<br />
							<br />
							<br />
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="100%"
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="13px 0px 13px 0px"
							display="block"
							align-items="center"
							justify-content="center"
							width="48px"
							text-align="center"
						>
							3
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Get Clearance from HR & Legal
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							As we discussed earlier, there might be legal and ethical considerations to address before you start using an employee monitoring system. Consult with your HR and legal counsel as needed.

A powerful employee monitoring system may have a lot of options and settings. This might be a bit overwhelming if you are using such a software for the first time. We suggest that you start with the built-in policies and rules and try them out with some test scenarios with few volunteers. Once you have a handle on how things work you can start setting up new policies and rules. Investigate the advanced features (i.e. combining multiple conditions and monitoring objects) gradually and create new rules tailored to your company’s needs. Do not hesitate to experiment, you might find creative ways to do things or even discover new use for a feature. For example, one of Teramind’s customer, a call center, has been using the audio recording feature to record experienced agents’ conversations to train new agents. Check out the software’s tutorials and documentation to learn more as you go. Don’t hesitate to ask for help if you are stuck..
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="100%"
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							4
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Deploy and Set Up Policies & Rules{"  "}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							A powerful employee monitoring system may have a lot of options and settings. This might be a bit overwhelming if you are using such a software for the first time. We suggest that you start with the built-in policies and rules and try them out with some test scenarios with few volunteers. Once you have a handle on how things work you can start setting up new policies and rules. Investigate the advanced features (i.e. combining multiple conditions and monitoring objects) gradually and create new rules tailored to your company’s needs. Do not hesitate to experiment, you might find creative ways to do things or even discover new use for a feature. For example, one of Teramind’s customer, a call center, has been using the audio recording feature to record experienced agents’ conversations to train new agents. Check out the software’s tutorials and documentation to learn more as you go. Don’t hesitate to ask for help if you are stuck..
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="100%"
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							5
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Deploy and Set Up Policies & Rules
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							A powerful employee monitoring system may have a lot of options and settings. This might be a bit overwhelming if you are using such a software for the first time. We suggest that you start with the built-in policies and rules and try them out with some test scenarios with few volunteers. Once you have a handle on how things work you can start setting up new policies and rules. Investigate the advanced features (i.e. combining multiple conditions and monitoring objects) gradually and create new rules tailored to your company’s needs. Do not hesitate to experiment, you might find creative ways to do things or even discover new use for a feature. For example, one of Teramind’s customer, a call center, has been using the audio recording feature to record experienced agents’ conversations to train new agents. Check out the software’s tutorials and documentation to learn more as you go. Don’t hesitate to ask for help if you are stuck..
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="100%"
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							6
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Train Employees
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							If you have more than one admins, show them how to use the software and coordinate policies and rule creation. Some software like Teramind also allow regular employees have their own personalized dashboards. Train them how to view/use it. Record simulated test incidents and rule violation events using the session recording and playback features to educate employees about cybersecurity and breach response best practices.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Hr width="98%" margin="70px 0px 24px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section
			padding="90px 0 70px 0"
			md-padding="24px 0 40px 0"
			border-width="0px 0px 1px 0px"
			border-style="solid"
			border-color="rgba(255, 255, 255, 0.05)"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 50px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 0px"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				width="70%"
			>
				<Span
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Tips
				</Span>
				{" "}for Better Employee Monitoring
			</Text>
			<Stack margin="0px 0px 40px 0px" width="100%" gap="01px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Stack flex-direction="column" width="100%" margin="0px 0px 0px 0px" gap="28px">
						{"        "}
						<StackItem width="100%" display="flex" md-width="100%">
							<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
							<Box width="100%" background="linear-gradient(180deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.8) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2088.png?v=2020-10-27T02:37:29.247Z) 0% 0% /cover no-repeat scroll padding-box" border-radius="6px">
								<Text
									font="normal 700 24px/29px --fontFamily-googleInter"
									margin="170px 36px 12px 36px"
									display="inline-block"
									color="#ffffff"
									sm-font="normal 500 18px/29px --fontFamily-googleInter"
									sm-width="100%"
									sm-text-align="center"
								>
									Be responsible
								</Text>
								<Text
									font="normal 400 18px/28px --fontFamily-googleInter"
									margin="0px 36px 36px 36px"
									display="inline-block"
									color="#ffffff"
									sm-font="normal 500 18px/29px --fontFamily-googleInter"
									sm-width="100%"
									sm-text-align="center"
								>
									Employee monitoring isn’t spying on your subordinates. Focus on your business goals and monitor the activity that relates to those goals. Being able to cite the names of your colleague’s Facebook friends isn’t employee monitoring, it’s called stalking and it’s creepy.
								</Text>
							</Box>
							{"            "}
						</StackItem>
						<StackItem width="100%" display="flex" md-width="100%">
							{"        "}
							<Box width="100%" background="linear-gradient(180deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.8) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2089.png?v=2020-10-27T02:38:19.867Z) 0% 0% /cover no-repeat scroll padding-box" border-radius="6px">
								<Text
									font="normal 700 24px/29px --fontFamily-googleInter"
									margin="170px 36px 12px 36px"
									display="inline-block"
									color="#ffffff"
									sm-font="normal 500 18px/29px --fontFamily-googleInter"
									sm-width="100%"
									sm-text-align="center"
								>
									Keep it fresh
								</Text>
								<Text
									font="normal 400 18px/28px --fontFamily-googleInter"
									margin="0px 36px 36px 36px"
									display="inline-block"
									color="#ffffff"
									sm-font="normal 500 18px/29px --fontFamily-googleInter"
									sm-width="100%"
									sm-text-align="center"
								>
									Don’t just setup the system and expect it to work for perpetuity. Company policy, employee behavior, technology and the threat landscape change. You need to update the monitoring policies and rules and try out new things to keep up with the evolving technology and compliance landscape.
								</Text>
							</Box>
							{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Stack flex-direction="column" width="100%" margin="0px 0px 0px 0px" gap="28px">
						{"        "}
						<StackItem width="100%" display="flex" md-width="100%">
							<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
							<Box width="100%" border-radius="6px" background="linear-gradient(180deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.8) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2090.png?v=2020-10-27T02:41:34.877Z) 0% 0% /cover no-repeat scroll padding-box">
								<Text
									font="normal 700 24px/29px --fontFamily-googleInter"
									margin="170px 36px 12px 36px"
									display="inline-block"
									color="#ffffff"
									sm-font="normal 500 18px/29px --fontFamily-googleInter"
									sm-width="100%"
									sm-text-align="center"
								>
									Don’t rush it
								</Text>
								<Text
									font="normal 400 18px/28px --fontFamily-googleInter"
									margin="0px 36px 36px 36px"
									display="inline-block"
									color="#ffffff"
									sm-font="normal 500 18px/29px --fontFamily-googleInter"
									sm-width="100%"
									sm-text-align="center"
								>
									Don’t expect to achieve all your employee monitoring goals at once. It will take time for you to develop the behavioral baseline, activity trend and to understand what makes your employees tick. Be patient and curb your expectation.
								</Text>
							</Box>
							{"            "}
						</StackItem>
						<StackItem width="100%" display="flex" md-width="100%">
							{"        "}
							<Box width="100%" background="linear-gradient(180deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.8) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2091.png?v=2020-10-27T02:41:51.959Z) 0% 0% /cover no-repeat scroll padding-box" border-radius="6px">
								<Text
									font="normal 700 24px/29px --fontFamily-googleInter"
									margin="170px 36px 12px 36px"
									display="inline-block"
									color="#ffffff"
									sm-font="normal 500 18px/29px --fontFamily-googleInter"
									sm-width="100%"
									sm-text-align="center"
								>
									Communicate properly
								</Text>
								<Text
									font="normal 400 18px/28px --fontFamily-googleInter"
									margin="0px 36px 36px 36px"
									display="inline-block"
									color="#ffffff"
									sm-font="normal 500 18px/29px --fontFamily-googleInter"
									sm-width="100%"
									sm-text-align="center"
								>
									Use clear, simple messages when setting up customized warnings or notification in your monitoring software. Don’t use cryptic language or sound like a big-boss. Avoid unnecessary confrontation when possible. Sometimes, employees will make mistakes and trigger a policy violation.{" "}
								</Text>
							</Box>
							{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			background="#ffffff"
			padding="70px 0 20px 0"
			md-padding="24px 0 40px 0"
			border-width="0px 0px 1px 0px"
			border-style="solid"
			border-color="rgba(255, 255, 255, 0.05)"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 70px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 0px"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/58px Inter, sans-serif"
			>
				<Span
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Flexible
				</Span>
				{" "}Deployment Options
			</Text>
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Image width="60px" height="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/papaplo.svg?v=2020-10-19T23:24:47.217Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							On-premise
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							control the implementation in its entirety, stay off-cloud if that’s your firm’s operational model, leverage LDAP groups and users to identify which users and groups to apply which policies and rules to
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Image width="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/zamolk.svg?v=2020-10-19T23:25:24.891Z" height="60px" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Private Cloud{" "}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							use your own secure, scalable private cloud implementation including AWS, Google Cloud, Azure and more
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Image width="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cloudd.svg?v=2020-10-19T23:25:21.625Z" height="60px" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Cloud
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							trust us the management of the deployment and infrastructure. Only install Agents on the machines you want to monitor and set up your users, policies and rules and let us take care of the rest.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Components.Company />
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Section padding="70px 0 124px 0" lg-padding="70px 0 70px 0">
				<Override slot="SectionContent" max-width="1170px" align-items="center" />
				<Stack
					width="100%"
					margin="0px 0px 0px 0px"
					position="relative"
					align-items="center"
					justify-content="center"
					overflow-y="hidden"
				>
					{"    "}
					<StackItem
						width="100%"
						display="flex"
						padding="16px 16px 16px 16px"
						background="#F7F7F7"
						border-radius="6px"
						border-color="rgba(246, 246, 246, 1)"
						border-width="1px"
						border-style="solid"
					>
						<Override
							slot="StackItemContent"
							align-items="center"
							justify-content="center"
							position="relative"
							z-index="2"
							flex-direction="column"
							padding="80px 0px 190px 0px"
							lg-padding="80px 0px 50px 0px"
							sm-padding="50px 0px 50px 0px"
							md-padding="50px 0px 50px 0px"
							lg-width="100%"
						/>
						{"        "}
						<Text
							font="--headline2"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#13212A"
							text-align="center"
							width="80%"
							lg-width="90%"
							md-font="normal 700 30px/40px Inter, sans-serif"
							sm-font="normal 700 20px/30px Inter, sans-serif"
							lg-font="normal 700 36px/40px Inter, sans-serif"
						>
							<Span color="--primary">
								Feature-rich
							</Span>
							, affordable with monthly and annual licensin goptions
						</Text>
						<Box margin="42px 0px 67px 0px" display="flex">
							<Link
								href="#"
								padding="16px 38px 16px 38px"
								border-radius="40px"
								border-color="--color-primary"
								border-width="2px"
								border-style="solid"
								text-decoration-line="initial"
								color="#ffffff"
								font="--menu"
								hover-background="#409EEB"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								margin="0px 0px 0px 0px"
								box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
								background="--color-primary"
								position="relative"
								z-index="4"
								md-padding="16px 20px 16px 20px"
								sm-padding="16px 10px 16px 10px"
								sm-font="500 15px/22px Inter, sans-serif"
							>
								Request demo
							</Link>
						</Box>
						<Image
							width="830px"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/asdasdasdasd.svg?v=2020-10-16T19:04:50.914Z"
							position="absolute"
							bottom="-430px"
							height="705.625px"
							left="auto"
							right="auto"
							top="auto"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							lg-width="586px"
							lg-bottom="-306px"
							lg-height="413.625px"
							lg-left="auto"
							lg-right="auto"
							lg-top="auto"
							z-index="2"
							md-top="auto"
							md-width="80%"
							md-bottom="-282px"
							sm-bottom="-240px"
						/>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
		</Section>
		<Components.Footer />
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
		<RawHtml>
			<script place={"endOfBody"} rawKey={"602addb1c8a45a16c77f897e"}>
				{"\t(function (i, s, o, g, r, a, m) {\n\t\ti['GoogleAnalyticsObject'] = r;\n\t\ti[r] = i[r] || function () {\n\t\t\t(i[r].q = i[r].q || []).push(arguments);\n\t\t}, i[r].l = 1 * new Date();\n\t\t\n\t\ta = s.createElement(o),\n\t\t\tm = s.getElementsByTagName(o)[0];\n\t\ta.async = 1;\n\t\ta.src = g;\n\t\tm.parentNode.insertBefore(a, m);\n\t})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');\n\tga('create', 'UA-6450776-3', 'auto');\n\tga('send', 'pageview');"}
			</script>
			<style place={"endOfHead"} rawKey={"602ae6625a167a1bb9dbc787"}>
				{"section#shapka {\n    -webkit-animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n    animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n}\n.wrap-calc {\n    border-radius: 6px;\n}\na.menu-trigger:hover {\n    color: #1465FF;\n}\n.munecontainer a:hover {\n    text-decoration: underline;\n}\n.munecontainer li { \npadding: 5px; \nfont: normal 600 14px/1.5 var(--qtheme-fontFamily-googleSourceSansPro);\ntext-align: center !important;\n}\n.munecontainer a {\ncolor: rgba(19, 33, 42, 1);\nfont: 400 18px/28px var(--qtheme-fontFamily-googleInter);\ntext-align: center !important;\n}\na.menu-trigger {\n    padding: 33px 15px 30px 15px;\n}\n.munecontainer ul {\n    background: #ffffff;\n    list-style: none;\n    padding-inline-start: 0px;\n    padding: 10px;\n    width: 220px;\n    text-align: center;\n    position: relative;\n    top: -16px;\n    z-index: 9;\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14);\n    border-radius: 6px;\n}\ntd:nth-child(1) {\n    font-weight: 600;\n}\nnav {\n    position: relative;\n}\nnav a {\n    display: flex;\n    text-decoration: none;\n        font: var(--qtheme-font-menu);\n    color: #020202;\n}\n.munecontainer {\n    position: absolute;\n}\nli:hover {\n    background: #FAFAFA;\n    color: rgb(23, 103, 255);\n}\n.munecontainer a:hover {\n    background: #FAFAFA;\n    color: rgb(23, 103, 255);\n    text-decoration: none;\n}  \n.menuopen[display=\"block\"] {\n  -webkit-transform: scaleY(1);\n  -moz-transform: scaleY(1);\n  transform: scaleY(1);\n  -webkit-transition-duration: 0.3s;\n  -moz-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transform-origin: 100% 0%;\n  transform-origin: 100% 0%;\n  opacity: 1;\n  pointer-events: all;\n}\n\n.menuopen[display=\"none\"] {\n    z-index: 1 !important;\n    -webkit-transition-duration: 0.3s;\n    -moz-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    opacity: 0;\n    -webkit-transform: scaleY(0);\n    transform: scaleY(0);\n    -webkit-transform-origin: 100% 0%;\n    transform-origin: 100% 0%;\n    display: block;\n    margin-top: -20px;\n}\n\n.munecontainer ul {\n  border-top-left-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n}\n\na.menu-trigger:hover~.munecontainer {\n  pointer-events: all;\n}\n\n.munecontainer {\n  pointer-events: none;\n}"}
			</style>
			<script place={"endOfBody"} rawKey={"6036af4a8bcc719b09a29177"}>
				{"function ready() {\n    require(['jquery'], function($) {\n$('.buttom-form').attr({'onsubmit':'ga(\"send\", \"event\", \"preorder\")'})\n    });\n} \ndocument.addEventListener(\"DOMContentLoaded\", ready);"}
			</script>
			<link href={"http://kalyan-tay.ukit.me/js/lib/requirejs.min.js"} place={"endOfBody"} rawKey={"6036c4ad41cac81d90782665"} />
		</RawHtml>
	</Theme>;
});