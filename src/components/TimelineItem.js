import React from 'react';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';
let overrides = {
	'Timeline Item': {
		kind: 'Box'
	},
	'Timeline Point': {
		kind: 'Box',
		"props": {
			"background": "--color-white"
		}
	}
};

const TimelineItem = ({
	numb,
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
	const styles = {
		'from the left': {
			itemPaddingLeft: numb % 2 ? '30px' : '',
			itemPaddingRight: numb % 2 ? '' : '30px',
			itemPaddingBottom: '15px',
			itemWidth: '50%',
			itemAlignSelf: numb % 2 ? 'flex-end' : 'flex-start',
			itemTextAlign: numb % 2 ? 'left' : 'right',
			pointLeft: numb % 2 ? '-3px' : '',
			pointRight: numb % 2 ? '' : '-3px'
		},
		'from the right': {
			itemPaddingLeft: numb % 2 ? '' : '30px',
			itemPaddingRight: numb % 2 ? '30px' : '',
			itemPaddingBottom: '15px',
			itemWidth: '50%',
			itemAlignSelf: numb % 2 ? 'flex-start' : 'flex-end',
			itemTextAlign: numb % 2 ? 'right' : 'left',
			pointLeft: numb % 2 ? '' : '-3px',
			pointRight: numb % 2 ? '-3px' : ''
		},
		'to the left': {
			itemPaddingLeft: '30px',
			itemPaddingRight: '0px',
			itemPaddingBottom: '30px',
			itemWidth: '100%',
			itemAlignSelf: 'flex-start',
			itemTextAlign: 'left',
			pointLeft: '0',
			pointRight: 'auto'
		},
		'to the right': {
			itemPaddingLeft: '0px',
			itemPaddingRight: '30px',
			itemPaddingBottom: '30px',
			itemWidth: '100%',
			itemAlignSelf: 'flex-end',
			itemTextAlign: 'right',
			pointLeft: 'auto',
			pointRight: '0'
		}
	};
	overrides['Timeline Item'].props = {
		[`${media}-padding-left`]: styles[alignMobile].itemPaddingLeft,
		[`${media}-padding-right`]: styles[alignMobile].itemPaddingRight,
		[`${media}-padding-bottom`]: styles[alignMobile].itemPaddingBottom,
		[`${media}-width`]: styles[alignMobile].itemWidth,
		[`${media}-align-self`]: styles[alignMobile].itemAlignSelf,
		[`${media}-text-align`]: styles[alignMobile].itemTextAlign
	};
	overrides['Timeline Point'].props = {
		[`${media}-left`]: styles[alignMobile].pointLeft,
		[`${media}-right`]: styles[alignMobile].pointRight
	};
	return <Box
		padding-left={styles[alignDesktop].itemPaddingLeft}
		padding-right={styles[alignDesktop].itemPaddingRight}
		padding-bottom={styles[alignDesktop].itemPaddingBottom}
		width={styles[alignDesktop].itemWidth}
		align-self={styles[alignDesktop].itemAlignSelf}
		text-align={styles[alignDesktop].itemTextAlign}
		box-sizing="border-box"
		position="relative"
		{...rest}
		{...override('Timeline Item')}
	>
		<Box
			top="5px"
			left={styles[alignDesktop].pointLeft}
			right={styles[alignDesktop].pointRight}
			width="16px"
			min-width="auto"
			height="16px"
			min-height="auto"
			background-color="#fff"
			border-radius="50%"
			border="2px"
			border-style="solid"
			position="absolute"
			border-color="#EDEDED"
			{...override('Timeline Point')}
		/>
		{children}
		  
	</Box>;
};

export default Object.assign(TimelineItem, {
	title: 'Timeline',
	description: {
		en: 'Awesome Timeline Item component!'
	},
	overrides
});