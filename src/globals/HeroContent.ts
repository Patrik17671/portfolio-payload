import { GlobalConfig } from "payload/types";

const HeroContent: GlobalConfig = {
	slug: 'hero-content',
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: "richText",
			required: true
		},
		{
			name: 'file',
			type: 'upload',
			required: true,
			relationTo: 'media',
		},
	]
}
export default HeroContent;