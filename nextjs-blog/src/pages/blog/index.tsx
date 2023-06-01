import Link from "next/link";
import Layout from "@/components/Layout/Layout";
import Date from "@/components/date";
import Head from "next/head";
import { getSortedBlogsData } from "../../../lib/blogs";
import { BlogData } from "../../../types/types";

export async function getStaticProps() {
	const allBlogsData: Partial<BlogData>[] = getSortedBlogsData();
	return {
		props: {
			allBlogsData,
		},
	};
}

const blogsTitle = "Next.js blogs";

export default function Blogs({ allBlogsData }: { allBlogsData: BlogData[] }) {
	return (
		<Layout>
			<Head>
				<title>{blogsTitle}</title>
			</Head>
			<article className='flex flex-col w-full mb-8'>
				<h1 className='my-4 mx-0 main-title text-center'>Some blogs</h1>
				{allBlogsData.map(({ id, date, title }) => (
					<li
						className='m-0 mb-5'
						key={id}
					>
						<Link
							href={`/blog/${id}`}
							className=' title'
						>
							{title}
						</Link>
						<br />
						<small className='sub-text'>
							<Date dateString={date} />
						</small>
					</li>
				))}
			</article>
		</Layout>
	);
}
