import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "500px",
	"height": "500px",
	"background": "#85d9e8"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline1",
			"color": "#873587",
			"children": "Some text"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--headline1",
			"color": "#873587",
			"children": "Some text"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--headline1",
			"color": "#873587",
			"children": "Some text"
		}
	}
};

const BoxComponent = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Text {...override("text2")} />
		{children}
	</Box>;
};

Object.assign(BoxComponent, { ...Box,
	defaultProps,
	overrides
});
export default BoxComponent;