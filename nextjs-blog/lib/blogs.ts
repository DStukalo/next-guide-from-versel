import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { BlogData } from "../types/types";

const blogsDirectory = path.join(process.cwd(), "blogs");

export function getSortedBlogsData() {
	const fileNames = fs.readdirSync(blogsDirectory);
	const allBlogsData: Partial<BlogData>[] = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, "");
		const fullPath = path.join(blogsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const matterResult = matter(fileContents);
		return {
			id,
			...matterResult.data,
		};
	});
	return allBlogsData.sort((a, b) => {
		if (a.date && b.date) {
			if (a.date < b.date) {
				return 1;
			} else if (a.date > b.date) {
				return -1;
			}
		}
		return 0;
	});
}

export function getAllBlogsIds() {
	const fileNames = fs.readdirSync(blogsDirectory);

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		};
	});
}

export async function getBlogData(id: string) {
	const fullPath = path.join(blogsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	// Use gray-matter to parse the blog metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}
