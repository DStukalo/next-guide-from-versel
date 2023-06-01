import { getAllBlogsIds, getBlogData } from "../../../lib/blogs";
import Layout from "@/components/Layout/Layout";
import Date from "@/components/date";
import Head from "next/head";
import { BlogData } from "../../../types/types";

export async function getStaticPaths() {
	const paths = getAllBlogsIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: { params: { id: string } }) {
	const blogData = await getBlogData(params.id);
	return {
		props: {
			blogData,
		},
	};
}

export default function Blog({ blogData }: { blogData: BlogData }) {
	return (
		<Layout>
			<Head>
				<title>{blogData.title}</title>
			</Head>
			<article>
				<div className='px-4 py-8 flex flex-col'>
					<h1 className='main-title text-center'>{blogData.title}</h1>
					<p className='main-text mb-2'>{blogData.id}</p>
					<p className='main-text mb-8'>
						<Date dateString={blogData.date} />
					</p>
					<div
						className='main-text mb-4'
						dangerouslySetInnerHTML={{ __html: blogData.contentHtml }}
					/>
				</div>
			</article>
		</Layout>
	);
}
