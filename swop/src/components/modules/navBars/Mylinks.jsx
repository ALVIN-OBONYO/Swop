import {
	WHAT_WE_DO,
	OUR_STAFF,
	STATEMENT_OF_FAITH,
	DONATE,
	VOLUNTEER,
} from 'navigation/constants';
export const links = [
	{
		name: 'About Us',
		submenu: true,
		sublinks: [
			{
				sublink: [
					{ name: 'What We Do', link: WHAT_WE_DO },
					{ name: 'Our Staff', link: OUR_STAFF },
					{ name: 'Statement Of Faith', link: STATEMENT_OF_FAITH },
				],
			},
		],
	},
	{
		name: 'Support Us',
		submenu: true,
		sublinks: [
			{
				sublink: [
					{ name: 'Donate', link: DONATE },
					{ name: 'Volunteer', link: VOLUNTEER },
				],
			},
		],
	},
];
