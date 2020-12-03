import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<div id="shapka"></div>
<style>
section#shapka {
    -webkit-animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.wrap-calc {
    border-radius: 6px;
}
a.menu-trigger:hover {
    color: #1465FF;
}
.munecontainer a:hover {
    text-decoration: underline;
}
.munecontainer li { 
padding: 5px; 
font: normal 600 14px/1.5 var(--qtheme-fontFamily-googleSourceSansPro);
text-align: center !important;
}
.munecontainer a {
color: rgba(19, 33, 42, 1);
font: 400 18px/28px var(--qtheme-fontFamily-googleInter);
text-align: center !important;
}
a.menu-trigger {
    padding: 33px 15px 30px 15px;
}
.munecontainer ul {
    background: #ffffff;
    list-style: none;
    padding-inline-start: 0px;
    padding: 10px;
    width: 220px;
    text-align: center;
    position: relative;
    top: -16px;
    z-index: 9;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14);
    border-radius: 6px;
}
td:nth-child(1) {
    font-weight: 600;
}
nav {
    position: relative;
}
nav a {
    display: flex;
    text-decoration: none;
        font: var(--qtheme-font-menu);
    color: #020202;
}
.munecontainer {
    position: absolute;
}
li:hover {
    background: #FAFAFA;
    color: rgb(23, 103, 255);
}
.munecontainer a:hover {
    background: #FAFAFA;
    color: rgb(23, 103, 255);
    text-decoration: none;
}  
.menuopen[display="block"] {
  -webkit-transform: scaleY(1);
  -moz-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
  opacity: 1;
  pointer-events: all;
}

.menuopen[display="none"] {
    z-index: 1 !important;
    -webkit-transition-duration: 0.3s;
    -moz-transition-duration: 0.3s;
    transition-duration: 0.3s;
    opacity: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    display: block;
    margin-top: -20px;
}

.munecontainer ul {
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
}

a.menu-trigger:hover~.munecontainer {
  pointer-events: all;
}

.munecontainer {
  pointer-events: none;
}
</style>
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});