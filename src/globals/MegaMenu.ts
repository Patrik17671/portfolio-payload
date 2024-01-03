import { GlobalConfig } from "payload/types";

const MegaMenu: GlobalConfig = {
	slug: 'mega-menu',
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'nav',
			label: 'Navigation',
			type: "array",
			fields: [
				{
					name: 'label',
					label: 'Label',
					type: 'text',
					required: true
				},
				{
					name: 'elementId',
					label: 'Element id',
					type: 'text'
				}
			]
		}
	]
}
export default MegaMenu;