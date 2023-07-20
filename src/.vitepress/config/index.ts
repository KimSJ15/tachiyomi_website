import { defineConfig, loadEnv } from "vitepress";

import theme from "./theme";
import head from "./head";

import generateMeta from "./hooks/generateMeta";
import generateSitemap from "./hooks/generateSitemap";
import generateFeed from "./hooks/generateFeed";

const hostname: string = "https://kodo.moe";

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		appearance: "dark",
		lastUpdated: true,
		cleanUrls: true,
		base: process.env.VITE_BASE || "/",
		lang: "en-US",
		title: "Tachiyomi",
		description: "Free and open source manga reader for Android",
		head,
		themeConfig: theme,
		transformHead: async (context) => generateMeta(context, hostname),
		buildEnd: async (context) => {
			generateSitemap(context, hostname);
			generateFeed(context, hostname);
		},
	});
};
