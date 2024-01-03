import { GlobalConfig } from "payload/types";

const AboutContent: GlobalConfig = {
	slug: 'about-content',
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: true
		},
		{
			name: 'file',
			type: 'upload',
			required: true,
			relationTo: 'media',
		},
		{
			name: 'text',
			label: 'Text',
			type: 'richText',
			required: true
		}
	]
}
export default AboutContent;