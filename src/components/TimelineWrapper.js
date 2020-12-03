import React from 'react';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';
let overrides = {
	'Timeline Line': {
		kind: 'Box'
	}
};

const TimelineLine = ({
	alignDesktop,
	alignMobile,
	media,
	override
}) => {
	const styles = {
		'from the left': {
			lineLeft: '50%',
			lineRight: 'auto',
			lineTransform: 'translateX(-50%)'
		},
		'from the right': {
			lineLeft: 'auto',
			lineRight: '50%',
			lineTransform: 'translateX(50%)'
		},
		'to the left': {
			lineLeft: '2px',
			lineRight: 'auto',
			lineTransform: 'none'
		},
		'to the right': {
			lineLeft: 'auto',
			lineRight: '2px',
			lineTransform: 'none'
		}
	};
	overrides['Timeline Line'].props = {
		[`${media}-left`]: styles[alignMobile].lineLeft,
		[`${media}-right`]: styles[alignMobile].lineRight,
		[`${media}-transform`]: styles[alignMobile].lineTransform
	};
	return <Box
		top="0"
		width="2px"
		min-width="auto"
		height="100%"
		background-color="--color-dark"
		position="absolute"
		opacity=".1"
		left={styles[alignDesktop].lineLeft}
		right={styles[alignDesktop].lineRight}
		transform={styles[alignDesktop].lineTransform}
		{...override('Timeline Line')}
	/>;
};

const Timeline = ({
	alignDesktop,
	alignMobile,
	media,
	...props
}) => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides);
	return <Box
		width="100%"
		max-width="100%"
		flex-direction="column"
		box-sizing="border-box"
		position="relative"
		display="flex"
		overflow-x="hidden"
		overflow-y="visible"
		{...rest}
	>
		      
		<TimelineLine alignDesktop={alignDesktop} alignMobile={alignMobile} media={media} override={override} />
		      
		{React.Children.map(children, (child, numb) => React.isValidElement(child) ? React.cloneElement(child, {
			numb,
			alignDesktop,
			alignMobile,
			media
		}) : child)}
	</Box>;
};

const propInfo = {
	alignDesktop: {
		title: 'Alignment of items on the desktop',
		control: 'select',
		variants: ['from the left', 'from the right', 'to the left', 'to the right'],
		type: 'string',
		category: 'Main',
		weight: 1
	},
	alignMobile: {
		title: 'Alignment of items on the mobile',
		control: 'select',
		variants: ['to the left', 'to the right'],
		type: 'string',
		category: 'Main',
		weight: 1
	},
	media: {
		title: 'Mobile starts with the breakpoint',
		control: 'text',
		type: 'string',
		category: 'Main',
		weight: 1
	}
};
const defaultProps = {
	alignDesktop: 'from the left',
	alignMobile: 'to the left',
	media: 'sm'
};
export default Object.assign(Timeline, {
	title: 'Timeline',
	description: {
		en: 'Awesome Timeline component!'
	},
	overrides,
	propInfo,
	defaultProps
});