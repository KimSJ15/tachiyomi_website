module.exports = {
	title: 'Tachiyomi',
	description: 'Free and open source manga reader for Android.',
	dest: './public',
	themeConfig: {
		repo: 'inorichi/tachiyomi',
		docsRepo: 'tachiyomiorg/website',
		docsDir: 'src',
		editLinks: true,
		nav: [
			{ text: 'Guides', link: '/help/guides/getting-started' },
			{ text: 'FAQ', link: '/help/faq/' },
			{ text: 'Extensions', link: '/extensions/' },
			{ text: 'Wiki', link: 'https://github.com/inorichi/tachiyomi/wiki' },
			{ text: 'Discord', link: 'https://discord.gg/tachiyomi' },
			{ text: 'Reddit', link: 'https://reddit.com/r/Tachiyomi' }
		],
		sidebar: [
			'/',
			{
				title: 'Guides',
				collapsable: false,
				children: ['/help/guides/getting-started', '/help/guides/reading-local-manga']
			},
			{
				title: 'FAQ',
				path: '/help/faq/',
				collapsable: false,
				children: ['/help/faq/application/', '/help/faq/extensions/']
			},
			'/extensions/'
		],
		lastUpdated: 'Last Updated'
	},
	plugins: [
		[
		'@vuepress/back-to-top'
		],
		[
		'@vuepress/google-analytics',
			{ 'ga': 'UA-148212082-1' }
		],
		[
		'container',
			{
				type: 'expander',
				before: info => `<details><summary>${info}</summary>\n`,
				after: '</details>\n'
			}
		]
	]
}
