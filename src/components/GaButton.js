import React from 'react';
import ReactGA from 'react-ga';
import { useOverrides } from '@quarkly/components';
import { Box, Button } from '@quarkly/widgets';
const overrides = {
	'Button': {
		kind: 'Button'
	}
};
ReactGA.initialize('UA-6450776-3', {
	titleCase: false,
	gaOptions: {
		name: 'myTracker',
		userId: 123
	}
});

const GaButton = ({
	pageName,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const gaPageview = ReactGA.pageview(pageName);
	return <Box {...rest}>
		      
		<Button onClick={gaPageview} {...override('Button')}>
			        
			{override('Button').children || 'Some Text'}
			      
		</Button>
		    
	</Box>;
};

export default Object.assign(GaButton, {
	propInfo: {
		pageName: {
			control: 'input'
		}
	},
	overrides
});
;