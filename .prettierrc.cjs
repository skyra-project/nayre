const sapphirePrettierConfig = require('@sapphire/prettier-config');

module.exports = {
	...sapphirePrettierConfig,
	overrides: [
		{
			files: '*.svg',
			options: {
				parser: 'xml'
			}
		},
		{
			files: ['README.md', 'apps/**/*.md', 'packages/**/*.md'],
			options: {
				tabWidth: 2,
				useTabs: false,
				printWidth: 120,
				proseWrap: 'always'
			}
		},
		{
			files: ['*.yml'],
			options: {
				tabWidth: 2,
				useTabs: false
			}
		}
	]
};
