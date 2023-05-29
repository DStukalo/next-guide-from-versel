import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Date from "../../components/date";
import Layout, { siteTitle } from "../../components/layout";
import { PostData, getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
	const allPostsData: Partial<PostData>[] = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allPostsData }: { allPostsData: PostData[] }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className='text-xl leading-snug'>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{" "}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
				</p>
				<h2 className='text-indigo-500'>
					Read{" "}
					<Link
						href='/posts/first-post'
						className='text-gray-300 hover:text-cyan-300'
					>
						this page!
					</Link>
				</h2>
			</section>
			<section className='text-xl leading-snug'>
				<h2 className='text-2xl my-4 mx-0 leading-snug'>Blog</h2>
				<ul className='list-none p-0 m-0'>
					{allPostsData.map(({ id, date, title }) => (
						<li
							className='m-0 mb-5'
							key={id}
						>
							<Link href={`/posts/${id}`}>{title}</Link>
							<br />
							<small className='text-gray-400'>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
