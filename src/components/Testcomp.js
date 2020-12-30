import React from 'react';
import atomize from "@quarkly/atomize";

const Testcomp = props => <div {...props}>
	Say hello Testcomp
</div>;

export default atomize(Testcomp)({
	name: "Testcomp",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Testcomp — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});