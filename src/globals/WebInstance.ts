import { GlobalConfig } from "payload/types";

const WebInstance: GlobalConfig = {
	slug: 'web-instance',
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'logo',
			label: 'Logo',
			type: 'text'
		},
		{
			name: 'file',
			type: 'upload',
			relationTo: 'media',
		},
		{
			name: 'socials',
			label: 'Socials',
			type: "array",
			fields: [
				{
					name: 'label',
					label: 'Label',
					type: 'text',
				},
				{
					name: 'url',
					label: 'social url',
					type: 'text'
				},
				{
					name: 'file',
					type: 'upload',
					relationTo: 'media',
				},
			]
		}
	]
}

export default WebInstance;