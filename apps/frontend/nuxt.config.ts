import '@vite-pwa/nuxt';
import 'nuxt';

const manifestIcons = [
	{
		src: 'https://game.skyra.pw/icons/android-chrome-36x36.png',
		sizes: '36x36',
		type: 'image/png',
		purpose: 'any badge'
	},
	{
		src: 'https://game.skyra.pw/icons/android-chrome-48x48.png',
		sizes: '48x48',
		type: 'image/png'
	},
	{
		src: 'https://game.skyra.pw/icons/android-chrome-72x72.png',
		sizes: '72x72',
		type: 'image/png'
	},
	{
		src: 'https://game.skyra.pw/icons/android-chrome-96x96.png',
		sizes: '96x96',
		type: 'image/png'
	},
	{
		src: 'https://game.skyra.pw/icons/android-chrome-144x144.png',
		sizes: '144x144',
		type: 'image/png'
	},
	{
		src: 'https://game.skyra.pw/icons/android-chrome-192x192.png',
		sizes: '192x192',
		type: 'image/png'
	},
	{
		src: 'https://game.skyra.pw/icons/android-chrome-256x256.png',
		sizes: '256x256',
		type: 'image/png'
	},
	{
		src: 'https://game.skyra.pw/icons/android-chrome-384x384.png',
		sizes: '384x384',
		type: 'image/png'
	},
	{
		src: 'https://game.skyra.pw/icons/android-chrome-512x512.png',
		sizes: '512x512',
		type: 'image/png'
	},
	{
		src: 'https://game.skyra.pw/icons/maskable_icon.png',
		sizes: '640x640',
		type: 'image/png',
		purpose: 'any maskable'
	}
];

export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@vite-pwa/nuxt', '@sidebase/nuxt-auth'],
	auth: {
		origin: process.env.ORIGIN,
		enableGlobalAppMiddleware: true,
		basePath: '/api/auth',
		defaultProvider: 'discord'
	},
	pwa: {
		registerType: 'autoUpdate',
		includeManifestIcons: false,
		devOptions: {
			enabled: false,
			type: 'module'
		},
		manifest: {
			background_color: '#16171D',
			categories: ['discord', 'bot', 'skyra', 'game', 'fun', 'rts', 'epic', 'kyra', 'favna', 'kyranet'],
			description: "Skyra Project's RTS Game",
			display: 'minimal-ui',
			lang: 'en',
			name: 'Nayre Game',
			orientation: 'portrait-primary',
			scope: '/',
			short_name: 'Acryss',
			start_url: '/',
			theme_color: '#1E88E5',
			icons: manifestIcons,
			shortcuts: [
				{
					name: 'Nayre Game',
					short_name: 'Nayre Game',
					description: 'Go to Nayre Game',
					url: '/',
					icons: manifestIcons
				}
			]
		}
	},
	typescript: {
		shim: false,
		typeCheck: 'build'
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Nayre Game',
			htmlAttrs: { lang: 'en' },
			link: [
				{ rel: 'alternate', href: 'https://game.skyra.pw' },
				{ rel: 'canonical', href: 'https://game.skyra.pw' },
				{ rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' },
				{ rel: 'apple-touch-startup-image', href: '/icons/apple-startup.png' },
				{ rel: 'icon', href: '/favicon.ico' },
				{ rel: 'icon', href: '/icons/favicon-16x16.png' },
				{ rel: 'icon', href: '/icons/android-chrome-192x192.png' },
				{ rel: 'icon', href: '/icons/favicon-32x32.png' },
				{ rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg' },
				{ rel: 'shortcut icon', href: '/favicon.ico' }
			],
			meta: [
				{ 'http-equiv': 'Cache-Control', content: '1y' },
				{ 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
				{ 'http-equiv': 'Expires', content: '1y' },
				{ 'http-equiv': 'Page-Enter', content: 'RevealTrans(Duration=2.0,Transition=2)' },
				{ 'http-equiv': 'Page-Exit', content: 'RevealTrans(Duration=3.0,Transition=12)' },
				{ 'http-equiv': 'Pragma', content: '1y' },
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
				{ name: 'apple-mobile-web-app-title', content: 'Nayre Game' },
				{ name: 'application-name', content: 'Nayre Game' },
				{ name: 'audience', content: 'all' },
				{ name: 'author', content: 'Skyra Project, contact@skyra.pw' },
				{ name: 'coverage', content: 'Worldwide' },
				{ name: 'description', content: "Skyra Project's RTS Game" },
				{ name: 'designer', content: 'Aura Román, kyradiscord@gmail.com' },
				{ name: 'distribution', content: 'Global' },
				{ name: 'googlebot', content: 'index,follow' },
				{ name: 'HandheldFriendly', content: 'True' },
				{ name: 'identifier-URL', content: 'https://game.skyra.pw' },
				{ name: 'keywords', content: 'acryss, skyra, game, rts, discord, bot' },
				{ name: 'msapplication-config', content: '/icons/browserconfig.xml' },
				{ name: 'msapplication-TileColor', content: '#55ACEE' },
				{ name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' },
				{ name: 'owner', content: 'Aura Román, kyradiscord@gmail.com' },
				{ name: 'rating', content: 'safe for kids' },
				{ name: 'reply-to', content: 'contact@skyra.pw' },
				{ name: 'revisit-after', content: '7 days' },
				{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
				{ name: 'shortlink', content: 'https://game.skyra.pw' },
				{ name: 'subject', content: "Skyra Project's RTS Game" },
				{ name: 'summary', content: "Skyra Project's RTS Game." },
				{ name: 'target', content: 'all' },
				{ name: 'theme-color', content: '#55ACEE' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:creator', content: '@kyranet_' },
				{ name: 'twitter:image', content: 'https://game.skyra.pw/icons/opengraph.png' },
				{ name: 'twitter:site', content: '@kyranet_' },
				{ name: 'url', content: 'https://game.skyra.pw' },
				{ property: 'og:description', content: "Skyra Project's RTS Game" },
				{ property: 'og:email', content: 'contact@skyra.pw' },
				{ property: 'og:image:alt', content: 'OpenGraphImage' },
				{ property: 'og:image:height', content: '512' },
				{ property: 'og:image:width', content: '1024' },
				{ property: 'og:image', content: 'https://game.skyra.pw/icons/opengraph.png' },
				{ property: 'og:locale', content: 'en' },
				{ property: 'og:site_name', content: "Skyra Project's RTS Game" },
				{ property: 'og:title', content: "Skyra Project's RTS Game" },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: 'https://game.skyra.pw' }
			]
		}
	}
});
