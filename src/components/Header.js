import React from "react";
import { useOverrides, Override, StackItem, Menu, Stack, Section } from "@quarkly/components";
import { Image, Link } from "@quarkly/widgets";
import MyNav from "./MyNav";
import MyNav2 from "./MyNav2";
import Menu2 from "./Menu2";
import MobileSide2 from "./MobileSide2";
const defaultProps = {
	"background": "#ffffff",
	"padding": "0px 0 0px 0",
	"sm-padding": "10px 0 10px 0",
	"lg-padding": "15px 0 15px 0",
	"border-width": "0px 0px 1px 0px",
	"border-style": "solid",
	"border-color": "#EDEDED",
	"position": "fixed",
	"z-index": "9"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"gap": "0px",
			"width": "100%"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "20%",
			"display": "flex",
			"nout-width": "18%",
			"lg-width": "40%",
			"sm-width": "50%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "center"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"loading": "lazy",
			"width": "100%",
			"src": "https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/staffcop_logo%20(2)%201.svg?v=2020-10-15T10:37:02.579Z",
			"padding": "2px 0px 0px 0px"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "60%",
			"display": "flex",
			"nout-width": "64%",
			"lg-display": "none"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "center"
		}
	},
	"myNav": {
		"kind": "MyNav",
		"props": {}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "/features/",
			"text-decoration-line": "initial",
			"font": "--menu",
			"color": "#020202",
			"padding": "30px 15px 30px 15px",
			"hover-color": "--primary",
			"children": "Features"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "/solutions/",
			"text-decoration-line": "initial",
			"font": "--menu",
			"color": "#020202",
			"padding": "30px 15px 30px 15px",
			"hover-color": "--primary",
			"children": "Solutions"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"text-decoration-line": "initial",
			"font": "--menu",
			"color": "#020202",
			"padding": "30px 15px 30px 15px",
			"hover-color": "--primary",
			"href": "/purchase/",
			"children": "Purchase"
		}
	},
	"myNav2": {
		"kind": "MyNav2",
		"props": {}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "20%",
			"display": "flex",
			"nout-width": "18%",
			"lg-width": "50%",
			"sm-width": "50%",
			"sm-display": "none"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"justify-content": "flex-end",
			"align-items": "center"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "100%",
			"nout-width": "18%",
			"lg-width": "10%",
			"sm-width": "50%",
			"lg-display": "flex",
			"display": "none"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"justify-content": "flex-end",
			"align-items": "center"
		}
	},
	"mobileSide2": {
		"kind": "MobileSide2",
		"props": {
			"flex": "1 1 auto",
			"lg-position": "relative",
			"lg-z-index": "5",
			"lg-display": "flex",
			"lg-justify-content": "flex-end",
			"lg-align-items": "center"
		}
	},
	"mobileSide2Override": {
		"kind": "Override",
		"props": {
			"slot": "Content",
			"display": "flex",
			"align-items": "center",
			"lg-position": "fixed",
			"lg-top": 0,
			"lg-left": 0,
			"lg-z-index": "1",
			"lg-width": "100%",
			"lg-height": "100%",
			"lg-background": "white",
			"lg-flex-direction": "column"
		}
	},
	"mobileSide2Override1": {
		"kind": "Override",
		"props": {
			"slot": "Button",
			"display": "none",
			"lg-display": "block",
			"lg-width": "44px",
			"lg-height": "28px",
			"lg-position": "relative",
			"lg-z-index": "6",
			"lg-box-shadow": "inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
		}
	},
	"mobileSide2Override2": {
		"kind": "Override",
		"props": {
			"slot": "Button Line",
			"lg-background": "black",
			"lg-min-height": "4px",
			"lg-position": "absolute"
		}
	},
	"mobileSide2Override3": {
		"kind": "Override",
		"props": {
			"slot": "Button Line1",
			"lg-width": "44px",
			"lg-top": "0px",
			"lg-right": "0px"
		}
	},
	"mobileSide2Override4": {
		"kind": "Override",
		"props": {
			"slot": "Button Line2",
			"lg-top": "12px",
			"lg-right": "0px"
		}
	},
	"mobileSide2Override5": {
		"kind": "Override",
		"props": {
			"slot": "Button Line3",
			"lg-top": "24px",
			"lg-right": "0px"
		}
	},
	"mobileSide2Override6": {
		"kind": "Override",
		"props": {
			"slot": "Button Line1 :closed",
			"lg-width": "44px"
		}
	},
	"mobileSide2Override7": {
		"kind": "Override",
		"props": {
			"slot": "Button Line2 :closed",
			"lg-width": "32px"
		}
	},
	"mobileSide2Override8": {
		"kind": "Override",
		"props": {
			"slot": "Button Line3 :closed",
			"lg-width": "20px"
		}
	},
	"mobileSide2Override9": {
		"kind": "Override",
		"props": {
			"slot": "Button Line2 :open",
			"lg-opacity": "0",
			"lg-width": "32px"
		}
	},
	"mobileSide2Override10": {
		"kind": "Override",
		"props": {
			"slot": "Button Line1 :open",
			"lg-width": "36px",
			"lg-transform": "translateY(12px) rotate(225deg)"
		}
	},
	"mobileSide2Override11": {
		"kind": "Override",
		"props": {
			"slot": "Button Line3 :open",
			"lg-width": "36px",
			"lg-transform": "translateY(-12px) rotate(135deg)"
		}
	},
	"mobileSide2Override12": {
		"kind": "Override",
		"props": {
			"slot": "Content :closed",
			"lg-opacity": "0",
			"lg-transition": "transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut",
			"lg-transform": "translateY(-100%)"
		}
	},
	"mobileSide2Override13": {
		"kind": "Override",
		"props": {
			"slot": "Content :open",
			"lg-position": "fixed",
			"lg-transform": "translateY(0%)",
			"lg-transition": "transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut",
			"lg-opacity": "1"
		}
	},
	"mobileSide2Override14": {
		"kind": "Override",
		"props": {
			"slot": "Button :open",
			"lg-position": "fixed"
		}
	},
	"menu2": {
		"kind": "Menu2",
		"props": {
			"md-flex-direction": "column",
			"md-align-items": "center",
			"md-width": "100%",
			"lg-flex-direction": "column",
			"lg-align-items": "center",
			"lg-width": "100%",
			"lg-margin": "10px 0px 0px 0px",
			"collapse": true,
			"depth": "10",
			"display": "none",
			"lg-display": "flex",
			"lg-justify-content": "center",
			"lg-padding": "6px 0px 40px 0px",
			"lg-background": "#ffffff"
		}
	},
	"menu2Override": {
		"kind": "Override",
		"props": {
			"slot": "Item",
			"md-padding": "12px 12px 12px 12px",
			"lg-padding": "12px 0px 12px 0px",
			"lg-font": "500 20px/24px --fontFamily-googleInter",
			"lg-width": "100%",
			"lg-text-align": "center",
			"lg-align-items": "center",
			"lg-margin": "6px 0px 6px 0px"
		}
	},
	"menu2Override1": {
		"kind": "Override",
		"props": {
			"slot": "Item-404",
			"md-display": "none",
			"lg-display": "none"
		}
	},
	"menu2Override2": {
		"kind": "Override",
		"props": {
			"slot": "Link-index",
			"children": "Home"
		}
	},
	"menu2Override3": {
		"kind": "Override",
		"props": {
			"slot": "Link",
			"lg-text-decoration-line": "initial",
			"lg-color": "--darkL2",
			"lg-text-align": "right",
			"lg-justify-content": "center"
		}
	},
	"menu2Override4": {
		"kind": "Override",
		"props": {
			"slot": "Sub",
			"z-index": "5",
			"lg-position": "static",
			"lg-width": "100%"
		}
	},
	"menu2Override5": {
		"kind": "Override",
		"props": {
			"slot": "Icon",
			"lg-padding": "4px 3px 0px 3px"
		}
	},
	"menu2Override6": {
		"kind": "Override",
		"props": {
			"slot": "Item-request-demo",
			"lg-display": "none"
		}
	},
	"menu2Override7": {
		"kind": "Override",
		"props": {
			"slot": "Item-leadership",
			"lg-display": "none"
		}
	},
	"menu2Override8": {
		"kind": "Override",
		"props": {
			"slot": "Item-retail-and-ecommerce-cyber-security",
			"lg-display": "none"
		}
	},
	"menu2Override9": {
		"kind": "Override",
		"props": {
			"slot": "Item-for-financial-sector",
			"lg-display": "none"
		}
	},
	"menu2Override10": {
		"kind": "Override",
		"props": {
			"slot": "Item-energy-and-utilities-sector-cyber-security",
			"lg-display": "none"
		}
	},
	"menu2Override11": {
		"kind": "Override",
		"props": {
			"slot": "Item-iso-27001-compliance",
			"lg-display": "none"
		}
	},
	"menu2Override12": {
		"kind": "Override",
		"props": {
			"slot": "Item-for-legal",
			"lg-display": "none"
		}
	},
	"menu2Override13": {
		"kind": "Override",
		"props": {
			"slot": "Item-government-and-public-sector-cyber-security",
			"lg-display": "none"
		}
	},
	"menu2Override14": {
		"kind": "Override",
		"props": {
			"slot": "Item-pci-dss-compliance-and-certification",
			"lg-display": "none"
		}
	},
	"menu2Override15": {
		"kind": "Override",
		"props": {
			"slot": "Item-for-hipaa",
			"lg-display": "none"
		}
	},
	"menu2Override16": {
		"kind": "Override",
		"props": {
			"slot": "Item-gdpr-compliance",
			"lg-display": "none"
		}
	},
	"menu2Override17": {
		"kind": "Override",
		"props": {
			"slot": "Item-compliance-management-auditing-and-monitoring",
			"lg-display": "none"
		}
	},
	"menu2Override18": {
		"kind": "Override",
		"props": {
			"slot": "Item-third-party-vendor-management",
			"lg-display": "none"
		}
	},
	"menu2Override19": {
		"kind": "Override",
		"props": {
			"slot": "Item-productivity-optimization",
			"lg-display": "none"
		}
	},
	"menu2Override20": {
		"kind": "Override",
		"props": {
			"slot": "Item-privileged-user-monitoring",
			"lg-display": "none"
		}
	},
	"menu2Override21": {
		"kind": "Override",
		"props": {
			"slot": "Item-remote-employee-monitoring",
			"lg-display": "none"
		}
	},
	"menu2Override22": {
		"kind": "Override",
		"props": {
			"slot": "Item-insider-threat-detection-and-prevention",
			"lg-display": "none"
		}
	},
	"menu2Override23": {
		"kind": "Override",
		"props": {
			"slot": "Item-live-employee-desktop",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override24": {
		"kind": "Override",
		"props": {
			"slot": "Item-e-mail-monitoring",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override25": {
		"kind": "Override",
		"props": {
			"slot": "Item-employee-internet-monitoring",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override26": {
		"kind": "Override",
		"props": {
			"slot": "Item-keystroke-monitoring",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override27": {
		"kind": "Override",
		"props": {
			"slot": "Item-file-activity-monitoring-software",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override28": {
		"kind": "Override",
		"props": {
			"slot": "Item-printed-document-tracking",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override29": {
		"kind": "Override",
		"props": {
			"slot": "Item-optical-character-recognition-ocr",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override30": {
		"kind": "Override",
		"props": {
			"slot": "Item-smart-rules-and-alerts",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override31": {
		"kind": "Override",
		"props": {
			"slot": "Item-productivity-monitoring",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override32": {
		"kind": "Override",
		"props": {
			"slot": "Item-app-usageapplication-monitoring",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override33": {
		"kind": "Override",
		"props": {
			"slot": "Item-network-user-activitymonitoring",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override34": {
		"kind": "Override",
		"props": {
			"slot": "Item-instant-message-monitoring",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override35": {
		"kind": "Override",
		"props": {
			"slot": "Item-social-media-monitoring",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override36": {
		"kind": "Override",
		"props": {
			"slot": "Item-remote-desktop-control",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override37": {
		"kind": "Override",
		"props": {
			"slot": "Item-active-vs-idle-time-analysis",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override38": {
		"kind": "Override",
		"props": {
			"slot": "Item-employee-productivity-tracking",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override39": {
		"kind": "Override",
		"props": {
			"slot": "Item-citrix-session-recording",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override40": {
		"kind": "Override",
		"props": {
			"slot": "Item-employee-monitoring-software",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override41": {
		"kind": "Override",
		"props": {
			"slot": "Item-nonproductive-activity-reporting",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override42": {
		"kind": "Override",
		"props": {
			"slot": "Item-configurable-monitoring-profiles",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override43": {
		"kind": "Override",
		"props": {
			"slot": "Item-template-based-scheduling",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu2Override44": {
		"kind": "Override",
		"props": {
			"slot": "Item-session-recording-and-metadata",
			"lg-font": "500 16px/19px Inter, sans-serif"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"flex": "1 1 auto",
			"display": "none",
			"align-items": "center",
			"justify-content": "center",
			"lg-flex": "0 1 auto",
			"lg-flex-direction": "column",
			"lg-margin": "80px 0px 0px 0px",
			"lg-display": "none"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "item-404",
			"display": "none"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "item-index",
			"display": "none"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"lg-font": "500 20px/24px --fontFamily-googleInter",
			"lg-text-decoration-line": "initial",
			"lg-color": "#020202",
			"lg-padding": "6px 6px 6px 6px"
		}
	},
	"menuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"lg-color": "--primary"
		}
	},
	"menuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"lg-padding": "14px 12px 14px 12px"
		}
	}
};

const PurchaseHeader = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="1170px" />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Link {...override("link")}>
					<Image {...override("image")} />
					{"     "}
				</Link>
				{"       "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<MyNav {...override("myNav")} />
				<Link {...override("link1")} />
				<Link {...override("link2")} />
				<Link {...override("link3")} />
				<MyNav2 {...override("myNav2")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride2")} />
				<Link
					href="/request-demo/"
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
					Request demo
				</Link>
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Override {...override("stackItemOverride3")} />
				<MobileSide2 {...override("mobileSide2")}>
					<Override {...override("mobileSide2Override")} />
					<Override {...override("mobileSide2Override1")} />
					<Override {...override("mobileSide2Override2")} />
					<Override {...override("mobileSide2Override3")} />
					<Override {...override("mobileSide2Override4")} />
					<Override {...override("mobileSide2Override5")} />
					<Override {...override("mobileSide2Override6")} />
					<Override {...override("mobileSide2Override7")} />
					<Override {...override("mobileSide2Override8")} />
					<Override {...override("mobileSide2Override9")} />
					<Override {...override("mobileSide2Override10")} />
					<Override {...override("mobileSide2Override11")} />
					<Override {...override("mobileSide2Override12")} />
					<Override {...override("mobileSide2Override13")} />
					<Override {...override("mobileSide2Override14")} />
					<Menu2 {...override("menu2")}>
						<Override {...override("menu2Override")} />
						<Override {...override("menu2Override1")} />
						<Override {...override("menu2Override2")} />
						<Override {...override("menu2Override3")} />
						<Override {...override("menu2Override4")} />
						<Override {...override("menu2Override5")} />
						<Override {...override("menu2Override6")} />
						<Override {...override("menu2Override7")} />
						<Override {...override("menu2Override8")} />
						<Override {...override("menu2Override9")} />
						<Override {...override("menu2Override10")} />
						<Override {...override("menu2Override11")} />
						<Override {...override("menu2Override12")} />
						<Override {...override("menu2Override13")} />
						<Override {...override("menu2Override14")} />
						<Override {...override("menu2Override15")} />
						<Override {...override("menu2Override16")} />
						<Override {...override("menu2Override17")} />
						<Override {...override("menu2Override18")} />
						<Override {...override("menu2Override19")} />
						<Override {...override("menu2Override20")} />
						<Override {...override("menu2Override21")} />
						<Override {...override("menu2Override22")} />
						<Override {...override("menu2Override23")} />
						<Override {...override("menu2Override24")} />
						<Override {...override("menu2Override25")} />
						<Override {...override("menu2Override26")} />
						<Override {...override("menu2Override27")} />
						<Override {...override("menu2Override28")} />
						<Override {...override("menu2Override29")} />
						<Override {...override("menu2Override30")} />
						<Override {...override("menu2Override31")} />
						<Override {...override("menu2Override32")} />
						<Override {...override("menu2Override33")} />
						<Override {...override("menu2Override34")} />
						<Override {...override("menu2Override35")} />
						<Override {...override("menu2Override36")} />
						<Override {...override("menu2Override37")} />
						<Override {...override("menu2Override38")} />
						<Override {...override("menu2Override39")} />
						<Override {...override("menu2Override40")} />
						<Override {...override("menu2Override41")} />
						<Override {...override("menu2Override42")} />
						<Override {...override("menu2Override43")} />
						<Override {...override("menu2Override44")} />
					</Menu2>
					<Menu {...override("menu")}>
						<Override {...override("menuOverride")} />
						<Override {...override("menuOverride1")} />
						<Override {...override("menuOverride2")} />
						<Override {...override("menuOverride3")} />
						<Override {...override("menuOverride4")} />
					</Menu>
				</MobileSide2>
				{"            "}
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(PurchaseHeader, { ...Section,
	defaultProps,
	overrides
});
export default PurchaseHeader;