import {
	BECOME_A_MEMBER,
	ANNOUNCEMENT,
	PROGRAM,
	PROJECT,
	BLOG,
	UPLOAD_A_VIDEO,
	WRITE_AN_ARTICLE,
	WATCH_VIDEOS,
	READ_ARTICLES,
	DONATE,
	PARTNER_WITH_US,
	GUEST_SPEAKER,
	CONTENT_CREATOR,
	SHOW_HOST,
} from 'navigation/constants';
export const links = [
	{
		name: 'Media',
		submenu: true,
		sublinks: [
			{
				sublink: [
					{ name: 'Announcement', link: ANNOUNCEMENT },
					{ name: 'Program', link: PROGRAM },
					{ name: 'Project', link: PROJECT },
					{ name: 'Blog', link: BLOG },
				],
			},
		],
	},
	{
		name: 'Shared Experinece',
		submenu: true,
		sublinks: [
			{
				sublink: [
					{ name: 'Upload A Video', link: UPLOAD_A_VIDEO },
					{ name: 'Write An Article', link: WRITE_AN_ARTICLE },
					{ name: 'Watch Videos', link: WATCH_VIDEOS },
					{ name: 'Read Articles', link: READ_ARTICLES },
				],
			},
		],
	},
	{
		name: 'Get Involved',
		submenu: true,
		sublinks: [
			{
				sublink: [
					{ name: 'Become A Member', link: BECOME_A_MEMBER },
					{ name: 'Donate', link: DONATE },
					{ name: 'Partner With Us', link: PARTNER_WITH_US },
					{ name: 'Content Creator', link: CONTENT_CREATOR },
					{ name: 'Guest Speaker', link: GUEST_SPEAKER },
					{ name: 'Show Host', link: SHOW_HOST },
				],
			},
		],
	},
];
