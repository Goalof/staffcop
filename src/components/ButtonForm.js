import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"className": "buttom-form",
	"onclick": "ga('send', 'event', 'preorder');",
	"border-radius": "40px",
	"box-shadow": "inset 0px 5px 17px rgba(255, 255, 255, 0.23)",
	"padding": "16px 38px 16px 38px",
	"font": "600 18px/22px --fontFamily-googleInter",
	"children": <>
		Send{"\n\n"}
	</>
};
const overrides = {};

const ButtonForm = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest} onSubmit={() => GAevent('send', 'event', 'preorder')}>
		{children}
	</Button>;
};

export const GAevent = (categoryName, eventName) => {// ReactGA.event({       
	//     category: preorder,  
	//     action: eventName,      
	//     label: 'labelName',       
	//     value: 10,       
	//     nonInteraction: false     
	// });   
};
Object.assign(ButtonForm, { ...Button,
	defaultProps,
	overrides
});
export default ButtonForm;