import { GlobalConfig } from "payload/types";

const ProjectsContent: GlobalConfig = {
	slug: 'projects-content',
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
			name: 'projects',
			label: 'Projects',
			type: 'array',
			fields: [
				{
					name: 'file',
					type: 'upload',
					relationTo: 'media',
				},
				{
					name: 'text',
					label: 'Text',
					type: 'richText',
				},
				{
					name: 'url',
					label: 'Link',
					type: "text"
				}
			]
		}
	]
}
export default ProjectsContent;